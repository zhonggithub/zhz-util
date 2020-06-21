/**
 * File: ServiceUtilBase.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/ServiceUtilBase.js
 * Created Date: 2020-06-17 22:18:14
 * Author: Zz
 * -----
 * Last Modified: 2020-06-21 16:25:19
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'ServiceUtilBase',
  description: '提供Service操作的工具抽象接口类',

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
    }
  },
  parseExpand2Include: {
    description: '解析expand: { a: true, b: true ....}。该函数会在读操作：retrieve，list，listAll，findOne，findAll，findByIds之前调用。',
    params: {
      expand: {
        type: DataTypes.Object,
        description: '子资源扩展数据。格式为：{ a: true, b: true, ....}',
        required: true,
      }
    },
    returns: {
      ret: {
        type: 'Object, null',
        required: true,
        description: '解析成功返回include对象, 否则返回null'
      }
    }
  },
  isValidDataWhenCreate: {
    description: '创建的时候判断数据合法性，验证不通过返回ZError对象，否则返回null',
    params: {
      data: {
        type: DataTypes.Object,
        description: '创建时传入的数据',
      }
    },
    returns: {
      ret: {
        type: 'ZError, null',
        description: '验证不通过返回ZError对象，否则返回null',
      }
    }
  },

  isValidDataWhenRetrieve: {
    description: '获取数据时候判断数据是否包含必填字段，默认校验id，但是不对id合法性校验。验证不通过返回ZEerror对象,否则返回null',
    params: {
      id: {
        type: DataTypes.String,
        description: '资源id',
      },
      expand: {
        type: 'String, Object',
        description: '获取指定的子资源。expand=a,b 或 { a: true, b: true }',
      }
    },
    returns: {
      ret: {
        type: 'ZError, null',
        description: '验证不通过返回ZError对象，否则返回null',
      }
    }
  },

  isValidDataWhenUpdateStatus: {
    description: '更新状态时判断id, status必填字段，不对id，status合法性校验.验证不通过返回ZError对象,否则返回null',
    params: {
      id: {
        type: DataTypes.String,
        description: '资源id',
      },
      expand: {
        type: 'String, Object',
        description: '获取指定的子资源。expand=a,b 或 { a: true, b: true }',
      }
    },
    returns: {
      ret: {
        type: 'ZError, null',
        description: '验证不通过返回ZError对象，否则返回null',
      }
    }
  },

  isExistWhenCreate: {
    description: '创建的时候校验数据唯一性',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '创建时传入的数据',
      }
    },
    returns: {
      ret: {
        type: 'ZError, null',
        description: '验证不通过返回ZError对象，否则返回null',
      }
    }
  },

  isValidQueryCondition: {
    description: '判断list条件合法性. 验证不通过返回ZEerror对象,否则返回null',
    params: {
      criteria: {
        type: DataTypes.Object,
        description: 'list时传入的查询条件',
      }
    },
    returns: {
      ret: {
        type: 'ZError, null',
        description: '验证不通过返回ZError对象，否则返回null',
      }
    }
  },

  convertQueryCriteria: {
    description: 'list前转换传入的查询条件。逻辑表达查询条件转换成sql条件',
    params: {
      criteria: {
        type: DataTypes.Object,
        description: 'list时传入的查询条件',
      }
    },
    returns: {
      ret: {
        type: DataTypes.Object,
        description: '转换后的查询条件',
      }
    }
  },

  convertCountCriteria: {
    description: 'count前转换传入的查询条件。逻辑表达查询条件转换成sql条件。',
    params: {
      criteria: {
        type: DataTypes.Object,
        description: 'count时传入的查询条件',
      }
    },
    returns: {
      ret: {
        type: DataTypes.Object,
        description: '转换后的查询条件',
      }
    }
  },

  logic2DBWhenUpdate: {
    funcType: DataTypes.FuncType.kAsync,
    description: '逻辑层数据转db层数据',
    params: {
      data: {
        type: DataTypes.Object,
        description: '传入的逻辑表现层的数据',
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        description: '返回db层数据',
      }
    }
  },

  db2logic: {
    funcType: DataTypes.FuncType.kAsync,
    description: 'db层数据转逻辑层数据',
    params: {
      data: {
        type: DataTypes.Object,
        description: '传入的db层的数据',
      },
      expand: {
        type: DataTypes.Function,
        description: '获取指定资源的数据。{a: true, b: true}。如果是同一个service的model可以在parseExpand2Include返回include，如果跨service的资源获取，在此处实现获取逻辑'
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        description: '返回逻辑表现层数据',
      }
    }
  },

  list2logic: {
    funcType: DataTypes.FuncType.kAsync,
    description: 'list获得数据转换层逻辑表现层数据。默认循环调用db2logic',
    params: {
      items: {
        type: DataTypes.Object,
        required: true,
        description: '传入的db层的数据',
      },
      expand: {
        type: DataTypes.Function,
        description: '获取指定资源的数据。{a: true, b: true}'
      }
    },
    returns: {
      data: {
        type: DataTypes.arrayOf(DataTypes.Object),
        description: '逻辑表现层的数据数组',
      }
    }
  },

  beforeCreate: {
    description: '创建之前调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '创建时传入的数据',
      }
    },
  },

  afterCreate: {
    description: '创建之后调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '创建后的数据',
      }
    },
  },

  beforeUpdate: {
    description: '更新之前调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '更新时传入的数据',
      }
    },
  },

  afterUpdate: {
    description: '更新之后调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '更新后的数据',
      }
    },
  },

  beforeUpdateStatus: {
    description: '更新状态之前调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '更新前的数据',
      }
    },
  },

  afterUpdateStatus: {
    description: '更新状态之后调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '更新后的数据',
      }
    },
  },

  beforeDestroy: {
    description: '删除之前调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '删除时传入的数据',
      }
    },
  },
  
  afterDestroyDestroy: {
    description: '删除之后调用',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      data: {
        type: DataTypes.Object,
        description: '删除后传入的数据',
      }
    },
  }
}
