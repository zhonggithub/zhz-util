/**
 * File: ServiceBase.js
 * Project: zhz-util
 * FilePath: /src/seneca/ServiceBase.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-06-17 09:43:16
 * Modified By: Zz
 * -----
 * Description: ServiceBase为Service抽象接口类
 * 定义了一些抽象接口：
 * create: 创建资源
 * retrieve: 根据id获取资源
 * update: 根据id更新资源
 * updateStatus: 根据id更新资源状态
 * list: 列表分页接口
 * count: 统计满足条件资源数量
 * listAll: 获取满足条件的所有资源
 * findOne: 更加条件获取一个资源
 * logicDel: 根据id逻辑删除（软删除）资源
 * destroy: 根据id物理删除资源（硬删除）
 * treeList: 树形列表接口
 * findAll: 查询条件为sequlize默认条件
 * findByIds: 通过id查找数据
 */

const lodash = require('lodash');
const { verify } = require('z-error');
const util = require('../util');

class ServiceBase {
  /**
   *
   * @param {*} role
   * @param {*} seneca
   * @param {*} opt false 表示不加载任何默认操作；true 表示加载所有操作；json对象表示加载对应的操作
   */
  constructor(role, seneca, opt = true) {
    const err = verify({ role, seneca }, ['role', 'seneca'], {
      role: (val) => typeof val === 'string',
      seneca: (val) => typeof val === 'object' || typeof val === 'function',
      opt: (val) => typeof val === 'object' || typeof val === 'boolean',
    });
    if (err) {
      throw err;
    }

    this.role = role;
    this.seneca = seneca;

    this.opt = opt === false ? opt : opt || {
      create: true,
      retrieve: true,
      update: true,
      updateStatus: true,
      list: true,
      count: true,
      listAll: true,
      findOne: true,
      logicDel: true,
      destroy: true,
      treeList: true,
      findAll: true,
      findByIds: true,
    };
  }

  loadCmd() {
    const {
      create, retrieve, update, updateStatus,
      list, count, listAll, findOne, logicDel,
      destroy, treeList, findAll, findByIds,
    } = this;

    const cmd = {
      create,
      retrieve,
      update,
      updateStatus,
      list,
      count,
      findAll,
      findOne,
      logicDel,
      destroy,
      treeList,
      listAll,
      findByIds,
    };

    if (this.opt === false) {
      return;
    }

    lodash.each(cmd, (v, k) => {
      if (util.isFunction(v) && (this.opt === true || this.opt[k])) {
        this.seneca.addAsync({
          role: this.role,
          cmd: k,
        }, v.bind(this));
      }
    });
  }

  addAsync(cmdName, func) {
    if (!cmdName) return;
    if (typeof cmdName === 'string') {
      if (util.isFunction(func) === false) {
        return;
      }
      this.seneca.addAsync({
        role: this.role,
        cmd: cmdName,
      }, func.bind(this));
    }
    if (typeof cmdName === 'object') {
      lodash.each(cmdName, (v, k) => {
        if (util.isFunction(v)) {
          this.seneca.addAsync({
            role: this.role,
            cmd: k,
          }, v.bind(this));
        }
      });
    }
  }
}

module.exports = ServiceBase;