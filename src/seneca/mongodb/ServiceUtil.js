/**
 * File: ServiceUtil.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/ServiceUtil.js
 * Created Date: 2020-06-14 09:08:48
 * Author: Zz
 * -----
 * Last Modified: 2020-06-17 22:17:00
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('../../util');
const ServiceUtilBase = require('../ServiceUtilBase');

class ServiceUtil extends ServiceUtilBase {
  convertQueryCriteria(criteria) {
    let tmpCriteria = util.convertQueryCriteria(criteria, 'mongodb');
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