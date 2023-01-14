import noop from '@/function/noop'

/**
 * 确保函数只调用一次。
 * @param {Function} fn
 * @return {(function(): void)|*}
 */
function once(fn = noop) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

export default once
