import _helperObjectFlatten from '@/_helper/_helperObjectFlatten'

/**
 * 将对象进行扁平化
 * @param {Object} obj
 * @returns {*}
 */
function flatten(obj) {
  return _helperObjectFlatten(obj)
}

export default flatten

// function flatten(obj, cb) {
//   obj = deepClone(obj)
//   // 递归，核心逻辑
//   const itor = (ob, parentField = '', result = []) => {
//     isFunction(cb) && (ob = cb(ob, parentField, obj))
//     if (isPlainObject(ob)) {
//       // 处理对象
//       Object.entries(ob).forEach(([key, value]) => {
//         const field = parentField ? `${parentField}.` : ''
//         if (isPlainObject(value)) {
//           // const field = parentField ? `${parentField}.` : ''
//           itor(value, `${field}${key}`, result)
//         } else if (isArray(value)) {
//           itor(value, `${field}${key}`, result)
//         }
//         // } else {
//         //   // const field = parentField ? `${parentField}.` : ''
//         //   // result.push({ key: `${field}${key}`, value })
//         // }
//         result.push({ key: `${field}${key}`, value })
//       })
//     } else if (isArray(ob)) {
//       // 处理数组
//       ob.forEach((v, vi) => {
//         const field = `${parentField}[${vi}]`
//         if (isPlainObject(v) || isArray(v)) {
//           itor(v, field, result)
//         }
//         // } else {
//         //   // result.push({ key: field, value: v })
//         // }
//         result.push({ key: field, value: v })
//       })
//     }
//     return result
//   }
//   // 转成对象
//   return itor(obj).reduce((pre, cur) => ({ ...pre, [cur.key]: cur.value }), {})
// }
