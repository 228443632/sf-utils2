import merge from 'sf-utils2/object/merge'

/**
 * @type {{tmplRE: undefined}}
 */
const defaultOpts = {
  tmplRE: undefined
}

/**
 * 模版字符串
 * @param {string} str
 * @param {Object} data
 * @param {defaultOpts} options
 * @return {*}
 * @example
 * template(`<div>姓名：{{userName}}，年纪：{{age}}</div>`, {userName: '张三', age: 10})
 * =>
 * <div>姓名：张三，年纪：10</div>
 *
 */
function template(str, data = {}, options = defaultOpts) {
  const defaultOpts = {
    tmplRE: undefined
  }
  const opts = merge({}, options, defaultOpts)
  return str.replace(opts.tmplRE || /\{{2}([.\w[\]\s]+)\}{2}/g, function (match, key) {
    return data?.[key]
  })
}

export default template
