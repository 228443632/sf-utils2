/**
 * @Description: ConDecimal 增强式Decimal
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 13/01/25 AM9:06
 */

import Decimal from './Decimal'
import { getNumString } from 'sf-utils2/_helper/_helperNumber'
import def from 'sf-utils2/object/def'
import { type Numeric } from 'decimal.js-light'

Decimal.set({
  precision: 50
})

type TDecimal = typeof Decimal

class ConDecimal extends Decimal {
  /**
   * 构造函数
   * @param value
   */
  constructor(value?: Numeric) {
    super(getNumString(value))
  }

  // add() {
  //   arguments[0] = getNumString(arguments[0])
  //   return super.add(...arguments)
  // }
  // sub() {
  //   arguments[0] = getNumString(arguments[0])
  //   return super.sub(...arguments)
  // }
  //
  // mul() {
  //   arguments[0] = getNumString(arguments[0])
  //   return super.mul(...arguments)
  // }
  //
  // div() {
  //   arguments[0] = getNumString(arguments[0])
  //   return super.div(...arguments)
  // }
  //
  // dividedBy() {
  //   arguments[0] = getNumString(arguments[0])
  //   return super.dividedBy(...arguments)
  // }
}

const proxyMethod = [
  'comparedTo',
  'cmp',
  'dividedBy',
  'div',
  'dividedToIntegerBy',
  'idiv',
  'equals',
  'eq',
  'greaterThan',
  'gt',
  'greaterThanOrEqualTo',
  'gte',
  'lessThan',
  'lt',
  'lessThanOrEqualTo',
  'lte',
  'logarithm',
  'log',
  'minus',
  'sub',
  'modulo',
  'mod',
  'plus',
  'add',
  'times',
  'mul',
  'toPower',
  'pow'
]

proxyMethod.forEach(methodName => {
  const originalMethod = Decimal.prototype[methodName]
  ConDecimal.prototype[methodName] = function (...args) {
    args[0] = getNumString(args[0])
    return originalMethod.call(this, ...args)
  }
  def(ConDecimal.prototype, methodName)
})

export default ConDecimal as unknown as TDecimal
