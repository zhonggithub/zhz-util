/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /src/index.js
 * Created Date: 2020-06-13 19:47:42
 * Author: Zz
 * -----
 * Last Modified: 2020-07-29 08:57:24
 * Modified By: Zz
 * -----
 * Description:
 */
const zerror = require('z-error')
const util = require('./util');
const seneca = require('./seneca');
const XmlUtil = require('./XmlUtil');

const setLocal = function(lang, local) {
  zerror.setLocal(lang, local);
}

module.exports = {
  util,
  XmlUtil,
  setLocal,
  ...seneca,
}
