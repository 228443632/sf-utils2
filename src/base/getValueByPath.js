/**
 * 从对象中根据路径获取到值
 * @param {Object} object
 * @param {String} prop
 * @returns {null}
 */
function getValueByPath(object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

export default getValueByPath
