import Decimal from './Decimal'
import { getNumString } from '@/_helper/_helperNumber'
import isNoNullable from '@/base/isNoNullable'

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
