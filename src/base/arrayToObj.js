/**
 * 将数组转成obj
 * @param {Object[]} array 数组
 * @param {String} PK 主键
 * @returns {*}
 * @example
 *
 * const list = [
 *  {empId: 1, empName: '蔡徐坤'},
 *  {empId: 2, empName: '小明'}
 * ]
 * arrayToObj(list, 'empId')
 * =>
 * {
 *   1: {empId: 1, empName: '蔡徐坤'},
 *   2: {empId: 2, empName: '小明'}
 * }
 *
 * const list = [
 *  1, 2, 3, '4'
 * ]
 * arrayToObj(list)
 * =>
 * {
 *   1: 1
 *   2: 2,
 *   3: 3,
 *   4: '4'
 * }
 *
 */
function arrayToObj(array = [], PK = '') {
  return array.reduce((pre, cur) => {
    if (PK) {
      const PKValue = cur?.[PK]
      PKValue && (pre[PKValue] = cur)
    } else {
      cur && (pre[cur] = cur)
    }
    return pre
  }, {})
}
export default arrayToObj
