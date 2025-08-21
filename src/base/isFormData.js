import _typeof from '@/base/_typeof'

/**
 * 判断是否是一个FormData对象
 * @param {any} val
 * @returns {boolean}
 */
function isFormData(val) {
  return _typeof(val) === 'FormData'
}

export default isFormData
