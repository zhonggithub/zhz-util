/**
 * File: FCService.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/FCService.js
 * Created Date: 2020-08-04 17:38:45
 * Author: Zz
 * -----
 * Last Modified: 2020-08-04 19:30:28
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'FCService',
  description: '把阿里函数计算封装成seneca对象',

  FCService: {
    propertys: {
      services: {
        type: DataTypes.Object,
        desc: '本地service',
      },
      romote: {
        type: DataTypes.Object,
        desc: '远程service',
      },
      logger: {
        type: DataTypes.Object,
        desc: 'logger对象',
      }
    }
  },

  constructor: {
    desc: '构造函数',
    params: {
      logger: {
        type: DataTypes.Object,
        desc: 'logger对象',
      }
    }
  },

  addAsync: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '把一个函数加载到FCService的对象中',
    params: {
      params: {
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
      fun: {
        type: DataTypes.Function,
        desc: 'cmd对应的函数实现',
        required: true,
      }
    },
  },
  
  actAsync: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '通过role, cmd调用一个函数',
    params: {
      params: {
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

  addRemoteService: {
    desc: '加载一个阿里函数计算的远程服务',
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

  remoteActAsync: {
    desc: '调用远程服务',
    params: {
      serviceName: {
        type: DataTypes.String,
        desc: '阿里函数计算的服务名',
      },
      funcName: {
        type: DataTypes.String,
        desc: '阿里云函数计算函数名称',
      },

      params: {
        role: {
          type: DataTypes.String,
          desc: '角色名称',
          required: true,
        },
        cmd: {
          type: DataTypes.String,
          desc: '方法名称',
          required: true,
        },
        msg: {
          type: DataTypes.Object,
          desc: 'cmd函数参数',
        }
      },
    }
  }
}