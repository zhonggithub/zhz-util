/**
 * File: XmlUtil.js
 * Project: zhz-util
 * FilePath: /src/XmlUtil.js
 * Created Date: 2020-07-28 14:15:37
 * Author: Zz
 * -----
 * Last Modified: 2020-08-04 21:09:34
 * Modified By: Zz
 * -----
 * Description:
 */
const { xml2js, json2xml } = require('xml-js')

class XmlUtil {
  constructor(keyMappings) {
    if (typeof keyMappings !== 'object') {
      throw new Error('keyMappings requred object')
    }
    this.fieldMappingXmlCode = keyMappings
    this.xmlCodeMappingField = {}

    for (const [k, v] of Object.entries(keyMappings)) {
      const xmlCode = v.toLocaleLowerCase()
      if (this.xmlCodeMappingField[xmlCode]) {
        throw new Error(`key ${xmlCode} already existed， map to ${k}`)
      }
      this.xmlCodeMappingField[xmlCode] = k
    }
  }

  getField(xmlCode) {
    return this.xmlCodeMappingField[xmlCode] || xmlCode
  }

  getXmlCode(field) {
    return this.fieldMappingXmlCode[field] || field
  }

  parseObj(obj, customMapping) {
    if (typeof obj === 'string') {
      return obj
    }
    if (Array.isArray(obj)) {
      return obj.map((o) => this.parseObj(o, customMapping))
    }
    if (Object.keys(obj).length === 0) {
      return null
    }
    if (Object.prototype.hasOwnProperty.call(obj, '_text')) {
      return obj._text
    }
    const resultObj = {}
    for (const [k, v] of Object.entries(obj)) {
      let local = customMapping ? customMapping[k] : null
      local = local || this.getField(k)
      resultObj[local] = this.parseObj(v, customMapping)
      if (k === 'row' && !Array.isArray(resultObj[local])) {
        resultObj[local] = resultObj[local] ? [resultObj[local]] : []
      }
    }
    return resultObj
  }

  xml2Obj(xml, customMapping) {
    return this.parseObj(xml2js(xml, {
      compact: true,
      ignoreDeclaration: true,
      ignoreAttributes: true,
    }), customMapping)
  }

  convertObjKey(obj, customMapping) {
    let result
    if (Array.isArray(obj)) {
      result = obj.map((o) => ({ row: this.convertObjKey(o, customMapping) }))
    } else if (obj && typeof obj === 'object') {
      result = {}
      for (const [k, v] of Object.entries(obj)) {
        let yinhaiKey = customMapping ? customMapping[k] : null
        yinhaiKey = yinhaiKey || this.getXmlCode(k)
        if (v && (Array.isArray(v) || typeof v === 'object')) {
          result[yinhaiKey] = this.convertObjKey(v, customMapping)
        } else {
          result[yinhaiKey] = v
        }
      }
    } else {
      throw new Error('unsupported input, only accept array and object')
    }
    return result
  }

  obj2Xml(data, customMapping) {
    data = this.convertObjKey(data, customMapping)
    return json2xml({
      _declaration: {
        _attributes: {
          version: '1.0',
          encoding: 'GBK',
        },
      },
      ...data,
    }, { compact: true, ignoreComment: true, spaces: 4 })
  }
}

module.exports = XmlUtil
