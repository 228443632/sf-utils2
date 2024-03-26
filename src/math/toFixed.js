import Decimal from './Decimal'
import { getNumString } from '@/_helper/_helperNumber'

/**
 * 保留有效位数
 * @param {string, number} val 原值
 * Return a string representing the value of this Decimal in normal (fixed-point) notation to
 * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
 * omitted.
 *
 * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
 *
 * @param dp {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * @param rm {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 * (-0).toFixed(3) is '0.000'.
 * (-0.5).toFixed(0) is '-0'.
 * @return {string}
 */

function toFixed(val, dp, rm) {
  return new Decimal(getNumString(val)).toFixed(dp, rm)
}

export default toFixed
