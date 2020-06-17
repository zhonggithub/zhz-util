/**
 * File: ServiceUtil.js
 * Project: zhz-util
 * FilePath: /src/seneca/mysql/ServiceUtil.js
 * Created Date: 2020-06-13 19:55:48
 * Author: Zz
 * -----
 * Last Modified: 2020-06-17 22:17:05
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('../../util');
const ServiceUtilBase = require('../ServiceUtilBase');

class ServiceUtil extends ServiceUtilBase {
  convertQueryCriteria(criteria) {
    let tmpCriteria = util.convertQueryCriteria(criteria, 'mysql');
    const dbCriteria = tmpCriteria.dstCriteria;
    tmpCriteria = tmpCriteria.sourceCriteria;
    for (const condition in tmpCriteria) {
      if (Object.prototype.hasOwnProperty.call(criteria, condition)) {
        switch (condition) {
          default:
            dbCriteria[condition] = tmpCriteria[condition];
            break;
        }
      }
    }
    return dbCriteria;
  }
}

module.exports = ServiceUtil;