/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /src/seneca/mysql/Service.js
 * Created Date: 2020-06-25 12:19:09
 * Author: Zz
 * -----
 * Last Modified: 2020-07-01 13:51:34
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('../../util')
const ServiceImp = require('../ServiceImp')

class Service extends ServiceImp {
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
