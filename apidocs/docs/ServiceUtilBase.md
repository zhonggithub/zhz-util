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


## parseExpand2Include
 parseExpand2Include (expand)

解析expand: { a: true, b: true ....}。该函数会在读操作：retrieve，list，listAll，findOne，findAll，findByIds之前调用。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|expand | Object | 是 | 无 | 子资源扩展数据。格式为：{ a: true, b: true, ....}|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | Object, null | 是 | 无 | 解析成功返回include对象, 否则返回null|


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
|expand | Function | 否 | 无 | 获取指定资源的数据。{a: true, b: true}。如果是同一个service的model可以在parseExpand2Include返回include，如果跨service的资源获取，在此处实现获取逻辑|


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

