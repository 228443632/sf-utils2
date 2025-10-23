/**
 * @Description: 数字帮助函数
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2024/3/21 12:43
 */
import isNullable from 'sf-utils2/base/isNullable'

const REGEX_FLOAT = /^-?\d+(\.\d+)?$/

/**
 * 判断是否是合法的浮点型
 * @param string
 * @returns {boolean}
 */
export const isValidFloat = string => (string ? REGEX_FLOAT.test(string) : false)

/**
 * 获取数字合法字符串, 支持18位以上运算
 * @param {number|string|any} num
 * @example
 * numberToValidString(123456789123424) => '123456789123424'
 */
export const getNumString = num => {
  return isNullable(num) ? '0' : isValidFloat(num) ? String(num) : '0'
}

export default {}
