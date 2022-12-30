;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    909: function (t, s, a) {
      'use strict'
      a.r(s)
      var e = a(41),
        n = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('div', { staticClass: 'language-nginx extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-nginx' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v('                                                     '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('80')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v('                                                localhost')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                       /')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                                          server_name www.yanyou.club;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#charset                                                   koi8-r;')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#access_log                                                logs/host.access.log main;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#error_page                                                404 /404.html;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '#                                                          redirect server error pages to the static page /50x.html'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v('                                                 '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('500')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('502')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('503')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('504')]),
                      t._v(' /50x.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' = /50x.html')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_uri')]),
                      t._v(' ~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/fr/@bianpengfei-utils'")]),
                      t._v(')')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v('                                             (.*)$ /fr/@bianpengfei-utils/v2 last')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' = /haha')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /usr')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v('                                                ^.*$ /index.html break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/react-cli')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/react-cli/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/pc-template')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# alias                                                /front/projects/fr/pc-template/;')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '#try_files                                             $uri $uri/ /front/projects/fr/pc-template/index.html;'
                      )
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/pc-template/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v('                                                  index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# location @router {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                                          rewrite ^.*$ /fr/ceshi/$1 last;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# }')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/pc-template-vite')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ fr/pc-template-vite/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/pc-template-clone')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/pc-template-clone/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/h5-template')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/h5-template/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/@bianpengfei-utils/v1')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/@bianpengfei-utils/v1/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/@bianpengfei-utils/v2')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/@bianpengfei-utils/v2/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/learn-webpack5-docs/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/learn-webpack5-docs/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /fee_domain_prefix')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('                                       Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_host')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('                                       X-Real-IP '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('                                       REMOTE-HOST '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('                                       X-Forwarded-For '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$proxy_add_x_forwarded_for')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v('                                             http://221.181.195.12:80')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v('                                                ^/fee_domain_prefix/(.*)$ /'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/mandalat-ui/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /front/projects/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/mandalat-ui/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /static/tinymce')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('alias')]),
                      t._v('                                                  /front/static/tinymce/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /fr/static/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                             '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'Access-Control-Allow-Origin'")]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'*'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                             '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'Access-Control-Allow-Credentials'")
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'true'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_method')]),
                      t._v(' = OPTIONS)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'Access-Control-Allow-Origin'")]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'*'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'Access-Control-Allow-Credentials'")
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'true'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'Access-Control-Max-Age'")]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1728000')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'Access-Control-Allow-Credentials'")
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'true'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'Access-Control-Allow-Methods'")
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'GET, POST, OPTIONS, DELETE'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'Access-Control-Allow-Headers'")
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          "'reqid, nid, host, x-real-ip, x-forwarded-ip, event-type, event-id, accept, content-type'"
                        )
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v('                                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('200')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('alias')]),
                      t._v('                                                  /front/static/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/test')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                                                   /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                                              '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/test/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n')
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
      s.default = n.exports
    }
  }
])
