/**
 * File: RedisCache.js
 * Project: zhz-util
 * FilePath: /src/seneca/RedisCache.js
 * Created Date: 2018-06-11 10:05:02
 * Author: Zz
 * -----
 * Last Modified: 2020-06-26 23:48:02
 * Modified By: Zz
 * -----
 * Description:
 */

const Redis = require('ioredis');

class RedisCache {
  constructor(options) {
    this.options = options;
    this.redis = new Redis(options.options);
  }

  getKeyPrefix() {
    return this.options.options.keyPrefix || '';
  }

  async get(key) {
    let result = await this.redis.get(key);
    if (result && result != null && result !== '') {
      result = JSON.parse(result);
    } else {
      result = false;
    }
    return result;
  }

  async set(key, data, ttl) {
    if (!ttl && Number.isNaN(ttl)) {
      ttl = this.options.ttl;
    } else {
      ttl = parseInt(ttl, 10);
    }
    const dataStr = JSON.stringify(data);
    return this.redis.set(key, dataStr, 'EX', ttl);
  }

  /**
   * 删除缓存
   * @param {String} key 
   * @param {Boolean} match true: 表示删除包括所有通配符key的数据，false: 仅仅删除key的缓存数据
   */
  async del(key, match = false) {
    if (match) {
      const prefix = this.getKeyPrefix();
      const matchKeys = await this.redis.keys(`${prefix}${key}*`)
      if (matchKeys && matchKeys.length > 0) {
        if (!prefix) {
          return Promise.all(matchKeys.map(async (itemKey) => this.redis.del(itemKey)));
        }
        const result = await  Promise.all(matchKeys.map(async (itemKey) => {
          const tmpKey = itemKey.substr(prefix.length);
          return this.redis.del(tmpKey)
        }));
        return result
      }
    }
    return this.redis.del(key);
  }
}

module.exports = RedisCache;