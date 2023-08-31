/**
 * 使用 JavaScript 漂亮打印 JSON 对象
 * @param {object|any[]} obj 原对象
 * @param {(key: string, value: any) => any} replacer  转换七
 * @param {space?: string | number} space 空格
 * @return {*}
 */
function stringifyPrettierJSON(obj, replacer = null, space = 2) {
  return JSON.stringify(obj, replacer, space)
}

export default stringifyPrettierJSON
