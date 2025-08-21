import isArray from '@/base/isArray'
import isNoNullable from '@/base/isNoNullable'

/**
 * 去除数组中的 是null 、undefined、NaN
 * @param {Array} array
 * @return {any[]}
 * @example
 * compactIsNoNullable[0, 1, '', 2, {}, [], null, undefined, NaN]
 * =>
 * [0, 1, 2, '', {}, []]
 */
function compactIsNoNullable(array) {
  if (!isArray(array)) array = Array.from(array)
  return array.filter(v => {
    if (typeof v == 'number') return isNoNullable(v) && !isNaN(v)
    return isNoNullable(v)
  })
}

export default compactIsNoNullable
