/**
 * 删除字符串中的HTMl标签
 * @param {string} str
 * @version v3.0.10+
 * @return {*}
 * @example
 * stripHTMLTags(`<div>234242<i>---</i>></div>`) => 234242--->
 */
function stripHTMLTags(str) {
  return str.replace(/<[^>]*>/g, '')
}

export default stripHTMLTags
