/**
 * 加载js 支持持的单个
 * @param {string} url js http链接🔗地址
 * @param callback  加载成功回调函数
 */
function loadJsSync(url = '', callback) {
  return new Promise(resolve => {
    const scripts = Array.from(document.scripts)
      .map(v => v.src)
      .filter(Boolean)
    if (scripts.find(v => v == url)) return resolve('已存在')
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
