/**
 * File: ServiceBase.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/ServiceBase.js
 * Created Date: 2020-06-14 13:13:26
 * Author: Zz
 * -----
 * Last Modified: 2020-06-17 22:42:59
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'ServiceBase',
  description: 'ServiceBase为Service抽象接口类。定义了一些接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll',

  opt: {
    description: "构造函数开启api配置项",
    propertys: {
      create: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      update: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      updateStatus: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      retrieve: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      updateStatus: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      list: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      count: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      findAll: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      findOne: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      logicDel: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      destroy: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      },
      treeList: {
        type: DataTypes.Boolean,
        description: "true：开启。false：不开启",
      }
    }
  },

  constructor: {
    description: '构造函数',
    params: {
      role: {
        type: DataTypes.String,
        description: '角色名称',
        required: true,
      },
      seneca: {
        type: 'seneca',
        description: 'seneca 对象',
        required: true,
      },
      opt: {
        type: DataTypes.Object,
        description: '默认api开启配置。false：不加载任何默认api；true：加载所有默认api；json对象表示加载对应的操作',
        defaultValue: 'true'
      }
    }
  },

  loadCmd: {
    description: '加载默认方法',
    params: {}
  },

  addAsync: {
    description: '加载自定义方法',
    params: {
      cmd: {
        type: 'String, Object',
        description: 'String：函数名。Object of { funName: function }',
      },
      func: {
        type: DataTypes.Function,
        description: '如果cmd未String，func为函数',
      }
    }
  }
}
