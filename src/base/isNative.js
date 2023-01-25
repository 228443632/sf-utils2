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
 */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

export default isNative
