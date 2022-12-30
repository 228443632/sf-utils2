/**
 * 判断是否是date
 * @param arg
 * @returns {boolean}
 */
function isDate(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1) === 'Date'
}

export default isDate
