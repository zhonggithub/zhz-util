# ServiceImp
继承ServiceBase。实现接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll、findByIds

## constructor
` constructor ({ seneca, model, role, cache, cacheTTL, listCacheOn, opt, logger })`

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|seneca | seneca | 是 | 无 | seneca 对象|
|model | ModelBase | 是 | 无 | |
|role | String | 是 | 无 | 角色名称|
|cache | RedisCache | 否 | 无 | 缓存|
|cacheTTL | Number, CacheTTLEnum | 否 | 无 | 缓存周期。Number: 表示xx秒。CacheTTLEnum: s(60秒内)，m(60分钟内)，h(24小时内)，d(30天内)，M(12个月内)，y(一年)|
|listCacheOn | Boolean | 否 | false | list api是否开启缓存。true表示将会把list的每一个资源进行缓存|
|opt | Object | 否 | true | 默认api开启配置。false：不加载任何默认api；true：加载所有默认api；json对象表示加载对应的操作|
|logger | Object | 否 | 无 | 日志实例|


## isValidDataWhenCreate
` isValidDataWhenCreate (data)`

创建的时候判断数据合法性，验证不通过返回ZError对象，否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建时传入的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isValidDataWhenUpdate
` isValidDataWhenUpdate (data)`

更新的时候判断数据合法性，验证不通过返回ZError对象，否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新时传入的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isValidDataWhenRetrieve
` isValidDataWhenRetrieve (id, expand)`

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
` isValidDataWhenUpdateStatus (id, expand)`

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
`async isExistWhenCreate (data)`

创建的时候校验数据唯一性。已存在数据的时返回ZError对象，否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建时传入的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回ZError对象，否则返回null|


## isExistWhenCreateImp
`async isExistWhenCreateImp (params)`

创建的时候校验数据唯一性。如果已存在资源则返回409的ZError对象，否则返回null

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|params | Object | 否 | 无 | 框架Model findOne 能识别的查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | ZError, null | 否 | 无 | 验证不通过返回409的ZError对象，否则返回null|


## isValidQueryCondition
` isValidQueryCondition (criteria)`

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
` convertQueryCriteria (criteria, handle)`

list前转换传入的字段查询条件。逻辑表达查询条件转换成sql条件

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|criteria | Object | 否 | 无 | list时传入的字段查询条件|
|handle | Function | 否 | 无 | 自定义处理函数。接收参数：(key, value, distData)。处理成功时把数据填在distData并返回ture, 否则返回false|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | Object | 否 | 无 | 转换后的查询条件|


## convertCountCriteria
` convertCountCriteria (criteria)`

count前转换传入的查询条件。逻辑表达查询条件转换成sql条件。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|criteria | Object | 否 | 无 | count时传入的查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | Object | 否 | 无 | 转换后的查询条件|


## logic2db
`async logic2db (data)`

逻辑层数据转成db层数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 传入的逻辑层的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 返回db层数据|


## logic2DBWhenUpdate
`async logic2DBWhenUpdate (data)`

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
`async db2logic (data, expand)`

db层数据转逻辑层数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 传入的db层的数据|
|expand | Object | 否 | 无 | 获取指定资源的数据。{a: true, b: true}。如果是同一个service的model可以在parseExpand2Include返回include；如果跨service的资源获取，在此处实现获取逻辑|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 返回逻辑表现层数据|


## list2logic
`async list2logic (items, expand)`

list获得数据转换层逻辑表现层数据。默认循环调用db2logic

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|items | Object | 是 | 无 | 传入的db层的数据|
|expand | Object | 否 | 无 | 获取指定资源的数据。{a: true, b: true}|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object[] | 否 | 无 | 逻辑表现层的数据数组|


## beforeCreate
`async beforeCreate (data)`

创建之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建时传入的数据|


## afterCreate
`async afterCreate (data)`

创建之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 创建后的数据|


## beforeUpdate
`async beforeUpdate (data)`

更新之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新时传入的数据|


## afterUpdate
`async afterUpdate (data)`

更新之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新后的数据|


## beforeUpdateStatus
`async beforeUpdateStatus (data)`

更新状态之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新前的数据|


## afterUpdateStatus
`async afterUpdateStatus (data)`

更新状态之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 更新后的数据|


## beforeDestroy
`async beforeDestroy (data)`

删除之前调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 删除时传入的数据|


## afterDestroyDestroy
`async afterDestroyDestroy (data)`

删除之后调用

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 删除后传入的数据|


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

根据id, expand生成缓存key

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | 资源id|
|expand | Object | 否 | 无 | 指定的子资源|
|full | Boolean | 否 | 无 | true: 表示获取包括redis keyPrefix及框架生成的key组合的完整key。false: 表示获取框架生成的key|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|key | String | 否 | 无 | 缓存key|


## getCacheTTL
` getCacheTTL ()`

获取缓存时间

### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ttl | Number | 否 | 无 | 缓存时间|


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


## parseQuery
` parseQuery (query)`

解析查询条件。把查询条件转成orm识别的查询条件。sequlize应该转换成：{ where: query }；mongoose应该转换成：{...query}

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 否 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 否 | 无 | sequlize orm应该返回{ where: query }。mongoose应该返回{ ...query }|


## parseListQuery
` parseListQuery (query, sort, offset, limit)`

解析list api传进来的查询条件。该函数会先调用parseQuery

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 否 | 无 | 字段查询条件|
|sort | Object, Array | 否 | 无 | 排序。如果是json对象，数据格式为：{ a: -1, b: 1, c: 'ASC'}，如果是数组，数据格式为：[{ field: a, order: 'ASC'}, { field: b, order: 'DESC'}] 或 [[a, 'ASC'],[b, 'DESC']]|
|offset | Number | 否 | 无 | |
|limit | Number | 否 | 无 | |


## parseExpand2Include
` parseExpand2Include (expand)`

解析expand: { a: true, b: true ....}。返回orm（例如：sequelize）能解析的include对象。该函数会在读操作：retrieve，list，listAll，findOne，findAll，findByIds之前调用。

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|expand | Object | 是 | 无 | 子资源扩展数据。格式为：{ a: true, b: true, ....}|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ret | Object, Array | 是 | 无 | 解析成功返回orm（例如：sequelize）能解析的include对象, 否则返回null|


## appendInclude
` appendInclude (query, expand)`

调用parseExpand2Include, 并把include添加到query对象里

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 是 | 无 | db查询条件|
|expand | Object | 是 | 无 | 子资源扩展数据。格式为：{ a: true, b: true, ....}|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 是 | 无 | { ...query, include }|


## create
`async create ({ ...params })`

创建一个资源。create执行流程：

 * 1，isValidDataWhenCreate 

 * 2，isExistWhenCreate 

 * 3，logic2DB 

 * 4，beforeCreate 

 * 5，model.create 

 * 6，afterCreate 

 * 7，db2logic

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

根据id获取资源详情。retrieve执行流程：

 * 1，isValidDataWhenRetrieve 

 * 2，parseExpand2Include 

 * 3，appendInclude 

 * 4，model.findById 

 * 5，db2logic 

 retrieve会根据expand的不同生成不同key对应的缓存： 

 * 如果没有指定expand, 缓存只包含通过资源id获取的数据 
 * 如果指定了expand, 缓存包含通过资源id获取的数据及指定子资源的数据 

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

根据id更新数据。update执行流程：

 * 1，isValidDataWhenUpdate 

 * 2，logic2DBWhenUpdate 

 * 3，beforeUpdate 

 * 4，model.findByIdAndUpdate 

 * 5，afterUpdate 

 * 6，delCache 

 * 7，db2logic

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

根据id更新状态。updateStatus执行流程：

 * 1，isValidDataWhenUpdateStatus 

 * 2，beforeUpdateStatus 

 * 3，beforeUpdateStatus 

 * 4，model.findByIdAndUpdate 

 * 5，afterUpdateStatus

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | 资源对象id|
|status | Number | 是 | 无 | 状态值|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | |


## destroy
`async destroy ({ id })`

根据id删除一条数据。destroy执行流程：

 * 1，isValidDataWhenRetrieve 

 * 2，beforeDestroy 

 * 3，model.findByIdAndDelete 

 * 4，afterDestroy 

 * 5，delCache

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 否 | 无 | 资源id|


## list
`async list ({ page, pageSize, limit, offset, sort, search, expand })`

列表及分页。list执行流程：

 * 1，isValidQueryCondition 

 * 2，convertQueryCriteria 

 * 3，parseListQuery 

 * 4，parseExpand2Include 

 * 5，appendInclude 

 * 6，model.list 

 * 7，list2logic

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

根据条件统计数量。count执行流程：

 * 1，isValidQueryCondition 

 * 2，convertCountCriteria 

 * 3，model.count

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

根据条件返回所有数据。listAll执行流程：

 * 1，isValidQueryCondition 

 * 2，convertQueryCriteria 

 * 3，parseExpand2Include 

 4，appendInclude 

 * 5，model.find 

 * 6, list2logic

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

根据条件返回一条数据。findOne执行流程：

 * 1，convertQueryCriteria 

 * 2，parseExpand2Include 

 * 3，appendInclude 

 * 4，model.findOne 

 * 5，db2logic

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|...query | ...Object | 否 | 无 | 各种查询条件条件|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | |


## findAll
`async findAll ({ ...query, expand })`

根据条件返回所有数据。findAll执行流程：

 * 1，convertQueryCriteria 

 * 2，parseExpand2Include 

 * 3，appendInclude 

 * 4，model.find 

 * 5，list2logic

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

根据id返回所有数据。findByIds执行流程：

 * 1，parseExpand2Include 

 * 2，appendInclude 

 * 3，model.find 

 * 4，list2logic

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|ids | String[] | 是 | 无 | id数组|
|expand | String | 否 | 无 | 获取指定子资源数据，多个子资源使用逗号隔开。例如：expand=a,b|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object[] | 否 | 无 | |

