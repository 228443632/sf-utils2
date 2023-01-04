// import vue from 'vue/dist/vue.esm.browser'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import ElementUI from 'element-ui'
import 'windi.css'
import 'element-ui/lib/theme-chalk/index.css'
import { isBrowser } from './store/helper'

// import { Base } from '+root/src/'

// import { parseURL } from '+root/lib/b-utils.js'
//
// console.log(parseURL('google.com')) // {}
// console.log(parseURL('http://url.com/#page#?name=Adam&surname=Smith#'))

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  if (isBrowser) {
    // localStorage.mode ||= 'read'
    window.Vue = Vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
    Vue.use(ElementUI)
  }
}
