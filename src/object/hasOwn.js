/**
 * 判断是否拥有一个可枚举的属性
 * @param {Object} obj
 * @param {String} property
 * @return {boolean}
 */
function hasOwn(obj = {}, property = '') {
  return Object.prototype.hasOwnProperty.call(obj, property)
}

export default hasOwn
