/**
 * @Description: 新的日志记录器类
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 25/02/25 PM8:30
 */

import getGlobalThis from 'sf-utils2/base/getGlobalThis'
import isNoNullable from 'sf-utils2/base/isNoNullable'
import isString from 'sf-utils2/base/isString'
// import noop from 'sf-utils2/function/noop'

const globalThis = getGlobalThis()
/**
 * 日志记录器类
 */
export class LoggerUtil {
  private prefix: string

  private logFuncName = 'log'
  private errorFuncName = 'error'
  private warnFuncName = 'warn'
  private timeFuncName = 'time'
  private timeEndFuncName = 'timeEnd'
  // eslint-disable-next-line no-undef
  private console: typeof console = globalThis['console']

  /**
   * 构造函数
   * @param {string} [prefix] - 日志前缀
   */
  constructor(prefix?: string) {
    this.prefix = prefix || ''
  }

  get _prefix() {
    return this.prefix ? `[${this.prefix}]` : ''
  }

  /**
   * 错误日志
   * @param {...any[]} args - 要打印的日志信息
   */
  error(...args: any[]): void {
    this.console[this.errorFuncName](...[this._prefix, ...args].filter(isNoNullable))
  }

  /**
   * 成功日志
   * @param {...any[]} args - 要打印的日志信息
   */
  success(...args: any[]): void {
    this.console[this.logFuncName](...[this._prefix, ...args].filter(isNoNullable))
  }

  /**
   * 普通信息日志
   * @param {...any[]} args - 要打印的日志信息
   */
  info(...args: any[]): void {
    this.console[this.logFuncName](`${this.prefix}:`, ...args)
  }

  /**
   * 普通信息日志
   * @param {...any[]} args - 要打印的日志信息
   */
  log(...args: any[]): void {
    this.console[this.logFuncName](`[${this.prefix}]:`, ...args)
  }

  /**
   * 警告日志
   * @param {...any[]} args - 要打印的日志信息
   */
  warn(...args: any[]): void {
    this.console[this.warnFuncName](...[this._prefix, ...args].filter(isNoNullable))
  }

  /**
   * 记录时间
   * @param args
   */
  time(...args: any[]): void {
    this.console[this.timeFuncName]([this._prefix, ...args].filter(isNoNullable).join(''))
  }

  /**
   * 记录时间
   * @param args
   */
  timeEnd(...args: any[]): void {
    this.console[this.timeEndFuncName]([this._prefix, ...args].filter(isNoNullable).join(''))
  }

  /**
   * 时间组合
   * @param args
   */
  timeRecords(...args: any[]) {
    return {
      /**
       * 记录时间
       */
      time: (): void => {
        console.time([this.prefix, ...args].filter(isNoNullable).join(''))
      },

      timeEnd: (): void => {
        console.timeEnd([this.prefix, ...args].filter(isNoNullable).join(''))
      }
    }
  }
}

class AppRuntimeError extends Error {
  constructor(m) {
    super(m)
    this.name = 'custom'
  }
}

/**
 * 错误日志提醒
 * @param {string} scope
 * @param {string} m
 */
export function throwError(scope, m) {
  throw new AppRuntimeError(`[${scope}] ${m}`)
}

/**
 * 错误提示
 * @param {string}scope
 * @param {string} message
 */
export function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== 'production') {
    const error = isString(scope) ? new AppRuntimeError(`[${scope}] ${message}`) : scope
    console.warn(error)
  }
}

export default { debugWarn, throwError }
