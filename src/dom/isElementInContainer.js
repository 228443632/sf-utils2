/**
 * 判断是否元素el位置在 container容器里
 * @param el
 * @param container
 * @returns {boolean}
 */
function isElementInContainer(el, container) {
  if (!el || !container) return false
  const elRect = el.getBoundingClientRect()
  let containerRect
  if ([window, document, document?.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window?.innerWidth,
      bottom: window?.innerHeight,
      left: 0
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  )
}

export default isElementInContainer
