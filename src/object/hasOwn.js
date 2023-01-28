/**
 * 判断是否拥有一个可枚举的属性
 * @param {Object} obj
 * @param {string} property
 * @return {boolean}
 */
function hasOwn(obj = {}, property = '') {
  return Object?.hasOwn ? Object.hasOwn(obj, property) : Object.prototype.hasOwnProperty.call(obj, property)
}

export default hasOwn
