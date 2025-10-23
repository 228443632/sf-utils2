/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 23/08/25 AM11:14
 */

/**
 * 生成UUId
 * @returns {string}
 */
function simpleUUID() {
  // xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default simpleUUID
