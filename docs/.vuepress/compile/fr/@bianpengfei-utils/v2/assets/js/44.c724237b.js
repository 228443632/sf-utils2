;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    860: function (t, s, a) {
      'use strict'
      a.r(s)
      var n = a(41),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('div', { staticClass: 'custom-block note' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('描述')]),
                t._v(' '),
                a('p', [
                  t._v(
                    '核心 🍺，这一块主要是对 数据进行校验，主要对数据结构进行转化，一些常见的树状结构转成 list，或者 list 转成 tree 树状结构'
                  )
                ])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: 'npm-使用方式' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#npm-使用方式' } }, [t._v('#')]),
                t._v(' npm 使用方式')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' BUtils'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' uuid '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 方式1')]),
                    t._v('\nBUtils'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('uuid')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 方式2')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('uuid')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('div', { staticClass: 'custom-block danger' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('提示')]),
                t._v(' '),
                a('p', [t._v('不推荐使用 解构函数， 因为会里面逻辑大量用了 this，如果解构了，this 会导致指向错误问题')])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: 'cdn-使用方式' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#cdn-使用方式' } }, [t._v('#')]),
                t._v(' cdn 使用方式')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-html extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                        t._v('script')
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('src')]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('https://cdn.jsdelivr.net/npm/@bianpengfei/utils/lib/b-utils.min.js'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token script' } }),
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                        t._v('script')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                        t._v('script')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token script' } }, [
                      a('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                        t._v('\n  window'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('BUtils'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('uuid')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                        t._v('script')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            ])
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
