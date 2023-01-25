/**
 * 转义HTML
 * @param {string} str
 * @version v3.0.10+
 * @return {*}
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
