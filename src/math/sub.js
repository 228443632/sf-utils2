import Decimal from './Decimal'
import { getNumString } from 'sf-utils2/_helper/_helperNumber'
import isNoNullable from 'sf-utils2/base/isNoNullable'

/**
 * 相减
 * @param {any[]} args
 * @returns {string}
 */
function sub(...args) {
  return args
    .filter(isNoNullable)
    .slice(1)
    .reduce((pre, cur) => pre.sub(getNumString(cur)), new Decimal(getNumString(args[0])))
    .toFixed()
}

export default sub
