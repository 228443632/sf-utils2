import Decimal from './Decimal'

/**
 * 相减去
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function sub(arg1, arg2) {
  return +new Decimal(+arg1 || 0).sub(+arg2 || 0).toFixed()
}

export default sub
