/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /src/index.js
 * Created Date: 2020-06-13 19:47:42
 * Author: Zz
 * -----
 * Last Modified: 2020-07-30 20:50:46
 * Modified By: Zz
 * -----
 * Description:
 */
const zerror = require('z-error')
const util = require('./util');
const seneca = require('./seneca');
const XmlUtil = require('./XmlUtil');
const FCClient = require('./FCClient');
const FCService = require('./FCService');

const setLocal = function(lang, local) {
  zerror.setLocal(lang, local);
}

module.exports = {
  util,
  XmlUtil,
  setLocal,
  ...seneca,
  FCClient,
  FCService,
}
