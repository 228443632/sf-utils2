import hasOwn from 'sf-utils2/object/hasOwn'

/**
 * 合并对象
 * @returns {{}}
 */
function merge() {
  let target = {}
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {}
    for (let prop in source) {
      if (hasOwn(source, prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}

export default merge
