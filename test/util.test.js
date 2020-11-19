/**
 * File: util.test.js
 * Project: zhz-util
 * FilePath: /test/util.test.js
 * Created Date: 2020-06-27 00:57:14
 * Author: Zz
 * -----
 * Last Modified: 2020-11-19 19:27:25
 * Modified By: Zz
 * -----
 * Description:
 */
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

const {dstCriteria, sourceCriteria} = util.convertQueryCriteria({ id: '!{-1}!' })
console.log(dstCriteria, sourceCriteria)

console.log(util.convertRangeQueryCriteriaMysql('a', '!{-1}!'))
