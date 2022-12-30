/**
 * 防抖函数
 * @param {function} fn 回调函数
 * @param {number} wait 等待时间，默认值是300毫秒
 */
function debounce(fn, wait = 300) {
  let timer = null
  return function () {
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

export default debounce
