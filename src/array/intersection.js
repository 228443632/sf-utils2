import arrayToMap from '@/array/arrayToMap'
import uniq from '@/array/uniq'
import isPrimitive from '@/base/isPrimitive'

/**
 * 获取多个数组的交集
 * @param {array[]} array
 * @param {string|unknown} property
 * @return {[string, any]|*[]}
 */
function intersection(array, property) {
  const arrayFlatten = array.flat(1) || []
  console.log('array', arrayFlatten)
  const arrayMap$property = arrayToMap(arrayFlatten, property, { valueType: 'array' })
  const [array$0] = arrayFlatten
  const result = []
  arrayMap$property.forEach((v, k) => {
    if (v?.length === array.length) {
      result.push(...v)
    }
  })
  if (isPrimitive(array$0)) {
    return uniq(result)
  }
  return result
}

export default intersection
