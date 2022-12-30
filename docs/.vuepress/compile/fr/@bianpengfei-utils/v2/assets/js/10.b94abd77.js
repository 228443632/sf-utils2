;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    734: function (t, s, a) {},
    779: function (t, s, a) {
      'use strict'
      a(734)
    },
    817: function (t, s, a) {
      'use strict'
      a.r(s)
      var n,
        e,
        p,
        r = a(174),
        o = (a(84), a(699)),
        c = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((n = o.getParentScrollElement),
              (e = o.getAbsOffsetTop),
              (p = {
                methods: {
                  getParentScrollTop: function (t, s) {
                    var a = document.querySelector(t),
                      p = n(a)
                    alert(''.concat(s.target.innerText, '：').concat(e(a, p, 0), 'px'))
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
                              t._m(0),
                              t._v(' '),
                              a(
                                'div',
                                { staticStyle: { 'margin-top': '12px' } },
                                [
                                  a(
                                    'el-button',
                                    {
                                      attrs: { type: 'primary' },
                                      on: {
                                        click: function (s) {
                                          return t.getParentScrollTop('.ex-scroll-view .box-4', s)
                                        }
                                      }
                                    },
                                    [t._v('获取box-4距离父滚动容器顶部大小')]
                                  ),
                                  t._v(' '),
                                  a(
                                    'el-button',
                                    {
                                      attrs: { type: 'primary' },
                                      on: {
                                        click: function (s) {
                                          return t.getParentScrollTop('.ex-scroll-view__wrap', s)
                                        }
                                      }
                                    },
                                    [t._v('获取.ex-scroll-view__wrap的父滚动容器距离顶部大小')]
                                  )
                                ],
                                1
                              )
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
                      var t = this,
                        s = t.$createElement,
                        a = t._self._c || s
                      return a(
                        'div',
                        { staticClass: 'ex-scroll-view__wrap', staticStyle: { background: 'palegoldenrod' } },
                        [
                          a('div', { staticStyle: { padding: '20px 0' } }, [t._v('.ex-scroll-view__wrap 容器')]),
                          t._v(' '),
                          a('div', { staticClass: 'ex-scroll-view' }, [
                            a(
                              'div',
                              { staticClass: 'box-1', staticStyle: { background: '#dcbaba', height: '100px' } },
                              [t._v('box-1')]
                            ),
                            t._v(' '),
                            a(
                              'div',
                              { staticClass: 'box-2', staticStyle: { background: '#adad55', height: '100px' } },
                              [t._v('box-2')]
                            ),
                            t._v(' '),
                            a('div', { staticStyle: { background: '#4949ea', height: '100px' } }, [t._v('box-3')]),
                            t._v(' '),
                            a(
                              'div',
                              { staticClass: 'box-4', staticStyle: { background: '#cd2ec8', height: '100px' } },
                              [t._v('box-4')]
                            )
                          ])
                        ]
                      )
                    }
                  ]
                },
                p
              ))
          }
        },
        v = (a(779), a(41)),
        l = Object(v.a)(
          c,
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
                  a('p', [t._v('获取目标 dom 在父滚动区域内 距离父滚动区域顶部绝对距离。')])
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
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('ex-scroll-view__wrap'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' palegoldenrod')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('padding')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 20px 0')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('.ex-scroll-view__wrap 容器'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
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
                                t._v('ex-scroll-view'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('box-1'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' #dcbaba'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 100px')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('box-1'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('box-2'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' #adad55'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 100px')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('box-2'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' #4949ea'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 100px')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('box-3'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('box-4'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' #cd2ec8'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 100px')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('box-4'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
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
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('margin-top')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 12px')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('primary'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('@click')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('getParentScrollTop('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('.ex-scroll-view .box-4'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(', $event)'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('获取box-4距离父滚动容器顶部大小'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-button')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('primary'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('@click')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('getParentScrollTop('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('.ex-scroll-view__wrap'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(', $event)'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('获取.ex-scroll-view__wrap的父滚动容器距离顶部大小'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-button')
                              ]),
                              t._v('\n      '),
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
                                t._v(' getParentScrollElement'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' getAbsOffsetTop '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'@bianpengfei/utils'")
                                ]),
                                t._v('\n\n'),
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
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('getParentScrollTop')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                  t._v('cls'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                  t._v(' event')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                                t._v(' targetDom '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' document'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('cls'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                                t._v(' scrollDom '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('getParentScrollElement')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('targetDom'),
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
                                    a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                      t._v('getAbsOffsetTop')
                                    ]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                    t._v('targetDom'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                    t._v(' scrollDom'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                    a(
                                      'span',
                                      { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } },
                                      [t._v('}')]
                                    )
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('px')]),
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
                            t._v('\n\n'),
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
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.ex-scroll-view__wrap')
                                ]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('padding')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 0 20px 20px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [t._v('.ex-scroll-view')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
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
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 150px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('border')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 1px solid chocolate'),
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
                a('h3', { attrs: { id: '说明' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#说明' } }, [t._v('#')]),
                  t._v(' 说明：')
                ]),
                t._v(' '),
                a('br'),
                t._v(' '),
                a('img', { attrs: { src: t.$withBase('/img/console.log-04.png') } }),
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
                      a('td', [t._v('el')]),
                      t._v(' '),
                      a('td', [t._v('目标 dom 元素')]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v('HTMLElement')]),
                        t._v(' '),
                        a('br'),
                        t._v(' '),
                        a('code', [t._v('String')])
                      ]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('elWrap')]),
                      t._v(' '),
                      a('td', [t._v('目标 dom 元素最近的父滚动容器')]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v('DomElement')]),
                        t._v(' '),
                        a('br'),
                        t._v(' '),
                        a('code', [t._v('String')])
                      ]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('offsetTop')]),
                      t._v(' '),
                      a('td', [t._v('自定义的偏移量')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Number')])]),
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
                            '/**\n * 获取dom在滚动区域绝对位置top\n * @param el dom节点属性（id、class）或 目标dom元素\n * @param elWrap 滚动dom节点\n * @param offsetTop 偏移量\n * */'
                          )
                        ]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getAbsOffsetTop')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                          t._v('el'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                          t._v(' elWrap'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                          t._v(' offsetTop '),
                          a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                          t._v(' '),
                          a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                        t._v('el '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('||')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                        t._v('elWrap'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('typeof')]),
                        t._v(' el '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('==')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'string'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    el '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' document'),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('typeof')]),
                        t._v(' elWrap '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('==')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'string'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    elWrap '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' document'),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('elWrap'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                        t._v('el '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('||')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                        t._v('elWrap'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                        t._v(' elRect '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getBoundingClientRect')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                        t._v(' elWrapRect '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' elWrap'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getBoundingClientRect')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        t._v('elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('-')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        t._v('elWrapRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        t._v('elWrap'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('scrollTop '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('-')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('~')]),
                        t._v('offsetTop\n'),
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
      s.default = l.exports
    }
  }
])
