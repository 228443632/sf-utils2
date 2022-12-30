import debounce from '../base/debounce'

/**
 * 函数节流装饰器
 * @param {number} wait 节流的毫秒
 */
function debounceDtor(wait = 300) {
  return function (target, name, descriptor) {
    descriptor.value = debounce(descriptor.value, wait)
  }
}

export default debounceDtor
