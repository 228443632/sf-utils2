/**
 * 截流函数
 * @param {function} fn 回调方法
 * @param {number} wait 等待时间 默认值 20 毫秒
 */
function throttle(fn, wait = 20) {
  let startTime = 0
  return function () {
    let now = Date.now()
    let resTime = now - startTime
    if (resTime >= wait) {
      fn.apply(this, arguments)
      startTime = now
    }
  }
}

export default throttle
