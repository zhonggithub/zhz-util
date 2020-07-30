/**
 * File: FCService.js
 * Project: z-ali-fc
 * FilePath: /src/lib/FCService.js
 * Created Date: 2020-07-29 16:54:37
 * Author: Zz
 * -----
 * Last Modified: 2020-07-30 20:47:10
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('./util');
const FCClient = require('./FCClient');

class FCService {
  constructor(logger) {
    this.services = {}
    this.remote = {}
    this.logger = logger
  }

  addRemoteService(serviceName, funcName, options) {
    if (this.remote[serviceName]) {
      this.remote[serviceName][funcName] = new FCClient(serviceName, funcName, options)
    } else {
      this.remote[serviceName] = {
        funcName: new FCClient(serviceName, funcName, options),
      }
    }
  }

  async remoteActAsync(serviceName, funName, { role, cmd, params }) {
    if (!this.remote[serviceName]) {
      throw new Error('ERR_SERVICE_NAME')
    }
    if (!this.remote[serviceName][funName]) {
      throw new Error('ERR_FUN_NAME')
    }
    return this.remote[serviceName][funName].actAsync({ role, cmd }, params)
  }

  async addAsync({ role, cmd }, fun) {
    if (!this.services[role]) {
      this.services[role] = { [cmd]: fun }
    } else {
      this.services[role][cmd] = fun
    }
  }

  async actAsync({ role, cmd }, msg) {
    const err = util.isValidData({ role, cmd }, ['role', 'cmd'], {
      role: util.notEmptyStr,
      cmd: util.notEmptyStr,
    })
    if (err) {
      throw err
    }
    return this.services[role][cmd](msg)
  }
}

module.exports = FCService;