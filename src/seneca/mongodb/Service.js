/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/Service.js
 * Created Date: 2020-06-25 12:28:46
 * Author: Zz
 * -----
 * Last Modified: Mon Oct 18 2021
 * Modified By: Zz
 * -----
 * Description:
 */
const validator = require('validator')
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

  isValidDataWhenRetrieve(data) {
    const error = super.isValidDataWhenRetrieve(data)
    if (error) {
      return error;
    }
    return util.isValidData(data, ['id'], {
      id: (val) => validator.isMongoId(val),
    });
  }

  isValidDataWhenUpdate(data) {
    return util.isValidData(data, ['id'], {
      id: (val) => validator.isMongoId(val),
    });
  }

  isValidDataWhenUpdateStatus(data) {
    return util.isValidData(data, ['id', 'status'], {
      id: (val) => validator.isMongoId(val),
    });
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

  updateBy = async (msg) => {
    this.logger.info(msg);
    try {
      const error = util.isValidData(msg.params, ['query', 'data']);
      if (error) {
        return error.toJSON();
      }
      const { query, data } = msg.params;
      const row = await this.model.getModel().findOneAndUpdate(query, data, {
        new: true,
      });
      const result = await this.po2do(row);
      return util.responseSuccess(result);
    } catch (err) {
      return this.handleCatchErr(err);
    }
  }

  async batchCreate(msg) {
    this.logger.info(msg);
    try {
      let error = util.isValidData(msg.params, ['data'], {
        data: (val) => {
          if (!Array.isArray(val)) {
            return false;
          }
          for (const item of val) {
            error = this.isValidDataWhenCreate(item);
            if (error) {
              return false;
            }
          }
          return true;
        },
      });
      const row = await this.model.getModel().insertMany(msg.params.data);
      return util.responseSuccess(row);
    } catch (err) {
      return this.handleCatchErr(err);
    }
  }
}

module.exports = MongodbService;