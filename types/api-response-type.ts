/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 11/08/25 AM9:57
 */

/**
 * 接口返回数据类型
 */
export interface IApiResponseType<T = any> {
  /** code码 */
  code: 200 | 500 | ({} & number)

  /** 错误提示信息 */
  message?: string

  /** 数据 */
  data: T

  responseId?: string
  responseTime?: number
}

/**
 * 错误信息
 */
export type TToError = Error & { message: string }

/**
 * to 函数的返回值
 */
export type TToTupleRes = [IApiResponseType, TToError]

export default {}
