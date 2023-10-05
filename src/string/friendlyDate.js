/**
 * 时间友好格式化
 * @param {Date|string|number} time 时间
 * @return {string}
 * @example
 * const time1 = friendlyDate("2023-09-23 16:12:12"),
 * const time2 = friendlyDate("2023-09-22 11:12:12"),
 * const time3 = friendlyDate("2022-11-23 11:22:24");
 * console.log(time1); // 刚刚
 * console.log(time2); // 1天前
 * console.log(time3); // 10月前
 */
function friendlyDate(time = new Date()) {
  let now = new Date().getTime(), // 当前时间
    newTime = new Date(time).getTime(), // 参数时间
    diff = (now - newTime) / 1000 // 时间差值
  let numberList = [
    60, // 超过1分钟
    60 * 60, // 超过1小时
    60 * 60 * 24, // 超过1天
    60 * 60 * 24 * 30, // 超过1月
    60 * 60 * 24 * 365, // 超过1年
    60 * 60 * 24 * 365 * 100, // 超过1个世纪
    60 * 60 * 24 * 365 * 100 * 10, // 超过1千年
    60 * 60 * 24 * 365 * 100 * 100, // 超过1万年
    60 * 60 * 24 * 365 * 100 * 100 * 10000 // 超过1亿年
  ]
  let index, number, result // 类型|数值|结果
  for (let i = 0; i < numberList.length; i++) {
    if (diff < numberList[i]) {
      index = i
      number = i === 0 ? 0 : diff / numberList[i - 1]
      break
    }
  }
  number = parseInt(number)
  let types = ['刚刚', '分钟前', '小时前', '天前', '月前', '年前', '世纪前', '千年前', '万年前', '亿年前']
  result = index == 0 ? types[0] : `${number}${types[index]}`
  return result
}

export default friendlyDate
