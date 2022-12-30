;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    870: function (t, s, a) {
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
                a('p', [t._v('将驼峰命名改成中横线命名')])
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
                    t._v(' kebabCase '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('kebabCase')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'userName'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 结果：user-name')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('kebabCase')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'helloWorld_name'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 结果：hello-world_name')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('kebabCase')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'cellItem'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 结果：cell-item')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('kebabCase')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'USERITEM'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 结果：u-s-e-r-i-t-e-m')]),
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
                    a('th', [t._v('是否必填')]),
                    t._v(' '),
                    a('th', [t._v('默认值')])
                  ])
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', [t._v('str')]),
                    t._v(' '),
                    a('td', [t._v('要调整的字符串')]),
                    t._v(' '),
                    a('td', [a('code', [t._v('String')])]),
                    t._v(' '),
                    a('td', [t._v('-')]),
                    t._v(' '),
                    a('td', [t._v('-')])
                  ])
                ])
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '_3-源码' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-源码' } }, [t._v('#')]),
                t._v(' 3.源码')
              ]),
              t._v(' '),
              a('details', { staticClass: 'custom-block details' }, [
                a('summary', [t._v('源码，点开查看 👈')]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('/**\n * 将驼峰命名改成中横线命名\n * @param {string} str\n * @returns {*}\n */')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('kebabCase')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('str')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' hyphenateRE '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token regex' } }, [
                        a('span', { pre: !0, attrs: { class: 'token regex-delimiter' } }, [t._v('/')]),
                        a('span', { pre: !0, attrs: { class: 'token regex-source language-regex' } }, [
                          t._v('([^-])([A-Z])')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token regex-delimiter' } }, [t._v('/')]),
                        a('span', { pre: !0, attrs: { class: 'token regex-flags' } }, [t._v('g')])
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' str'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('replace')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('hyphenateRE'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'$1-$2'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('replace')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('hyphenateRE'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'$1-$2'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('toLowerCase')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
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
