/**
 * 洗牌算法随机
 * @param {array} array
 * @return {*[]}
 */
function shuffle(array = []) {
  let result = [],
    random
  while (array.length > 0) {
    random = Math.floor(Math.random() * array.length)
    result.push(array[random])
    array.splice(random, 1)
  }
  return result
}

export default shuffle
