;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    738: function (t, s, a) {},
    784: function (t, s, a) {
      'use strict'
      a(738)
    },
    823: function (t, s, a) {
      'use strict'
      a.r(s)
      var n,
        e,
        r = a(174),
        p = a(699),
        o = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((n = p.default ? p.default : p),
              (e = {
                data: function () {
                  return { isIn1: !1, isIn2: !1 }
                },
                computed: {
                  _isInLabel1: function () {
                    return this.isIn1 ? '是' : '否'
                  },
                  _isInLabel2: function () {
                    return this.isIn2 ? '是' : '否'
                  }
                },
                mounted: function () {
                  var t = document.querySelector('.isElementInContainer-box'),
                    s = document.querySelector('.isElementInContainer-box-1'),
                    a = document.querySelector('.isElementInContainer-box-2')
                  ;(this.isIn1 = n.isElementInContainer(s, t)), (this.isIn2 = n.isElementInContainer(a, t))
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
                              a('div', { staticClass: 'isElementInContainer-box' }, [
                                t._v('\n      容器\n      '),
                                a('div', { staticClass: 'isElementInContainer-box-1' }, [
                                  t._v('盒子1：【盒子1】是否存在【容器】中：' + t._s(t._isInLabel1))
                                ])
                              ]),
                              t._v(' '),
                              a('div', { staticClass: 'isElementInContainer-box-2' }, [
                                t._v('盒子2：【盒子2】是否存在【容器】中：' + t._s(t._isInLabel2))
                              ])
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
                e
              ))
          }
        },
        c = (a(784), a(41)),
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
                  a('p', [t._v('判断是否元素 el 整体都包含在 container 容器里，返回值 Boolean')])
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
                                t._v('isElementInContainer-box'),
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
                                t._v('isElementInContainer-box-1'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('盒子1：【盒子1】是否存在【容器】中：{{ _isInLabel1 }}'),
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
                                t._v('isElementInContainer-box-2'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                            ]),
                            t._v('盒子2：【盒子2】是否存在【容器】中：{{ _isInLabel2 }}'),
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
                                t._v(' BUtils '),
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
                                  t._v('isIn1')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('isIn2')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n  '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n\n  '),
                                a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                                  t._v('computed')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('_isInLabel1')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('isIn1 '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'是'")]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'否'")]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('_isInLabel2')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                                t._v('\n      '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('isIn2 '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'是'")]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                                t._v(' '),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'否'")]),
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
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                                t._v(' containerDom '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' document'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementInContainer-box'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                                t._v(' box1Dom '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' document'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementInContainer-box-1'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                                t._v(' box2Dom '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' document'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                  t._v("'.isElementInContainer-box-2'")
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('isIn1 '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' BUtils'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('isElementInContainer')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('box1Dom'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' containerDom'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                                t._v('\n    '),
                                a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                t._v('isIn2 '),
                                a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                                t._v(' BUtils'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                                a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                  t._v('isElementInContainer')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                                t._v('box2Dom'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                                t._v(' containerDom'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
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
                                  t._v('.isElementInContainer-box')
                                ]),
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
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                                t._v('\n'),
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.isElementInContainer-box-1')
                                ]),
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
                                a('span', { pre: !0, attrs: { class: 'token selector' } }, [
                                  t._v('.isElementInContainer-box-2')
                                ]),
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
                      a('td', [t._v('是')]),
                      t._v(' '),
                      a('td', [t._v('-')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [t._v('container')]),
                      t._v(' '),
                      a('td', [t._v('某个 dom 容器')]),
                      t._v(' '),
                      a('td', [a('code', [t._v('HTMLElement')])]),
                      t._v(' '),
                      a('td', [t._v('是')]),
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
                            '/**\n * 判断是否元素el位置在 container容器里\n * @param el\n * @param container\n * @returns {boolean}\n */'
                          )
                        ]),
                        t._v('\n'),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('isElementInContainer')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                          t._v('el'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                          t._v(' container')
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
                        t._v('container'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
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
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                        t._v(' containerRect\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                        t._v('window'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' document'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' document'),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                        t._v('documentElement'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('undefined')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('includes')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('container'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    containerRect '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('top')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('right')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' window'),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                        t._v('innerWidth'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('bottom')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' window'),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?.')]),
                        t._v('innerHeight'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v('\n      '),
                        a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('left')]),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                        t._v('\n    '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('else')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                        t._v('\n    containerRect '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                        t._v(' container'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getBoundingClientRect')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                        t._v('\n  '),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                        t._v(' '),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                        t._v('\n    elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                        t._v(' containerRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('bottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v('\n    elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('bottom '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                        t._v(' containerRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('top '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v('\n    elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('right '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
                        t._v(' containerRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('left '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                        t._v('\n    elRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('left '),
                        a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                        t._v(' containerRect'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('right\n  '),
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
