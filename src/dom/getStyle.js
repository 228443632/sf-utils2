import { _ieVersion } from './_constant'
import camelCase from 'sf-utils2/string/camelCase'

/**
 * 获取元素样式
 * @type {{(*=, *=): (null|*|number|undefined), (*=, *=): (null|*|null|undefined)}}
 */
const getStyle =
  _ieVersion < 9
    ? function (element, styleName) {
        if (!element || !styleName) return null
        styleName = camelCase(styleName)
        if (styleName === 'float') {
          styleName = 'styleFloat'
        }
        try {
          switch (styleName) {
            case 'opacity':
              try {
                return element.filters.item('alpha').opacity / 100
              } catch (e) {
                return 1.0
              }
            default:
              return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null
          }
        } catch (e) {
          return element.style[styleName]
        }
      }
    : function (element, styleName) {
        if (!element || !styleName) return null
        styleName = camelCase(styleName)
        if (styleName === 'float') {
          styleName = 'cssFloat'
        }
        try {
          let computed = document?.defaultView.getComputedStyle(element, '')
          return element.style[styleName] || computed ? computed[styleName] : null
        } catch (e) {
          return element.style[styleName]
        }
      }

export default getStyle
