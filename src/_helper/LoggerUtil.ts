/**
 * @Description: 新的日志记录器类
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 25/02/25 PM8:30
 */
// @ts-nocheck

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
  private infoFuncName = 'info'
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
    this.updateProxy()
  }

  private updateProxy() {
    this.error = Function.prototype.bind.call(this.console[this.errorFuncName], this.console, this._prefix ?? undefined)
    this.success = Function.prototype.bind.call(this.console[this.logFuncName], this.console, this._prefix ?? undefined)
    this.info = Function.prototype.bind.call(this.console[this.infoFuncName], this.console, this._prefix ?? undefined)
    this.log = Function.prototype.bind.call(this.console[this.logFuncName], this.console, this._prefix ?? undefined)
    this.warn = Function.prototype.bind.call(this.console[this.warnFuncName], this.console, this._prefix ?? undefined)
  }

  get _prefix() {
    return this.prefix ? `[${this.prefix}]` : ''
  }

  /**
   * 错误日志
   * @param {...any[]} args - 要打印的日志信息
   */
  error:
    | typeof console.error
    /**
     * 成功日志
     * @param {...any[]} args - 要打印的日志信息
     */
    | undefined

  /**
   * 成功日志
   * @param {...any[]} args - 要打印的日志信息
   */
  success: typeof console.log

  /**
   * 普通信息日志
   * @param {...any[]} args - 要打印的日志信息
   */
  info: typeof console.log

  /**
   * 普通信息日志
   * @param {...any[]} args - 要打印的日志信息
   */
  log: typeof console.log

  /**
   * 警告日志
   * @param {...any[]} args - 要打印的日志信息
   */
  warn: typeof console.warn

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
   * @param label
   */
  timeRecords(label: string) {
    return {
      /**
       * 记录时间
       */
      time: Function.prototype.bind.call(
        this.console[this.timeFuncName],
        this.console,
        [this._prefix, label].filter(isNoNullable).join('')
      ),

      timeEnd: Function.prototype.bind.call(
        this.console[this.timeEndFuncName],
        this.console,
        [this._prefix, label].filter(isNoNullable).join('')
      )
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
