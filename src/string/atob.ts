/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2026 7月 15 15:55
 */
import { global } from './btoa'

/**
 * 对原生浏览器atob 进行了扩展，支持中文字符
 * @param data
 */
export default function atob(data: string) {
  const atobFunc = global.atob as typeof window['atob']
  if (!atobFunc) throw new Error('atob is not supported')
  if (typeof data !== 'string') {
    throw new TypeError("Failed to execute 'atob' on 'Window': The first argument must be a string")
  }
  const decodeString = atobFunc(data)
  const bytes = Uint8Array.from(decodeString, c => c.charCodeAt(0))
  return new TextDecoder('utf-8').decode(bytes)
}

// alert(atob('aGVsbG8tLS3wn5iKIOiUoeW+kOWdpA=='))
