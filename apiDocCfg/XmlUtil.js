/**
 * File: XmlUtil.js
 * Project: zhz-util
 * FilePath: /apiDocCfg/XmlUtil.js
 * Created Date: 2020-08-04 21:23:16
 * Author: Zz
 * -----
 * Last Modified: 2020-08-04 21:50:30
 * Modified By: Zz
 * -----
 * Description:
 */
const dataTypes = require('zh-cli');

const DataTypes = dataTypes.nodejs;

module.exports = {
  name: 'XmlUtil',
  description: '提供xml与jons对象转换的方法',

  constructor: {
    desc: '构造函数',
    params: {
      keyMappings: {
        type: DataTypes.Object,
        desc: 'json对象，定义了json字段对应的xml字段。如：{ name: \'abc001\' }',
        required: true,
      }
    }
  },

  getField: {
    desc: '获得xmlCode对应json的field',
    params: {
      xmlCode: {
        type: DataTypes.String,
        desc: 'xml的code',
        required: true,
      }
    },
    returns: {
      field: {
        type: DataTypes.String,
        desc: 'keyMappings的k',
      }
    }
  },

  getXmlCode: {
    desc: '获得json的field对应的xmlCode',
    params: {
      field: {
        type: DataTypes.String,
        desc: 'keyMappings的k',
        required: true,
      }
    },
    returns: {
      field: {
        type: DataTypes.String,
        desc: 'xml的code',
      }
    }
  },

  xml2obj: {
    desc: 'xml对象转换成json对象',
    params: {
      xml: {
        type: DataTypes.String,
        desc: 'xml格式的字符串',
        required: true,
      },
      customMapping: {
        type: DataTypes.Object,
        desc: '自定义映射',
      },
      options: {
        type: DataTypes.Object,
        desc: 'xml-js的xml2js第二参数',
      }
    },
    returns: {
      data: {
        type: DataTypes.Object,
        desc: 'xml转换得到的json对象',
      }
    }
  },

  obj2xml: {
    desc: 'json对象转换成xml对象',
    params: {
      data: {
        type: DataTypes.Object,
        desc: 'json对象',
        required: true,
      },
      customMapping: {
        type: DataTypes.Object,
        desc: '自定义映射',
      }
    },
    returns: {
      xml: {
        type: DataTypes.String,
        desc: 'json对象转换的xml字符串',
      }
    }
  }
}
 