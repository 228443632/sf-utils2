import _typeof from '@/base/_typeof'

/**
 * 判断是否是error
 * @param val
 * @returns {boolean}
 */
function isError(val) {
  return _typeof(val) === 'Error'
}

export default isError
