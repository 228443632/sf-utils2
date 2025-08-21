import isString from 'sf-utils2/base/isString.js'

/**
 * 首字母大写
 * @param {string}  str
 * @returns {string|*}
 * @example
 * capitalize('cell_item') => Cell_item
 */
function capitalize(str) {
  if (!isString(str)) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
