import merge from '@/object/merge'

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
