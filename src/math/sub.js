import Decimal from './Decimal'

/**
 * 相减去
 * @param {any[]} args
 * @returns {number}
 */
function sub(...args) {
  return +args
    .slice(1)
    .reduce((pre, cur) => pre.sub(+cur || 0), new Decimal(+args[0] || 0))
    .toFixed()
}

export default sub
