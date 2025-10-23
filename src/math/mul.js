import Decimal from './Decimal'
import { getNumString } from 'sf-utils2/_helper/_helperNumber'

/**
 * 相乘
 * @param {any[]} args
 * @returns {string}
 */
function mul(...args) {
  return args.reduce((pre, cur) => pre.mul(getNumString(cur)), new Decimal(1)).toFixed()
}

export default mul
