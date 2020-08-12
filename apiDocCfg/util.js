/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/index.js
 * Created Date: 2020-06-17 13:24:59
 * Author: Zz
 * -----
 * Last Modified: 2020-08-12 09:46:46
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
      text: {
        type: DataTypes.String,
        description: '字符串',
      }
    },
    returns: {
      text: {
        type: DataTypes.String,
        description: '形参为非字符串，返回空的字符串。否则返回md5值',
      }
    }
  },

  toLine: {
    description: '驼峰格式转下划线格式',
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

  gteLte: {
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

  gtLte: {
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

  gteLt: {
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

  gtLt: {
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

  response: {
    description: '包装api返回数据',
    params: {
      code: {
        type: 'Number, String',
        description: '成功时为0，否则为错误编码',
      },
      message: {
        type: DataTypes.String,
        defaultValue: 'SUCCESS',
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
        defaultValue: 200,
        description: 'http 状态码',
      }
    }
  },
  responseError400: {
    description: '包装api返回400错误码数据',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        defaultValue: 'MISSING_PARAMS',
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      code: {
        type: DataTypes.String,
        description: '错误编码',
        required: true,
      },
      message: {
        type: DataTypes.String,
        required: true,
      },
      desc: {
        type: DataTypes.String,
      },
      status: {
        type: DataTypes.Number,
        required: true,
        defaultValue: '400',
        description: 'http 状态码',
      }
    }
  },
  responseError404: {
    description: '包装api返回404错误码数据',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        defaultValue: 'ERROR_RESOURCE_NOT_EXIST',
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      code: {
        type: DataTypes.String,
        description: '错误编码',
        required: true,
      },
      message: {
        type: DataTypes.String,
        required: true,
      },
      desc: {
        type: DataTypes.String,
      },
      status: {
        type: DataTypes.Number,
        required: true,
        defaultValue: '404',
        description: 'http 状态码',
      }
    }
  },
  responseError409: {
    description: '包装api返回409错误码数据',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        defaultValue: 'ERROR_RESOURCE_EXIST',
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      code: {
        type: DataTypes.String,
        description: '错误编码',
        required: true,
      },
      message: {
        type: DataTypes.String,
        required: true,
      },
      desc: {
        type: DataTypes.String,
      },
      status: {
        type: DataTypes.Number,
        required: true,
        defaultValue: '409',
        description: 'http 状态码',
      }
    }
  },
  responseError422: {
    description: '包装api返回422错误码数据',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        defaultValue: 'INVALID_PARAMS',
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      code: {
        type: DataTypes.String,
        description: '错误编码',
        required: true,
      },
      message: {
        type: DataTypes.String,
        required: true,
      },
      desc: {
        type: DataTypes.String,
      },
      status: {
        type: DataTypes.Number,
        required: true,
        defaultValue: '422',
        description: 'http 状态码',
      }
    }
  },
  responseError500: {
    description: '包装api返回500错误码数据',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        required: true,
        defaultValue: 'ERROR_UNKOWN',
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      code: {
        type: DataTypes.String,
        description: '错误编码',
        required: true,
      },
      message: {
        type: DataTypes.String,
        required: true,
      },
      desc: {
        type: DataTypes.String,
      },
      status: {
        type: DataTypes.Number,
        required: true,
        defaultValue: '500',
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

  isValidData: {
    desc: '验证数据的合法性和有效性',
    params: {
      data: {
        type: DataTypes.Object,
        desc: '待验证的数据',
        required: true,
      },
      requiredParams: {
        type: DataTypes.arrayOf(DataTypes.String),
        desc: '合法性校验。校验必备参数',
      },
      fieldVerfiyFunc: {
        type: DataTypes.Object,
        desc: '参数有效性校验。{ field1: val => func(val), field2: val => func2(val), ... }',
      },
      missingPrefix: {
        type: DataTypes.String,
        desc: '合法性校验失败后添加的code前缀。',
      },
      invalidePrefix: {
        type: DataTypes.String,
        desc: '有效性校验失败后添加的code前缀。',
      }
    },
    returns: {
      error: {
        type: 'ZError',
        desc: '校验失败返回ZError对象，否则返回null',
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
    description: '判断一个值是否为非空符串。如果是非空字符串，返回true，否则返回false',
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
  isValueOf: {
    description: '判断一个值是否在期望值之内。如果actualValue和expectedValues都是Number、Boolean、String类型，采用\`===\`比较。如果expectedValues是Array或Object类型。则判断actualValue值是否是存在数组或Object.values(expectedValues)中',
    params: {
      actualValue: {
        type: 'Number，Boolean，String',
        required: true,
      },
      expectedValues: {
        type: 'Number，Boolean，String，Array，Object',
        required: true,
      }
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
  },

  dateStrToDate: {
    description: '日期字符串转utc Date',
    params: {
      dateStr: {
        type: DataTypes.String,
        required: true,
      },
    },
    returns: {
      date: {
        type: DataTypes.Date,
        defaultValue: 'current date'
      }
    },
  },

  zerror400: {
    description: '参数错误对象，对应http code 为400',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        required: true,
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      zerror: {
        type: DataTypes.Object,
        desc: 'ZError对象',
      }
    },
  },
  zerror409: {
    description: '参数错误对象，对应http code 为409',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        required: true,
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      zerror: {
        type: DataTypes.Object,
        desc: 'ZError对象',
      }
    },
  },
  zerror404: {
    description: '参数错误对象，对应http code 为404',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        required: true,
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      zerror: {
        type: DataTypes.Object,
        desc: 'ZError对象',
      }
    },
  },
  zerror422: {
    description: '参数错误对象，对应http code 为422',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        required: true,
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      zerror: {
        type: DataTypes.Object,
        desc: 'ZError对象',
      }
    },
  },
  zerror500: {
    description: '参数错误对象，对应http code 为500',
    params: {
      name: {
        type: DataTypes.String,
        required: true,
      },
      code: {
        type: DataTypes.String,
        required: true,
      },
      message: {
        type: DataTypes.String,
      },
      desc: {
        type: DataTypes.String,
      }
    },
    returns: {
      zerror: {
        type: DataTypes.Object,
        desc: 'ZError对象',
      }
    },
  }
}

