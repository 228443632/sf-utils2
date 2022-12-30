;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    741: function (t, s, a) {},
    787: function (t, s, a) {
      'use strict'
      a(741)
    },
    826: function (t, s, a) {
      'use strict'
      a.r(s)
      var n,
        e,
        r,
        p = a(174),
        o = a(699),
        c = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((n = o.observerElementMutation),
              (e = o.setStyle),
              (r = {
                data: function () {
                  return { total: 10, listen: !1 }
                },
                watch: {
                  listen: {
                    handler: function (t) {
                      this._observerMuation && (t ? this._observerMuation.start() : this._observerMuation.end())
                    }
                  }
                },
                mounted: function () {
                  this._observerMuation ||
                    (this._observerMuation = n({
                      callback: function () {
                        alert('监听到高度变化了')
                      },
                      options: { el: this.$refs.scrollView }
                    }))
                },
                methods: {
                  onSetScrollHeight: function (t) {
                    e(this.$refs.scrollView, 'height', t)
                  },
                  onForceUpdate: function () {
                    var t
                    this._observerMuation && (null === (t = this._observerMuation) || void 0 === t || t.forceUpdate())
                  }
                }
              }),
              Object(p.a)(
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
                                t._v('推荐打开控制查看 dom元素节点 ' + t._s(t.listen ? '监听中...' : ''))
                              ]),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  attrs: { type: 'primary' },
                                  on: {
                                    click: function (s) {
                                      t.listen = !t.listen
                                    }
                                  }
                                },
                                [t._v(t._s(t.listen ? '停止监听' : '开始监听'))]
                              ),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  on: {
                                    click: function (s) {
                                      return t.onSetScrollHeight('300px')
                                    }
                                  }
                                },
                                [t._v('设置容器高度300px')]
                              ),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  on: {
                                    click: function (s) {
                                      return t.onSetScrollHeight('400px')
                                    }
                                  }
                                },
                                [t._v('设置容器高度400px')]
                              ),
                              t._v(' '),
                              a(
                                'el-button',
                                {
                                  on: {
                                    click: function (s) {
                                      return t.onSetScrollHeight('100px')
                                    }
                                  }
                                },
                                [t._v('设置容器高度100px')]
                              ),
                              t._v(' '),
                              t.listen
                                ? a('el-button', { attrs: { type: 'primary' }, on: { click: t.onForceUpdate } }, [
                                    t._v('强制刷新')
                                  ])
                                : t._e(),
                              t._v(' '),
                              a(
                                'div',
                                {
                                  ref: 'scrollView',
                                  staticClass: 'batchElsPosInContainer-view',
                                  staticStyle: {
                                    'overflow-x': 'hidden',
                                    'overflow-y': 'auto',
                                    height: '400px',
                                    border: '1px solid chocolate'
                                  }
                                },
                                t._l(t.total, function (s) {
                                  return a('div', { key: s, class: 'batchElsPosInContainer-box-' + s }, [
                                    t._v('box-' + t._s(s))
                                  ])
                                }),
                                0
                              )
                            ],
                            1
                          )
                        ]
                      ],
                      2
                    )
                  },
                  staticRenderFns: []
                },
                r
              ))
          }
        },
        v = (a(787), a(41)),
        _ = Object(v.a)(
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
                  a('p', [
                    t._v('监听 '),
                    a('code', [t._v('dom')]),
                    t._v(' 元素属性变化，支持回调函数处理，例如宽度、高度、class 类变化 等等')
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
                            t._v("推荐打开控制查看 dom元素节点 {{ listen ? '监听中...' : '' }}"),
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
                                t._v('listen = !listen'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v("{{ listen ? '停止监听' : '开始监听' }}"),
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
                                t._v('onSetScrollHeight('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('300px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(')'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('设置容器高度300px'),
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
                                t._v('onSetScrollHeight('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('400px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(')'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('设置容器高度400px'),
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
                                t._v('onSetScrollHeight('),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v('100px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v("'")]),
                                t._v(')'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('设置容器高度100px'),
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
                                t._v('onForceUpdate'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-if')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('listen'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('强制刷新'),
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
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('batchElsPosInContainer-view'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('overflow-x')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' hidden'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('overflow-y')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' auto'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    t._v(' '),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 400px'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('border')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 1px solid chocolate'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')])
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('ref')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('`batchElsPosInContainer-box-${item}`'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-for')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('item in total'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':key')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('item'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('box-{{ item }}'),
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
                                t._v(' observerElementMutation'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' setStyle '),
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
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('data')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('total')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('listen')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 开始监听')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n\n  '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('watch')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('listen')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('handler')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('newVal')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_observerMuation'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n          newVal '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_observerMuation'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('start')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_observerMuation'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('end')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n\n  '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('mounted')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                  t._v('// 先初始化，获取到observerElementMutation 实例对象')
                                ]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_observerMuation '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('||=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('observerElementMutation')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                                  t._v('callback')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('alert')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'监听到高度变化了'")]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('options')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('el')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('methods')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('onSetScrollHeight')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('val')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 设置dom style')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('setStyle')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'height'")]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' val'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n\n    '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('onForceUpdate')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_observerMuation '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_observerMuation'),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('forceUpdate')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
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
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.batchElsPosInContainer-view')
                                ]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('overflow-x')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' hidden'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('overflow-y')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' auto'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 400px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('border')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 1px solid chocolate'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('margin')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 12px 0'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.batchElsPosInContainer-view > div')
                                ]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' #eee'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('padding')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 20px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('text-align')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' center'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.batchElsPosInContainer-view > div + div')
                                ]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('margin-top')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' 12px'),
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
                a('h3', { attrs: { id: '打印结果' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#打印结果' } }, [t._v('#')]),
                  t._v(' 打印结果：')
                ]),
                t._v(' '),
                a('br'),
                t._v(' '),
                a('img', { attrs: { src: t.$withBase('/img/console.log-05.png') } }),
                t._v(' '),
                a('h2', { attrs: { id: '_2-入参说明' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-入参说明' } }, [t._v('#')]),
                  t._v(' 2.入参说明')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: '主参数' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#主参数' } }, [t._v('#')]),
                  t._v(' 主参数')
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
                      a('td', [t._v('callback')]),
                      t._v(' '),
                      a('td', [t._v('监听变化后，要执行自定义的回调函数')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Function')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('options')]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v('选项, '),
                          a('RouterLink', { attrs: { to: '/pages/a42e2a/#options说明' } }, [t._v('详情查看 👇')])
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', [a('code', [t._v('Object')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'options-说明' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#options-说明' } }, [t._v('#')]),
                  t._v(' options 说明')
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
                      a('td', [t._v('监听目标的 dom 元素')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('HtmlElement')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('attribute')]),
                      t._v(' '),
                      a('td', [t._v('监听的属性集合')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Array<String>')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('observerOptions')]),
                      t._v(' '),
                      a('td', [
                        t._v('一个可选的'),
                        a('br'),
                        t._v(' '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/MutationObserver/observe_2f2addbfa1019c23a6255648d6526387',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('MutationObserverInit'), a('OutboundLink')],
                          1
                        ),
                        t._v(' 对象')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Object')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: '实例对象方法' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#实例对象方法' } }, [t._v('#')]),
                  t._v(' 实例对象方法')
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
                      a('td', [t._v('init')]),
                      t._v(' '),
                      a('td', [t._v('初始化')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Function')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('forceUpdate')]),
                      t._v(' '),
                      a('td', [t._v('强制执行，刷新')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Function')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('start')]),
                      t._v(' '),
                      a('td', [t._v('开始监听')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Function')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('end')]),
                      t._v(' '),
                      a('td', [t._v('结束监听')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Function')])]),
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
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                        t._v(' debounce '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'../base/debounce'")]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                        t._v(' getStyle '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./getStyle'")]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v(' _MutationObserver '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./_constant'")]),
                        t._v('\n\n'),
                        a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                          t._v(
                            '/**\n * 监听元素属性变化，例如宽度、高度\n * @param {Function} callback\n * @param {Object} options\n * @returns {*}\n */'
                          )
                        ]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('observerElementMutation')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                          t._v('callback')
                        ]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  options '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('el')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('attribute')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'height'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('observerOptions')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('attributes')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('childLIst')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('attributeOldValue')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('subtree')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n  observerElementMutation'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('fn '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' observerElementMutation'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('prototype '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('start')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                          t._v("// console.error('[warning] 缺少初始化参数')")
                        ]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('init')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('observe')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observerOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('forceUpdate')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n      Object'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('keys')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('recordOldValue'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('forEach')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('v')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('recordOldValue'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        t._v('v'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getStyle')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' v'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('callback')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('apply')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' arguments'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('end')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n        console'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('warn')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'[end] 卸载监听成功'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('disconnect')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('takeRecords')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('init')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('el')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('attribute')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'height'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                        t._v('options'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('observerOptions')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('attributes')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('childLIst')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                          t._v('attributeOldValue')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('subtree')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('options'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observerOptions '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('||')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('recordOldValue '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('attribute'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('reduce')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                          t._v('pre'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                          t._v(' cur')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('cur'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' pre'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        t._v('cur'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' pre\n      '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                          t._v('observerCallback')
                        ]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('mutationList')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('\n          Object'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('keys')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('recordOldValue'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('every')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('v')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n            '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('recordOldValue'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        t._v('v'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!==')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getStyle')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' v'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n              '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('recordOldValue'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        t._v('v'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getStyle')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('defaultOptions'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' v'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n              '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                        t._v('\n            '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n            '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n          '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v('\n        '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('callback')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('apply')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' arguments'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                        t._v(' debounceDivResizeHandler '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('debounce')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('observerCallback')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('bind')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('300')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('observer '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('_MutationObserver')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('debounceDivResizeHandler'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  observerElementMutation'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('fn'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('init'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('prototype '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' observerElementMutation'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('fn\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                          t._v('observerElementMutation'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('fn'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('init')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
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
      s.default = _.exports
    }
  }
])
