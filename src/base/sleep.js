/**
 * 休眠
 * @param {Number} duration ms
 * @returns {Promise<unknown>}
 */
function sleep(duration = 200) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default sleep
