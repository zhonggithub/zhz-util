# util
工具类函数

## isFunction
 isFunction (funcName)

判断一个值或对象是否是函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|funcName | any | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## md5
 md5 (type, description)

对一个字符串进行md5。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|type | String | 否 | 无 | |
|description | 字符串 | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|type | String | 否 | 无 | |
|description | 形参为非字符串，返回空的字符串。否则返回md5值 | 否 | 无 | |


## toLine
 toLine (val)

驼峰转下划线

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## gteLte
 gteLte (val1, val2)

转换成框架的大于等于，小于等于

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val1 | String, Number | 否 | 无 | 大于等于该值|
|val2 | String, Number | 否 | 无 | 小于等于该值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## gtLte
 gtLte (val1, val2)

转换成框架的大于，小于等于

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val1 | String, Number | 否 | 无 | 大于该值|
|val2 | String, Number | 否 | 无 | 小于等于该值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## gteLt
 gteLt (val1, val2)

转换成框架的大于等于，小于

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val1 | String, Number | 否 | 无 | 大于等于该值|
|val2 | String, Number | 否 | 无 | 小于|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## gtLt
 gtLt (val1, val2)

转换成框架的大于，小于

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val1 | String, Number | 否 | 无 | 大于该值|
|val2 | String, Number | 否 | 无 | 小于该值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## inValue
 inValue (val)

转换成框架的in查询语句

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String, Array | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## notInValue
 notInValue (val)

转换成框架的not in查询语句

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String, Array | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## toHump
 toHump (val)

下划线转小驼峰

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## fistLetterUpper
 fistLetterUpper (val)

首字母大写

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## fistLetterLower
 fistLetterLower (val)

首字母小写

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | String | 否 | 无 | |


## response
 response (code, message, data, status)

包装api返回数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | SUCCESS | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 无 | http 状态码|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | 无 | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 无 | http 状态码|


## responseSuccess
 responseSuccess (data, message)

包装api 成功时返回数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Number, String, Object | 是 | 无 | |
|message | String | 否 | SUCCESS | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | 无 | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 无 | http 状态码|


## randomInt
 randomInt (min, max)

随机整数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|min | Number | 是 | 无 | |
|max | Number | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Number | 否 | 无 | |


## randomStr
 randomStr (places)

随机一个数字字符串

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|places | Number | 是 | 16 | 位数|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Number | 否 | 无 | |


## cacleRise
 cacleRise (value, preValue)

计算百分比增长率

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|value | Number | 是 | 无 | 当前值|
|preValue | Number | 是 | 无 | 对比值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Number | 否 | 无 | |


## filterData
 filterData (data, excludeAttribute)

过滤属性值

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | |
|excludeAttribute | Array | 是 | 无 | 过滤的属性数组|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | |


## parseExpand
 parseExpand (expand)

解析expand字符串，转换对象

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|expand | String | 是 | 无 | a,b,c格式的字符串|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Object | 否 | 无 | {a: true, b: true, c: true}|


## convertQueryCriteria
 convertQueryCriteria (querycriteria, dbType, handle)

把逻辑层的查询条件转成db层的查询条件。默认会处理范围查找的条件。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|querycriteria | Object | 是 | 无 | 查询条件|
|dbType | String | 否 | mysql | db类型。mongodb || mysql|
|handle | Function | 否 | 无 | 自定义处理函数。接收参数：(key, value, distData)。处理成功时把数据填在distData并返回ture, 否则返回false|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | |
|data.dstCriteria | Object | 否 | 无 | 已处理的完成的查询条件|
|data.sourceCriteria | Object | 否 | 无 | 未处理处理的完成的查询条件|


## isRangeQuery
 isRangeQuery (value)

判断一个字符串是否是范围字符串

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|value | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## isInt
 isInt (val, strong)

判断一个值是否为整数或整数字符串

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Any | 是 | 无 | |
|strong | Boolean | 否 | 无 | 是否开启强认证。true表示认证val必须是数字，否则数字字符串也可以|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## notEmptyStr
 notEmptyStr (val)

判断一个值是否为非空符串

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Any | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## avaTest
 avaTest (t, actual, expected, expand)

测试 { ...expected, ...expand } 属性值和actual是否一致。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|t | Test | 是 | 无 | |
|actual | Any | 是 | 无 | 实际值|
|expected | Any | 是 | 无 | 期望值|
|expand | Any | 否 | 无 | 期望值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## utcToDate
 utcToDate (unixTimestamp)

unix时间戳转Date

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|unixTimestamp | Number | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|date | Date | 否 | current date | |

