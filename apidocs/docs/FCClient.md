# FCClient
把阿里函数计算封装成seneca客户端

## FCClient

### 属性

|属性|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|serviceName | Object | 否 | 无 | 阿里函数计算的服务名|
|funName | Object | 否 | 无 | 阿里云函数计算函数名称|
|fcClient | Object | 否 | 无 | [@alicloud/fc2](https://www.npmjs.com/package/@alicloud/fc2)对象|


## constructor
` constructor (serviceName, funcName, options)`

构造函数

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


## actAsync
`async actAsync (params1, msg)`

通过role, cmd调用一个函数

### 参数

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|params1 | Object | 否 | |
|params1.role | String | 是 | 无 | 角色名称|
|params1.cmd | String | 是 | 无 | 方法名称|
|msg | Object | 否 | 无 | cmd函数参数|


### 返回值

|参数|类型|必填|默认值|描述|
|--- | --- | --- | --- | ---|
|data | Promise `<Object>` | 否 | 无 | |

