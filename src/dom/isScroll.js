import getStyle from './getStyle'

/**
 * 判断dom元素是否是滚动容器，并返回滚动属性 ["auto", "auto", index: 0, input: "auto", groups: undefined]
 * @param {HTMLElement} el
 * @param {boolean} vertical  是否是垂直，不填入按照overflow
 * @returns {*}
 */
function isScroll(el, vertical) {
  const determinedDirection = vertical !== null && vertical !== undefined
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow')
  return overflow.match(/(scroll|auto)/)
}

export default isScroll
