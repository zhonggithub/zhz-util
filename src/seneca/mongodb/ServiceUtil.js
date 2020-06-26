/**
 * File: ServiceUtil.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/ServiceUtil.js
 * Created Date: 2020-06-14 09:08:48
 * Author: Zz
 * -----
 * Last Modified: 2020-06-26 14:21:44
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('../../util');
const ServiceUtilBase = require('../ServiceUtilBase');

class ServiceUtil extends ServiceUtilBase {
  convertQueryCriteria(criteria, handle) {
    const tmpCriteria = util.convertQueryCriteria(criteria, 'mongodb', handle);
    return {
      ...tmpCriteria.dstCriteria,
      ...tmpCriteria.sourceCriteria,
    };
  }
}

module.exports = ServiceUtil;