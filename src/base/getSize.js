import _typeof from 'sf-utils2/base/_typeof'

/**
 * 返回不同类型的的长度 （对象/数组/Map/Set/String）
 * @param {any} val
 * @return {number}
 */
function getSize(val) {
  let len = 0
  switch (_typeof(val)) {
    case 'Object': {
      len = Object.keys(val).length
      break
    }
    case 'String':
    case 'Array': {
      len = val.length
      break
    }
    case 'Map':
    case 'Set': {
      len = val.size
      break
    }
    case 'Blob': {
      len = val.size
      break
    }
    default: {
      break
    }
  }
  return len
}

export default getSize

// console.log(getSize([1, 2, 3])) // 3
// console.log(getSize({ id: 1, name: '小明' })) // 2
// console.log(
//   getSize(
//     new Map([
//       ['1', 2],
//       [2, '3']
//     ])
//   )
// ) // 2
// console.log(getSize('abc')) // 3
// console.log(getSize(new Set([1, 2, 3, 4, 4]))) // 4
