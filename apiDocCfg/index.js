/**
 * File: index.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/index.js
 * Created Date: 2020-06-17 13:24:59
 * Author: Zz
 * -----
 * Last Modified: 2020-06-17 13:33:29
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
  }
}

