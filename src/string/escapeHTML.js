/**
 * 转义HTML
 * @param {String} str
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
