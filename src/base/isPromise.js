import _typeof from '@/base/_typeof'

/**
 * 判断是否是promise
 * @param val
 * @returns {boolean}
 */
function isPromise(val) {
  return _typeof(val) === 'Promise'
}

export default isPromise
