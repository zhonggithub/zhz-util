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

