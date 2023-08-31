/**
 * 判断是否正确的json数据
 * @param {string} str
 * @return {boolean}
 * @example
 * isValidJSON('{"name":"Adam","age":20}'); // true
 * isValidJSON('{"name":"Adam",age:"20"}'); // false
 * isValidJSON(null); // true
 */
function isValidJSON(str) {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

export default isValidJSON
