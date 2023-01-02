import isSyncFunction from '@/base/isSyncFunction'
import isAsyncFunction from '@/base/isAsyncFunction'

/**
 * 判断是否是普通方法【同步||异步】
 * @param {any} val
 * @returns {boolean}
 */
function isFunction(val) {
  return isSyncFunction(val) || isAsyncFunction(val)
}

export default isFunction
