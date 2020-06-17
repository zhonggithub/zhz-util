/**
 * File: SequelizeModel.js
 * Project: zhz-util
 * FilePath: /src/seneca/mysql/SequelizeModel.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-06-16 10:35:39
 * Modified By: Zz
 * -----
 * Description:
 */

const ModelBase = require('../ModelBase');

class SequelizeModel extends ModelBase {
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
    let tmp = SequelizeModel.parseQuery(query);
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

  async findById(id) {
    return this.model.findByPk(id);
  }

  async findByIdAndUpdate(id, data) {
    await this.model.update(data, {
      where: { id },
      fields: Object.keys(data),
    });
    return this.model.findByPk(id);
  }

  /**
   * @param {Object} query 查询条件
   * @param {Array || Object} sort 排序 array of { field: '', order: '' }, array of [field, 'DESC']
   * ；object of { a: -1, b: 1, c: 'ASC', d: 'DESC' }
   * @param {Number} skip
   * @param {Number} pageSize 每页条数
   * @param {Object} expand 子资源数据
   */
  async list(query, sort, skip, pageSize, expand) {
    let tmp = SequelizeModel.parseListQuery(query, sort, skip, pageSize);
    return this.model.findAndCountAll(tmp);
  }

  async find(query) {
    return this.model.findAll(query);
  }

  async findOne(query) {
    return this.model.findOne(query);
  }

  async findByIdAndDelete(id) {
    return this.model.destroy({ where: { id } });
  }

  async count(query) {
    SequelizeModel.parseQuery(query);
    return this.model.count(tmp);
  }
}

module.exports = SequelizeModel
