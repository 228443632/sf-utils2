/**
 * 检查指定的元素是否在视口中可见。
 * @param el 目标元素
 * @param elScrollView 滚动区域元素
 * @param partiallyVisible 是否部分显示
 * @param direction 方向 可选值  horizontal（水平）  vertical（垂直）， 默认值 vertical
 * @param offsetTop 顶部偏移量
 * @param offsetBottom 底部偏移量
 * @param offsetLeft 左部偏移量
 * @param offsetRight  右部偏移量
 * @returns {boolean}
 */
function isElementVisibleInViewport({
  el,
  elScrollView,
  partiallyVisible = true,
  direction = 'vertical', // horizontal  vertical
  offsetTop = 0,
  offsetBottom = 0,
  offsetLeft = 0,
  offsetRight = 0
}) {
  if (!elScrollView) {
    elScrollView = document.documentElement || document.body
  }
  const elRect = el.getBoundingClientRect()
  const elScrollViewRect = elScrollView.getBoundingClientRect()
  if (direction === 'vertical') {
    return partiallyVisible
      ? elRect.bottom > elScrollViewRect.top + offsetTop && elRect.top < elScrollViewRect.bottom + offsetBottom
      : elRect.top > elScrollViewRect.top + offsetTop && elRect.bottom < elScrollViewRect.bottom + offsetBottom
  } else if (direction === 'horizontal') {
    return partiallyVisible
      ? elRect.right > elScrollViewRect.left + offsetLeft && elRect.left < elScrollViewRect.right + offsetRight
      : elRect.left > elScrollViewRect.left + offsetLeft && elRect.right < elScrollViewRect.right + offsetRight
  }
}

export default isElementVisibleInViewport
