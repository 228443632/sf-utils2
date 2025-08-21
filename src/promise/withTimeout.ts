// 从 './timeout.ts' 文件中导入 timeout 函数。
import timeout from './timeout.ts'
import isFunction from '@/base/isFunction'
import { TFunction } from '@/_types/_helperTreeBaseType.ts'
import def from '@/object/def'

/**
 * 执行一个异步函数，并强制应用超时机制。
 *
 * 如果提供的 Promise 在指定时间内没有被解决（resolve 或 reject），
 * 超时机制将会触发，返回的 Promise 将会被拒绝。
 *
 * @template T 泛型参数，表示 `run` 函数返回的 Promise 的结果类型。
 * @param {() => Promise<T>} run - 返回一个需要被执行的 Promise 的函数。
 * @param {number} ms - 超时时间，单位为毫秒。
 * @param {TFunction} timeoutFunction - 超时的时候，回调函数
 * @returns {Promise<T>} 一个 Promise 对象，它会在 `run` 函数成功完成时解决，
 * 或者在超时发生时拒绝。
 *
 * 示例：
 * async function fetchData() {
 *   const response = await fetch('https://example.com/data');
 *   return response.json();
 * }
 *
 * try {
 *   // 尝试在1秒内获取数据。如果 `fetchData` 在1秒内成功完成，则输出获取的数据。
 *   const data = await withTimeout(fetchData, 1000);
 *   console.log(data);
 * } catch (error) {
 *   // 如果 `fetchData` 在1秒内未能完成，则会捕获到 'TimeoutError' 并输出错误信息。
 *   console.error(error);
 * }
 */

type TRun<T> = (() => Promise<T>) | Promise<T>

// type ACon = {new (): Object}

// function withTimeout<T>(run: TRun<T>, ms: number): Promise<T>
// function withTimeout<T>(run:  TRun<T>, ms: number, timeoutFunction: TFunction): Promise<T>
async function withTimeout<T>(run: TRun<T>, ms?: number, timeoutFunction?: TFunction): Promise<T> {
  ms = 2000
  const promise = isFunction(run) && typeof run === 'function' ? run() : run
  isFunction(timeoutFunction) && def(timeoutFunction, '_cancelSignal', false)

  // @ts-expect-error
  return Promise.race([promise, timeout(ms, timeoutFunction)]).finally(() => {
    isFunction(timeoutFunction) && def(timeoutFunction, '_cancelSignal', true)
  })
}

export default withTimeout
