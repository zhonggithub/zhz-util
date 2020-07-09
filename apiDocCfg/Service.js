/**
 * File: Service.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/Service.js
 * Created Date: 2020-06-14 15:35:22
 * Author: Zz
 * -----
 * Last Modified: 2020-07-09 10:58:08
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
      cache: {
        type: 'RedisCache',
        description: '缓存',
      },
      cacheTTL: {
        type: 'Number, CacheTTLEnum',
        description: '缓存周期。Number: 表示xx秒。CacheTTLEnum: s(60秒内)，m(60分钟内)，h(24小时内)，d(30天内)，M(12个月内)，y(一年)',
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
        type: 'Object, Array',
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
    desc: '根据id, expand生成缓存key',
    params: {
      id: {
        type: DataTypes.String,
        desc: '资源id',
        required: true,
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
  getCacheTTL: {
    desc: '获取缓存时间',
    params: {},
    returns: {
      ttl: {
        type: DataTypes.Number,
        desc: '缓存时间',
      }
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
    desc: '创建一个资源。create执行流程：\r\n 1，isValidDataWhenCreate。\r\n 2，logic2DB。 \r\n 3，beforeCreate\r\n 4，afterCreate\r\n5，db2logic',
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
    desc: '根据id获取资源详情。retrieve会根据expand的不同生成不同缓存。\r\n\r\n * 如果没有指定expand, 缓存只包含资源id的数据。\r\n * 如果指定了expand, 缓存包含资源id的数据及指定子资源的数据。',
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