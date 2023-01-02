import _typeof from '@/base/_typeof'

/**
 * 判断是否是一个Arguments对象
 * @param {any} val
 * @returns {boolean}
 */
function isArguments(val) {
  return _typeof(val) === 'Arguments'
}

export default isArguments
