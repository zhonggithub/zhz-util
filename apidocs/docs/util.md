# util
工具类函数

## isFunction
` isFunction (funcName)`

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
` md5 (text)`

对一个字符串进行md5。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|text | String | 否 | 无 | 字符串|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|text | String | 否 | 无 | 形参为非字符串，返回空的字符串。否则返回md5值|


## toLine
` toLine (val)`

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
` gteLte (val1, val2)`

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
` gtLte (val1, val2)`

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
` gteLt (val1, val2)`

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
` gtLt (val1, val2)`

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
` inValue (val)`

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
` notInValue (val)`

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
` toHump (val)`

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
` fistLetterUpper (val)`

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
` fistLetterLower (val)`

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
` response (code, message, data, status)`

包装api返回数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | SUCCESS | |
|data | Number, String, Object, Array | 是 | 无 | |
|status | Number | 是 | 无 | http 状态码|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | 无 | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 无 | http 状态码|


## responseSuccess
` responseSuccess (data, status, message)`

包装api 成功时返回数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Number, String, Object, Array | 是 | 无 | |
|status | Number | 否 | 200 | http 状态码|
|message | String | 否 | success | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | 无 | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 200 | http 状态码|


## responseCreateSuccess
` responseCreateSuccess (data, message)`

create成功时返回数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Number, String, Object, Array | 是 | 无 | |
|message | String | 否 | success | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | 无 | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 201 | http 状态码|


## responseDestroySuccess
` responseDestroySuccess (data, message)`

destroy成功时返回数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Number, String, Object, Array | 是 | 无 | |
|message | String | 否 | success | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | Number, String | 否 | 无 | 成功时为0，否则为错误编码|
|message | String | 否 | 无 | |
|data | Number, String, Object | 是 | 无 | |
|status | Number | 是 | 204 | http 状态码|


## responseError400
` responseError400 (name, code, message, desc)`

包装api返回400错误码数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 否 | MISSING_PARAMS | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | String | 是 | 无 | 错误编码|
|message | String | 是 | 无 | |
|desc | String | 否 | 无 | |
|status | Number | 是 | 400 | http 状态码|


## responseError404
` responseError404 (name, code, message, desc)`

包装api返回404错误码数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 否 | ERROR_RESOURCE_NOT_EXIST | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | String | 是 | 无 | 错误编码|
|message | String | 是 | 无 | |
|desc | String | 否 | 无 | |
|status | Number | 是 | 404 | http 状态码|


## responseError409
` responseError409 (name, code, message, desc)`

包装api返回409错误码数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 否 | ERROR_RESOURCE_EXIST | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | String | 是 | 无 | 错误编码|
|message | String | 是 | 无 | |
|desc | String | 否 | 无 | |
|status | Number | 是 | 409 | http 状态码|


## responseError422
` responseError422 (name, code, message, desc)`

包装api返回422错误码数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 否 | INVALID_PARAMS | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | String | 是 | 无 | 错误编码|
|message | String | 是 | 无 | |
|desc | String | 否 | 无 | |
|status | Number | 是 | 422 | http 状态码|


## responseError500
` responseError500 (name, code, message, desc)`

包装api返回500错误码数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 是 | ERROR_UNKOWN | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | String | 是 | 无 | 错误编码|
|message | String | 是 | 无 | |
|desc | String | 否 | 无 | |
|status | Number | 是 | 500 | http 状态码|


## randomInt
` randomInt (min, max)`

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
` randomStr (places)`

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
` cacleRise (value, preValue)`

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
` filterData (data, excludeAttribute)`

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
` parseExpand (expand)`

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
` convertQueryCriteria (querycriteria, dbType, handle)`

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
` isRangeQuery (value)`

判断一个字符串是否是范围字符串

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|value | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## isValidData
` isValidData (data, requiredParams, fieldVerfiyFunc, missingPrefix, invalidePrefix)`

验证数据的合法性和有效性

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | 待验证的数据|
|requiredParams | String[] | 否 | 无 | 合法性校验。校验必备参数|
|fieldVerfiyFunc | Object | 否 | 无 | 参数有效性校验。{ field1: val => func(val), field2: val => func2(val), ... }|
|missingPrefix | String | 否 | 无 | 合法性校验失败后添加的code前缀。|
|invalidePrefix | String | 否 | 无 | 有效性校验失败后添加的code前缀。|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|error | ZError | 否 | 无 | 校验失败返回ZError对象，否则返回null|


## isInt
` isInt (val, strong)`

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
` notEmptyStr (val)`

判断一个值是否为非空符串。如果是非空字符串，返回true，否则返回false

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|val | Any | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## isValueOf
` isValueOf (actualValue, expectedValues)`

判断一个值是否在期望值之内。如果actualValue和expectedValues都是Number、Boolean、String类型，采用`===`比较。如果expectedValues是Array或Object类型。则判断actualValue值是否是存在数组或Object.values(expectedValues)中

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|actualValue | Number，Boolean，String | 是 | 无 | |
|expectedValues | Number，Boolean，String，Array，Object | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|bo | Boolean | 否 | 无 | |


## avaTest
` avaTest (t, actual, expected, expand)`

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
` utcToDate (unixTimestamp)`

unix时间戳转Date

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|unixTimestamp | Number | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|date | Date | 否 | current date | |


## dateStrToDate
` dateStrToDate (dateStr)`

日期字符串转utc Date

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|dateStr | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|date | Date | 否 | current date | |


## zerror400
` zerror400 (name, code, message, desc)`

参数错误对象，对应http code 为400

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 是 | 无 | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|zerror | Object | 否 | 无 | ZError对象|


## zerror409
` zerror409 (name, code, message, desc)`

参数错误对象，对应http code 为409

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 是 | 无 | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|zerror | Object | 否 | 无 | ZError对象|


## zerror404
` zerror404 (name, code, message, desc)`

参数错误对象，对应http code 为404

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 是 | 无 | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|zerror | Object | 否 | 无 | ZError对象|


## zerror422
` zerror422 (name, code, message, desc)`

参数错误对象，对应http code 为422

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 是 | 无 | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|zerror | Object | 否 | 无 | ZError对象|


## zerror500
` zerror500 (name, code, message, desc)`

参数错误对象，对应http code 为500

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|name | String | 是 | 无 | |
|code | String | 是 | 无 | |
|message | String | 否 | 无 | |
|desc | String | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|zerror | Object | 否 | 无 | ZError对象|


## parseDateRange
` parseDateRange (timeRangeStr)`

解析时间范围字符串

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|timeRangeStr | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | |
|data.start | Date | 否 | 无 | 起始时间。Date 对象或null|
|data.end | Date | 否 | 无 | 起始时间。Date 对象或null|

