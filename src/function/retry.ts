import sleep from '@/function/sleep'
import isFunction from '@/base/isFunction'
import isNumber from '@/base/isNumber'

interface RetryOptions {
  /**
   * 每次重试之间的间隔延迟，单位为毫秒。
   * @default 0
   */
  interval?: number

  /**
   * 尝试重试的次数。
   * @default Number.POSITIVE_INFINITY
   */
  retries?: number

  /**
   * 用于取消重试操作的 AbortSignal。
   */
  signal?: AbortSignal
}

const DEFAULT_DELAY = 0
const DEFAULT_RETRIES = Number.POSITIVE_INFINITY

/**
 * 重试一个返回 Promise 的函数，直到它成功解析。
 *
 * @template T
 * @param {() => Promise<T>} func - 要重试的函数。
 * @returns {Promise<T>} 一个在函数成功调用后解析的 Promise。
 *
 * @example
 * // 使用默认重试选项的基本用法
 * retry(() => fetchData()).then(data => console.log(data));
 */
async function retry<T>(func: () => Promise<T>): Promise<T>
async function retry<T>(func: Promise<T>): Promise<T>

/**
 * 重试一个返回 Promise 的函数指定次数。
 *
 * @template T
 * @param {() => Promise<T>} func - 要重试的函数。它应该返回一个 Promise。
 * @param {number} retries - 尝试重试的次数。默认是 Infinity。
 * @returns {Promise<T>} 一个在函数成功调用后解析的 Promise。
 *
 * @example
 * // 最多重试3次
 * retry(() => fetchData(), 3).then(data => console.log(data));
 */
async function retry<T>(func: () => Promise<T>, retries: number): Promise<T>
async function retry<T>(func: Promise<T>, retries: number): Promise<T>

/**
 * 使用指定选项重试一个返回 Promise 的函数。
 *
 * @template T
 * @param {() => Promise<T>} func - 要重试的函数。它应该返回一个 Promise。
 * @param {RetryOptions} options - 配置重试行为的选项。
 * @param {number} [options.delay=0] - 每次重试之间等待的毫秒数。
 * @param {number} [options.retries=Infinity] - 尝试重试的次数。
 * @param {AbortSignal} [options.signal] - 用于取消重试操作的 AbortSignal。
 * @returns {Promise<T>} 一个在函数成功调用后解析的 Promise。
 *
 * @example
 * // 在每次尝试之间有1000ms的延迟，并最多重试5次
 * retry(() => fetchData(), { delay: 1000, retries: 5 }).then(data => console.log(data));
 */
async function retry<T>(func: () => Promise<T>, options: RetryOptions): Promise<T>
async function retry<T>(func: Promise<T>, options: RetryOptions): Promise<T>

/**
 * 使用指定选项重试一个返回 Promise 的函数。
 *
 * @template T
 * @param {() => Promise<T>} func - 要重试的函数。它应该返回一个 Promise。
 * @param {number | RetryOptions} [_options] - 重试次数或选项对象。
 * @returns {Promise<T>} 一个在函数成功调用后解析的 Promise。
 */
async function retry<T>(func: (() => Promise<T>) | Promise<T>, _options?: number | RetryOptions): Promise<T> {
  let interval: number
  let retries: number
  let signal: AbortSignal | undefined
  let intervalMs: number | undefined

  if (typeof _options === 'number') {
    interval = DEFAULT_DELAY
    retries = +_options + 1
    signal = undefined
  } else {
    interval = _options?.interval ?? DEFAULT_DELAY
    retries = _options?.retries ?? DEFAULT_RETRIES
    signal = _options?.signal
    retries += 1
  }

  let error

  for (let i = 0; i < retries; i++) {
    if (signal?.aborted) {
      throw error ?? new Error(`由于接收到中止信号，重试操作被取消。`)
    }

    // @ts-expect-error
    const _innerPromise = isFunction(func) ? func() : func

    try {
      return await _innerPromise
    } catch (err) {
      error = err
      isNumber(interval) && interval > 0 && (await sleep(interval))
    }
  }

  throw error
}

export default retry
