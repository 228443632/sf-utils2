import _typeof from './_typeof'

/**
 * 判断是否是 symbol
 * @param {string} val
 * @returns {boolean}
 */
function isSymbol(val) {
  return _typeof(val) === 'Symbol'
}

export default isSymbol
