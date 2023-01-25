/**
 * 转义HTML
 * @param {string} str
 * @version v3.0.10+
 * @return {*}
 * @example
 * escapeHTML(`<div><input/>测试</div>`) => &lt;div&gt;&lt;input/&gt;测试&lt;/div&gt;
 */
function escapeHTML(str) {
  return str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  )
}

export default escapeHTML
