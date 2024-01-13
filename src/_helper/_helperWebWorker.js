import isFunction from '@/base/isFunction'

/**
 * 创建一个 Web Work 实例
 * @param { (e: any) => void} func
 * @param {object} [options]
 * @param {RequestCredentials} [options.RequestCredentials]
 * @param {WorkerType} [options.type]
 * @param {string} [options.name]
 */
export function createWorker(func, options) {
  if (!isFunction(func)) return console.log(`[createWorker]传入的参数需为函数`)
  const blob = new Blob([`(${func.toString()})()`])
  const url = window.URL.createObjectURL(blob)
  const worker = new Worker(url, options)
  window.URL.revokeObjectURL(url)
  return worker
}

/**
 * 关闭worker
 * @param {Worker} worker
 */
export function closeWorker(worker) {
  worker?.terminate?.()
}

export default {}
