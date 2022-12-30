const { version } = require('../../../package.json')

module.exports = [
  { text: '首页', link: '/' },
  {
    text: '指南',
    link: '/pages/24112f/',
    items: [
      { text: '快速开始 🔥', link: '/pages/24112f/' },
      { text: '类型', link: '/pages/e3f3b0/' },
      { text: '基础', link: '/pages/7e1357/' },
      { text: 'dom', link: '/pages/c256cd/' },
      { text: '数学', link: '/pages/ad3feb/' },
      { text: '装饰器', link: '/pages/6e2c0b/' },
      { text: '拓展', link: '/pages/fb9692/' }
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
  {
    text: 'ueditor',
    items: [{ text: 'ueditor文档', link: '/ueditor/3ef857/' }]
  },
  {
    text: 'v' + version,
    items: [
      { text: 'v1.x', link: 'http://8.133.185.32/fr/@bianpengfei-utils/v1/' },
      { text: 'v2.x', link: 'http://8.133.185.32/fr/@bianpengfei-utils/v2/' }
    ]
  },
  { text: '企业级后台模版', link: 'http://8.133.185.32/fr/pc-template/' }
]
