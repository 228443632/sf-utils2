/**
 * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
 * 默认在定时器之前执行
 *
 * @param {Function} callback 回调
 * @param {Number} wait 多少秒毫 默认值 20 毫秒
 * @param {{ leading?: true, trailing?: false }} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
 * @return {Function}
 */
function throttle(callback, wait = 20, options = { leading: true, trailing: false }) {
  let args, context
  let opts = options || {}
  let runFlag = false
  let isDestroy = false
  let timeout = 0
  let optLeading = 'leading' in opts ? opts.leading : true
  let optTrailing = 'trailing' in opts ? opts.trailing : false
  let runFn = function () {
    if (!isDestroy) {
      runFlag = true
      callback.apply(context, args)
      timeout = setTimeout(endFn, wait)
    }
  }
  let endFn = function () {
    timeout = 0
    if (!isDestroy && !runFlag && optTrailing === true) {
      runFn()
    }
  }
  let cancelFn = function () {
    let rest = timeout !== 0
    clearTimeout(timeout)
    args = null
    context = null
    runFlag = false
    timeout = 0
    return rest
  }
  let throttled = function () {
    args = arguments
    context = this
    runFlag = false
    if (timeout === 0) {
      if (optLeading === true) {
        runFn()
      } else if (optTrailing === true) {
        timeout = setTimeout(endFn, wait)
      }
    }
  }
  throttled.cancel = cancelFn
  return throttled
}

export default throttle
