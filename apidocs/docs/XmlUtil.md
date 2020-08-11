# XmlUtil
提供xml与jons对象转换的方法

## constructor
` constructor (keyMappings)`

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|keyMappings | Object | 是 | 无 | json对象，定义了json字段对应的xml字段。如：{ name: 'abc001' }|


## getField
` getField (xmlCode)`

获得xmlCode对应json的field

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|xmlCode | String | 是 | 无 | xml的code|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|field | String | 否 | 无 | keyMappings的k|


## getXmlCode
` getXmlCode (field)`

获得json的field对应的xmlCode

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|field | String | 是 | 无 | keyMappings的k|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|field | String | 否 | 无 | xml的code|


## xml2obj
` xml2obj (xml, customMapping, options)`

xml对象转换成json对象

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|xml | String | 是 | 无 | xml格式的字符串|
|customMapping | Object | 否 | 无 | 自定义映射|
|options | Object | 否 | 无 | xml-js的xml2js第二参数|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | xml转换得到的json对象|


## obj2xml
` obj2xml (data, customMapping)`

json对象转换成xml对象

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | json对象|
|customMapping | Object | 否 | 无 | 自定义映射|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|xml | String | 否 | 无 | json对象转换的xml字符串|

