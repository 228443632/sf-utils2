/**
 * 获取全局globalThis
 * @return {Window|(WorkerGlobalScope & Window)|*}
 */
function getGlobalThis() {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw new Error('unable to locate global object')
}

export default getGlobalThis
