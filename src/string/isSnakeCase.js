/**
 * 使用正则表达式检查是否符合蛇形命名法
 * @param {string} str
 * @return {boolean}
 */
function isSnakeCase(str) {
  return /^[a-z]+(?:_[a-z]+)*$/.test(str)
}

export default isSnakeCase
