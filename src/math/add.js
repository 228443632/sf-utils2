import Decimal from './Decimal'

/**
 * 相加
 * @param {any[]} args
 * @returns {number}
 */
function add(...args) {
  return +args.reduce((pre, cur) => pre.add(+cur || 0), new Decimal(0)).toFixed()
}

export default add
