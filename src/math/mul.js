import Decimal from './Decimal'

/**
 * 相乘
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function mul(arg1, arg2) {
  return +new Decimal(+arg1 || 0).mul(+arg2 || 0).toFixed()
}

export default mul
