import isFunction from '@/base/isFunction'
import isArray from '@/base/isArray'
import isPlainObject from '@/base/isObject'
import isMap from '@/base/isMap'
import isSet from '@/base/isSet'

/**
 * 创建一个 Web Work 实例
 * @param { (e: any) => void} func
 * @param {object} [options]
 * @param {RequestCredentials} [options.RequestCredentials]
 * @param {WorkerType} [options.type]
 * @param {any[]} [options.funcArgs]
 * @param {string} [options.name]
 */
export function createWorker(func, options) {
  if (!isFunction(func)) return console.log(`[createWorker]传入的参数需为函数`)
  const funcArgs = options?.funcArgs || []
  const argsString = funcArgs
    .map(v => {
      if (isPlainObject(v) || isArray(v)) return JSON.stringify(v)
      if (isMap(v)) return JSON.stringify(v.entries())
      if (isSet(v)) return JSON.stringify(Array.from(v))
      return v
    })
    .join(',')
  const blob = new Blob([`(${func.toString()})(${argsString})`])
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
