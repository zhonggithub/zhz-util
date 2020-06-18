/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/Service.js
 * Created Date: 2020-06-14 15:35:22
 * Author: Zz
 * -----
 * Last Modified: 2020-06-18 23:15:05
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'Service',
  description: '继承ServiceBase。实现接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll',

  constructor: {
    description: '构造函数',
    paramsIsObject: true,
    params: {
      seneca: {
        type: 'seneca',
        description: 'seneca 对象',
        required: true,
      },
      model: {
        type: 'ModelBase',
        description: '',
        required: true,
      },
      serviceUtil: {
        type: 'UtilBase',
        description: '',
      },
      cache: {
        type: 'RedisCache',
        description: '缓存',
      },
      cacheTTL: {
        type: 'Number, CacheTTLEnum',
        description: '缓存周期。Number: 表示xx秒。CacheTTLEnum: s(60秒)，m(60秒内)，h(60分钟内)，d(24小时内)，M(30天内)，y(12个月内)',
      },
      role: {
        type: DataTypes.String,
        description: '角色名称',
        required: true,
      },
      opt: {
        type: DataTypes.Object,
        description: '默认api开启配置。false：不加载任何默认api；true：加载所有默认api；json对象表示加载对应的操作',
        defaultValue: 'true'
      }
    }
  },
}