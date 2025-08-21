import TimeoutError from '../error/TimeoutError.ts'
import sleep from '@/function/sleep'
import { TFunction } from '@/_types/_helperTreeBaseType.ts'
import isFunction from '@/base/isFunction'

/**
 * 返回一个在指定延迟后拒绝并抛出 `TimeoutError` 的 Promise。
 *
 * @param {number} ms - 延迟时间，单位为毫秒。
 * @param func
 * @returns {Promise<never>} 一个在指定延迟后拒绝并抛出 `TimeoutError` 的 Promise。
 * @throws {TimeoutError} 在指定延迟后抛出 `TimeoutError`。
 *
 * 示例：
 * try {
 *   await timeout(1000); // 1秒后抛出超时异常
 * } catch (error) {
 *   console.error(error); // 将会输出 'The operation was timed out'
 * }
 */
async function timeout(ms: number, func?: TFunction): Promise<never> {
  // 调用 delay 函数等待指定的毫秒数，之后抛出一个新的 TimeoutError 异常。
  await sleep(ms)
  if (func && isFunction(func) && !func._cancelSignal) func()
  throw new TimeoutError()
}

export default timeout
