;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    740: function (t, s, a) {},
    786: function (t, s, a) {
      'use strict'
      a(740)
    },
    825: function (t, s, a) {
      'use strict'
      a.r(s)
      var n,
        e,
        r,
        p = a(174),
        o = (a(178), a(699)),
        c = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((n = o.isElementVisibleInViewport),
              (e = o.throttle),
              (r = {
                data: function () {
                  return { total: 40, box8Visible: !1, box8AllVisible: !1, box20Visible: !1, box20AllVisible: !1 }
                },
                mounted: function () {
                  console.log(this),
                    (this._throttleScroll = e(this.onScroll, 20)),
                    this.$refs.scrollView.addEventListener('scroll', this._throttleScroll, !1)
                },
                methods: {
                  onScroll: function () {
                    ;(this.box8Visible = n({
                      el: this.$refs.scrollView.querySelector('.isElementVisibleInViewport-box-8'),
                      elScrollView: this.$refs.scrollView,
                      partiallyVisible: !0
                    })),
                      (this.box20Visible = n({
                        el: this.$refs.scrollView.querySelector('.isElementVisibleInViewport-box-20'),
                        elScrollView: this.$refs.scrollView,
                        partiallyVisible: !0
                      })),
                      (this.box8AllVisible = n({
                        el: this.$refs.scrollView.querySelector('.isElementVisibleInViewport-box-8'),
                        elScrollView: this.$refs.scrollView,
                        partiallyVisible: !1
                      })),
                      (this.box20AllVisible = n({
                        el: this.$refs.scrollView.querySelector('.isElementVisibleInViewport-box-20'),
                        elScrollView: this.$refs.scrollView,
                        partiallyVisible: !1
                      }))
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
                                t._v('滚动一下下面区域👇试图')
                              ]),
                              t._v(' '),
                              a(
                                'el-row',
                                [
                                  a('el-col', { attrs: { span: 12 } }, [
                                    a(
                                      'div',
                                      [
                                        t._v('\n          第8个box 部分可见：\n          '),
                                        t.box8Visible
                                          ? a('el-tag', { attrs: { type: 'success', effect: 'dark' } }, [t._v('是')])
                                          : a('el-tag', { attrs: { type: 'danger', effect: 'dark' } }, [t._v('否')])
                                      ],
                                      1
                                    )
                                  ]),
                                  t._v(' '),
                                  a('el-col', { attrs: { span: 12 } }, [
                                    a(
                                      'div',
                                      [
                                        t._v('\n          第8个box 全部可见： '),
                                        t.box8AllVisible
                                          ? a('el-tag', { attrs: { type: 'success', effect: 'dark' } }, [t._v('是')])
                                          : a('el-tag', { attrs: { type: 'danger', effect: 'dark' } }, [t._v('否')])
                                      ],
                                      1
                                    )
                                  ]),
                                  t._v(' '),
                                  a('el-col', { attrs: { span: 24 } }, [a('div', { staticStyle: { height: '12px' } })]),
                                  t._v(' '),
                                  a('el-col', { attrs: { span: 12 } }, [
                                    a(
                                      'div',
                                      [
                                        t._v('\n          第20个box 部分可见： '),
                                        t.box20Visible
                                          ? a('el-tag', { attrs: { type: 'success', effect: 'dark' } }, [t._v('是')])
                                          : a('el-tag', { attrs: { type: 'danger', effect: 'dark' } }, [t._v('否')])
                                      ],
                                      1
                                    )
                                  ]),
                                  t._v(' '),
                                  a('el-col', { attrs: { span: 12 } }, [
                                    a(
                                      'div',
                                      [
                                        t._v('\n          第20个box 全部可见： '),
                                        t.box20AllVisible
                                          ? a('el-tag', { attrs: { type: 'success', effect: 'dark' } }, [t._v('是')])
                                          : a('el-tag', { attrs: { type: 'danger', effect: 'dark' } }, [t._v('否')])
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              ),
                              t._v(' '),
                              a(
                                'div',
                                {
                                  ref: 'scrollView',
                                  staticClass: 'isElementVisibleInViewport-view',
                                  staticStyle: {
                                    'overflow-x': 'hidden',
                                    'overflow-y': 'auto',
                                    height: '400px',
                                    border: '1px solid chocolate'
                                  }
                                },
                                t._l(t.total, function (s) {
                                  return a(
                                    'div',
                                    {
                                      key: s,
                                      class: [
                                        'isElementVisibleInViewport-box-' + s,
                                        [8, 20].includes(s) && 'isElementVisibleInViewport-box-active'
                                      ]
                                    },
                                    [t._v('\n        第' + t._s(s) + '个box\n      ')]
                                  )
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
        l = (a(786), a(41)),
        v = Object(l.a)(
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
                  a(
                    'p',
                    [
                      t._v('判断是否元素 el 当前是否 可见在某个滚动元素上。'),
                      a('br'),
                      t._v('\n有个原生方法，'),
                      a(
                        'a',
                        {
                          attrs: {
                            href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('IntersectionObserver'), a('OutboundLink')],
                        1
                      ),
                      t._v(' '),
                      a('badge', { attrs: { text: '兼容性不是太好。', type: 'warning' } }),
                      t._v('，不过这个是相对于整个屏幕可视区域，不能定制划到某个特定滚动元素')
                    ],
                    1
                  )
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
                            t._v('滚动一下下面区域👇试图'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-divider')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-row')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-col')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':span')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('12'),
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
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          第8个box 部分可见：\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('success'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-if')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('box8Visible'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('是'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('danger'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-else')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('否'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('el-col')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-col')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':span')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('12'),
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
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          第8个box 全部可见： '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('success'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-if')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('box8AllVisible'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('是'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('danger'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-else')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('否'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('el-col')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-col')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':span')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('24'),
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
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('style')]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                                    t._v('=')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                  a('span', { pre: !0, attrs: { class: 'token value css language-css' } }, [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('height')]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                    t._v(' 12px')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
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
                                t._v('el-col')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-col')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':span')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('12'),
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
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          第20个box 部分可见： '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('success'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-if')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('box20Visible'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('是'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('danger'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-else')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('否'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('el-col')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-col')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':span')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('12'),
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
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          第20个box 全部可见： '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('success'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-if')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('box20AllVisible'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('是'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('el-tag')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('type')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('danger'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('effect')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('dark'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-else')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('否'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-tag')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        '),
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
                                t._v('el-col')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                                t._v('el-row')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n    '),
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
                                t._v('isElementVisibleInViewport-view'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('ref')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('scrollView'),
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
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                                t._v('div')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':class')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v(
                                  '[\n          `isElementVisibleInViewport-box-${item}`,\n          [8, 20].includes(item) && `isElementVisibleInViewport-box-active`\n        ]'
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('v-for')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('item in total'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':key')]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [t._v('=')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                                t._v('item'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('\n        第{{ item }}个box\n      '),
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
                                t._v(' isElementVisibleInViewport'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' throttle '),
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
                                a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('40')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('box8Visible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('box8AllVisible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('box20Visible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('box20AllVisible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('mounted')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    console'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_throttleScroll '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('throttle')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('onScroll'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('20')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('addEventListener')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'scroll'")]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('_throttleScroll'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
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
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('onScroll')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('box8Visible '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('isElementVisibleInViewport')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('el')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementVisibleInViewport-box-8'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('elScrollView')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('partiallyVisible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('box20Visible '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('isElementVisibleInViewport')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('el')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementVisibleInViewport-box-20'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('elScrollView')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('partiallyVisible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('box8AllVisible '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('isElementVisibleInViewport')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('el')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementVisibleInViewport-box-8'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('elScrollView')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('partiallyVisible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('box20AllVisible '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('isElementVisibleInViewport')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('el')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementVisibleInViewport-box-20'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('elScrollView')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('$refs'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('scrollView'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n        '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('partiallyVisible')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
                                  t._v('.isElementVisibleInViewport-view')
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
                                  t._v('.isElementVisibleInViewport-view > div')
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
                                t._v(' 28px'),
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
                                  t._v('.isElementVisibleInViewport-view > div + div')
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
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.isElementVisibleInViewport-view > div.isElementVisibleInViewport-box-active')
                                ]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('background')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' darkorange'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('color')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                                t._v(' #fff'),
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
                      a('td', [t._v('是')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('elScrollView')]),
                      t._v(' '),
                      a('td', [t._v('滚动区域元素，不传默认是 body 滚动元素')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('HTMLElement')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('partiallyVisible')]),
                      t._v(' '),
                      a('td', [t._v('是否部分显示')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Boolean')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('true')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('direction')]),
                      t._v(' '),
                      a('td', [t._v('方向 可选值 horizontal（水平） vertical（垂直）， 默认值 vertical')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('String')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('offsetTop')]),
                      t._v(' '),
                      a('td', [t._v('顶部偏移量')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Number')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('vertical')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('offsetBottom')]),
                      t._v(' '),
                      a('td', [t._v('底部偏移量')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Number')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('0')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('offsetLeft')]),
                      t._v(' '),
                      a('td', [t._v('左部偏移量')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Number')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('0')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('offsetRight')]),
                      t._v(' '),
                      a('td', [t._v('右部偏移量')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Number')])]),
                      t._v(' '),
                      a('td', [t._v('-')]),
                      t._v(' '),
                      a('td', [t._v('0')])
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
                            '/**\n * 检查指定的元素是否在视口中可见。\n * @param el 目标元素\n * @param elScrollView 滚动区域元素\n * @param partiallyVisible 是否部分显示\n * @param direction 方向 可选值  horizontal（水平）  vertical（垂直）， 默认值 vertical\n * @param offsetTop 顶部偏移量\n * @param offsetBottom 底部偏移量\n * @param offsetLeft 左部偏移量\n * @param offsetRight  右部偏移量\n * @returns {boolean}\n */'
                          )
                        ]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [
                          t._v('isElementVisibleInViewport')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n  el'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  elScrollView'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  partiallyVisible '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  direction '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'vertical'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// horizontal  vertical')]),
                        t._v('\n  offsetTop '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  offsetBottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  offsetLeft '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n  offsetRight '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!')]),
                        t._v('elScrollView'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    elScrollView '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' document'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('documentElement '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('||')]),
                        t._v(' document'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('body\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
                        t._v(' elScrollViewRect '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' elScrollView'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getBoundingClientRect')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('direction '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'vertical'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' partiallyVisible\n      '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('bottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetTop '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('bottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetBottom\n      '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetTop '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('bottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('bottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetBottom\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('else')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('direction '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'horizontal'")]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' partiallyVisible\n      '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('right '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('left '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetLeft '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('left '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('right '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetRight\n      '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('left '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('left '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetLeft '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v(' elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('right '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                        t._v(' elScrollViewRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('right '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                        t._v(' offsetRight\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
