import { TFunction } from 'sf-utils2/_types/_helperTreeBaseType.ts'

/**
 * 将 `func` 的调用推迟到当前调用栈清空之后。当调用 `func` 时，任何额外的参数都会传递给它。
 *
 * @param {F} func 要推迟调用的函数。
 * @param {Parameters<F>} args 调用 `func` 时提供的参数。
 * @returns {number} 返回定时器ID。
 *
 * @example
 * defer((text) => {
 *   console.log(text);
 * }, 'deferred');
 * // => 在当前调用栈清空后记录 'deferred'。
 *
 * @version 3.3.0-beta11
 */
function defer<F extends TFunction>(func: F, ...args: Parameters<F>): number {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return setTimeout(func, 1, ...args)
}

export default defer
