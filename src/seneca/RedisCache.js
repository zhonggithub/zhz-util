/**
 * File: RedisCache.js
 * Project: zhz-util
 * FilePath: /src/seneca/RedisCache.js
 * Created Date: 2020-06-13 18:45:05
 * Author: Zz
 * -----
 * Last Modified: 2020-06-13 23:17:17
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
    return this.redis.set(key, dataStr, 'PX', ttl);
  }

  async del(key) {
    return this.redis.del(key);
  }
}

module.exports = RedisCache;