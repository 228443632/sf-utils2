/**
 * json解析，防止抛出异常
 * @param str
 * @returns {null|any}
 */
function parseJsonNoError(str = '') {
  try {
    return JSON.parse(str)
  } catch (e) {
    return null
  }
}

export default parseJsonNoError
