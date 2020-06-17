/**
 * File: MongoosModel.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/MongoosModel.js
 * Created Date: 2020-06-14 09:07:50
 * Author: Zz
 * -----
 * Last Modified: 2020-06-16 10:36:00
 * Modified By: Zz
 * -----
 * Description:
 */

const ModelBase = require('../ModelBase');

class MongoosModel extends ModelBase {
  async findById(id) {
    return this.model.findById(id);
  }

  async findByIdAndUpdate(id, data) {
    return this.model.findByIdAndUpdate(
      id, { $set: data }, { new: true },
    );
  }

  async list(query, sort, skip, pageSize) {
    const result = await Promise.all([
      this.model.find(query).sort(sort).skip(skip).limit(pageSize),
      this.model.countDocuments(query)
    ])
    return {
      count: result[1],
      rows: result[0],
    }
  }

  async find(query) {
    return this.model.find(query);
  }

  async findOne(query) {
    return this.model.findOne(query);
  }

  async findByIdAndDelete(id) {
    return this.model.findByIdAndDelete(id);
  }

  async count(query) {
    return this.model.countDocuments(query);
  }
}

module.exports = MongoosModel;