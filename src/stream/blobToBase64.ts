/**
 * 将blob对象序列化为base64
 * @param blob
 */
async function blobToBase64(blob: Blob): Promise<string> {
  if (!(blob instanceof Blob)) return Promise.reject('传入的参数blob非Blob对象')
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = e => reject(e)
    reader.readAsDataURL(blob)
  })
}

export default blobToBase64
