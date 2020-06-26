/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/Service.js
 * Created Date: 2020-06-14 15:35:22
 * Author: Zz
 * -----
 * Last Modified: 2020-06-27 01:45:47
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'Service',
  description: '继承ServiceBase。实现接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll, findByIds',

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

  handleCatchErr: {
    desc: '统一处理错误的函数',
    params: {
      err: {
        type: 'Error',
        desc: '错误对象',
      }
    },
    returns: {
      code: {
        type: DataTypes.String,
        defaultValue: 'ERR_DB',
      },
      message: {
        type: DataTypes.String,
        desc: '错误描述',
      },
      data: {
        type: 'Error',
        desc: '错误对象',
      },
      status: {
        type: DataTypes.Number,
        defaultValue: 500,
      }
    }
  },

  getCacheKey: {
    desc: '根据id, include生成缓存key',
    params: {
      id: {
        type: DataTypes.String,
        desc: '资源id',
      },
      expand: {
        type: DataTypes.Object,
        desc: '指定的子资源',
        defaultValue: null,
      },
      full: {
        type: DataTypes.Boolean,
        desc: 'true: 表示获取包括redis keyPrefix及框架生成的key组合的完整key。false: 表示获取框架生成的key',
        defaultValue: false
      }
    },
    returns: {
      key: {
        type: DataTypes.String,
        desc: '缓存key',
      },
    }
  },
 
  delCache: {
    desc: '删除缓存',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      id: {
        type: DataTypes.String,
        desc: '资源id',
      },
    },
    returns: {
      result: {
        type: "Number, Array",
        desc: '删除结果。如果通过key查找多个通配符key。则返回数组。否则返回Number',
      },
    }
  },

  create: {
    desc: '创建一个资源',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      ['...params']: {
        type: DataTypes.Object,
        required: true,
        desc: '资源对象',
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        required: true,
      }
    }
  },

  retrieve: {
    desc: '根据id获取资源详情',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      id: {
        type: DataTypes.String,
        required: true,
        desc: '资源对象id',
      },
      expand: {
        type: DataTypes.String,
        required: true,
        desc: '指定获取的子资源',
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        required: true,
      }
    }
  },

  update: {
    desc: '根据id更新数据',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      id: {
        type: DataTypes.String,
        required: true,
        desc: '资源对象id',
      },
      fields: {
        type: 'Any',
        required: true,
        desc: '待更新的字段',
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        required: true,
      }
    }
  },

  updateStatus: {
    desc: '根据id更新状态',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      id: {
        type: DataTypes.String,
        required: true,
        desc: '资源对象id',
      },
      status: {
        type: DataTypes.Number,
        required: true,
        desc: '状态值',
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        required: true,
      }
    },
  },
  
  list: {
    desc: '列表',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      page: {
        type: DataTypes.Number,
        comment: '当前页数',
        defaultValue: 1,
      },
      pageSize: {
        type: DataTypes.Number,
        comment: '每页条数',
        defaultValue: 10,
      },
      limit: {
        type: DataTypes.Number,
        comment: '同pageSize',
        defaultValue: 10,
      },
      offset: {
        type: DataTypes.Number,
        comment: '起始条数',
        defaultValue: 0,
      },
      sort: {
        type: 'Array，Object, String',
        comment: '排序。支持四种格式：array of { field: "", order: "DESC" }；array of [[field, "DESC"]]；object of {a: -1("DESC"), b: 1("ASC")}；sort=-a,b',
      },
      search: {
        type: DataTypes.String,
        comment: '搜索关键字',
      },
      expand: {
        type: DataTypes.String,
        comment: '获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b',
      },
    },
    returns: {
      pageSize: {
        type: DataTypes.Number,
        comment: '每页条数',
        required: true,
      },
      page: {
        type: DataTypes.Number,
        comment: '当前页数',
        required: true,
      },
      total: {
        type: DataTypes.Number,
        comment: '符合条件的总数量',
        required: true,
      },
      limit: {
        type: DataTypes.Number,
        comment: '同pageSize',
        required: true,
      },
      offset: {
        type: DataTypes.Number,
        comment: '起始条数',
        required: true,
      },
      items: {
        type: DataTypes.Number,
        comment: '返回数据项',
      },
    }
  },

  count: {
    desc: '根据条件统计数量',
    funcType: DataTypes.FuncType.kAsync,
    params: {
      query: {
        type: 'Object',
        desc: '条件'
      }
    },
    returns: {
      data: {
        type: DataTypes.Number,
        desc: '数量',
        required: true,
      }
    }
  },

  listAll: {
    desc: '根据条件返回所有数据',
    funcType: DataTypes.FuncType.kAsync,
    paramsIsObject: true,
    params: {
      ['...query']: {
        type: '...Object',
        desc: '各种查询条件条件'
      },
      expand: {
        type: DataTypes.String,
        comment: '获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b',
      },
    },
    returns: {
      data: {
        type: DataTypes.arrayOf(DataTypes.Object),
      }
    }
  },

  findOne: {
    desc: '根据条件返回一条数据',
    funcType: DataTypes.FuncType.kAsync,
    paramsIsObject: true,
    params: {
      ['...query']: {
        type: '...Object',
        desc: '各种查询条件条件'
      },
      expand: {
        type: DataTypes.String,
        comment: '获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b',
      },
    },
    returns: {
      data: {
        type: DataTypes.Object,
      }
    }
  },

  destroy: {
    desc: '根据id删除一条数据',
    funcType: DataTypes.FuncType.kAsync,
    paramsIsObject: true,
    params: {
      id: {
        type: DataTypes.String,
        comment: '资源id',
      },
    }
  },

  findAll: {
    desc: '根据条件返回所有数据',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      ['...query']: {
        type: '...Object',
        desc: '各种查询条件条件'
      },
      expand: {
        type: DataTypes.String,
        comment: '获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b',
      },
    },
    returns: {
      data: {
        type: DataTypes.arrayOf(DataTypes.Object),
      }
    }
  },

  findByIds: {
    desc: '根据id返回所有数据',
    paramsIsObject: true,
    funcType: DataTypes.FuncType.kAsync,
    params: {
      ids: {
        type: DataTypes.arrayOf(DataTypes.String),
        desc: 'id数组',
        required: true,
      },
      expand: {
        type: DataTypes.String,
        comment: '获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b',
      },
    },
    returns: {
      data: {
        type: DataTypes.arrayOf(DataTypes.Object),
      }
    }
  }
}