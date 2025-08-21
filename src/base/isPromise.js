import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是promise
 * @param {*} val
 * @returns {boolean}
 */
function isPromise(val) {
  return _typeof(val) === 'Promise'
}

export default isPromise
