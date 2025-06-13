/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 12/06/25 PM8:44
 */

/**
 * 将字符串转成uint8array 对象，二进制
 * @param text
 */
async function textToArrayBuffer(text: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder()
  return encoder.encode(text).buffer
}

export default textToArrayBuffer
