/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /src/seneca/Service.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-08-13 19:21:26
 * Modified By: Zz
 * -----
 * Description:
 * 
 */
const { verify } = require('z-error');
const validator = require('validator');
const util = require('../util');
const ServiceBase = require('./ServiceBase');
const { CacheTTLEnum, CacheTTLEnumKeys } = require('./EnumConst');
const Pkg = require(`${process.cwd()}/package.json`);

class Service extends ServiceBase {
  constructor({
    seneca, model,
    cache, role, resourceName,
    cacheTTL, opt,
  }) {
    super(role, seneca, opt === false ? false : opt || true);

    const err = verify({
      model,
      cache,
      resourceName,
      cacheTTL,
    }, ['model', 'resourceName'], {
      model: (val) => typeof val === 'object' || typeof val === 'function',
      cache: (val) => typeof val === 'object' || typeof val === 'function' || val === undefined,
      resourceName: (val) => (val && typeof val === 'string') || val === undefined,
      cacheTTL: (val) => {
        if (val === undefined) {
          return true;
        }
        const bo = validator.isInt(val);
        if (bo) {
          return true;
        }
        if (CacheTTLEnumKeys.indexOf(val) !== -1) {
          return true;
        }
        return false;
      },
    });
    if (err) {
      throw err;
    }

    this.model = model;
    this.cache = cache;
    this.cacheTTL = cacheTTL || 60;
    this.resourceName = resourceName;
    this.errCode = util.createResourceErrorCode(resourceName);
  }

  getUResourceName() {
    return this.resourceName ? util.fistLetterUpper(this.resourceName) : 'Resource';
  }

  getCacheTTL() {
    if (CacheTTLEnumKeys.indexOf(this.cacheTTL) !== -1) {
      switch (this.cacheTTL) {
        case CacheTTLEnum.s: {
          return util.randomInt(1, 60);
        }
        case CacheTTLEnum.m: {
          return 60 * util.randomInt(1, 60);
        }
        case CacheTTLEnum.h: {
          return 60 * 60 * util.randomInt(1, 24);
        }
        case CacheTTLEnum.d: {
          return 60 * 60 * 24 * util.randomInt(1, 30);
        }
        case CacheTTLEnum.M: {
          return 60 * 60 * 24 * 30 * util.randomInt(1, 12);
        }
        case CacheTTLEnum.y: {
          return 60 * 60 * 24 * 30 * 12;
        }
        default:
          return 60;
      }
    }
    return parseInt(this.cacheTTL || 60, 10);
  }

  handleCatchErr(err) {
    this.seneca.logger.error(err);
    if (err.code !== undefined) {
      return err.toJSON ? err.toJSON() : err;
    }
    return util.response('ERROR_UNKNOW', err.message, err, 500);
  }

  /**
   * 获取缓存key
   * @param {String | Number} id 资源id
   * @param {Object} expand 指定的子资源: {a: true, b: true}
   * @param {Boolean} full true: 表示获取包括redis keyPrefix及框架生成的key组合的完整key。false: 表示获取框架生成的key
   */
  getCacheKey(id, include = null, full = false) {
    if (!this.cache) return '';
    let cacheKey = `${Pkg.name}:${this.role}:${id}`;
    if (include) {
      cacheKey = `${cacheKey}:${util.md5(JSON.stringify(include))}`;
    }
    if (full) {
      return `${this.cache.getKeyPrefix()}${cacheKey}`;
    }
    return cacheKey;
  }

  /**
   * 
   * @param {Object} query db的查询条件
   * @param {Object} expand { a: true, b: true }
   */
  appendInclude(query, expand) {
    if (!query || !expand) return;
    const include = this.parseExpand2Include(expand);
    if (include) {
      query.include = include;
    }
  }

  async delCache(id) {
    if (this.cache) {
      const cacheKey = this.getCacheKey(id);
      return this.cache.del(cacheKey, true);
    }
  }
 
  static parseQuery(query) {
    let tmp = {};
    if (query) {
      if (query.where) {
        tmp = {
          ...query,
        };
      } else {
        tmp.where = query;
      }
    }
    return tmp;
  }

  static parseListQuery(query, sort, skip, pageSize) {
    let tmp = Service.parseQuery(query);
    if (skip !== undefined) {
      tmp.offset = skip;
    }
    if (pageSize) {
      tmp.limit = pageSize;
    }
    if (sort && Array.isArray(sort) && sort.length > 0) {
      // 此方式默认为sequlize 支持的格式不做处理
      if (Array.isArray(sort[0])) {
        tmp.order = sort;
      } else if (typeof sort[0] === 'object') {
        // 只支持{ field: '', order: '' } 格式
        tmp.order = sort.map((item) => [item.field, item.order]);
      }
    } else if (typeof sort === 'object') {
      // 只支持{ a: -1, b: 1, c: 'ASC' } 格式
      tmp.order = [];
      Object.keys(sort).forEach((k) => {
        switch (sort[k]) {
          case 1: case 'ASC': {
            tmp.order.push([k, 'ASC']);
            break;
          }
          case -1: case 'DESC': {
            tmp.order.push([k, 'DESC']);
            break;
          }
          default:
        }
      });
    }
    return tmp;
  }

  /**
   * 解析expand: { a: true, b: true ....}，返回include对象, 或者返回null
   * 子类应该实现这个api
   * @param {*} expand 子资源扩展数据
   */
  parseExpand2Include(expand) {
    return null
  }

  async beforeCreate(data) {
  }
  async afterCreate(data) {
  }

  async beforeUpdate(data) {
  }
  async afterUpdate(data) {
  }

  async beforeUpdateStatus(data) {
  }
  async afterUpdateStatus(data) {
  }

  async beforeDestroy(params) {
  }
  /**
   * @param {*} delResult 删除结果，如果是逻辑删除，返回的是数据；如果是物理删，返回number
   * @param {*} beforeData 删除之前的数据
   */
  async afterDestroy(delResult, beforeData) {
  }

  isValidDataWhenCreate(data) {
    return null;
  }

  isValidDataWhenRetrieve(data) {
    return util.isValidData(data, ['id'], {
      expand: (val) => typeof val === 'object' || typeof val === 'string',
    });
  }

  isValidDataWhenUpdate(data) {
    return util.isValidData(data, ['id']);
  }

  isValidDataWhenUpdateStatus(data) {
    return util.isValidData(data, ['id', 'status']);
  }

  async isExist(where) {
    return this.model.findOne(where);
  }

  async isExistWhenCreateImp(where) {
    const row = await this.model.findOne(where)
    if (row) {
      return util.responseError409(
        this.getUResourceName(),
        this.errCode[409],
      )
    }
    return null
  }

  async isExistWhenCreate(data) {
    return null
  }

  convertQueryCriteria(criteria) {
    const tmpCriteria = util.convertQueryCriteria(criteria, 'mysql');
    return {
      ...tmpCriteria.dstCriteria,
      ...tmpCriteria.sourceCriteria,
    };
  }

  convertCountCriteria(criteria) {
    return this.convertQueryCriteria(criteria);
  }

  isValidQueryCondition(criteria) {
    return null;
  }

  async logic2DBWhenUpdate(logicInfo) {
    return logicInfo;
  }

  async logic2DB(logicInfo) {
    return logicInfo;
  }

  async db2logic(item, expand = {}) {
    if (!item) {
      return null;
    }
    return item.toJSON ? item.toJSON() : item;
  }

  async list2logic(items, expand = { }) {
    if (!items || items.length === 0) {
      return [];
    }
    return Promise.all(items.map(async (item) => this.db2logic(item, expand)));
  }

  async create(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidDataWhenCreate(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const exist = await this.isExistWhenCreate(msg.params);
      if (exist) {
        return util.responseError409(
          this.getUResourceName(),
          this.errCode[409],
        );
      }
      const body = await this.logic2DB(msg.params);
      await this.beforeCreate(body);
      const result = await this.model.create(body);
      await this.afterCreate(result);
      const ret = await this.db2logic(result);
      return util.responseSuccess(ret);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  /**
   * retrieve会根据expand的不同生成不同缓存。
   * 如果没有指定expand, 缓存只包含资源id的数据。
   * 如果指定了expand, 缓存包含资源id的数据及指定子资源的数据。
   */
  async retrieve(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidDataWhenRetrieve(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const { id, expand } = msg.params;
      const tmpExpand = util.parseExpand(expand);
      const include = this.parseExpand2Include(tmpExpand);

      let result = null;
      let cacheKey = this.getCacheKey(id, tmpExpand);

      if (this.cache) {
        result = await this.cache.get(cacheKey);
      }

      if (!result) {
        result = await this.model.findById(id, include);
      }

      if (!result) {
        return util.responseError404(
          this.getUResourceName(),
          this.errCode[404],
        );
      }

      const data = await this.db2logic(
        result, tmpExpand,
      );
      
      if (this.cache) {
        await this.cache.set(cacheKey, data, this.getCacheTTL());
      }
      
      return util.responseSuccess(data);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async update(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidDataWhenUpdate(msg.params);
    if (err) {
      return err.toJson();
    }

    try {
      const data = await this.logic2DBWhenUpdate(msg.params);
      await this.beforeUpdate(data);
      const result = await this.model.findByIdAndUpdate(
        msg.params.id, data,
      );
      if (!result) {
        return util.responseError404(
          this.getUResourceName(),
          this.errCode[404],
        );
      }
      await this.afterUpdate(result);
      await this.delCache(msg.params.id);
      
      const ret = await this.db2logic(result);
      return util.responseSuccess(ret);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async updateStatus(msg) {
    this.seneca.logger.info(msg);

    const err = this.isValidDataWhenUpdateStatus(msg.params);
    if (err) {
      return err.toJson();
    }

    try {
      const { id, status } = msg.params;
      await this.beforeUpdateStatus({ id, status });
      const result = await this.model.findByIdAndUpdate(id, { status });
      if (!result) {
        return util.responseError404(
          this.getUResourceName(),
          this.errCode[404],
        );
      }
      await this.afterUpdateStatus(result);
      await this.delCache(id);
      
      const ret = await this.db2logic(result);
      return util.responseSuccess(ret);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async destroy(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidDataWhenRetrieve(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const { id } = msg.params;
      const exist = await this.model.findById(id);
      if (!exist) {
        return util.responseError404(
          this.getUResourceName(),
          this.errCode[404],
        );
      }
    
      await this.beforeDestroy(msg.params);
      const delResult = await this.model.findByIdAndDelete(id);
      if (!delResult) {
        return util.responseError404(
          this.getUResourceName(),
          this.errCode[404],
        );
      }
      await this.afterDestroy(delResult, exist);
      await this.delCache(id);
      return util.responseSuccess(delResult);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async list(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidQueryCondition(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const {
        filter, sort, skip, pageSize, page, expand,
      } = util.convertPagination(msg.params);

      const params = Service.parseListQuery(
        this.convertQueryCriteria(filter),
        sort,
        skip,
        pageSize
      );

      this.appendInclude(params, expand);

      const result = await this.model.list(params);
      const items = await this.list2logic(result.rows, expand);
      return util.responseSuccess({
        items,
        total: result.count,
        offset: skip,
        limit: pageSize,
        page,
        pageSize,
      });
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async count(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidQueryCondition(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const query = Service.parseQuery(this.convertCountCriteria(msg.params))
      const result = await this.model.count(query);
      return util.responseSuccess(result);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async listAll(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidQueryCondition(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const { filter, expand } = util.convertPagination(msg.params);
      const params = this.convertQueryCriteria(filter);
      const query = Service.parseQuery(params);
      const tmpExpand = util.parseExpand(expand);
      this.appendInclude(query, tmpExpand);
      const result = await this.model.find(query);
      const items = await this.list2logic(result, tmpExpand);
      return util.responseSuccess(items);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async findOne(msg) {
    this.seneca.logger.info(msg);
    try {
      if (Object.keys(msg.params).length === 0) {
        return util.error422();
      }
      const { expand } = msg.params;
      delete msg.params.expand;

      const params = this.convertQueryCriteria(msg.params);
      const query = Service.parseQuery(params);
      const tmpExpand = util.parseExpand(expand);
      this.appendInclude(query, tmpExpand);
      const result = await this.model.findOne(query);
      if (!result) {
        return util.responseError404(
          this.getUResourceName(),
          this.errCode[404],
        );
      }
      const data = await this.db2logic(result, tmpExpand);
      return util.responseSuccess(data);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async findAll(msg) {
    this.seneca.logger.info(msg);
    try {
      const { expand } = msg.params;
      delete msg.params.expand;
      
      const params = this.convertQueryCriteria(msg.params);
      const query = Service.parseQuery(params);
      const tmpExpand = util.parseExpand(expand);
      this.appendInclude(query, tmpExpand);
      const result = await this.model.find(query);
      const items = await this.list2logic(result, tmpExpand);
      return util.responseSuccess(items);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }

  async findByIds(msg) {
    this.seneca.logger.info(msg)
    try {
      const error = util.isValidData(msg.params, ['ids'], {
        ids: (val) => Array.isArray(val),
      })
      if (error) {
        return error.toJSON()
      }
      const { ids, expand } = msg.params
      const query = {
        where: { id: ids }
      };
      const tmpExpand = util.parseExpand(expand);
      this.appendInclude(query, tmpExpand);
      const result = await this.model.find(query);
      const items = await this.list2logic(result, tmpExpand);
      return util.responseSuccess(items);
    } catch (dbError) {
      return this.handleCatchErr(dbError)
    }
  }
}

module.exports = Service;
