import isBrowser from '@/base/isBrowser'

/**
 * 获取ie 版本
 * @type {number|undefined}
 * @private
 */
export const _ieVersion = isBrowser() ? Number(document.documentMode) : undefined

/**
 * 观察DOM树结构发生变化（兼容）
 */
export const _MutationObserver = isBrowser()
  ? window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  : undefined

/**
 * 滚动趋势
 * @param t
 * @param b
 * @param c
 * @param d
 * @returns {*}
 */
export const _easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

/**
 * 兼容补间动画
 */
export const _requestAnimationFrame = (function () {
  if (isBrowser()) {
    const support = {
      animationFrame: (
        window?.requestAnimationFrame ||
        window?.mozRequestAnimationFrame ||
        window?.webkitRequestAnimationFrame ||
        window?.msRequestAnimationFrame ||
        window?.oRequestAnimationFrame
      ).bind(window)
    }
    return (
      support.animationFrame ||
      function (callback) {
        window?.setTimeout(callback, 1000 / 60)
      }
    )
  }
  return undefined
})()

/**
 * 取消补间动画
 */
export const _cancelAnimationFrame = (function () {
  if (isBrowser()) {
    return (
      window?.cancelAnimationFrame ||
      window?.mozCancelAnimationFrame ||
      window?.cancelRequestAnimationFrame ||
      function (id) {
        clearTimeout(id)
      }
    )
  }
})()

export default {
  _ieVersion,
  _MutationObserver,
  _easeInOutQuad,
  _requestAnimationFrame,
  _cancelAnimationFrame
}
