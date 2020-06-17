# zhz-util

```javascript
const { util, Service, mysqlSeneca, mongodbSeneca } = require('zhz-util')

```

提供常用的工具函数:

|  方法   | 描述 | 参数  | 返回值|
|  ----  | -------- | ----  | ----|
| isFunction | | (name) | true or false |
| md5 | | (text) | String |
| aesEncode  | | (text, key) | String |
| aesDecode  | | (text, key) | String |
| randomInt | 随机整数  | (min, max) | Number |
| randomStr | 随机字符串  | (places = 16) | String |
| cacleRise | 计算同比百分比  | (vale, preValue) | Number |
| filterData | 过滤属性  | (data, excludeAttribute = []) | Object |
| isValidData  | 同 [ZError](https://www.npmjs.com/package/z-error) verify | (data, testArray, itemFunc, missingPrefix, invalidePrefix) | [ZError](https://www.npmjs.com/package/z-error) |
| toLine | 驼峰转下划线 |(name) |String |
| fistLetterUpper | 首字母大写 | (name) | String |
| fistLetterLower | 首字母小写 | (name) | String |
| utcToDate | utc时间戳(秒)转date | (unixTimestamp) | Date |
| dateStrToDate | 日期字符串(如：2017-08-09 14:20)转date，默认返回当前日期 | (dateStr) | Date |

# ServiceBase
ServiceBase为Service抽象接口类。定义了一些接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll

## options
构造函数开启api配置项

### 属性

|属性|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|create | Boolean | 否 | 无 | true：开启。false：不开启|
|update | Boolean | 否 | 无 | true：开启。false：不开启|
|updateStatus | Boolean | 否 | 无 | true：开启。false：不开启|
|retrieve | Boolean | 否 | 无 | true：开启。false：不开启|
|list | Boolean | 否 | 无 | true：开启。false：不开启|
|count | Boolean | 否 | 无 | true：开启。false：不开启|
|findAll | Boolean | 否 | 无 | true：开启。false：不开启|
|findOne | Boolean | 否 | 无 | true：开启。false：不开启|
|logicDel | Boolean | 否 | 无 | true：开启。false：不开启|
|destroy | Boolean | 否 | 无 | true：开启。false：不开启|
|treeList | Boolean | 否 | 无 | true：开启。false：不开启|


## constructor
 constructor (role, seneca, options)

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|role | String | 是 | 无 | 角色名称|
|seneca | seneca | 是 | 无 | seneca 对象|
|options | Object | 否 | true | 默认api开启配置。false：不加载任何默认api；true：加载所有默认api；json对象表示加载对应的操作|


## loadCmd
 loadCmd ()

加载默认方法

## addAsync
 addAsync (cmd, func)

加载自定义方法

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|cmd | String, Object | 否 | 无 | String：函数名。Object of { funName: function }|
|func | Function | 否 | 无 | 如果cmd未String，func为函数|


# ServiceUtilBase
提供Service操作的工具抽象接口类

## constructor
 constructor ({ seneca, model })

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|seneca | seneca | 是 | 无 | seneca 对象|
|model | ModelBase | 是 | 无 | |


## isValidDataWhenCreate
 isValidDataWhenCreate (data)

创建的时候判断数据合法性，验证不通过返回ZError对象，否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建时传入的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isValidDataWhenRetrieve
 isValidDataWhenRetrieve (id, expand)

获取数据时候判断数据是否包含必填字段，默认校验id，但是不对id合法性校验。验证不通过返回ZEerror对象,否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 否 | 无 | 资源id|
|expand | String, Object | 否 | 无 | 获取指定的子资源。expand=a,b 或 { a: true, b: true }|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isValidDataWhenUpdateStatus
 isValidDataWhenUpdateStatus (id, expand)

更新状态时判断id, status必填字段，不对id，status合法性校验.验证不通过返回ZError对象,否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 否 | 无 | 资源id|
|expand | String, Object | 否 | 无 | 获取指定的子资源。expand=a,b 或 { a: true, b: true }|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isExistWhenCreate
async isExistWhenCreate (data)

创建的时候校验数据唯一性

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建时传入的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isValidQueryCondition
 isValidQueryCondition (criteria)

判断list条件合法性. 验证不通过返回ZEerror对象,否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|criteria | Object | 否 | 无 | list时传入的查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## convertQueryCriteria
 convertQueryCriteria (criteria)

list前转换传入的查询条件。逻辑表达查询条件转换成sql条件

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|criteria | Object | 否 | 无 | list时传入的查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | Object | 否 | 无 | 转换后的查询条件|


## convertCountCriteria
 convertCountCriteria (criteria)

count前转换传入的查询条件。逻辑表达查询条件转换成sql条件。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|criteria | Object | 否 | 无 | count时传入的查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | Object | 否 | 无 | 转换后的查询条件|


## logic2DBWhenUpdate
async logic2DBWhenUpdate (data)

逻辑层数据转db层数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 传入的逻辑表现层的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 返回db层数据|


## db2logic
async db2logic (data, expand)

db层数据转逻辑层数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 传入的db层的数据|
|expand | Function | 否 | 无 | 获取指定资源的数据。{a: true, b: true}|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 返回逻辑表现层数据|


## list2logic
async list2logic (items, expand)

list获得数据转换层逻辑表现层数据。默认循环调用db2logic

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|items | Object | 是 | 无 | 传入的db层的数据|
|expand | Function | 否 | 无 | 获取指定资源的数据。{a: true, b: true}|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object[] | 否 | 无 | 逻辑表现层的数据数组|


## beforeCreate
async beforeCreate (data)

创建之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建时传入的数据|


## afterCreate
async afterCreate (data)

创建之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建后的数据|


## beforeUpdate
async beforeUpdate (data)

更新之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新时传入的数据|


## afterUpdate
async afterUpdate (data)

更新之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新后的数据|


## beforeUpdateStatus
async beforeUpdateStatus (data)

更新状态之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新前的数据|


## afterUpdateStatus
async afterUpdateStatus (data)

更新状态之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新后的数据|


## beforeDestroy
async beforeDestroy (data)

删除之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 删除时传入的数据|


## afterDestroyDestroy
async afterDestroyDestroy (data)

删除之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 删除后传入的数据|

