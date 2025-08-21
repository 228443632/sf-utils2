import isNumber from 'sf-utils2/base/isNumber'

/**
 * 文件大小友好提示
 * @param {number|string} size 单位b
 * @return {string}
 * @example
 * const size1 = friendlyFileSize(20223123),
 * const size2 = friendlyFileSize(2022312323),
 * const size3 = friendlyFileSize(2022);
 * console.log(size1); // 19.29MB
 * console.log(size2); // 1.88GB
 * console.log(size3); // 1.97KB
 */
function friendlyFileSize(size = 0) {
  let result = !isNumber(size) ? parseFloat(size) : size,
    sizes = {
      b: 1024,
      kb: 1024 * 1024,
      mb: 1024 * 1024 * 1024,
      gb: 1024 * 1024 * 1024 * 1024,
      toSize(type = 'b', unit = 'b', size = 0) {
        let val = (size / this[type]).toFixed(2)
        return `${val}${unit.toUpperCase()}`
      }
    }
  if (result <= 0) {
    result = '0B'
  } else if (result < sizes.b) {
    result = `${result}B`
  } else if (result < sizes.kb) {
    result = sizes.toSize('b', 'kb', result)
  } else if (result < sizes.mb) {
    result = sizes.toSize('kb', 'mb', result)
  } else {
    result = sizes.toSize('mb', 'gb', result)
  }
  return result
}

export default friendlyFileSize
