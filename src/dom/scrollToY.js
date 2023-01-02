import getScrollTop from './getScrollTop'
import { _easeInOutQuad, _requestAnimationFrame } from './_constant'
import isFunction from '@/base/isFunction'

/**
 * 垂直滚动
 * @param {HTMLElement} el domElement  滚动的dom
 * @param {Number} start 起始位置 默认是 scrollTop
 * @param {number} to  滑动末端位置
 * @param {number} duration  滚动持续时间
 * @param {Function} callback  结束回调事件
 */
function scrollToY(el, start = 0, to, duration = 500, callback) {
  function elMoveY(el, scrollTop = 0) {
    if (el) {
      el.scrollTop = scrollTop
    } else {
      document.documentElement.scrollTop = scrollTop
      document.body.parentNode.scrollTop = scrollTop
      document.body.scrollTop = scrollTop
    }
  }
  function scrollToYFn(el, start = 0, to, duration = 500, callback) {
    start = getScrollTop(el) || 0
    const change = to - start
    const increment = 20
    let currentTime = 0
    duration = typeof duration === 'undefined' ? 500 : duration
    const _animateScroll = () => {
      currentTime += increment
      let val = _easeInOutQuad(currentTime, start, change, duration)
      elMoveY(el, val)
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
  scrollToYFn(el, start, to, duration, callback)
}

export default scrollToY
