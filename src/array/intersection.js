import arrayToObj from '@/array/arrayToObj'
import uniq from '@/array/uniq'
import isPrimitive from '@/base/isPrimitive'

/**
 * 获取多个数组的交集
 * @param {Array[]} array
 * @param {String|unknown} property
 * @return {[string, any]|*[]}
 */
function intersection(array, property) {
  const arrayFlatten = array.flat(Infinity) || []
  const arrayObj$property = arrayToObj(arrayFlatten, property, { valueType: 'array' })
  const [array$0] = arrayFlatten
  const result = Object.entries(arrayObj$property).reduce((pre, [k, v]) => {
    if (v?.length > 1) {
      pre.push(...v)
    }
    return pre
  }, [])
  if (isPrimitive(array$0)) {
    return uniq(result)
  }
  return result
}

export default intersection
