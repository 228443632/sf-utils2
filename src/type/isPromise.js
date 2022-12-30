/**
 * 判断是否是promise
 * @param arg
 * @returns {boolean}
 */
function isPromise(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1) === 'Promise'
}

export default isPromise
