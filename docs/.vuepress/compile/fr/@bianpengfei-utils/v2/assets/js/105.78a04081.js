;(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    912: function (t, s, a) {
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
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#user  nobody;')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('worker_processes')]),
                      t._v('                          '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#error_log  logs/error.log;')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#error_log  logs/error.log  notice;')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#error_log  logs/error.log  info;')
                    ]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#pid        logs/nginx.pid;')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('events')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('worker_connections')]),
                      t._v('                     '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1024')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('stream')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v('                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2002')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_connect_timeout')]),
                      t._v('              '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10s')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v('                         localhost:3306')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('http')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('include')]),
                      t._v('                                mime.types')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default_type')]),
                      t._v('                           application/octet-stream')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '#log_format                            main \'$remote_addr - $remote_user [$time_local] "$request" \''
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      \'$status $body_bytes_sent "$http_referer" \'')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      \'"$http_user_agent" "$http_x_forwarded_for"\';')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#access_log                            logs/access.log main;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('sendfile')]),
                      t._v('                               '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#tcp_nopush                            on;')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#keepalive_timeout                     0;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('keepalive_timeout')]),
                      t._v('                      '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('65')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#gzip                                  on;')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '#                                      another virtual host using mix of IP-, name-, and port-based configuration'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#server {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      listen 8000;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      listen somename:8080;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      server_name somename alias another.alias;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    location / {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      root html;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      index index.html index.htm;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    }')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# server {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      listen 2003;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#     location ^~ /h5 {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      alias /Users/bianpengfei/Downloads/H5Demo/;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#     }')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# }')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v('                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10003')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                           /Users/bianpengfei/临时文件/nginx-project/quyu_etl_ui')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                      '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#index                         connect.html;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#rewrite                       ^.*$ /static/connect.html break;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                 Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /api/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v('                     http://192.168.0.247:8088')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v('                        ^/api/(.*)$ /api/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v('                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10001')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                           /Users/bianpengfei/Downloads/H5Demo/VueProject/BLEDemo/static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                      '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/connect.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#index                         connect.html;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#rewrite                       ^.*$ /static/connect.html break;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                 Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v('                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10002')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# location / {')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '#                                  root /Users/bianpengfei/Downloads/H5Demo/VueProject/BLEDemo/static/DeviceControl;'
                      )
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                  try_files $uri $uri/index.html;')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                  #index connect.html;')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                  #rewrite ^.*$ /static/connect.html break;')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#     if ($request_filename ~* .*\\.(?:htm|html)) {')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '#                                  add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";'
                      )
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#     }')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# }')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('alias')]),
                      t._v('                          /Users/bianpengfei/Downloads/nothidnsfnaksnfdaad/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                              try_files $uri $uri/index.html;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#index                         connect.html;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#rewrite                       ^.*$ /static/connect.html break;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                 Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v('                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30107')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v('                        localhost')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('alias')]),
                      t._v(
                        '                          /Users/bianpengfei/卞鹏飞/工作空间/曼荼罗有限公司/统一门户前端后台/frontend-admin/dist/'
                      )
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v('                          index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                      '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                      t._v(' ~* .*\\.(?:htm|html)$)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('add_header')]),
                      t._v('                 Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ^~ /react-demo/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('alias')]),
                      t._v(
                        '                          /Users/bianpengfei/卞鹏飞/工作空间/前端学习/react-cli-my-app/dist/'
                      )
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v('                          index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v('                      '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ @react-demo')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' @react-demo')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# rewrite ^(.*)/ $1/demo.html last;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^(.*)/ /react-demo/index.html last')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /main-api')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_host')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               X-Real-IP '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               REMOTE-HOST '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               X-Forwarded-For '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$proxy_add_x_forwarded_for')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v('                     http://192.168.3.73:30107')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v('                        ^/main-api/(.*)$ /'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /uip-api')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_host')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               X-Real-IP '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               REMOTE-HOST '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v('               X-Forwarded-For '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$proxy_add_x_forwarded_for')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v('                     http://192.168.3.73:30107')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v('                        ^/uip-api/(.*)$ /'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v('                         '),
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
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' = /50x.html')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v('                           /usr/share/nginx/html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      HTTPS server')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#server {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      listen 443 ssl;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      server_name localhost;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      ssl_certificate cert.pem;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      ssl_certificate_key cert.key;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      ssl_session_cache shared:SSL:1m;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      ssl_session_timeout 5m;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      ssl_ciphers HIGH:!aNULL:!MD5;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      ssl_prefer_server_ciphers on;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    location / {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      root html;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                                      index index.html index.htm;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    }')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('include')]),
                      t._v('                                servers/*')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n')
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
