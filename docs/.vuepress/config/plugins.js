// const loveMe = require('./../plugins/love-me')

// Plugin Config
module.exports = [
  // 鼠标点击爱心特效
  // [
  //   loveMe,
  //   {
  //     color: '#11a8cd',
  //     excludeClassName: 'theme-vdoing-content'
  //   }
  // ],
  // 搜索框第三方搜索
  [
    'thirdparty-search',
    {
      thirdparty: [
        {
          title: '在GitHub中搜索',
          frontUrl: 'https://github.com/search?q=',
          behindUrl: ''
        },
        {
          title: '在Google中搜索',
          frontUrl: 'https://www.google.com/search?q='
        },
        {
          title: '在Baidu中搜索',
          frontUrl: 'https://www.baidu.com/s?wd='
        }
      ]
    }
  ],
  // 代码块复制
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false
    }
  ],
  // 图片缩放
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)',
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      }
    }
  ],
  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      }
    }
  ],
  ['fulltext-search'],
  ['demo-container-v2'],
  // [
  //   'ribbon',
  //   {
  //     size: 90, // width of the ribbon, default: 90
  //     opacity: 0.8, // opacity of the ribbon, default: 0.3
  //     zIndex: -1 // z-index property of the background, default: -1
  //   }
  // ],
  // ['cursor-effects']
]
