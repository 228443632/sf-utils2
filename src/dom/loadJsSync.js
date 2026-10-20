/**
 * 加载js 支持持的单个
 * @param {string} url js http链接🔗地址
 * @param callback  加载成功回调函数
 * @param {Object} [options] 选项
 * @param {boolean} [options.allowRepeatInsert] 是否允许重复插入，默认不允许重复插入(false)
 */
function loadJsSync(url = '', callback, options = {}) {
  const allowRepeatInsert = options?.allowRepeatInsert ?? false
  return new Promise(resolve => {
    if (!allowRepeatInsert) {
      const scripts = Array.from(document.scripts)
        .map(v => v.src)
        .filter(Boolean)
      if (scripts.find(v => v == url)) return resolve('已存在')
    }
    let script = document.createElement('script'),
      fn = callback || function () {}
    script.type = 'text/javascript'
    //IE
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null
          fn()
          resolve()
        }
      }
    } else {
      //其他浏览器
      script.onload = function () {
        fn()
        resolve()
      }
    }
    script.src = url
    document?.getElementsByTagName('head')[0].appendChild(script)
  })
}

export default loadJsSync
