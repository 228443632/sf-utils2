/**
 * 获取dom在滚动区域绝对位置top
 * @param el dom节点属性（id、class）或 目标dom元素
 * @param elWrap 滚动dom节点
 * @param offsetTop 偏移量
 * */
function getAbsOffsetTop(el, elWrap, offsetTop = 0) {
  if (!el || !elWrap) return 0
  if (typeof el == 'string') {
    el = document?.querySelector(el)
  }
  if (typeof elWrap == 'string') {
    elWrap = document?.querySelector(elWrap)
  }
  if (!el || !elWrap) return 0
  const elRect = el.getBoundingClientRect()
  const elWrapRect = elWrap.getBoundingClientRect()
  return ~~elRect.top - ~~elWrapRect.top + ~~elWrap.scrollTop - ~~offsetTop
}

export default getAbsOffsetTop
