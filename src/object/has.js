import isPlainObject from '@/base/isPlainObject'
import { PlainObjectType } from '@/_helper/_types'
import isString from '@/base/isString'
import hasOwn from '@/object/hasOwn'
import _helperObjectFlatten from '@/_helper/_helperObjectFlatten'

/**
 * 判断对象是否含有某一个属性
 * @param {PlainObjectType} object
 * @param {string} key
 * @return {boolean}
 */
function has(object, key) {
  if (isPlainObject(object)) {
    if (isString(key) && key) {
      key = key.replace(/\.\[/g, '[')
      if (/\./.test(key)) {
        let isBool = false
        _helperObjectFlatten(object, (_, field) => {
          if (field === key) {
            isBool = true
            return true
          }
        })
        return isBool
      } else {
        return hasOwn(object, key)
      }
    }
  }
  return false
}

export default has

// let obj = {
//   id: 2,
//   name: '苹果',
//   pId: null,
//   person: {
//     name: {
//       name: '1324'
//     }
//   },
//   children: [
//     {
//       id: 1004,
//       name: '苹果A',
//       pId: 2,
//       children: [
//         {
//           id: 1004004,
//           name: '苹果A-儿子',
//           pId: 1004
//         }
//       ]
//     },
//     {
//       name: '苹果C',
//       pId: 2
//     }
//   ]
// }
// console.log(has(obj, 'id'))
// console.log(has(obj, 'children[0].name'))
// console.log(has(obj, 'children[0].children[0]'))
// console.log(has(obj, 'id.name'))
// console.log(has(obj, 'person.name.name'))
