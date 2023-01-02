import setPropPath from './setPropPath'
import isPlainObject from '@/base/isPlainObject'

/**
 * 根据findField 从对象中依次遍历出所有符合（属性）key === findField，路径
 * @param {object} data 对象
 * @param {string} findField 要查找的属性名
 * @param {object} props 自定义属性名
 * @returns {*[]}
 */
function findPropPath({ data = {}, findField = 'name', props = { key: '__path__', value: '__value__' } }) {
  const _data = setPropPath({ data, field: props.key })
  const cb = (data = _data, selfField = findField, result = []) => {
    if (isPlainObject(data)) {
      if (data.hasOwnProperty(selfField)) {
        const value = {
          [props.key]: (data[selfField] && data[selfField][props.key]) || '',
          [props.value]: data[selfField]
        }
        if (!isPlainObject(data[selfField])) {
          value[props.key] = data[selfField] + '|' + selfField
        }
        result.push(value)
      }
      Object.keys(data).forEach(key => {
        cb(data[key], selfField, result)
      })
    }
    return result || []
  }
  return cb()?.map(v => ({
    __pathList__: v[props.key].split('|'),
    ...v
  }))
}

export default findPropPath
