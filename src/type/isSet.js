/**
 * 判断是否是promise
 * @param {any} arg
 * @returns {boolean}
 */
function isSet(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1) === 'Set'
}

export default isSet
