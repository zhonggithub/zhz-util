# FCService
把阿里函数计算封装成seneca对象

## FCService

### 属性

|属性|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|services | Object | 否 | 无 | 本地service|
|romote | Object | 否 | 无 | 远程service|
|logger | Object | 否 | 无 | logger对象|


## constructor
` constructor (logger)`

构造函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|logger | Object | 否 | 无 | logger对象|


## addAsync
`async addAsync (params, fun)`

把一个函数加载到FCService的对象中

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|params | Object | 否 | |
|params.role | String | 是 | 无 | 角色名称|
|params.cmd | String | 是 | 无 | 方法名称|
|fun | Function | 是 | 无 | cmd对应的函数实现|


## actAsync
`async actAsync (params, msg)`

通过role, cmd调用一个函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|params | Object | 否 | |
|params.role | String | 是 | 无 | 角色名称|
|params.cmd | String | 是 | 无 | 方法名称|
|msg | Object | 否 | 无 | cmd函数参数|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Promise `<Object>` | 否 | 无 | |


## addRemoteService
` addRemoteService (serviceName, funcName, options)`

加载一个阿里函数计算的远程服务

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|serviceName | String | 否 | 无 | 阿里函数计算的服务名|
|funcName | String | 否 | 无 | 阿里云函数计算函数名称|
|options | Object | 否 | |
|options.accountId | String | 是 | 无 | |
|options.accessKeyId | String | 是 | 无 | |
|options.accessKeySecret | String | 是 | 无 | |
|options.region | String | 是 | 无 | |


## remoteActAsync
` remoteActAsync (serviceName, funcName, params)`

调用远程服务

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|serviceName | String | 否 | 无 | 阿里函数计算的服务名|
|funcName | String | 否 | 无 | 阿里云函数计算函数名称|
|params | Object | 否 | |
|params.role | String | 是 | 无 | 角色名称|
|params.cmd | String | 是 | 无 | 方法名称|
|params.msg | Object | 否 | 无 | cmd函数参数|

