/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /src/seneca/mysql/Service.js
 * Created Date: 2020-06-25 12:19:09
 * Author: Zz
 * -----
 * Last Modified: 2020-08-15 09:07:40
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('../../util')
const ServiceImp = require('../ServiceImp')

class Service extends ServiceImp {
  
  parseQuery(query) {
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

  parseListQuery(query, sort, skip, pageSize) {
    let tmp = this.parseQuery(query);
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
          case 1: case 'ASC': case 'asc': {
            tmp.order.push([k, 'ASC']);
            break;
          }
          case -1: case 'DESC': case 'desc': {
            tmp.order.push([k, 'DESC']);
            break;
          }
          default:
        }
      });
      if (tmp.order.length === 0) {
        delete tmp.order
      }
    }
    return tmp;
  }
  
  convertQueryCriteria(criteria, handle) {
    if (criteria && criteria.where) {
      const tmpCriteria = util.convertQueryCriteria(criteria.where, 'mysql', handle);
      criteria.where = {
        ...tmpCriteria.dstCriteria,
        ...tmpCriteria.sourceCriteria,
      }
      return criteria;
    } else {
      const tmpCriteria = util.convertQueryCriteria(criteria, 'mysql', handle);
      return {
        ...tmpCriteria.dstCriteria,
        ...tmpCriteria.sourceCriteria,
      };
    }
  }
}

module.exports = Service;
