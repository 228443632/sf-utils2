;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    852: function (t, s, a) {
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
                a('p', [t._v('判断是否是 ios 平台，返回类型 boolean')])
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '_1-示例' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_1-示例' } }, [t._v('#')]),
                t._v(' 1.示例')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' isIos '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('isIos')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// true 返回类型boolean')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: '_2-入参说明' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-入参说明' } }, [t._v('#')]),
                t._v(' 2.入参说明')
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', [t._v('参数')]),
                    t._v(' '),
                    a('th', [t._v('说明')]),
                    t._v(' '),
                    a('th', [t._v('类型')]),
                    t._v(' '),
                    a('th', [t._v('是否必填')])
                  ])
                ]),
                t._v(' '),
                a('tbody')
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '_3-源码' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-源码' } }, [t._v('#')]),
                t._v(' 3.源码')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('/**\n * 判断是否在ios环境中\n * @returns {boolean}\n */')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('isIos')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                    t._v('navigator'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('userAgent'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('match')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token regex' } }, [
                      a('span', { pre: !0, attrs: { class: 'token regex-delimiter' } }, [t._v('/')]),
                      a('span', { pre: !0, attrs: { class: 'token regex-source language-regex' } }, [
                        t._v('\\(i[^;]+;( U;)? CPU.+Mac OS X')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token regex-delimiter' } }, [t._v('/')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
