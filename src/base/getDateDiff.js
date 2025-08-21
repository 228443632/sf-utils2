import isInteger from '@/base/isInteger'
import isString from '@/base/isString'
import isValidDate from '@/base/isValidDate'
import isDate from '@/base/isDate'

/**
 * 获取时间戳
 * @param {Date|String|number} val
 * @returns {undefined|number|*}
 */
function _helperTimeStamp(val) {
  if (isInteger(val) && String(val).length === 13) return val // 13位时间戳
  let date
  if (isDate(val)) {
    date = val
  } else if (isString(val)) {
    date = new Date(val)
  }
  if (isValidDate(date)) return date.getTime()
  return undefined
}

/**
 * 格式化时间戳间距  2日24时33分20秒
 * @param {number|String} startDate
 * @param {number|String} endDate
 * @returns {string}  2日24时33分20秒
 */
function getDateDiff(startDate, endDate = new Date().valueOf()) {
  const startTimeStamp = _helperTimeStamp(startDate)
  const endTimeStamp = _helperTimeStamp(endDate)
  if (endTimeStamp && startTimeStamp) {
    let result = {
      done: true,
      startTimeStamp,
      endTimeStamp,
      timeDiff: endTimeStamp - startTimeStamp,
      yyyy: undefined, // 年
      MM: undefined, // 月
      dd: undefined, // 日
      HH: undefined, // 小时
      mm: undefined, // 分钟
      ss: undefined, // 秒，
      text: undefined
    } // ,如果结束日期小于开始日期 done 为 fasle

    const diff = result.timeDiff
    const s = 1000
    const m = 60 * s // 分钟
    const h = 60 * m // 小时
    const d = 24 * h // 日

    let day = ~~(diff / d)
    let hour = ~~((diff % d) / h)
    let min = ~~(((diff % d) % h) / m)
    let second = ~~((((diff % d) % h) % m) / s)

    // result = {
    //   ...result,
    //   yyyy: undefined, // 年
    //   MM: undefined, // 月
    //   dd: undefined, // 日
    //   HH: undefined, // 小时
    //   mm: undefined, // 分钟
    //   ss: undefined, // 秒，
    // }

    return [
      day && day + '天',
      hour && hour + '时',
      min && String(min).padStart(2, '0') + '分',
      second && String(second).padStart(2, '0') + '秒'
    ]
      .filter(Boolean)
      .join('')
  }
  return undefined
}

export default getDateDiff
