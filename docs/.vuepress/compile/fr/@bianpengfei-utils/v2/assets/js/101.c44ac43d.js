;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    905: function (s, a, t) {
      'use strict'
      t.r(a)
      var e = t(41),
        r = Object(e.a)(
          {},
          function () {
            var s = this,
              a = s.$createElement,
              t = s._self._c || a
            return t('ContentSlotsDistributor', { attrs: { 'slot-key': s.$parent.slotKey } }, [
              t('div', { staticClass: 'language-shell extra-class' }, [
                t('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  t('code', [
                    t('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [s._v('ip')]),
                    t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('=')]),
                    t('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"root@101.34.126.78"')]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [s._v('pem')]),
                    t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('=')]),
                    t('span', { pre: !0, attrs: { class: 'token string' } }, [
                      s._v('"/Users/bianpengfei/卞鹏飞/工作空间/服务器密钥//在线编程.pem"')
                    ]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [s._v('public_url')]),
                    t('span', { pre: !0, attrs: { class: 'token operator' } }, [s._v('=')]),
                    t('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"/home/nudt-front-web/project"')]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#npm run build')]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('ssh')]),
                    s._v(' -p '),
                    t('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('66')]),
                    s._v(' -i '),
                    t('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$pem')]),
                    s._v(' '),
                    t('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$ip')]),
                    s._v(' '),
                    t('span', { pre: !0, attrs: { class: 'token string' } }, [
                      s._v('"rm -rf '),
                      t('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$public_url')]),
                      s._v('/*"')
                    ]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('scp')]),
                    s._v(' -P '),
                    t('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('66')]),
                    s._v(' -i '),
                    t('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$pem')]),
                    s._v(' -r ./dist/* '),
                    t('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$ip')]),
                    s._v(':/'),
                    t('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$public_url')]),
                    s._v('\n')
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
      a.default = r.exports
    }
  }
])
