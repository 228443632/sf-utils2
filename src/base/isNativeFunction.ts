/**
 * 检测当前方法是否是原生js提供的
 * @param {*} Ctor
 * @return {boolean}
 * @example
 * isNativeFunction(Array.prototype.slice)
 * =>
 * true
 *
 * isNativeFunction(() => {})
 * =>
 * false
 */
function isNativeFunction(Ctor: any) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

export default isNativeFunction
