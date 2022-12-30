/**
 * 判断是否是error
 * @param arg
 * @returns {boolean}
 */
function isError(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1) === 'Error'
}

export default isError
