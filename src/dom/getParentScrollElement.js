import getStyle from './getStyle'

/**
 * 获取当前元素在哪个父元素滚动视图，如果当前Dom元素正好是滚动视图，返回自己；否则返回最近的上级滚动的视图容器
 * @param {HTMLElement} targetElement 目标元素
 * @returns {{HTMLElement}|null}
 */
function getParentScrollElement(targetElement = null) {
  const cb = (targetElement = null, scrollView = { el: null }) => {
    if (['BODY', 'HTML'].includes(targetElement?.tagName)) {
      scrollView.el = document.documentElement || document?.body
    } else if (
      targetElement &&
      (getStyle(targetElement, 'overflow-y') == 'auto' || getStyle(targetElement, 'overflow-x') == 'auto')
    ) {
      scrollView.el = targetElement
      scrollView.el = targetElement
    } else if (targetElement?.parentElement) {
      cb(targetElement.parentElement, scrollView)
    }
    return scrollView
  }
  const { el } = cb(targetElement)
  return el
}

export default getParentScrollElement
