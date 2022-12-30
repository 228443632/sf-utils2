import setObjFieldPath from './setObjFieldPath'
import isObject from '../type/isObject'

/**
 * 根据findField 从对象中依次遍历出所有符合（属性）key === findField，路径
 * @param {object} data 对象
 * @param {string} findField 要查找的属性名
 * @param {object} props 自定义属性名
 * @returns {*[]}
 */
function findPropertyByObj({ data = {}, findField = 'name', props = { key: '_path', value: '_value' } }) {
  const _data = setObjFieldPath({ data, field: props.key })
  const cb = (data = _data, selfField = findField, result = []) => {
    if (isObject(data)) {
      if (data.hasOwnProperty(selfField)) {
        const value = {
          [props.key]: (data[selfField] && data[selfField][props.key]) || '',
          [props.value]: data[selfField]
        }
        if (!isObject(data[selfField])) {
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
    _pathList: v[props.key].split('|'),
    ...v
  }))
}

export default findPropertyByObj
