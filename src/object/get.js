import { get as get$1 } from 'es-toolkit/compat'

/**
 * 获取对象的属性的值，如果值为 undefined，则返回默认值
 * @param {Object} obj 对象
 * @param {string|string[]} property 属性
 * @param {*} [defaultValue] 默认值
 * @returns {*}
 */
function get(obj, property, defaultValue) {
  return get$1(obj, property, defaultValue)
}

export default get
