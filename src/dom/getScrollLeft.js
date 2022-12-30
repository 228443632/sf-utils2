/**
 * 获取dom的scrollLeft
 * @param {HTMLElement} el
 * @returns {number|*}
 */
function getScrollLeft(el) {
  if (el) {
    return el.scrollLeft
  }
  return document?.documentElement.scrollLeft || document?.body.parentNode.scrollLeft || document?.body.scrollLeft
}

export default getScrollLeft
