/**
 * 判断是否是伪数组
 * @param {any|array|object|string|number} obj
 * @return {boolean}
 * @example
 * isArrayLike([1, 2, 3]); // true
 * isArrayLike(document.querySelectorAll('.className')); // true
 * isArrayLike('abc'); // true
 * isArrayLike(null); // false
 */
function isArrayLike(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function'
}
export default isArrayLike
