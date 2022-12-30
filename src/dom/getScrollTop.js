/**
 * 获取dom的 scrollTop
 * @param {HTMLElement} el
 * @returns {number|*}
 */
function getScrollTop(el) {
  if (el) {
    return el.scrollTop
  }
  return document?.documentElement.scrollTop || document?.body.parentNode.scrollTop || document?.body.scrollTop
}

export default getScrollTop
