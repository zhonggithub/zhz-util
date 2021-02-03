/**
 * File: util.test.js
 * Project: zhz-util
 * FilePath: /test/util.test.js
 * Created Date: 2020-06-27 00:57:14
 * Author: Zz
 * -----
 * Last Modified: Wed Feb 03 2021
 * Modified By: Zz
 * -----
 * Description:
 */
const { objKeySort } = require('../src/util')
const util = require('../src/util')

// true
console.log(util.isValueOf('a', 'a'))
console.log(util.isValueOf(1, 1))
console.log(util.isValueOf('a', ['a']))
console.log(util.isValueOf('a', { b: 'a' }))

// false
console.log(util.isValueOf('a', 'b'))
console.log(util.isValueOf(1, 2))
console.log(util.isValueOf('a', ['bb']))
console.log(util.isValueOf('a', { b: 'b' }))


console.log(util.notEmptyStr(''))
console.log(util.notEmptyStr('!a'))

const {dstCriteria, sourceCriteria} = util.convertQueryCriteria({ type: util.notInValue(-1)})
console.log(dstCriteria, sourceCriteria)

console.log(util.convertRangeQueryCriteriaMysql('a', '!{-1}!'))
console.log(util.convertRangeQueryCriteriaMysql('a', ''))

const params = {
  sort: '-createdAt',
}
const tmpParams = util.convertPagination(params)
console.log(tmpParams)

const sortKey = Object.keys(tmpParams.sort).toString()
const sortValue = parseInt(Object.values(tmpParams.sort).toString(), 10)
console.log(`${sortKey} ${sortValue === -1 ? 'desc' : 'asc'}`)

tmp = util.convertRangeQueryCriteriaMongodb(
  'createdAt',
  '[2020-10-21,2020-11-11]',
)
console.log(tmp)

console.log(objKeySort({
  b: '1',
  a: '2'
}))


console.log(util.convertObjKey({
  isType: 0,
  isHelp: 'ssss'
}, 'line'))

console.log(util.convertObjKey({
  is_type: 0,
  is_help: 'ssss'
}, 'hump'))

console.log(util.convertObjKey({
  is_type: 0,
  is_help: 'ssss'
}, 'hump', (key, value, data) => {
  if (key === 'is_type') {
    data.hello = value
    return true
  }
  return false
}))

const tmp1 = {
  "object": "queryEntryUser",
  "status": "succeeded",
  "prod_mode": "true",
  "request_id": "",
  "test_api_key": "api_test_34",
  "live_api_key": "api_live_7b",
  "app_id_list": [
    {
      "app_id": "app_0b05",
      "app_name": "test_1",
      "cre_ts": 1611044354000,
      "cre_user": "0804",
      "id": 74304,
      "mer_cust_id": "0864",
      "remark": "",
      "stat": "N",
      "upd_ts": 1611044354000,
      "upd_user": "0864"
    }
  ],
  "sign_view_url": "https://www.baidu.com",
  "login_pwd": "",
  "upd_user1": null,
}
console.log(util.convertObjKey(tmp1, 'hump'))