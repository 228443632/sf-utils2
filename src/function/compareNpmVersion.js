import isString from 'sf-utils2/base/isString.js'

// 转成将数组中的数字转成十进制 [1, 2, 3, 4, 0] => 12340
const _transferNum = (numList = []) => {
  const len = numList.length
  return numList.reduce((pre, cur, curIdx) => {
    pre += +cur * 10 ** (len - curIdx - 1)
    return pre
  }, 0)
}

// 将版本映射成一个数组 '1.3.0.alpha.1' => [1, 3, 0, -2, 1]
const _versionMapToList = (version = '') => {
  const len = 5 // 固定版本数组长度，如果没有值填充下
  const abrConf = {
    // 内部维护小版本映射大小关系
    rc: -1,
    beta: -2,
    alpha: -3
  }
  let list = version.split('.').map(v => abrConf[v] || +v || 0)
  return [...list, ...[...new Array(len - list.length)].fill(0)]
}

/**
 * 比较npm A 和 B版本大小
 * @param {string} a
 * @param {string} b
 * @returns {number}
 * @description 返回-1: a < b, 1: a > b, 0: a = b
 */
function compareNpmVersion(a, b) {
  let result //返回结果
  if (isString(a) && isString(b)) {
    let aVersionNum = _transferNum(_versionMapToList(a.toLowerCase()))
    let bVersionNum = _transferNum(_versionMapToList(b.toLowerCase()))
    result = aVersionNum == bVersionNum ? 0 : aVersionNum > bVersionNum ? 1 : -1
  }
  return result
}

export default compareNpmVersion
