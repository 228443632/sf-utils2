import isString from '@/base/isString.js'

/**
 * 首字母大写
 * @param {string}  str
 * @returns {string|*}
 */
function capitalize(str) {
  if (!isString(str)) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
