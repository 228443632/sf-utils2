import deepClone from './deepClone'
import isPlainObject from '@/base/isPlainObject'
import def from './def'

/**
 * 设置对象给每个对象设置路径名
 * @param data 对象
 * @param field
 * @returns {*}
 * example:
 * {
 *   name: '张洪文',
 *   id: '1',
 *   list: [],
 *   obj: {
 *     id: '---',
 *     hos: {
 *       location: {
 *         name: '卫生院'
 *       }
 *     }
 *   }
 * }
 *
 * =>
 {
 *   name: '张洪文',
 *   id: '1',
 *   list: [],
 *   _path: '',
 *   obj: {
 *     id: '---',
 *     _path: 'obj'，
 *     hos: {
 *       location: {
 *         name: '卫生院',
 *         _path: 'obj|hos|location'
 *       },
 *       _path: 'obj|hos'
 *     }
 *   }
 * }
 */
function setPropPath({ data = {}, field = '__path__' }) {
  const dataCopy = deepClone(data)
  const cb = (data = dataCopy, parentFieldValue = field, fieldValue = '') => {
    if (isPlainObject(data)) {
      def(data, field, undefined)
      data[field] = [parentFieldValue, fieldValue].filter(v => v).join('.')
      if (data[field] == field) data[field] = ''
      Object.keys(data).forEach(key => {
        cb(data[key], data[field], key)
      })
    }
    return data
  }
  return cb()
}

export default setPropPath
