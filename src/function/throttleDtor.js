import throttle from 'sf-utils2/function/throttle'

/**
 * 函数防抖装饰器
 * @param {number} wait 需要延迟的毫秒数。
 * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行} 默认在定时器之前执行 leading = true
 */
function throttleDtor(wait = 20, options) {
  return function (target, name, descriptor) {
    descriptor.value = throttle(descriptor.value, wait, options)
  }
}

export default throttleDtor
