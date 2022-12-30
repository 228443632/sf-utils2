;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    736: function (t, s, a) {},
    781: function (t, s, a) {
      'use strict'
      a(736)
    },
    819: function (t, s, a) {
      'use strict'
      a.r(s)
      var n,
        e,
        r = a(174),
        p = (a(84), a(699)),
        o = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((n = p.isScroll),
              (e = {
                methods: {
                  onClick: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                      s = arguments.length > 1 ? arguments[1] : void 0,
                      a = n(document.querySelector(t))
                    console.log(a), alert(''.concat(s.target.innerText, '：').concat(a ? '是' : '否'))
                  }
                }
              }),
              Object(r.a)(
                {
                  render: function () {
                    var t = this,
                      s = t.$createElement,
                      a = t._self._c || s
                    return a(
                      'div',
                      [
                        [
                          a(
                            'div',
                            [
                              a('el-divider', { attrs: { 'content-position': 'left' } }, [
                                t._v('推荐打开控制查看 dom元素节点')
                              ]),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  on: {
                                    click: function (s) {
                                      return t.onClick('.isScroll-box', s)
                                    }
                                  }
                                },
                                [t._v('容器是否滚动')]
                              ),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  on: {
                                    click: function (s) {
                                      return t.onClick('.isScroll-box-2', s)
                                    }
                                  }
                                },
                                [t._v('盒子2是否滚动')]
                              ),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  on: {
                                    click: function (s) {
                                      return t.onClick('body', s)
                                    }
                                  }
                                },
                                [t._v('body是否滚动')]
                              ),
                              t._v(' '),
                              t._m(0),
                              t._v(' '),
                              a('div', { staticClass: 'isScroll-box-2' }, [t._v('盒子2')])
                            ],
                            1
                          )
                        ]
                      ],
                      2
                    )
                  },
                  staticRenderFns: [
                    function () {
                      var t = this.$createElement,
                        s = this._self._c || t
                      return s('div', { staticClass: 'isScroll-box' }, [
                        this._v('\n      容器\n      '),
                        s('div', { staticClass: 'isScroll-box-1' }, [this._v('盒子1')])
                      ])
                    }
                  ]
                },
                e
              ))
          }
        },
        c = (a(781), a(41)),
        v = Object(c.a)(
          o,
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('div', { staticClass: 'custom-block note' }, [
                  a('p', { staticClass: 'custom-block-title' }, [t._v('描述')]),
                  t._v(' '),
                  a('p', [
                    t._v(
                      '判断 dom 元素是否是滚动容器，并返回滚动属性 ["auto", "auto", index: 0, input: "auto", groups: undefined]'
                    )
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '_1-示例' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#_1-示例' } }, [t._v('#')]),
                  t._v(' 1.示例')
                ]),
                t._v(' '),
                a(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    a('template', { slot: 'demo' }, [[a('render-demo-0')]], 2),
                    t._v(' '),
                    a('template', { slot: 'source' }, [
                      a('div', { staticClass: 'language-vue extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-divider')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('content-position')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('left'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('推荐打开控制查看 dom元素节点'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-divider')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('@click')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('onClick('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('.isScroll-box'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(', $event)'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('容器是否滚动'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('@click')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('onClick('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('.isScroll-box-2'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(', $event)'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('盒子2是否滚动'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('@click')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('onClick('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('body'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(', $event)'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('body是否滚动'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('isScroll-box'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      容器\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('isScroll-box-1'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('盒子1'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('isScroll-box-2'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('盒子2'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token script' } }, [
                              a('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v(' isScroll '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'@bianpengfei/utils'")
                                ]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('methods')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('onClick')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('cls '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' event'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                                t._v(' isScrollFlag '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('isScroll')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('document'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('cls'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      console'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('isScrollFlag'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('alert')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [
                                    t._v('`')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                                    a(
                                      'span',
                                      { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } },
                                      [t._v('${')]
                                    ),
                                    t._v('event'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                    t._v('target'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                    t._v('innerText'),
                                    a(
                                      'span',
                                      { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } },
                                      [t._v('}')]
                                    )
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('：')]),
                                  a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                                    a(
                                      'span',
                                      { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } },
                                      [t._v('${')]
                                    ),
                                    t._v('isScrollFlag '),
                                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'是'")]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'否'")]),
                                    a(
                                      'span',
                                      { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } },
                                      [t._v('}')]
                                    )
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [
                                    t._v('`')
                                  ])
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('style')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token style' } }, [
                              a('span', { pre: !0, attrs: { class: 'token language-css' } }, [
                                t._v('\n\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [t._v('.isScroll-box')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('padding')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 20px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('border')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 1px solid cornsilk'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background-color')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' coral'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('color')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' #fff'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 100px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('overflow-y')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' auto'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('overflow-x')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' auto'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('margin-top')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 12px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [t._v('.isScroll-box-1')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('padding')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 30px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' #adad55'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [t._v('.isScroll-box-2')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('padding')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 30px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' #08f784'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('margin-top')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 10px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n\n')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('style')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
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
                      a('td', [t._v('el')]),
                      t._v(' '),
                      a('td', [t._v('目标元素')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('HTMLElement')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('vertical')]),
                      t._v(' '),
                      a('td', [t._v('是否是垂直, 不传默认是按照 overflow')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Boolean')])]),
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
                          t._v(
                            '/**\n * 判断dom元素是否是滚动容器，并返回滚动属性 ["auto", "auto", index: 0, input: "auto", groups: undefined]\n * @param {HTMLElement} el\n * @param {boolean} vertical  是否是垂直，不填入按照overflow\n * @returns {*}\n */'
                          )
                        ]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('isScroll')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                          t._v('el'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                          t._v(' vertical')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                        t._v(' determinedDirection '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' vertical '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!==')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v(' vertical '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!==')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('undefined')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                        t._v(' overflow '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' determinedDirection\n    '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                        t._v(' vertical\n      '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getStyle')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'overflow-y'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getStyle')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'overflow-x'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getStyle')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'overflow'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' overflow'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('match')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token regex' } }, [
                          a('span', { pre: !0, attrs: { class: 'token regex-delimiter' } }, [t._v('/')]),
                          a('span', { pre: !0, attrs: { class: 'token regex-source language-regex' } }, [
                            t._v('(scroll|auto)')
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
      s.default = v.exports
    }
  }
])
