/**
 * File: xml.test.js
 * Project: zhz-util
 * FilePath: /test/xml.test.js
 * Created Date: 2020-07-28 14:17:21
 * Author: Zz
 * -----
 * Last Modified: 2020-08-04 21:22:36
 * Modified By: Zz
 * -----
 * Description:
 */
const XmlUtil = require('../src/XmlUtil')

const xmlUtil = new XmlUtil({
  name: 'aka001',
  password: 'aka002',
})

const obj = {
  row: {
    name: 'zz',
    password: 'zz'
  }
}
console.log(xmlUtil.obj2xml(obj));

const xmlStr = `
<?xml version="1.0" encoding="GBK"?>
<row>
<aka001>zz</aka001>
<aka002>zz</aka002>
</row>
`
console.log(xmlUtil.xml2obj(xmlStr));