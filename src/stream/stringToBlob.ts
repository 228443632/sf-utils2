/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 12/06/25 PM11:23
 */
import type { TBaseBlobArrayBufferTransferOptions } from '@/_types/_helperTreeBaseType.ts'

/**
 * 反序列化blob
 * @param binaryString 二进制数据字符串
 * @param options
 */
async function stringToBlob(binaryString: string, options?: TBaseBlobArrayBufferTransferOptions): Promise<Blob> {
  options ||= {}
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return new Blob([bytes], { type: options?.mimeType })
}

export default stringToBlob
