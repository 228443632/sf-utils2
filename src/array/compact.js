import isArray from '@/base/isArray'
import isFunction from '@/base/isFunction'

/**
 * 去除数组中的无效/无用值
 * @param {Array} array
 * @param {(item:any, index:number, arr:any[]) => boolean} callbackFn
 * @return {*}
 * @example
 * compact[0, 1, '', 2, {}, [], null, undefined, NaN]
 * =>
 * [1, 2, {}, []]
 */
function compact(array, callbackFn) {
  if (!isArray(array)) array = Array.from(array)
  if (isFunction(callbackFn)) {
    array.filter(function () {
      return callbackFn.call(this, ...arguments)
    })
  }
  return array.filter(Boolean)
}

export default compact
