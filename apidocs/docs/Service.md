# Service
继承ServiceBase。实现接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll, findByIds

## constructor
` constructor ({ seneca, model, serviceUtil, cache, cacheTTL, role, opt })`

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|seneca | seneca | 是 | 无 | seneca 对象|
|model | ModelBase | 是 | 无 | |
|serviceUtil | UtilBase | 否 | 无 | |
|cache | RedisCache | 否 | 无 | 缓存|
|cacheTTL | Number, CacheTTLEnum | 否 | 无 | 缓存周期。Number: 表示xx秒。CacheTTLEnum: s(60秒)，m(60秒内)，h(60分钟内)，d(24小时内)，M(30天内)，y(12个月内)|
|role | String | 是 | 无 | 角色名称|
|opt | Object | 否 | true | 默认api开启配置。false：不加载任何默认api；true：加载所有默认api；json对象表示加载对应的操作|


## handleCatchErr
` handleCatchErr (err)`

统一处理错误的函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|err | Error | 否 | 无 | 错误对象|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|code | String | 否 | ERR_DB | |
|message | String | 否 | 无 | 错误描述|
|data | Error | 否 | 无 | 错误对象|
|status | Number | 否 | 500 | |


## getCacheKey
` getCacheKey (id, expand, full)`

根据id, include生成缓存key

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 否 | 无 | 资源id|
|expand | Object | 否 | 无 | 指定的子资源|
|full | Boolean | 否 | 无 | true: 表示获取包括redis keyPrefix及框架生成的key组合的完整key。false: 表示获取框架生成的key|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|key | String | 否 | 无 | 缓存key|


## delCache
`async delCache (id)`

删除缓存

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 否 | 无 | 资源id|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|result | Number, Array | 否 | 无 | 删除结果。如果通过key查找多个通配符key。则返回数组。否则返回Number|


## create
`async create ({ ...params })`

创建一个资源

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|...params | Object | 是 | 无 | 资源对象|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | |


## retrieve
`async retrieve ({ id, expand })`

根据id获取资源详情

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | 资源对象id|
|expand | String | 是 | 无 | 指定获取的子资源|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | |


## update
`async update ({ id, fields })`

根据id更新数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | 资源对象id|
|fields | Any | 是 | 无 | 待更新的字段|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | |


## updateStatus
`async updateStatus ({ id, status })`

根据id更新状态

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | 资源对象id|
|status | Number | 是 | 无 | 状态值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | |


## list
`async list ({ page, pageSize, limit, offset, sort, search, expand })`

列表

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|page | Number | 否 | 1 | 当前页数|
|pageSize | Number | 否 | 10 | 每页条数|
|limit | Number | 否 | 10 | 同pageSize|
|offset | Number | 否 | 无 | 起始条数|
|sort | Array，Object, String | 否 | 无 | 排序。支持四种格式：array of { field: "", order: "DESC" }；array of [[field, "DESC"]]；object of {a: -1("DESC"), b: 1("ASC")}；sort=-a,b|
|search | String | 否 | 无 | 搜索关键字|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|pageSize | Number | 是 | 无 | 每页条数|
|page | Number | 是 | 无 | 当前页数|
|total | Number | 是 | 无 | 符合条件的总数量|
|limit | Number | 是 | 无 | 同pageSize|
|offset | Number | 是 | 无 | 起始条数|
|items | Number | 否 | 无 | 返回数据项|


## count
`async count (query)`

根据条件统计数量

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 否 | 无 | 条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Number | 是 | 无 | 数量|


## listAll
`async listAll ({ ...query, expand })`

根据条件返回所有数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|...query | ...Object | 否 | 无 | 各种查询条件条件|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object[] | 否 | 无 | |


## findOne
`async findOne ({ ...query, expand })`

根据条件返回一条数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|...query | ...Object | 否 | 无 | 各种查询条件条件|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | |


## destroy
`async destroy ({ id })`

根据id删除一条数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 否 | 无 | 资源id|


## findAll
`async findAll ({ ...query, expand })`

根据条件返回所有数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|...query | ...Object | 否 | 无 | 各种查询条件条件|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object[] | 否 | 无 | |


## findByIds
`async findByIds ({ ids, expand })`

根据id返回所有数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ids | String[] | 是 | 无 | id数组|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object[] | 否 | 无 | |

