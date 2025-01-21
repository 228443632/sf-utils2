/**
 * 表示一个操作超时的错误类。
 * @augments Error 继承自 JavaScript 内置的 Error 类。
 */
class TimeoutError extends Error {
  /**
   * 创建一个新的 TimeoutError 实例。
   *
   * @param {string} [message='The operation was timed out'] - 错误信息，默认为 'The operation was timed out'。
   */
  constructor(message = 'The operation was timed out') {
    // 调用父类（Error）的构造函数并传递消息参数。
    super(message)

    // 设置错误名称为 'TimeoutError'，这有助于在捕获异常时识别错误类型。
    this.name = 'TimeoutError'
  }
}

export default TimeoutError
