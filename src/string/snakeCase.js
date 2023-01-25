/**
 * 将字符串转成蛇形命名法
 * @param {string} str
 * @returns {string}
 * @example
 * snakeCase('PascalCase') => pascal_case
 * snakeCase('Title Case') => title_case
 * snakeCase('dot.case') => dot_case
 * snakeCase(undefined) => ''
 * snakeCase(null) => ''
 */
function snakeCase(str) {
  if (!str) return ''
  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z])([A-Z])/g, (m, a, b) => a + '_' + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, '_')
    .toLowerCase()
}

export default snakeCase
