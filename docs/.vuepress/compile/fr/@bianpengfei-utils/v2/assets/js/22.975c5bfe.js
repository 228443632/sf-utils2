;(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    839: function (t, s, a) {
      'use strict'
      a.r(s)
      var n = a(41),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('div', { staticClass: 'custom-block note' }, [
                  a('p', { staticClass: 'custom-block-title' }, [
                    t._v('如果您使用了 babel，借助插件 babel-plugin-import 可以实现按需加载模块，减少文件体积。')
                  ])
                ]),
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
                            t._v(' babel-plugin-import -D\n')
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
                            t._v(' i babel-plugin-import -D\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(' '),
                a('br'),
                t._v(' '),
                a('ul', [a('li', [t._v('修改文件 .babelrc 或 babel.config.js')])]),
                t._v(' '),
                a(
                  'code-group',
                  [
                    a('code-block', { attrs: { title: '.babelrc', active: '' } }, [
                      a('div', { staticClass: 'language-json extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-json' } }, [
                          a('code', [
                            t._v('  '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('"plugins"')]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"import"')]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('"libraryName"')]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"@bianpengfei/utils"')]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token property' } }, [
                              t._v('"camel2DashComponentName"')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"@bianpengfei/utils"')]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                            t._v('\n')
                          ])
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('code-block', { attrs: { title: 'babel.config.js' } }, [
                      a('div', { staticClass: 'language-js extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                          a('code', [
                            t._v('  module'),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                            t._v('exports '),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                              t._v('presets')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('env')]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                              t._v('plugins')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 注意⚠️：写在这')]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'import'")]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                              t._v('libraryName')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                              t._v('camel2DashComponentName')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(' '),
                a('ul', [a('li', [t._v('图片')])]),
                t._v(' '),
                a('img', { attrs: { src: t.$withBase('/img/按需加载.png') } })
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
      s.default = e.exports
    }
  }
])
