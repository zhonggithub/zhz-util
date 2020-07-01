/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /src/seneca/index.js
 * Created Date: 2020-06-13 23:37:20
 * Author: Zz
 * -----
 * Last Modified: 2020-07-01 13:46:13
 * Modified By: Zz
 * -----
 * Description:
 */
const EnumConst = require('./EnumConst');
const ModelBase = require('./ModelBase');
const RedisCache = require('./RedisCache');
const ServiceImp = require('./ServiceImp');
const ServiceBase = require('./ServiceBase');
const mysqlSeneca = require('./mysql');
const mongodbSeneca = require('./mongodb');

module.exports = {
  EnumConst,
  ModelBase,
  RedisCache,
  ServiceImp,
  ServiceBase,
  mysqlSeneca,
  mongodbSeneca,
}