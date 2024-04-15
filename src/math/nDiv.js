import Decimal from './Decimal'
import isNumber from '@/base/isNumber'

//   return !isNumber(arg2) || isNaN(arg2) || +arg2 == 0 ? 0 : +new Decimal(+arg1 || 0).div(+arg2).toFixed()

/**
 * 相除
 * @param {any[]} args
 * @returns {number}
 */
function div(...args) {
  // !isNumber(arg2) || isNaN(arg2) || +arg2 == 0 ? 0 : +new Decimal(+arg1 || 0).div(+arg2).toFixed()
  return +args
    .slice(1)
    .reduce((pre, cur) => {
      if (!isNumber(cur) || isNaN(cur) || +cur == 0) return new Decimal(0)
      return pre.div(cur)
    }, new Decimal(+args[0] || 0))
    .toFixed()
}

export default div
