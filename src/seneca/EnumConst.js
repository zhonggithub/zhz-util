/**
 * File: EnumConst.js
 * Project: zhz-util
 * FilePath: /src/seneca/EnumConst.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-06-16 10:36:16
 * Modified By: Zz
 * -----
 * Description:
 */

// 缓存随机策略
const CacheTTLEnum = {
  s: 's', // 秒
  m: 'm', // 分
  h: 'h', // 小时
  d: 'd', // 天
  M: 'M', // 月
  y: 'y', // 年
};

const CacheTTLEnumKeys = Object.keys(CacheTTLEnum);

module.exports = {
  CacheTTLEnum,
  CacheTTLEnumKeys,
};
