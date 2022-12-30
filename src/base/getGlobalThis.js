/**
 * @Description: 获取全局的 globalThis
 * @Author bianpengfei
 * @create 2022/4/4 19:35
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
