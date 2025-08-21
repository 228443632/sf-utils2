import Decimal from './Decimal'
import { getNumString } from 'sf-utils2/_helper/_helperNumber'

/**
 * 相加
 * @param {any[]} args 不定参数
 * @returns {string}
 * @example
 * add(1, 2, 3) => 6
 * add(1.1, 2.2, 3.3) => 6.6
 */
function add(...args) {
  return args.reduce((pre, cur) => pre.add(getNumString(cur)), new Decimal(0)).toFixed()
}

// example
// const val = add('12345678901234567890')
// console.log(
//   'example',
//   typeof val,
//   val,
//   new Decimal('1234567890123456789002342423400').add('1234567890123456789002342423402').toFixed(),
//   // new Decimal('12345678901234567890123456789023242').add(new Decimal('2')).toFixed()
// )

export default add
