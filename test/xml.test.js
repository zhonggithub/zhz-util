/**
 * File: xml.test.js
 * Project: zhz-util
 * FilePath: /test/xml.test.js
 * Created Date: 2020-07-28 14:17:21
 * Author: Zz
 * -----
 * Last Modified: 2020-10-14 11:18:31
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

const str1 = `
<?xml version="1.0" encoding="utf-8"?>
<Notification xlmns="http://mns.aliyuncs.com/doc/v1/">
  <TopicOwner>$TopicOwner</TopicOwner>
  <TopicName>$TopicName</TopicName>
  <Subscriber>$Subscriber</Subscriber>
  <SubscriptionName>$SubscriptionName</SubscriptionName>
  <MessageId>6CC4D900CA59A2CD-1-15180534A8F-200000002</MessageId>
  <Message>{1:"a", 2:"b"}</Message>
  <MessageMD5>F1E92841751D795AB325861034B5CB55</MessageMD5>
  <MessageTag>important</MessageTag>
  <PublishTime>1449556920975</PublishTime>
</Notification>
`
const xmlUtil1 = new XmlUtil({})
console.log(xmlUtil1.xml2obj(str1))