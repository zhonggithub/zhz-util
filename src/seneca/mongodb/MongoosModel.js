/**
 * File: MongoosModel.js
 * Project: zhz-util
 * FilePath: /src/seneca/mongodb/MongoosModel.js
 * Created Date: 2020-06-14 09:07:50
 * Author: Zz
 * -----
 * Last Modified: Sun Mar 07 2021
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

  async list(query) {
    const { sort, offset, limit } = query;
    delete query.sort;
    delete query.offset;
    delete query.limit;
    
    const result = await Promise.all([
      this.model.find(query).sort(sort).skip(offset).limit(limit),
      this.model.countDocuments(query)
    ])
    return {
      count: result[1],
      rows: result[0],
    }
  }

  async find(query) {
    const { sort, offset, limit } = query || {};
    delete query.sort;
    delete query.offset;
    delete query.limit;

    let tmp = this.model.find(query);
    if (sort) {
      tmp = tmp.sort(sort);
    }
    if (offset === 0 || offset) {
      tmp = tmp.skip(offset);
    }
    if (limit) {
      tmp = tmp.limit(limit);
    }
    return tmp;
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