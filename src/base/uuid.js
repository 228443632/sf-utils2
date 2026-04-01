import isFunction from 'sf-utils2/base/isFunction'
/**
 * 返回uuid
 * @returns {string}
 */
function uuid() {
  if (isFunction(crypto?.randomUUID)) return crypto.randomUUID()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default uuid
