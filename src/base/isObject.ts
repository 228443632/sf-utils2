/**
 * 是否 Object 对象
 * @param {any} val 要检查是否为对象的值
 * @returns {boolean}
 *
 * @example
 * const value1 = {};
 * const value2 = [1, 2, 3];
 * const value3 = () => {};
 * const value4 = null;
 *
 * console.log(isObject(value1)); // true
 * console.log(isObject(value2)); // true
 * console.log(isObject(value3)); // true
 * console.log(isObject(value4)); // false
 * @version 3.3.0-beta11
 */
function isObject(val?: any): boolean {
  return val !== null && (typeof val === 'object' || typeof val === 'function')
}

export default isObject
