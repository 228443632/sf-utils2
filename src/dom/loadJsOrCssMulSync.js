import uniq from '@/array/uniq'
import arrayToObj from '@/array/arrayToObj'

/**
 * 支持批量加载css 和 jsm 例子：loadJsOrCssMulSync(['https://unpkg.com/element-ui/lib/theme-chalk/index.css', 'https://unpkg.com/element-ui/lib/index.js'])
 * @param {Array} urlList 类型 Array | String
 * @returns {Promise<Awaited<unknown>[]>}
 */
async function loadJsOrCssMulSync(urlList = []) {
  urlList = uniq(urlList)
  const getTypeFromUrl = url => {
    // eslint-disable-next-line no-useless-escape
    const _type = /\.[^\.]+$/.exec(url)[0]
    if (_type === '.js') {
      return 'text/javascript'
    }
    if (_type === '.css') {
      return 'text/css'
    }
  }

  const formatFileList = arg => {
    let args0
    if (typeof arg === 'string') {
      args0 = [arg]
    } else if (Array.isArray(arg)) {
      args0 = arg
    } else {
      throw { error: 'The dynamicFile parameter must be a string or an array' }
    }
    let args1
    args1 = args0.map(i => {
      let url
      let type
      if (typeof i === 'string') {
        url = i
        type = getTypeFromUrl(url)
      } else if (Array.isArray(i)) {
        ;[url] = i
        type = i[1] && i[1].type ? i[1].type : getTypeFromUrl(url)
      } else {
        throw { error: 'The dynamicFile parameter must be a string or an array' }
      }
      return { url, type }
    })
    return args1
  }

  const createElement = ({ type, url }) => {
    switch (type) {
      case 'text/javascript': {
        const element = document?.createElement('script')
        element.setAttribute('type', 'text/javascript')
        element.src = url
        return element
      }
      case 'text/css': {
        const element = document?.createElement('link')
        element.href = url
        element.setAttribute('rel', 'stylesheet')
        element.setAttribute('media', 'all')
        element.setAttribute('type', 'text/css')
        return element
      }
      default:
        break
    }
  }

  /* eslint-disable no-param-reassign */
  const loadElement = element =>
    new Promise(resolve => {
      const cssList = Array.from(document.querySelectorAll('link')).map(v => v.href)
      const scriptList = Array.from(document.querySelectorAll('script'))
        .map(v => v.src)
        .filter(Boolean)
      const listObj = arrayToObj(cssList.concat(scriptList))
      if (listObj[element.src || element.href]) resolve('已存在')
      const head = document?.getElementsByTagName('head')[0]
      head.appendChild(element)
      if (element.readyState) {
        element.onreadystatechange = () => {
          if (element.readyState === 'loaded' || element.readyState === 'complete') {
            element.onreadystatechange = null
            resolve()
          }
        }
      } else {
        element.onload = resolve
      }
    })

  try {
    const list = formatFileList(urlList)
    const elementList = list.map(createElement)
    return await Promise.all(
      elementList.map(i => {
        return loadElement(i)
      })
    )
  } catch (error) {
    console.log(error)
  }
}

export default loadJsOrCssMulSync
