import Decimal from './Decimal'
import { getNumString } from '@/_helper/_helperNumber'

//   return !isNumber(arg2) || isNaN(arg2) || +arg2 == 0 ? 0 : +new Decimal(+arg1 || 0).div(+arg2).toFixed()

/**
 * 相除
 * @param {any[]} args
 * @returns {string}
 * @example
 * div(1, 2) => 0.5
 */
function div(...args) {
  // !isNumber(arg2) || isNaN(arg2) || +arg2 == 0 ? 0 : +new Decimal(+arg1 || 0).div(+arg2).toFixed()
  return args
    .slice(1)
    .reduce((pre, cur) => {
      if (!getNumString(cur) || cur == '0') return new Decimal(0) // 如果分母是 0，则返回0
      return pre.div(cur)
    }, new Decimal(getNumString(args[0])))
    .toFixed()
}

export default div
