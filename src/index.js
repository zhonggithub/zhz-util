/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /src/index.js
 * Created Date: 2020-06-13 19:47:42
 * Author: Zz
 * -----
 * Last Modified: 2020-06-14 08:57:44
 * Modified By: Zz
 * -----
 * Description:
 */
const util = require('./util');
const seneca = require('./seneca');

module.exports = {
  util,
  ...seneca,
}
