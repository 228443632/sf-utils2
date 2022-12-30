import Decimal from './Decimal'

/**
 * 相加
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function add(arg1, arg2) {
  return +new Decimal(+arg1 || 0).add(+arg2 || 0).toFixed()
}

export default add
