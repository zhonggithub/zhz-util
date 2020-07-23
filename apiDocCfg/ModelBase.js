/**
 * File: ModelBase.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/ModelBase.js
 * Created Date: 2020-07-03 13:07:57
 * Author: Zz
 * -----
 * Last Modified: 2020-07-23 13:28:58
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'ModelBase',
  desc: '框架model基类，用不同的orm实现db操作继承该类并实现相应的方法',

  constructor: {
    desc: '构造函数',
    params: {
      model: {
        type: 'Model',
        desc: 'orm的Model对象',
        required: true,
      },
    }
  },

  getModel: {
    desc: '获得orm的Model对象',
    params: {},
    returns: {
      model: {
        type: 'Model',
        desc: 'orm的Model对象',
        required: true,
      }
    }
  },

  create: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '创建资源，返回值为',
    params: {
      data: {
        type: DataTypes.Object,
        desc: '待写入db的数据',
      },
    }
  },

  findById: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '通过id获取数据',
    params: {
      id: {
        type: DataTypes.String,
        required: true,
      },
    },
    returns: {
      data: {
        type: DataTypes.Object,
        desc: '资源数据',
        required: true,
      }
    }
  },
  
  findByIdAndUpdate: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '根据id更新数据',
    params: {
      id: {
        type: DataTypes.String,
        required: true,
      },
      data: {
        type: DataTypes.Object,
        desc: '待更新db的数据',
        required: true,
      },
    },
    returns: {
      data: {
        type: DataTypes.Object,
        desc: '更新后的资源数据',
        required: true,
      }
    }
  },

  list: {
    funcType: DataTypes.FuncType.kAsync,
    paramsIsObject: true,
    desc: '分页api',
    params: {
      query: {
        type: DataTypes.Object,
        desc: '查询条件',
        required: true,
      },
    },
    returns: {
      count: {
        type: DataTypes.Number,
        desc: '符合条件的数量',
      },
      rows: {
        type: DataTypes.arrayOf(DataTypes.Object),
        desc: '符合条件的当前页数数据',
      },
    }
  },
  
  count: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '统计符合条件的数量',
    params: {
      query: {
        type: DataTypes.Object,
        desc: '查询条件',
        required: true,
      },
    },
  },

  find: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '统计符合条件的数量',
    params: {
      query: {
        type: DataTypes.Object,
        desc: '查询条件',
        required: true,
      },
    },
    returns: {
      rows: {
        type: DataTypes.arrayOf(DataTypes.Object),
        desc: '符合条件的数据',
      },
    }
  },

  findOne: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '统计符合条件的某条数据',
    params: {
      query: {
        type: DataTypes.Object,
        desc: '查询条件',
        required: true,
      },
    },
    returns: {
      data: {
        type: DataTypes.Object,
        desc: '符合条件的数据',
      },
    }
  },

  findByIdAndDelete: {
    funcType: DataTypes.FuncType.kAsync,
    desc: '根据id删除数据',
    params: {
      id: {
        type: DataTypes.String,
        required: true,
      },
    },
    returns: {
      data: {
        type: DataTypes.Object,
        desc: '删除结果',
      },
    }
  }
}
