import Decimal from './Decimal'
import { getNumString } from 'sf-utils2/_helper/_helperNumber'
import isNoNullable from 'sf-utils2/base/isNoNullable'

/**
 * 获取总和  sum(...[1, 2, 3])
 * @param args
 * @returns {string}
 */
function sum(...args) {
  // return args.filter(Boolean).reduce((p, c) => +new Decimal(p).add(+c || 0).toFixed(), 0)
  return args
    .filter(isNoNullable)
    .reduce((pre, cur) => pre.add(getNumString(cur)), new Decimal(0))
    .toFixed()
}

export default sum
