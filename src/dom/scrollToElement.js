import getParentScrollElement from './getParentScrollElement'
import isString from '@/base/isString'
import getAbsOffsetTop from './getAbsOffsetTop'
import scrollToY from './scrollToY'

/**
 * @description 垂直滚动到某个元素位置
 * @param target 目标元素 {string | HTMLElement}
 * @param [scrollElement] 滚动元素 {HTMLElement}
 * @param [cb] 滚动结束后回掉方法 {Function}
 * @param [duration] 滚动时长 {number}
 * @param [offsetTop] 偏移量 {number}
 */
function scrollToElement({ target = '', scrollElement = null, cb = () => {}, duration = 400, offsetTop = 0 }) {
  let targetDOM = target
  if (isString(target)) {
    targetDOM = document.querySelector(target)
    if (!targetDOM) {
      console.error(`[warning] 缺少target字段值`)
      return
    }
  }
  if (!scrollElement) {
    scrollElement = getParentScrollElement(targetDOM)
  }
  if (scrollElement?.nodeType !== 1) {
    console.error(`[warning] 传入的scrollElement非元素`)
    return
  }
  if (targetDOM?.nodeType == 1) {
    // 是元素
    const to = getAbsOffsetTop(targetDOM, scrollElement) - offsetTop
    const scrollTop = scrollElement.scrollTop
    scrollToY(scrollElement, scrollTop, to, duration, cb)
  }
}
export default scrollToElement
