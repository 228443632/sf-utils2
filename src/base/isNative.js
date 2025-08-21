import isNativeFunction from 'sf-utils2/base/isNativeFunction'

/**
 * 检测当前方法是否是原生js提供的
 * @param {*} Ctor
 * @return {boolean}
 * @example
 * isNative(Array.prototype.slice)
 * =>
 * true
 *
 * isNative(() => {})
 * =>
 * false
 * @deprecated
 *
 * 请去使用 @link{isNativeFunction}
 */
function isNative(Ctor) {
  return isNativeFunction(Ctor)
}

export default isNative
