/**
 * @Description: 首字母大写
 * @Author bianpengfei
 * @create 2022/9/28 15:06
 */
import isString from '../type/isString.js'

/**
 * 首字母大写
 * @param {String}  str
 * @returns {string|*}
 */
function capitalize(str) {
  if (!isString(str)) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
