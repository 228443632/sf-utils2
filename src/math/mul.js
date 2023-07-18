import Decimal from './Decimal'

/**
 * 相乘
 * @param {any[]} args
 * @returns {number}
 */
function mul(...args) {
  return +args.reduce((pre, cur) => pre.mul(+cur || 0), new Decimal(0)).toFixed()
}

export default mul
