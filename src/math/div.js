import Decimal from './Decimal'
import isNumber from '@/base/isNumber'

/**
 * 求arg1 除以 arg2
 * @param arg1
 * @param arg2
 * @returns {number|number}
 */
function div(arg1, arg2) {
  return !isNumber(arg2) || isNaN(arg2) || +arg2 == 0 ? 0 : +new Decimal(+arg1 || 0).div(+arg2).toFixed()
}

export default div
