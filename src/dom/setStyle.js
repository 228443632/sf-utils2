import { _ieVersion } from './_constant'
import isObject from '../type/isObject'
import camelCase from '../base/camelCase'

/**
 * 设置元素样式
 * @param {HTMLElement} element dom元素
 * @param {string | object} styleName
 * @param {string} value
 */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return
  if (isObject(styleName)) {
    for (let prop in styleName) {
      if (Object.prototype.hasOwnProperty.call(styleName, prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && _ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
}

export default setStyle
