import _typeof from 'sf-utils2/base/_typeof'
import { LoggerUtil } from '@/_helper/LoggerUtil'

/**
 * 浅拷贝/深拷贝
 * @param {Object|Array} obj 对象/数组
 * @param {boolean} [isDeep] 是否深度拷贝 默认是
 * @return {Object}
 */
function _deepClone(obj, isDeep = true) {
  function getNativeCtor(val, args?) {
    const Ctor = val.__proto__.constructor
    return args ? new Ctor(args) : new Ctor()
  }

  function handleValueClone(item, isDeep) {
    return isDeep ? copyValue(item, isDeep) : item
  }

  function copyValue(val, isDeep) {
    if (val) {
      switch (_typeof(val)) {
        case 'Object': {
          const restObj = Object.create(val.__proto__)
          Object.keys(val).forEach(key => {
            restObj[key] = handleValueClone(val[key], isDeep)
          })
          return restObj
        }
        case 'Date':
        case 'RegExp': {
          return getNativeCtor(val, val.valueOf())
        }
        case 'Array':
        case 'Arguments': {
          const restArr = [] as any[]
          const len = val.length
          for (let i = 0; i < len; i++) {
            // fix empty item
            if (i in val) {
              restArr.push(handleValueClone(val[i], isDeep))
            } else {
              // 是空槽值
              restArr.length++
            }
          }
          return restArr
        }
        case 'Set': {
          const restSet = getNativeCtor(val)
          restSet.forEach(item => {
            restSet.add(handleValueClone(item, isDeep))
          })
          return restSet
        }
        case 'Map': {
          const restMap = getNativeCtor(val)
          restMap.forEach(item => {
            restMap.set(handleValueClone(item, isDeep))
          })
          return restMap
        }
      }
    }
    return val
  }
  return copyValue(obj, isDeep)
}

// const logger = new LoggerUtil('sf-utils:deepClone')

/**
 * 浅拷贝/深拷贝
 * @param {Object|Array} obj 对象/数组
 * @param {boolean} [isDeep] 是否深度拷贝 默认是
 * @return {Object}
 */
function deepClone<T = any>(obj: T, isDeep = true): T {
  if (isDeep && typeof structuredClone == 'function') {
    try {
      // 如果报错，依然还是走的是_deepClone
      return structuredClone(obj) as T
    } catch {
      return _deepClone(obj, isDeep) as T
    }
  }
  return _deepClone(obj, isDeep) as T
}

export default deepClone

// const a = [1, 2, 3]
// console.log('aaaa', deepClone(a) === a)
