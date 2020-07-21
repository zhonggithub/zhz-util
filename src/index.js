/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /src/index.js
 * Created Date: 2020-06-13 19:47:42
 * Author: Zz
 * -----
 * Last Modified: 2020-07-21 15:20:51
 * Modified By: Zz
 * -----
 * Description:
 */
const zerror = require('z-error')
const util = require('./util');
const seneca = require('./seneca');

const setLocal = function(lang, local) {
  console.log(lang, local)
  zerror.setLocal(lang, local);
}

module.exports = {
  util,
  setLocal,
  ...seneca,
}
