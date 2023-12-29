import _typeof from '@/base/_typeof'
import isPlainObject from '@/base/isPlainObject'

/**
 * 清除对象身上的属性
 * @param {object|Array|Map|Set} object
 * @param {boolean} strict 是否严格
 * @return {object|Array|Map|Set}
 */
function clearObject(object, strict = true) {
  // 类型检查
  console.assert(
    object instanceof Object || Array.isArray(object) || object instanceof Map || object instanceof Set,
    'Invalid object type'
  )

  const strategyMap = {
    // 普通对象
    object: () => {
      if (isPlainObject(object)) {
        const keys = strict ? Object.getOwnPropertyNames(object) : Object.keys(object)
        keys.forEach(propertyName => delete object[propertyName])
      }
      return object
    },

    // 数组
    array: () => {
      object.length = 0
      return object
    },

    // map
    map: () => strategyMap.set(),

    // set
    set: () => {
      object.forEach((_, key) => {
        object.delete(key)
      })
    },

    default: () => object // 默认
  }
  const run = strategyMap[_typeof(object)] || strategyMap.default
  return run()
}

export default clearObject
