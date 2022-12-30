;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    868: function (t, s, a) {
      'use strict'
      a.r(s)
      var e = a(41),
        r = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h2', { attrs: { id: '安装' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#安装' } }, [t._v('#')]),
                  t._v(' 安装')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: '_1、npm-安装' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#_1、npm-安装' } }, [t._v('#')]),
                  t._v(' 1、npm 安装')
                ]),
                t._v(' '),
                a('p', [t._v('采用 npm/yarn 安装，希望配合 webpack 或 vite 进行使用')]),
                t._v(' '),
                a('ul', [a('li', [t._v('node: 12.10+')])]),
                t._v(' '),
                a(
                  'code-group',
                  [
                    a('code-block', { attrs: { title: 'YARN', active: '' } }, [
                      a('div', { staticClass: 'language-bash extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('yarn')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('add')]),
                            t._v(' @bianpengfei/utils\n')
                          ])
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('code-block', { attrs: { title: 'NPM' } }, [
                      a('div', { staticClass: 'language-bash extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                            t._v(' i @bianpengfei/utils\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(' '),
                a('h3', { attrs: { id: '_2、cdn-方式引入' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#_2、cdn-方式引入' } }, [t._v('#')]),
                  t._v(' 2、cdn 方式引入')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('--')]),
                      t._v(' 引入js '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('--')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                      t._v('script src'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"https://cdn.jsdelivr.net/npm/@bianpengfei/utils/lib/b-utils.min.js"')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('/')]),
                      t._v('script'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('div', { staticClass: 'custom-block note' }, [
                  a('p', { staticClass: 'custom-block-title' }, [t._v('建议')]),
                  t._v(' '),
                  a('p', [
                    t._v(
                      '我们建议使用 CDN 引入 @bianpengfei/utils.js 的用户在链接地址上锁定版本，以免将来 @bianpengfei/utils.js 升级时受到非兼容性更新的影响。锁定版本的方法请查看\n'
                    ),
                    a(
                      'a',
                      { attrs: { href: 'https://www.jsdelivr.com/', target: '_blank', rel: 'noopener noreferrer' } },
                      [t._v('https://www.jsdelivr.com/'), a('OutboundLink')],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '为什么选择-bianpengfei-utils-js' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#为什么选择-bianpengfei-utils-js' } }, [
                    t._v('#')
                  ]),
                  t._v(' 为什么选择 @bianpengfei/utils.js')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [t._v('体积小，支持按需加载')]),
                  t._v(' '),
                  a('li', [
                    t._v(
                      '放开现在任何工具库，暂时还没提供丰富的对递归一些数据转化的方法，这个非常适用于前端开发对接权限信息时或者其他业务场景中用到。比如遇到后端偏懒，只返回一层的\n数据结构，并没有返回想要的数据结构，要么后端做处理，要么前端擦屁股。'
                    )
                  ]),
                  t._v(' '),
                  a('li', [t._v('对平时用到的 webpack、vite 等主流的工程化项目，提供自动注入文件。')]),
                  t._v(' '),
                  a('li', [
                    t._v('提供便捷、准确的数据类型判断\n'),
                    a('ul', [a('li', [t._v('丰富的 dom 基础操作方法。')])])
                  ])
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = r.exports
    }
  }
])
