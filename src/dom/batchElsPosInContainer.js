import isString from '@/base/isString'
import trim from '@/string/trim'
import getAbsOffsetTop from './getAbsOffsetTop'

/**
 * 元素批量元素在 父的滚动视图位置（只针对 垂直滚动有效）
 * @param els 元素集合 {Array<NodeList> | Array<string>}
 * @param {HTMLElement} scrollDom 滚动的容器元素
 * @param offsetTop 顶部偏移量 {number}
 */
function batchElsPosInContainer({ els = [], scrollDom, offsetTop = 0 }) {
  if (!scrollDom) {
    scrollDom = document.documentElement || document.body
    console.error(
      '[warning] [function：batchElsPosInContainer] 中scrollDom 滚动视图没有设定值，默认使用document?.documentElement'
    )
  }
  const _els = els.map(v => {
    if (isString(v)) {
      return scrollDom.querySelector(v)
    }
    return v
  })
  const position = _els.map(el => {
    if (el) {
      return {
        top: getAbsOffsetTop(el, scrollDom, offsetTop),
        classList: trim(el.className)
          .replace(/[\s\uFEFF]+|[\s\uFEFF]/g, '|')
          .split('|'),
        el
      }
    }
    return {}
  })
  const compare = (a, b) => a.top - b.top
  position.sort(compare)
  return position
}

export default batchElsPosInContainer
