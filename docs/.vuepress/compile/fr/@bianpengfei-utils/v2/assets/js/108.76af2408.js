;(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    913: function (t, s, a) {
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
                  t._v('寄生式继承，本质上其实和 '),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Object.create'), a('OutboundLink')],
                    1
                  ),
                  t._v(' 方法没有区别，这里主要是为了兼容的方式去完成继承')
                ])
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
                    t._v(' inheritPrototypeFromObj '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@bianpengfei/utils'")]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' vuePrototype '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('sayHello')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('alert')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'sayHello'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' vueInstance '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' Object'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('assign')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('version')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'2.0.0'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('data')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('mounted')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n  vuePrototype\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' _inheritVueInstance '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('inheritPrototypeFromObj')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('vueInstance'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nconsole'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('_inheritVueInstance'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('打印结果：\n'),
                a('br'),
                t._v(' '),
                a('img', { attrs: { src: t.$withBase('/img/console.log-01.png') } })
              ]),
              t._v(' '),
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
                    a('td', [t._v('prototype')]),
                    t._v(' '),
                    a('td', [t._v('继承的原型对象')]),
                    t._v(' '),
                    a('td', [a('code', [t._v('Object')])]),
                    t._v(' '),
                    a('td', [t._v('是')]),
                    t._v(' '),
                    a('td', [t._v('{}')])
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
                        t._v('/**\n * 寄生式继承\n * @param {Object} prototype 原型对象\n * @returns {any}\n */')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('inheritPrototypeFromObj')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('prototype '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                      t._v(' createFn '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' Object'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                      t._v('create\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                      t._v('Object'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                      t._v('create'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('createFn')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('obj')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('F')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('F')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('prototype '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' obj\n      '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('F')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('createFn')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('prototype'),
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
