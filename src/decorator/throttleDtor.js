import throttle from '../base/throttle'

/**
 * 函数防抖装饰器
 * @param {number} wait 需要延迟的毫秒数。
 */
function throttleDtor(wait = 20) {
  return function (target, name, descriptor) {
    descriptor.value = throttle(descriptor.value, wait)
  }
}

export default throttleDtor
