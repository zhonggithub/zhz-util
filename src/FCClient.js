/**
 * File: FCClient.js
 * Project: z-ali-fc
 * FilePath: /src/lib/FCClient.js
 * Created Date: 2020-07-30 20:21:57
 * Author: Zz
 * -----
 * Last Modified: 2020-07-30 20:46:52
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('./util');
const FCClient = require('@alicloud/fc2');

class ZFCClient {
  constructor(serviceName, funName, options) {
    this.serviceName = serviceName
    this.funName = funName

    const { accountId } = options
    delete options.accountId
    this.fcClient = new FCClient(accountId, options)
  }

  async actAsync({ role, cmd }, msg) {
    const err = util.isValidData({ role, cmd }, ['role', 'cmd'], {
      role: util.notEmptyStr,
      cmd: util.notEmptyStr,
    })
    if (err) {
      throw err
    }
    return this.fcClient.invokeFunction(
      this.serviceName,
      this.funName,
      JSON.stringify({
        role,
        cmd,
        params: msg ? msg.params || {} : {},
      }),
    )
  }
}

module.exports = ZFCClient;