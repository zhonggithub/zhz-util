/**
 * File: FCClient.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/FCClient.js
 * Created Date: 2020-08-04 19:16:06
 * Author: Zz
 * -----
 * Last Modified: 2020-08-04 20:43:24
 * Modified By: Zz
 * -----
 * Description:
 */

const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'FCClient',
  description: '把阿里函数计算封装成seneca客户端',

  FCClient: {
    propertys: {
      serviceName: {
        type: DataTypes.Object,
        desc: '阿里函数计算的服务名',
      },
      funName: {
        type: DataTypes.Object,
        desc: '阿里云函数计算函数名称',
      },
      fcClient: {
        type: DataTypes.Object,
        desc: '[@alicloud/fc2](https://www.npmjs.com/package/@alicloud/fc2)对象',
      }
    }
  },

  constructor: {
    desc: '构造函数',
    params: {
      serviceName: {
        type: DataTypes.String,
        desc: '阿里函数计算的服务名',
      },
      funcName: {
        type: DataTypes.String,
        desc: '阿里云函数计算函数名称',
      },
      options: {
        accountId: {
          type: DataTypes.String,
          required: true,
        },
        accessKeyId: {
          type: DataTypes.String,
          required: true,
        },
        accessKeySecret: {
          type: DataTypes.String,
          required: true,
        },
        region: {
          type: DataTypes.String,
          required: true,
        }
      }
    }
  },
  
  actAsync: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '通过role, cmd调用一个函数',
    params: {
      params1: {
        role: {
          type: DataTypes.String,
          desc: '角色名称',
          required: true,
        },
        cmd: {
          type: DataTypes.String,
          desc: '方法名称',
          required: true,
        }
      },
      msg: {
        type: DataTypes.Object,
        desc: 'cmd函数参数',
      }
    },
    returns: {
      data: {
        type: DataTypes.promiseOf(DataTypes.Object),
      }
    }
  },
}