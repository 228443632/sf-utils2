const nav = require('./nav.js')
const htmlModules = require('./htmlModules.js')

// Theme Config
module.exports = {
  nav,
  sidebarDepth: 2,
  logo: '/img/logo.svg',
  searchMaxSuggestions: 10,
  lastUpdated: '上次更新',

  // docsRepo: "baomidou/mybatis-plus-doc",
  // docsDir: "docs",
  // docsBranch: "master",
  // editLinks: false,
  // editLinkText: "帮助我们改善此页面！",

  // Vdoing Theme Config
  sidebar: { mode: 'structuring', collapsable: true },

  updateBar: {
    showToArticle: false
  },

  category: false,
  tag: false,
  archive: true,

  author: {
    name: 'bianpengfei',
    href: 'https://gitee.com/bianpengfei/bianpengfei'
  },

  social: {
    // icons: [
    //   {
    //     iconClass: "icon-github",
    //     title: "GitHub",
    //     link: "https://github.com/baomidou"
    //   },
    //   {
    //     iconClass: "icon-gitee",
    //     title: "Gitee",
    //     link: "https://gitee.com/baomidou"
    //   },
    //   {
    //     iconClass: "icon-youjian",
    //     title: "发邮件",
    //     link: "mailto:koyangslash@gmail.com"
    //   }
    // ]
  },

  footer: {
    createYear: 2022,
    copyrightInfo: [
      '<a href="http://8.133.185.32/fr/@bianpengfei-utils/" target="_blank" style="font-weight:bold">bianpengfei</a>'
    ].join('')
  },

  htmlModules
}
