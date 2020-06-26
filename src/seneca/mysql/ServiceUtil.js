/**
 * File: ServiceUtil.js
 * Project: zhz-util
 * FilePath: /src/seneca/mysql/ServiceUtil.js
 * Created Date: 2020-06-13 19:55:48
 * Author: Zz
 * -----
 * Last Modified: 2020-06-26 14:20:44
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('../../util');
const ServiceUtilBase = require('../ServiceUtilBase');

class ServiceUtil extends ServiceUtilBase {
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

module.exports = ServiceUtil;