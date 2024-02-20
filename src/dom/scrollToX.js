import getScrollLeft from './getScrollLeft'
import isFunction from '@/base/isFunction'
import { _easeInOutQuad, _requestAnimationFrame } from './_constant'

/**
 * 水平滚动
 * @param {HTMLElement} el 滚动的dom
 * @param {number} [start] 起始位置 默认是 scrollLeft
 * @param {number} to  滑动末端位置
 * @param {number} [duration]  滚动持续时间
 * @param {Function} [callback]  结束回调事件
 */
function scrollToX(el, start = 0, to, duration = 500, callback) {
  function elMoveX(el, scrollLeft = 0) {
    if (el) {
      el.scrollLeft = scrollLeft
    } else {
      document.documentElement.scrollLeft = scrollLeft
      document.body.parentNode.scrollLeft = scrollLeft
      document.body.scrollLeft = scrollLeft
    }
  }

  function scrollToXfn(el, start = 0, to, duration = 500, callback) {
    start = getScrollLeft(el) || 0
    const change = to - start
    const increment = 20
    let currentTime = 0
    duration = typeof duration === 'undefined' ? 500 : duration
    let _animateScroll = () => {
      currentTime += increment
      let val = _easeInOutQuad(currentTime, start, change, duration)
      elMoveX(el, val)
      if (currentTime < duration) {
        _requestAnimationFrame(_animateScroll)
      } else {
        if (callback && isFunction(callback)) {
          callback()
        }
      }
    }
    _animateScroll()
  }
  scrollToXfn(el, start, to, duration, callback)
}

export default scrollToX
