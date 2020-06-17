# Service
继承ServiceBase。实现接口：create、retrieve、update、updateStatus、list、count、listAll、findOne、logicDel、desctroy、treeList、findAll

## constructor
 constructor ({ seneca, model, serviceUtil, cache, cacheTTL, role, opt })

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

