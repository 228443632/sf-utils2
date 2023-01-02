import _typeof from '@/base/_typeof'

/**
 * 浅拷贝/深拷贝
 * @param {Object} obj 对象/数组
 * @param {Boolean} isDeep 是否深度拷贝 默认是
 * @return {Object}
 */
function deepClone(obj, isDeep = true) {
  function getNativeCtor(val, args) {
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
          const restArr = []
          val.map(item => {
            restArr.push(handleValueClone(item, isDeep))
          })
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

export default deepClone
