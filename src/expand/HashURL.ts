/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2026/8/5 10:58
 */

class HashURL extends URL {
  hashSearchParams = new URLSearchParams()

  constructor(url: string, base?: string | URL) {
    super(url, base || window.origin)
    this._updateSearchParams()
  }

  private _updateSearchParams() {
    const hash = this.hash || ''
    const queryIndex = hash.indexOf('?')
    this.hashSearchParams = new URLSearchParams(queryIndex >= 0 ? hash.slice(queryIndex + 1) : '')
    // this.hashSearchParams = new URLSearchParams((this.hash || '').slice(1))
  }

  set hash(val: string) {
    super.hash = val
    this._updateSearchParams()
  }

  get hash() {
    return super.hash
  }

  /**
   * hash 路径, 不包括#，参数
   */
  get hashPathname() {
    const tempHash = this.hash.split('?')[0] || ''
    return tempHash.replace(/^#/, '')
  }

  /**
   * hash 参数拼接字符串
   */
  get hashSearch() {
    const search = this.hashSearchParams.toString()
    return [search ? `?${search}` : ''].filter(Boolean).join('')
  }

  /**
   * hash 完整路径
   */
  get hashFulPathname() {
    return [this.hashPathname, this.hashSearch].filter(Boolean).join('')
  }

  /**
   * 完整路径
   */
  get fullPathname() {
    return [this.pathname, this.search || ''].filter(Boolean).join('')
  }

  /**
   * 生成不包括 origin 的全路径（符合前端的路由）
   * @param {boolean} includeOrigin 是否包含origin
   */
  frontPathExcluedOriginToString(includeOrigin = false) {
    const hashFulPathname = this.hashFulPathname
    const tempUrl = this.join('/', this.fullPathname, this.ifexist(hashFulPathname, `#${hashFulPathname}`))
    if (includeOrigin) return this.origin + tempUrl
    return tempUrl
  }

  /**
   * 生成不包括 origin 的全路径（符合前端的路由）
   */
  frontPathIncludeOriginToString() {
    const hashFulPathname = this.hashFulPathname
    return this.join(window.origin + '/', this.fullPathname, this.ifexist(hashFulPathname, `#${hashFulPathname}`))
  }

  /**
   * 不包括 origin 的全路径
   * @returns {string}
   */
  pathExcluedOriginToString() {
    return super.toString().replace(this.origin, '')
  }

  /**
   * 是否含有hash
   */
  public hasHash() {
    return this.hash?.length > 0
  }

  /**
   * 如果存在则返回
   * @param pre
   * @param next
   * @private
   */
  private ifexist(pre, next) {
    return pre ? next : undefined
  }

  private join(...list: string[]) {
    return list
      .filter(Boolean)
      .map(item => {
        return item.replace(/^\/+|\/+$/g, '')
      })
      .join('/')
  }
}

// const urlInstance = new HashURL('/zsamc-ncbs/main/#/workflow/approval?_full=1')
// console.log(urlInstance, urlInstance.frontPathExcluedOriginToString())

export default HashURL
