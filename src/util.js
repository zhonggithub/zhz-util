/**
 * File: util.js
 * Project: zhz-util
 * FilePath: /src/util.js
 * Created Date: 2020-06-13 19:47:49
 * Author: Zz
 * -----
 * Last Modified: 2020-11-19 19:05:53
 * Modified By: Zz
 * -----
 * Description:
 */
const crypto = require('crypto');
const { Op } = require('sequelize');
const lodash = require('lodash');
const moment = require('moment');
const zerror = require('z-error');
const string = require('string');

const { ZError, verify } = zerror;

module.exports = {
  isFunction(functionName) {
    return functionName && typeof functionName === 'function';
  },
  md5(text) {
    if (!text) {
      return '';
    }
    if (typeof text !== 'string') {
      return '';
    }
    return crypto.createHash('md5').update(text).digest('hex');
  },
  aesEncode(text, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  },
  aesDecode(text, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  },

  createResourceErrorCode(resourceName) {
    if (!resourceName) {
      throw new Error('resourceName is required')
    }
    const resource = (this.toLine(resourceName)).toUpperCase()
    return {
      404: `ERROR_${resource}_NOT_EXIST`,
      409: `ERROR_${resource}_EXIST`,
      500: `ERROR_UNKNOW`
    }
  },

  gteLte(val1, val2) {
    if (!val1 && !val2) {
      return '';
    }
    return `[${val1 || ''}, ${val2 || ''}]`
  },
  gtLte(val1, val2) {
    if (!val1 && !val2) {
      return '';
    }
    return `(${val1 || ''}, ${val2 || ''}]`
  },
  gteLt(val1, val2) {
    if (!val1 && !val2) {
      return '';
    }
    return `[${val1 || ''}, ${val2 || ''})`
  },
  gtLt(val1, val2) {
    if (!val1 && !val2) {
      return '';
    }
    return `(${val1 || ''}, ${val2 || ''})`
  },
  /**
   * @param {String or Array} val 
   */
  inValue(val) {
    if (!val) return '';
    if (typeof val === 'string') {
      return val.split(',');
      // return `{${vallue}}`;
    }
    if (typeof val === 'array') {
      return val;

      // return `{${vallue.toString()}}`;
    }
    return '';
  },
  notInValue(val) {
    if (!val) return '';
    if (typeof val === 'string' || typeof val === 'number') {
      return `!{${val}}!`;
    }
    if (typeof val === 'array') {
      return `!{${val.toString()}}!`;
    }
    return '';
  },

  // 下划线转驼峰
  toHump(name) {
    return name.replace(/\_(\w)/g, (all, letter) => letter.toUpperCase()) // eslint-disable-line
  },
  // 驼峰转下划线
  toLine(name) {
    if (!name) {
      return '';
    }
    const tmp = name.replace(/([A-Z])/g, '_$1').toLowerCase();
    if (tmp[0] === '_') {
      return tmp.slice(1);
    }
    return tmp;
  },

  // 首字母大写
  fistLetterUpper(name) {
    if (!name) return '';
    if (typeof name !== 'string') {
      return '';
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  },

  // 首字母小写
  fistLetterLower(name) {
    if (!name) return '';
    if (typeof name !== 'string') {
      return '';
    }
    return name.charAt(0).toLowerCase() + name.slice(1);
  },
  
  response(code, message, data, status) {
    return {
      code,
      message,
      data,
      status,
    };
  },

  responseSuccess(data, status = 200, message = 'success') {
    return this.response(0, message, data, status);
  },

  responseCreateSuccess(data, message = 'success') {
    return this.response(0, message, data, 201);
  },

  responseDestroySuccess(data, message = 'success') {
    return this.response(0, message, data, 204);
  },
  
  responseError400(name, code, message, desc) {
    return new ZError(name, code || 'MISSING_PARAMS', message, desc, 400).toJson();
  },
  responseError409(name, code, message, desc) {
    return new ZError(name, code || 'ERROR_RESOURCE_EXIST', message, desc, 409).toJson();
  },
  responseError404(name, code, message, desc) {
    return new ZError(name, code || 'ERROR_RESOURCE_NOT_EXIST', message, desc, 404).toJson();
  },
  responseError422(name, code, message, desc) {
    return new ZError(name, code || 'INVALID_PARAMS', message, desc, 422).toJson();
  },
  responseError500(name, code, message, desc) {
    return new ZError(name, code || 'ERROR_UNKOWN', message, desc, 500).toJson();
  },

  randomInt: (min, max) => {
    if (max === undefined) {
      max = min;
      min = 0;
    }

    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new TypeError('Expected all arguments to be numbers');
    }
    return Math.floor((Math.random() * ((max - min) + 1)) + min);
  },
  randomStr(places = 16) {
    return Math.random().toString().slice(parseInt(places, 10) * -1);
  },

  cacleRise(value = 0, preValue = 0) {
    if (!value && !preValue) {
      return 0;
    }
    if (typeof value !== 'number' || typeof preValue !== 'number') {
      return 0;
    }
    if (value === 0 && preValue > 0) {
      return -100;
    }
    if (value === 0 && preValue < 0) {
      return 100;
    }
    if (value > 0 && preValue === 0) {
      return 100;
    }
    if (value < 0 && preValue === 0) {
      return -100;
    }
    return ((value - preValue) / Math.abs(preValue)) * 100;
  },

  secToTime(second, format) {
    let time;
    if (second > -1) {
      const hour = Math.floor(second / 3600);
      const min = Math.floor(second / 60) % 60;
      const sec = Math.round(second % 60);
      if (hour < 10) {
        time = `0${hour}:`;
      } else {
        time = `${hour}:`;
      }

      if (min < 10) { time += '0'; }
      time += `${min}:`;
      if (sec < 10) { time += '0'; }
      time += sec;

      if (format) {
        time = `${sec >= 10 ? sec : `0${sec}`}秒`;
        if (min > 0) {
          time = `${min >= 10 ? min : `0${min}`}分${time}`;
        }
        if (hour > 0) {
          time = `${hour >= 10 ? hour : `0${hour}`}时${time}`;
        }
      }
    }
    return time;
  },

  zerror400(name = 'Error', code = 'MISSING_PARAMS', message = '', desc = '') {
    return new ZError(name, code, message, desc, 400)
  },
  zerror409(name = 'Error', code = 'ERROR_RESOURCE_EXIST', message = '', desc = '') {
    return new ZError(name, code, message, desc, 409)
  },
  zerror404(name = 'Error', code = 'ERROR_RESOURCE_NOT_EXIST', message = '', desc = '') {
    return new ZError(name, code, message, desc, 404)
  },
  zerror422(name = 'Error', code = 'INVALID_PARAMS', message = '', desc = '') {
    return new ZError(name, code, message, desc, 422)
  },
  zerror500(name = 'Error', code = 'ERROR_UNKONW', message = '', desc = '') {
    return new ZError(name, code, message, desc, 500)
  },
  
  error400(code, message) {
    return new ZError('Error', code || 'MISSING_PARAMS', message, '', 400).toJson();
  },
  error409(code, message) {
    return new ZError('Error', code || 'ERROR_RESOURCE_EXIST', message, '', 409).toJson();
  },
  error404(code, message) {
    return new ZError('Error', code || 'ERROR_RESOURCE_NOT_EXIST', message, '', 404).toJson();
  },
  error422(code, message) {
    return new ZError('Error', code || 'INVALID_PARAMS', message, '', 422).toJson();
  },
  errorDB(code, message) {
    return new ZError('Error', code || 'ERROR_RESOURCE_DB', message, '', 500).toJson();
  },
  filterData(dataInfo, excludeAttribute = []) {
    if (!dataInfo) {
      return {};
    }
    const retDataInfo = { ...dataInfo };
    for (const item of excludeAttribute) {
      delete retDataInfo[item];
    }
    return retDataInfo;
  },
  parseExpand(expand) {
    if (!expand) {
      return null;
    }
    if (expand && typeof expand === 'string') {
      tmpExpand = {};
      expand = expand.split(',');
      expand.forEach((item) => {
        tmpExpand[item] = true;
      });
      return tmpExpand;
    }
    return expand;
  },
  /**
   * @param {Object} queryBody 
   * @param {Number} page 当前页数
   * @param {Number} pageSize 页条数
   * @param {Number} limit 同pageSize
   * @param {Number} offset 起始条数
   * @param {String} sort 排序，如果是String类型，返回json对象:{a: -1, b: 1};如果非字符串，不做任何处理
   */
  convertPagination(queryBody) {
    let {
      page, pageSize, sort, expand
    } = queryBody;
    const { offset, limit } = queryBody;
    const filter = queryBody;
    delete filter.sort;
    delete filter.page;
    delete filter.pageSize;
    delete filter.offset;
    delete filter.limit;
    delete filter.expand;

    let tmpSort = null;
    if (sort && typeof sort === 'string') {
      const tmp = sort.split(',');
      if (tmp.length > 0) {
        tmpSort = {}
        tmp.forEach(item => {
          const field = item.replace(/(^[+-])/, '');
          const order = item.startsWith('-') ? -1 : 1;
          tmpSort[field] = order
        })
      }
    }

    page = parseInt(page || 1, 10);
    page = page < 1 ? 1 : page;
    pageSize = parseInt(limit || pageSize || 10, 10);
    const skip = offset || ((page - 1) * pageSize);

    let tmpExpand = this.parseExpand(expand);

    return {
      filter,
      sort: tmpSort || sort,
      skip,
      pageSize,
      page,
      expand: tmpExpand,
      limit: pageSize,
    };
  },

  /**
   * @param String [dbType] mongodb or mysql
   */
  convertQueryCriteria(querycriteria, dbType = 'mysql', handle) {
    let criteria = { ...querycriteria };
    const dbCriteria = {};
    const filterAttributeArray = [];
    for (const condition in criteria) {
      if (Object.prototype.hasOwnProperty.call(criteria, condition)) {
        if (handle && typeof handle === 'function') {
          const bo = handle(condition, criteria[condition], dbCriteria);
          if (bo) {
            filterAttributeArray.push(condition);
            continue;
          }
        }
        switch (condition) {
          case 'createdAt':
          case 'updatedAt': {
            let tmp;

            if (dbType === 'mysql') {
              tmp = this.convertRangeQueryCriteriaMysql(
                condition,
                criteria[condition],
                (val) => this.dateStrToDate(val),
              )
            } else if (dbType === 'mongodb') {
              tmp = this.convertRangeQueryCriteriaMongodb(
                condition,
                criteria[condition],
                (val) => this.dateStrToDate(val),
              );
            }
            dbCriteria[condition] = tmp[condition];
            filterAttributeArray.push(condition);
            break;
          }
          default: {
            if (this.isRangeQuery(criteria[condition])) {
              let tmp;

              if (dbType === 'mysql') {
                tmp = this.convertRangeQueryCriteriaMysql(
                  condition,
                  criteria[condition],
                )
              } else if (dbType === 'mongodb') {
                tmp = this.convertRangeQueryCriteriaMongodb(
                  condition,
                  criteria[condition],
                );
              }
              dbCriteria[condition] = tmp[condition];
              filterAttributeArray.push(condition);
              break;
            }
          }
        }
      }
    }

    criteria = this.filterData(criteria, filterAttributeArray);
    return { dstCriteria: dbCriteria, sourceCriteria: criteria };
  },

  isRangeQuery(value) {
    if (!value) {
      return false;
    }
    if (typeof value === 'string') {
      let left = string(value).left(2);
      let right = string(value).right(2);

      if (left === '!{' && right === '}!') {
        return true;
      }

      left = string(value).left(1);
      right = string(value).right(1);
      const leftRangeStr = ['[', '(', '{'];
      const rightRangeStr = [']', ')', '}'];
      if (leftRangeStr.indexOf(left.toString()) !== -1 && rightRangeStr.indexOf(right.toString()) !== -1) {
        return true;
      }
    }

    return false;
  },

  convertRangeQueryCriteriaMysql(key, value, formatValue = (val) => val) {
    if (!key || !value) {
      return null;
    }

    const condition = {
      [key]: {},
    };
    if (value.startsWith('!{') && value.endsWith('}!')) {
      let array = value;
      array = array.replace(/(\!{)|(\}!)/g, '');
      array = array.split(',');
      condition[key][Op.notIn] = array;
      return condition
    }
    
    const beginStr = value[0];
    const endStr = value[value.length - 1];
    if (beginStr === '[' || beginStr === '(' || beginStr === '{') {
      let array = value;
      array = array.replace(/(\[)|(\])|(\()|(\))|(\{)|(\})/g, '');
      array = array.split(',');
      if (beginStr === '[' && endStr === ']') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key][Op.gte] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key][Op.lte] = formatValue(array[1]);
        }
      } else if (beginStr === '(' && endStr === ']') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key][Op.gt] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key][Op.lte] = formatValue(array[1]);
        }
      } else if (beginStr === '[' && endStr === ')') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key][Op.gte] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key][Op.lt] = formatValue(array[1]);
        }
      } else if (beginStr === '(' && endStr === ')') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key][Op.gt] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key][Op.lt] = formatValue(array[1]);
        }
      } else if (beginStr === '{' && endStr === '}') {
        condition[key] = array;
      }
    } else {
      condition[key] = value;
    }
    return condition;
  },

  convertRangeQueryCriteriaMongodb(key, value, formatValue = (val) => val) {
    if (!key || !value) {
      return null;
    }
    const condition = {
      [key]: {},
    };
    if (value.startsWith('!{') && value.endsWith('}!')) {
      let array = value;
      array = array.replace(/(\!{)|(\}!)/g, '');
      array = array.split(',');
      condition[key] = { $nin: array };
      return condition;
    }
    const beginStr = value[0];
    const endStr = value[value.length - 1];
    if (beginStr === '[' || beginStr === '(' || beginStr === '{') {
      let array = value;
      array = array.replace(/(\[)|(\])|(\()|(\))|(\{)|(\})/g, '');
      array = array.split(',');
      if (beginStr === '[' && endStr === ']') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key]['>='] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key]['<='] = formatValue(array[1]);
        }
      } else if (beginStr === '(' && endStr === ']') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key]['>'] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key]['<='] = formatValue(array[1]);
        }
      } else if (beginStr === '[' && endStr === ')') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key]['>='] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key]['<'] = formatValue(array[1]);
        }
      } else if (beginStr === '(' && endStr === ')') {
        if (array[0] !== ' ' && array[0] !== '') {
          condition[key]['>'] = formatValue(array[0]);
        }
        if (array[1] !== ' ' && array[1] !== '') {
          condition[key]['<'] = formatValue(array[1]);
        }
      } else if (beginStr === '{' && endStr === '}') {
        condition[key] = array;
      }
    } else {
      condition[key] = value;
    }
    return condition;
  },
  /**
   * @params: {data} [JSON] 待验证的数据
   * @params: {testArray} [Array] 检验数据的必备属性的数组
   * @params: {itemFunc} [JSON] 校验数据的合法性函数,
   * 格式如 { name: function(name) { return true;}}. name为data 的属性
   */
  isValidData(data, testArray, itemFunc, missingPrefix, invalidePrefix) {
    if (!data) {
      return new ZError('Error', 'ERROR_PARAMS', '', '', 400);
    }
    return verify(data, testArray, itemFunc, missingPrefix, invalidePrefix);
  },
  isValidQueryParams(queryConditions, isValidQueryCondition) {
    if (isValidQueryCondition && isValidQueryCondition(queryConditions)) {
      return isValidQueryCondition(queryConditions);
    }
    return null;
  },

  utcToDate(unixTimestamp, precision = 's') {
    if (!unixTimestamp) return moment().utc().toDate();
    let tmp = unixTimestamp
    if (precision === 's') {
      tmp = tmp * 1000
    } else if (precision === 'ms') {
    }
    return moment.utc(unixTimestamp).toDate();
  },
  dateStrToDate(dateStr, style = 'YYYY-MM-DD HH:mm:ss') {
    if (!dateStr) return moment().utc().toDate();
    return moment(dateStr, style).utc().toDate();
  },
  dateToUtc(date, precision = 's') {
    switch(precision) {
      case 's': return moment(date).unix();
      case 'ms': return moment(date).valueOf();
    }
  },
  
  delay(sec = 0.1) {
    return new Promise(((resolve) => {
      setTimeout(() => {
        resolve();
      }, sec * 1000);
    }));
  },

  /**
   * 判断一个值是否是整数，或者是整数字符串
   * @param {*} val 
   * @param {*} strong true 表示val必须是整数；false表示val可以是整数字符串
   */
  isInt(val, strong = false) {
    if (!val && val !== 0) {
      return false;
    }
    if (Number.isNaN(val)) {
      return false;
    }
    if (Number.isInteger(val)) {
      return true;
    }
    if (strong === true) {
      return false;
    }
    return `${val}` === `${parseInt(val, 10)}`
  },
  /**
   * 判断一个值是否是非空字符串
   * @param {*} str 
   * 
   * @returns {Boolean} 如果是非空字符串，返回true，否则返回false
   */
  notEmptyStr(str) {
    return typeof str === 'string' && (!str === false);
  },
  /**
   * 判断一个值是否在期望值之内
   * @param {Number|Boolean|String} actualValue 
   * @param {Array|Object|Number|Boolean|String} expectedValues 
   */
  isValueOf(actualValue, expectedValues) {
    if (typeof actualValue === 'function' || typeof expectedValues === 'function') {
      throw new Error('function type is not support')
    }
    if (Array.isArray(expectedValues)) {
      return expectedValues.indexOf(actualValue) !== -1;
    }
    if (typeof expectedValues === 'object') {
      return this.isValueOf(actualValue, Object.values(expectedValues));
    }

    return actualValue === expectedValues;
  },

  /**
   * 测试 { ...expected, ...expand } 属性值和actual是否一致。
   * @param {*} t ava t
   * @param {*} actual
   * @param {*} expected
   * @param {*} expand
   */
  avaTest(t, actual, expected, expand) {
    if (!t || !actual || !expected) {
      return;
    }
    if (typeof actual !== typeof expected) {
      return;
    }
    if (typeof actual === 'string') {
      t.is(actual, expected);
    }
    if (typeof actual === 'object') {
      let tmp = {
        ...expected,
      };
      if (typeof expand === 'object') {
        tmp = Object.assign(tmp, expand);
      }
      lodash.each(tmp, (v, k) => {
        t.is(v, actual[k]);
      });
    }
  },

  parseDateRange(timeRangeStr) {
    const dateRangStr = timeRangeStr.replace(/(\[)|(\])|(\()|(\))|(\{)|(\})/g, '')
    const dateRangeValues = dateRangStr.split(',')
    return {
      start: dateRangeValues[0] ? moment(dateRangeValues[0]).toDate() : null,
      end: dateRangeValues[1] ? moment(dateRangeValues[1]).toDate() : null
    }
  }
}
