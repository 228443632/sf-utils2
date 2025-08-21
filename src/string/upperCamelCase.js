import camelCase from '@/string/camelCase'
import capitalize from '@/string/capitalize'

/**
 * 大驼峰命名
 * @param {string} str
 * @return {string}
 */
function upperCamelCase(str) {
  return capitalize(camelCase(str))
}

export default upperCamelCase
