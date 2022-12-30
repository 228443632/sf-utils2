/**
 * 判断是否是 symbol
 * @param {string} arg
 * @returns {boolean}
 */
function isSymbol(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1) === 'Symbol'
}

export default isSymbol
