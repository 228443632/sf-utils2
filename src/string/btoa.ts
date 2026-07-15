/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2026 7月 15 15:55
 */
import getGlobalThis from 'sf-utils2/base/getGlobalThis'

export const global = getGlobalThis()

/**
 * 对原生浏览器btoa 进行了扩展，支持中文字符
 * @param data
 */
export default function btoa(data: string) {
  const btoaFunc = global.btoa as typeof window['btoa']
  if (!btoaFunc) throw new Error('btoa is not supported')

  if (typeof data !== 'string') {
    throw new TypeError("Failed to execute 'btoa' on 'Window': The first argument must be a string")
  }

  const encodeData = new TextEncoder().encode(data)
  let binaryText = ''
  encodeData.forEach(byte => (binaryText += String.fromCharCode(byte)))
  return btoaFunc(binaryText)
}

// alert(btoa('hello 卞鹏飞'))
