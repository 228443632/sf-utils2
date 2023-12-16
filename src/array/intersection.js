import arrayToMap from '@/array/arrayToMap'
import uniq from '@/array/uniq'
import isPrimitive from '@/base/isPrimitive'

/**
 * 获取多个数组的交集
 * @param {Array[]} array
 * @param {string|unknown} [property]
 * @return {[string, any]|*[]}
 * @example
 * intersection([[1, 2, 3, 5], [2, 3, 5, 8]])
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

// console.log(
//   'intersection',
//   intersection([
//     [1, 2, 3, 5],
//     [2, 3, 5, 8]
//   ])
// )

export default intersection
