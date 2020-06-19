/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/index.js
 * Created Date: 2020-06-17 13:24:59
 * Author: Zz
 * -----
 * Last Modified: 2020-06-19 11:46:43
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'util',
  description: '工具类函数',
  
  isFunction: {
    description: '判断一个值或对象是否是函数',
    
    params: {
      funcName: {
        type: 'any',
        required: true,
      }
    },
    returns: {
      bo: {
        type: DataTypes.Boolean,
      }
    }
  },

  md5: {
    description: '对一个字符串进行md5。',
    params: {
      type: DataTypes.String,
      description: '字符串',
    },
    returns: {
      type: DataTypes.String,
      description: '形参为非字符串，返回空的字符串。否则返回md5值',
    }
  },

  toLine: {
    description: '驼峰格式转下划线格式',
  },

  lteGte: {
    description: '转换成框架的大于等于，小于等于',
    params: {
      val1: {
        type: 'String, Number',
        description: '大于等于该值',
      },
      val2: {
        type: 'String, Number',
        description: '小于等于该值',
      }
    },
    returns: {
      val: {
        type: 'String',
      }
    }
  },

  ltGte: {
    description: '转换成框架的大于，小于等于',
    params: {
      val1: {
        type: 'String, Number',
        description: '大于该值',
      },
      val2: {
        type: 'String, Number',
        description: '小于等于该值',
      }
    },
    returns: {
      val: {
        type: 'String',
      }
    }
  },

  lteGt: {
    description: '转换成框架的大于等于，小于',
    params: {
      val1: {
        type: 'String, Number',
        description: '大于等于该值',
      },
      val2: {
        type: 'String, Number',
        description: '小于',
      }
    },
    returns: {
      val: {
        type: 'String',
      }
    }
  },

  ltGt: {
    description: '转换成框架的大于，小于',
    params: {
      val1: {
        type: 'String, Number',
        description: '大于该值',
      },
      val2: {
        type: 'String, Number',
        description: '小于该值',
      }
    },
    returns: {
      val: {
        type: 'String',
      }
    }
  },

  inValue: {
    description: '转换成框架的in查询语句',
    params: {
      val: {
        type: 'String, Array',
        required: true,
      }
    },
    returns: {
      val: {
        type: 'String',
      }
    }
  },

  notInValue: {
    description: '转换成框架的not in查询语句',
    params: {
      val: {
        type: 'String, Array',
        required: true,
      }
    },
    returns: {
      val: {
        type: DataTypes.String,
      }
    }
  },

  toHump: {
    description: '下划线转小驼峰',
    params: {
      val: {
        type: DataTypes.String,
        required: true,
      }
    },
    returns: {
      val: {
        type: DataTypes.String,
      }
    }
  },

  toLine: {
    description: '驼峰转下划线',
    params: {
      val: {
        type: DataTypes.String,
        required: true,
      }
    },
    returns: {
      val: {
        type: DataTypes.String,
      }
    }
  },

  fistLetterUpper: {
    description: '首字母大写',
    params: {
      val: {
        type: DataTypes.String,
        required: true,
      }
    },
    returns: {
      val: {
        type: DataTypes.String,
      }
    }
  },

  fistLetterLower: {
    description: '首字母小写',
    params: {
      val: {
        type: DataTypes.String,
        required: true,
      }
    },
    returns: {
      val: {
        type: DataTypes.String,
      }
    }
  },

  responseSuccess: {
    description: '包装api 成功时返回数据',
    params: {
      data: {
        type: 'Number, String, Object',
        required: true,
      },
      message: {
        type: DataTypes.String,
        defaultValue: 'SUCCESS',
      }
    },
    returns: {
      code: {
        type: 'Number, String',
        description: '成功时为0，否则为错误编码',
      },
      message: {
        type: DataTypes.String,
      },
      data: {
        type: 'Number, String, Object',
        required: true,
      },
      status: {
        type: DataTypes.Number,
        required: true,
        description: 'http 状态码',
      }
    }
  },

  randomInt: {
    description: '随机整数',
    params: {
      min: {
        type: DataTypes.Number,
        required: true,
      },
      max: {
        type: DataTypes.Number,
        required: true,
      }
    },
    returns: {
      val: {
        type: DataTypes.Number,
      }
    }
  },

  randomStr: {
    description: '随机一个数字字符串',
    params: {
      places: {
        type: DataTypes.Number,
        required: true,
        description: '位数',
        defaultValue: '16',
      }
    },
    returns: {
      val: {
        type: DataTypes.Number,
      }
    }
  },

  cacleRise: {
    description: '计算百分比增长率',
    params: {
      value: {
        type: DataTypes.Number,
        required: true,
        description: '当前值',
      },
      preValue: {
        type: DataTypes.Number,
        required: true,
        description: '对比值',
      },
    },
    returns: {
      val: {
        type: DataTypes.Number,
      }
    }
  },

  filterData: {
    description: '过滤属性值',
    params: {
      data: {
        type: DataTypes.Object,
        required: true,
      },
      excludeAttribute: {
        type: 'Array',
        required: true,
        description: '过滤的属性数组',
      },
    },
    returns: {
      data: {
        type: DataTypes.Object,
      }
    }
  },

  parseExpand: {
    description: '解析expand字符串，转换对象',
    params: {
      expand: {
        type: DataTypes.String,
        required: true,
        description: 'a,b,c格式的字符串',
      },
    },
    returns: {
      val: {
        type: DataTypes.Object,
        description: '{a: true, b: true, c: true}',
      }
    }
  },

  convertQueryCriteria: {
    description: '把逻辑层的查询条件转成db层的查询条件。默认会处理范围查找的条件。',
    params: {
      querycriteria: {
        type: DataTypes.Object,
        description: '查询条件',
        required: true,
      },
      dbType: {
        type: DataTypes.String,
        description: 'db类型。mongodb || mysql',
        defaultValue: 'mysql',
      },
      handle: {
        type: DataTypes.Function,
        description: '自定义处理函数。接收参数：(key, value, distData)。处理成功时把数据填在distData并返回ture, 否则返回false',
      }
    },
    returns: {
      data: {
        dstCriteria: {
          type: DataTypes.Object,
          description: '已处理的完成的查询条件',
        },
        sourceCriteria: {
          type: DataTypes.Object,
          description: '未处理处理的完成的查询条件',
        }
      }
    }
  },

  isRangeQuery: {
    description: '判断一个字符串是否是范围字符串',
    params: {
      value: {
        type: DataTypes.String,
        required: true,
      },
    },
    returns: {
      bo: {
        type: DataTypes.Boolean,
      }
    }
  },

  isInt: {
    description: '判断一个值是否为整数或整数字符串',
    params: {
      val: {
        type: 'Any',
        required: true,
      },
      strong: {
        type: DataTypes.Boolean,
        description: '是否开启强认证。true表示认证val必须是数字，否则数字字符串也可以',
        defaultValue: false,
      }
    },
    returns: {
      bo: {
        type: DataTypes.Boolean,
      }
    }
  },

  notEmptyStr: {
    description: '判断一个值是否为非空符串',
    params: {
      val: {
        type: 'Any',
        required: true,
      },
    },
    returns: {
      bo: {
        type: DataTypes.Boolean,
      }
    }
  },

  avaTest: {
    description: '测试 { ...expected, ...expand } 属性值和actual是否一致。',
    params: {
      t: {
        type: 'Test',
        required: true,
      },
      actual: {
        type: 'Any',
        required: true,
        description: '实际值',
      },
      expected: {
        type: 'Any',
        required: true,
        description: '期望值',
      },
      expand: {
        type: 'Any',
        description: '期望值',
      }
    },
    returns: {
      bo: {
        type: DataTypes.Boolean,
      }
    }
  },

  utcToDate: {
    description: 'unix时间戳转Date',
    params: {
      unixTimestamp: {
        type: DataTypes.Number,
        required: true,
      },
    },
    returns: {
      date: {
        type: DataTypes.Date,
        defaultValue: 'current date'
      }
    },
  }
}

