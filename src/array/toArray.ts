import isPlainObject from 'sf-utils2/base/isPlainObject'

/**
 * 将普通数据转为数组结构数据
 * @param arr
 * @example
 * ```js
 * const a = 1
 * toArray(a) => [1]
 *
 * const b = {}
 * toArray(b) => [{}]
 *
 * const c = [1001]
 * toArray(c) => [1001]
 * ```
 */
function toArray<T>(arr: T | T[]): T[] {
  if (typeof arr === 'object' && arr !== null && isPlainObject(arr) && 'length' in arr) return Array.from(arr)
  return Array.isArray(arr) ? arr : [arr]
}

export default toArray
