const { version } = require('../../../package.json')

module.exports = [
  { text: '版本v' + version, link: '/' },
  { text: '首页', link: '/' },
  {
    text: '指南',
    link: '/pages/021613/',
    items: [
      { text: '01.快速开始 🔥', link: '/pages/021613/' },
      { text: '02.基础-Base', link: '/pages/e3f3b0/' },
      { text: '03.对象-Object', link: '/pages/xel48mk0o/' },
      { text: '04.数组-Array', link: '/pages/x0sf8dktg/' },
      { text: '05.方法-Function', link: '/pages/x059mk3g/' },
      { text: '06.字符串-String', link: '/pages/xf6ds06/' },
      { text: '07.数学-Math', link: '/pages/ad3feb/' },
      { text: '08.dom', link: '/pages/c256cd/' },
      { text: '09.拓展', link: '/pages/fb9692/' }
    ]
  },
  {
    text: 'Webpack5.x',
    items: [{ text: 'webpack5.x教程学习', link: 'http://8.133.185.32/fr/learn-webpack5-docs/' }]
  },
  {
    text: 'Linux',
    items: [{ text: '例子', link: '/linux/c2d867/' }]
  },
  {
    text: 'Nginx',
    items: [
      { text: '教程 🔥', link: '/nginx/063ce9/' },
      { text: '例子配置', link: '/nginx/319be7/' }
    ]
  },
  // {
  //   text: 'v' + version,
  //   items: [
  //     { text: 'v1.x', link: 'http://8.133.185.32/fr/@bianpengfei-utils/v1/' },
  //     { text: 'v2.x', link: 'http://8.133.185.32/fr/@bianpengfei-utils/v2/' },
  //     { text: 'v3.x', link: 'https://bianpengfei.gitee.io/bianpengfei-utils/v3/' },
  //   ]
  // },
  { text: '企业级后台模版', link: 'http://8.133.185.32/fr/pc-template/' }
]
