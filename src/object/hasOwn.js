/**
 * 判断是否拥有一个可枚举的属性
 * @param {Object} obj
 * @param {string} property
 * @return {boolean}
 */
function hasOwn(obj = {}, property = '') {
  const ownFn = Object?.hasOwn || Object.prototype.hasOwnProperty.call
  return ownFn(obj, property)
}

export default hasOwn
