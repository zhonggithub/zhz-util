# ServiceModel
框架model基类，用不同的orm实现db操作继承该类并实现相应的方法

## constructor
` constructor (model)`

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|model | Model | 是 | 无 | orm的Model对象|


## getModel
` getModel ()`

获得orm的Model对象

### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|model | Model | 是 | 无 | orm的Model对象|


## create
`async create (data)`

创建资源，返回值为

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 待写入db的数据|


## findByIdAndUpdate
`async findByIdAndUpdate (id, data)`

根据id更新数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | |
|data | Object | 是 | 无 | 待更新db的数据|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 是 | 无 | 更新后的资源数据|


## list
`async list ({ query })`

分页api

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 是 | 无 | 查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|count | Number | 否 | 无 | 符合条件的数量|
|rows | Object[] | 否 | 无 | 符合条件的当前页数数据|


## count
`async count (query)`

统计符合条件的数量

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 是 | 无 | 查询条件|


## find
`async find (query)`

统计符合条件的数量

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 是 | 无 | 查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|rows | Object[] | 否 | 无 | 符合条件的数据|


## findOne
`async findOne (query)`

统计符合条件的某条数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|query | Object | 是 | 无 | 查询条件|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 符合条件的数据|


## findByIdAndDelete
`async findByIdAndDelete (id)`

根据id删除数据

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|id | String | 是 | 无 | |


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Object | 否 | 无 | 删除结果|

