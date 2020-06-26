/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/Service.js
 * Created Date: 2020-06-25 12:28:46
 * Author: Zz
 * -----
 * Last Modified: 2020-06-26 19:39:50
 * Modified By: Zz
 * -----
 * Description:
 */
const ServiceImp = require('../ServiceImp')
const util = require('../../util')
const Pkg = require(`${process.cwd()}/package.json`);

class MongodbService extends ServiceImp {
  async logicDel(msg) {
    this.seneca.logger.info(msg);
    const err = this.serviceUtil.isValidDataWhenRetrieve(msg.params);
    if (err) {
      return err.toJson();
    }
    try {
      const exist = await this.model.findById(msg.params.id);
      if (!exist) {
        return util.error404(this.errCode[404]);
      }
    
      await this.serviceUtil.beforeDestroy(msg.params);
      const delResult = await this.model.findByIdAndUpdate(
        msg.params.id, { deleteFlag: 1 },
      );
      await this.serviceUtil.afterDestroy(delResult, exist);

      await this.delCache(msg.params.id);
      return util.responseSuccess(delResult);
    } catch (dbError) {
      return this.handleCatchErr(dbError);
    }
  }
}

module.exports = MongodbService;