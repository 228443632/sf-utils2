;(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    873: function (t, s, a) {
      'use strict'
      a.r(s)
      var n = a(41),
        r = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('div', { staticClass: 'custom-block note' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('描述')]),
                t._v(' '),
                a('p', [t._v('解析 JSON 字符串，防止抛出异常，解析成功返回正确的解析数据，出异常返回 null')])
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
                    t._v(' parseJsonNoError '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' userJson '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('\'{"name":"bianpengfei","age":26}\'')
                    ]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' userJsonError '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'{1}2324'")]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('parseJsonNoError')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('userJson'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v("// 解析正确：{name: 'bianpengfei', age: 26}")
                    ]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('parseJsonNoError')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('userJsonError'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 解析错误：返回  null')]),
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
                    a('td', [t._v('JSON 字符串')]),
                    t._v(' '),
                    a('td', [a('code', [t._v('string')])]),
                    t._v(' '),
                    a('td', [t._v('是')]),
                    t._v(' '),
                    a('td')
                  ])
                ])
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
                      t._v('/**\n * json解析，防止抛出异常\n * @param str\n * @returns {null|any}\n */')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('parseJsonNoError')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('str '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('JSON')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('parse')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('str'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('catch')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('e'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
      s.default = r.exports
    }
  }
])
