import Decimal from './Decimal'
import sum from './sum'

/**
 * 求平均值  avg(...[1, 2, 3])
 * @param args
 * @returns {number}
 */
function avg(...args) {
  return +new Decimal(sum(...args)).div(args.length).toFixed()
}

export default avg
