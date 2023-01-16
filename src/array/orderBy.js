import isArray from '@/base/isArray'
import isNullable from '@/base/isNullable'

/**
 * 比较 从大到小
 * @param {String[]} c 对象属性名
 * @return {(function(*, *): void)|*}
 */
function compareAse(c = []) {
  return (a, b) => {
    let i = 0
    let curKey = c[i]
    if (curKey) {
      while (i < c.length && curKey) {
        if (a[curKey] !== b[curKey] || (isNullable(a[curKey]) && isNullable(b[curKey]))) {
          break
        }
        curKey = c[++i]
      }
      return a[curKey] < b[curKey] ? -1 : 1
    }
    return a < b ? -1 : 1
  }
}

/**
 * 比较 从小到大
 * @param {String} c 对象属性名
 * @return {(function(*, *): void)|*}
 */
function compareDesc(c) {
  return (a, b) => {
    let i = 0
    let curKey = c[i]
    if (curKey) {
      while (i < c.length && curKey) {
        if (a[curKey] !== b[curKey] || (isNullable(a[curKey]) && isNullable(b[curKey]))) {
          break
        }
        curKey = c[++i]
      }
      return a[curKey] < b[curKey] ? 1 : -1
    }
    return a < b ? 1 : -1
  }
}

const directionsType = {
  ase: compareAse, // 从小到大
  desc: compareDesc, // 从大到小
  up: compareAse, // 从小到大
  down: compareDesc // 从大到小
}

/**
 * 排序
 * @param {Object[]|String[]|Number[]} list
 * @param {String[]} properties
 * @param {('ase' | 'desc' | 'up' | 'down')[]} directions
 * @example
 *   var users = [
 *     { 'user': 'fred',   'age': 48 },
 *     { 'user': 'barney', 'age': 34 },
 *     { 'user': 'fred',   'age': 40 },
 *     { 'user': 'barney', 'age': 90 }
 *   ];
 *
 *   // 以 `user` 升序排序 再  `age` 以降序排序。
 *   console.log($sf.orderBy(users, ['user', 'age']));
 */
function orderBy(list = [], properties = [], directions = []) {
  if (isArray(list)) {
    const direct = String(directions[0])?.toLowerCase()
    const compareFn = directionsType[direct] || compareAse
    list.sort(compareFn(properties))
  }
  return list
}

export default orderBy
