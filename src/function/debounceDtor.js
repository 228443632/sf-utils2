import debounce from 'sf-utils2/function/debounce'

/**
 * 函数节流装饰器
 * @param {number} wait 节流的毫秒
 * @param {Object|Boolean} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行} 默认在定时器之后执行 trailing = true
 */
function debounceDtor(wait = 300, options) {
  return function (target, name, descriptor) {
    descriptor.value = debounce(descriptor.value, wait, options)
  }
}

export default debounceDtor
