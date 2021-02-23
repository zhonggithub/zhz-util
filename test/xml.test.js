/**
 * File: xml.test.js
 * Project: zhz-util
 * FilePath: /test/xml.test.js
 * Created Date: 2020-07-28 14:17:21
 * Author: Zz
 * -----
 * Last Modified: Tue Feb 23 2021
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

const str2 = "<xml><ToUserName><![CDATA[gh_10f6c3c3ac5a]]></ToUserName><FromUserName><![CDATA[oyORnuP8q7ou2gfYjqLzSIWZf0rs]]></FromUserName><CreateTime>1409735668</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[abcdteT]]></Content><MsgId>6054768590064713728</MsgId><Encrypt><![CDATA[hyzAe4OzmOMbd6TvGdIOO6uBmdJoD0Fk53REIHvxYtJlE2B655HuD0m8KUePWB3+LrPXo87wzQ1QLvbeUgmBM4x6F8PGHQHFVAFmOD2LdJF9FrXpbUAh0B5GIItb52sn896wVsMSHGuPE328HnRGBcrS7C41IzDWyWNlZkyyXwon8T332jisa+h6tEDYsVticbSnyU8dKOIbgU6ux5VTjg3yt+WGzjlpKn6NPhRjpA912xMezR4kw6KWwMrCVKSVCZciVGCgavjIQ6X8tCOp3yZbGpy0VxpAe+77TszTfRd5RJSVO/HTnifJpXgCSUdUue1v6h0EIBYYI1BD1DlD+C0CR8e6OewpusjZ4uBl9FyJvnhvQl+q5rv1ixrcpCumEPo5MJSgM9ehVsNPfUM669WuMyVWQLCzpu9GhglF2PE=]]></Encrypt></xml>"
console.log(xmlUtil1.xml2obj(str2))