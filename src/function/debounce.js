/**
 * 防抖函数,函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
 * 默认在定时器之后执行
 *
 * @param {Function} callback 回调
 * @param {number} wait 多少秒毫 默认值是300毫秒
 * @param {{ leading?: false, trailing?: true } | Boolean} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
 * @return {Function}
 */
function debounce(callback, wait = 300, options = { leading: false, trailing: true }) {
  let args, context
  let opts = options || {}
  let runFlag = false
  let isDestroy = false
  let timeout = 0
  let isLeading = typeof options === 'boolean'
  let optLeading = 'leading' in opts ? opts.leading : isLeading
  let optTrailing = 'trailing' in opts ? opts.trailing : !isLeading
  let runFn = function () {
    if (!isDestroy) {
      runFlag = true
      timeout = 0
      callback.apply(context, args)
    }
  }
  let endFn = function () {
    if (optLeading === true) {
      timeout = 0
    }
    if (!isDestroy && !runFlag && optTrailing === true) {
      runFn()
    }
  }
  let cancelFn = function () {
    let rest = timeout !== 0
    clearTimeout(timeout)
    args = null
    context = null
    timeout = 0
    return rest
  }
  let debounced = function () {
    runFlag = false
    args = arguments
    context = this
    if (timeout === 0) {
      if (optLeading === true) {
        runFn()
      }
    } else {
      clearTimeout(timeout)
    }
    timeout = setTimeout(endFn, wait)
  }
  debounced.cancel = cancelFn
  return debounced
}

export default debounce
