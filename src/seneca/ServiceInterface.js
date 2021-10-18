/**
 * File: ServiceInterface.js
 * Project: zhz-util
 * FilePath: /src/seneca/ServiceInterface.js
 * Created Date: 2020-08-04 23:05:51
 * Author: Zz
 * -----
 * Last Modified: Mon Oct 18 2021
 * Modified By: Zz
 * -----
 * Description:
 */

class ServiceInterface {
  async create(msg = { params }) {}
  async retrieve(msg = { params: { id } }) {}
  async update(msg = { params }) {}
  async updateStatus(msg = { params: { id, status } }) {}
  async list(msg = { params }) {}
  async count(msg = { params }) {}
  async listAll(msg = { params }) {}
  async findOne(msg = { params }) {}
  async logicDel(msg = { params: { id } }) {}
  async destroy(msg = { params: { id } }) {}
  async treeList(msg = { params }) {}
  async findAll(msg = { params }) {}
  async findByIds(msg = { params }) {}
  async updateBy(msg = { params }) {}
}

module.exports = ServiceInterface