/**
 * File: SequelizeModel.js
 * Project: zhz-util
 * FilePath: /src/seneca/mysql/SequelizeModel.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-08-14 19:56:58
 * Modified By: Zz
 * -----
 * Description:
 */

const ModelBase = require('../ModelBase');

class SequelizeModel extends ModelBase {
  async findById(id, include) {
    if (include) {
      return this.model.findByPk(id, { include });
    }
    return this.model.findByPk(id);
  }

  async findByIdAndUpdate(id, data) {
    await this.model.update(data, {
      where: { id },
      fields: Object.keys(data),
    });
    return this.model.findByPk(id);
  }

  async list(params) {
    return this.model.findAndCountAll(params);
  }

  async find(query) {
    return this.model.findAll(query);
  }

  async findAll(query) {
    return this.model.findAll(query);
  }

  async findOne(query) {
    return this.model.findOne(query);
  }

  async findByIdAndDelete(id) {
    return this.model.destroy({ where: { id } });
  }

  async count(query) {
    return this.model.count(query);
  }
}

module.exports = SequelizeModel
