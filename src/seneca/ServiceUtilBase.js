/**
 * File: UtilBase.js
 * Project: zhz-util
 * FilePath: /src/seneca/UtilBase.js
 * Created Date: 2020-06-17 21:57:59
 * Author: Zz
 * -----
 * Last Modified: 2020-06-21 16:17:19
 * Modified By: Zz
 * -----
 * Description: 提供Service操作的工具抽象接口类
 *
 * create hook函数：
 *
 *    isValidDataWhenCreate：创建的时候判断数据合法性，验证不通过返回ZError对象,否则返回null
 *    isExistWhenCreate：创建的时候判断数据唯一性，不存在通过返回null，否则返回资源对象
 *    logic2DB：逻辑表现层数据转换成db表定义的数据
 *    beforeCreate
 *    afterCreate
 *    db2logic: db层数据转换成逻辑表现层数据
 *
 * update hook 函数：
 *
 *  logic2DBWhenUpdate：逻辑表现层数据转换成db表定义的数据。默认调用logic2DB
 *  beforUpdate
 *  afterUpdate
 *
 * updateStatus hook函数：
 *  isValidDataWhenUpdateStatus: 更新状态时判断id, status必填字段，不对id，status合法性校验.验证不通过返回ZError对象,否则返回null
 *
 * retrieve hook函数：
 *  isValidDataWhenRetrieve：获取数据时候判断数据是否包含必填字段，默认校验id，但是不对id合法性校验。验证不通过返回ZEerror对象,否则返回null
 *  db2logic: db层数据转换成逻辑表现层数据并且拿扩展信息时候
 *
 * list hook函数:
 *  isValidQueryCondition: 判断list条件合法性. 验证不通过返回ZEerror对象,否则返回null
 *  convertQueryCriteria: 查询条件转换。逻辑表达查询条件转换成sql条件
 *  list2logic: find的rows转成逻辑表现层数据，默认调用db2logic
 *
 * count hook函数：
 *  convertCountCriteria：查询条件转换。逻辑表达查询条件转换成sql条件
 *
 * destroy hook函数：
 *  beforeDestroy
 *  afterDestroy
 */
const util = require('../util')

class ServiceUtilBase {
  constructor(model, seneca) {
    if (!model || !seneca) {
      throw new Error('ServiceUtilBase: model and seneca is required')
    }
    this.model = model
    this.seneca = seneca
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
    let tmp = ServiceUtilBase.parseQuery(query);
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

  isValidDataWhenUpdateStatus(data) {
    return util.isValidData(data, ['id', 'status']);
  }

  async isExist(where) {
    return this.model.findOne(where);
  }

  async isExistWhenCreate(data) {
    return null;
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
}

module.exports = ServiceUtilBase