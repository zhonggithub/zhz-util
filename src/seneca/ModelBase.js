/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/**
 * File: ModelBase.js
 * Project: zhz-util
 * FilePath: /src/seneca/ModelBase.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-07-22 13:37:39
 * Modified By: Zz
 * -----
 * Description: 定义Service类需要操作db的抽象接口
 * 使用不同的orm请继承该类并实现相应的方法
 * create
 * findById,
 * findByIdAndUpdate,
 * list
 * count
 * find
 * findOne
 * findByIdAndDelete
 */

const { verify } = require('z-error');

class ModelBase {
  constructor(model) {
    const err = verify({
      model,
    }, ['model'], {
      model: (val) => typeof val === 'object' || typeof val === 'function',
    });
    if (err) {
      throw err;
    }

    this.model = model;
  }

  getModel() {
    return this.model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findById(id, include) {
  }

  async findByIdAndUpdate(id, data) {
  }

  async list(query) {
  }

  async count(query) {
  }

  async find(query) {
  }

  async findOne(query) {
  }

  async findByIdAndDelete(id) {
  }
}

module.exports = ModelBase