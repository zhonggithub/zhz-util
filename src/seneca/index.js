/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /src/seneca/index.js
 * Created Date: 2020-06-13 23:37:20
 * Author: Zz
 * -----
 * Last Modified: 2020-06-17 22:21:09
 * Modified By: Zz
 * -----
 * Description:
 */
const EnumConst = require('./EnumConst');
const ModelBase = require('./ModelBase');
const RedisCache = require('./RedisCache');
const Service = require('./Service');
const ServiceBase = require('./ServiceBase');
const ServiceUtilBase = require('./ServiceUtilBase');
const mysqlSeneca = require('./mysql');
const mongodbSeneca = require('./mongodb')

module.exports = {
  EnumConst,
  ModelBase,
  RedisCache,
  Service,
  ServiceBase,
  ServiceUtilBase,
  mysqlSeneca,
  mongodbSeneca,
}