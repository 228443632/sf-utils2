/**
 * 删除字符串中的HTMl标签
 * @param {String} str
 * @return {*}
 * @example
 * stripHTMLTags(`<div>234242<i>---</i>></div>`) => 234242--->
 */
function stripHTMLTags(str) {
  return str.replace(/<[^>]*>/g, '')
}

export default stripHTMLTags
