/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 12/06/25 PM8:44
 */

/**
 * 将blob对象读取文本内容
 * @param blob
 */
async function blobToText(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = e => reject(e)
    reader.readAsText(blob)
  })
}

export default blobToText
