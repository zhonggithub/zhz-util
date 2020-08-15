/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/Service.js
 * Created Date: 2020-06-25 12:28:46
 * Author: Zz
 * -----
 * Last Modified: 2020-08-15 15:33:03
 * Modified By: Zz
 * -----
 * Description:
 */
const ServiceImp = require('../ServiceImp')
const util = require('../../util')

class MongodbService extends ServiceImp {
  convertQueryCriteria(criteria, handle) {
    const tmpCriteria = util.convertQueryCriteria(criteria, 'mongodb', handle);
    return {
      ...tmpCriteria.dstCriteria,
      ...tmpCriteria.sourceCriteria,
    };
  }

  async logicDel(msg) {
    this.seneca.logger.info(msg);
    const err = this.isValidDataWhenRetrieve(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const exist = await this.model.findById(msg.params.id);
      if (!exist) {
        return util.error404(this.errCode[404]);
      }
    
      await this.beforeDestroy(msg.params);
      const delResult = await this.model.findByIdAndUpdate(
        msg.params.id, { deleteFlag: 1 },
      );
      await this.afterDestroy(delResult, exist);

      await this.delCache(msg.params.id);
      return util.responseSuccess(delResult, 204);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }
}

module.exports = MongodbService;