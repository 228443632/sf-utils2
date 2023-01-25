/**
 * 休眠
 * @param {number} duration ms
 * @returns {Promise<unknown>}
 */
function sleep(duration = 200) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default sleep
