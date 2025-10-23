import camelCase from 'sf-utils2/string/camelCase'

/**
 * 小驼峰命名，开头是小写
 * @param {string} str
 * @return {string}
 */
function lowerCamelCase(str) {
  str = camelCase(str)
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export default lowerCamelCase

// console.log(lowerCamelCase('user-name')); // 结果：UserName
// console.log(lowerCamelCase('hello-world_name')); // 结果：HelloWorldName
// console.log(lowerCamelCase('cell_item')); // 结果：CellItem
// console.log(lowerCamelCase('USER_ITEM')); // 结果：USERITEM
// console.log(lowerCamelCase('bianpeng_fei')); // 结果：BianpengFei
