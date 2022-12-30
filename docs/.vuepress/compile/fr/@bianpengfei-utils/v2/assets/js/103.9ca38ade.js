;(window.webpackJsonp = window.webpackJsonp || []).push([
  [103],
  {
    907: function (t, s, a) {
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
              a('div', { staticClass: 'language-nginx extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-nginx' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#user  nobody;')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('worker_processes')]),
                      t._v(' '),
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1024')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
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
                      t._v(' mime.types')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default_type')]),
                      t._v(' application/octet-stream')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                  \'$status $body_bytes_sent "$http_referer" \'')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#access_log  logs/access.log  main;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('sendfile')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#tcp_nopush     on;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#keepalive_timeout  0;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('keepalive_timeout')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('65')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#gzip  on;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('gzip')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('gzip_min_length')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1k')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('gzip_buffers')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('16k')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#gzip_http_version 1.0;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('gzip_comp_level')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('gzip_types')]),
                      t._v(
                        ' text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png'
                      )
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('gzip_vary')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('off')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('upstream')]),
                      t._v(' nodenuxt')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')]),
                      t._v(' 127.0.0.1:3000')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('keepalive')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('64')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1000')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' activity.compassedu.hk')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v(' index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/sign-invitation/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/sign-invitation/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/school-season/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/school-season/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n    '),
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('80')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('443')]),
                      t._v(' ssl')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 127.0.0.1')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /www')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('ssl_certificate')]),
                      t._v(' /www/cert/m.compassedu.hk.crt')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('ssl_certificate_key')]),
                      t._v(' /www/cert/m.compassedu.hk.key')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_http_version')]),
                      t._v(' 1.1')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v(' Upgrade '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_upgrade')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v(' Connection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"upgrade"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v(' Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$host')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_set_header')]),
                      t._v(' X-Nginx-Proxy true')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_cache_bypass')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_upgrade')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/university_1_.*$ /university/11/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/university_(\\d+)_(\\d+)$ /university/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$2')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/university_(\\d+)$ /university/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/univ_(\\d+)(_[0-9]+)?$ /univ/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/data$ /data/12/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/data_(\\d+)$ /data/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/class_(\\d+)$ /class/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/majr_(\\d+)$ /majr/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/offer/0/0$ /offer/11/0/0/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/offer_(\\d+)_(\\d+)_(\\d+)_(\\d+)$ /offer/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$2')]),
                      t._v('/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$3')]),
                      t._v('/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$4')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/offer_(\\d+)_(\\d+)$ /offer/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$2')]),
                      t._v('/0/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/offer_(\\d+)$ /offer/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0/0/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/newst_(\\d+)$ /newst/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/lecture$ /lecture/0/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/lecture_(\\d+)_(\\d+)$ /lecture/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$2')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/data_(\\d+)_cl_.*$ /data/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/database_.*_(\\d+)_.*$ /data/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_clss_cs_.*_cy_(\\d+)_.*$ /data/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_clssmajr_cs_.*_cy_(\\d+)_.*$ /data/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_univ_cy_1$ /university/11/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_univ_cy_(\\d+)$ /university/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_univ_cy_1_.*$ /university/11/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_univ_cy_(\\d+)_.*$ /university/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/tutor_.*$ / permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_univer_cy_.*$ /university/11/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/rank_.*$ /university/11/0 permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://nodenuxt')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/evaluate_(.*)_(.*)_(.*)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/evaluate_(.*)_(.*)_(.*)$ /app_msge?source='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v('&cm='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$2')]),
                      t._v('&page='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$3')]),
                      t._v('&type=1 break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /app_gettime')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://www.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /app_getCsConfig')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://www.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# qi yue shuo')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/contract/view$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/contract/view$ /sign/remote break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' https://expose.qiyuesuo.com')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 以下处理api的跳转')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /workshop_(\\d+)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' redirect')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/workshop_(\\d+)$ /index.php/page/index/lecture?id='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://api.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /info_(\\d+)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/info_(\\d+)$ /index.php/page/index/info?id='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://api.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /courseShow_(\\d+)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' redirect')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/courseShow_(\\d+)$ /index.php/page/index/courseShow?id='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://api.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /course_(\\d+)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' redirect')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /service_(\\d+)')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' redirect')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/service_(\\d+)$ /index.php/page/index/service?id='),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://api.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/about$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' redirect')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/about$ /about_m.html break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://mobile.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/app$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' redirect')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 资讯')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/story$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/case_(\\d+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/qs(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/usnews(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/the(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/arwu(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/times(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/guardian(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/tfe(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/qantnet(majr)?(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/rankin$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/a_(\\d+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/edu_(\\d+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/dept_(\\d+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/enmajr_(\\d+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/activity_([0-9]+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/a[a-z]new(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/ad(_[0-9]+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/miad_(\\d+)$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/evaluation$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                      t._v(' permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/main_loginmobile$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/evaluation permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_loginmobile$ /evaluation break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/main_mbottomform$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/evaluation permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_mbottomform$ /evaluation break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/main_msgnweixin$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' ( '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$http_user_agent')]),
                      t._v(' !~* '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)"'
                        )
                      ]),
                      t._v(' )')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/(.*)$ http://www.compassedu.hk/evaluation permanent')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('rewrite')]),
                      t._v(' ^/main_msgnweixin$ /evaluation break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/ielts$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# rewrite ^/ielts$ /info/index.html#/ break;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/course$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#rewrite ^/ielts$ /info/index.html#/ break;')
                    ]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/activity_(\\d+)_(\\d+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/offers_(\\d+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/www_(\\d+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/wwwlist$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/activity_(\\d+)?$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('proxy_pass')]),
                      t._v(' http://m2.compassedu.hk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 以下部署h5项目')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/beta/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/clue/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v(' index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/applytask/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/applytask/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/evaluate-task/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/evaluate-task/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/collection/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/collection/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/search/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/search/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/paid/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/paid/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/activity/sms/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v(' index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/activity/double11/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/activity/double11/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/apply-material/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/apply-material/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/official-pay/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/official-pay/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/position/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/position/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/report/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/report/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/training/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/training/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/integral/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/integral/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/register-form/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/register-form/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/h5-page')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/h5-page/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /fr/vote')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /fr/vote/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 以下是一些验证')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /.well-known/')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /www')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /MP_verify_QgnVhJpYFsw0Xeln.txt')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /wellknown')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/MP_verify_QgnVhJpYFsw0Xeln.txt$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/assist')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /apple-app-site-association')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /BingSiteAuth.xml')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/certificate')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' /googleee843fa1aa4adf76.html')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/certificate')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ ^/assist/.*$')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v(' index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#location ~ ^/.*.txt$ {')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#       root /temp;')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# }')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('location')]),
                      t._v(' ~ /sogousiteverification.txt')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static/file')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#charset koi8-r;')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#access_log  logs/host.access.log  main;')
                    ]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#error_page  404              /404.html;')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# redirect server error pages to the static page /50x.html')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('90')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v(' index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
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
                      t._v(' Cache-Control '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('91')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/internship')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('92')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/competition')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('93')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/summer')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('94')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/order-v2')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('96')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/application')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('97')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/contract')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('98')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/article')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('99')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/exercise')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('100')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/evaluate')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('120')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/myact')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('121')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front/school')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server')])
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('listen')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('130')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /static/fr/test')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try_files')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1001')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('server_name')]),
                      t._v(' 47.100.110.16')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('root')]),
                      t._v(' /front')
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
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('index')]),
                      t._v(' index.html index.htm')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('error_page')]),
                      t._v(' '),
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
                      t._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# another virtual host using mix of IP-, name-, and port-based configuration')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#server {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    listen       8000;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    listen       somename:8080;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    server_name  somename  alias  another.alias;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    location / {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#        root   html;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#        index  index.html index.htm;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    }')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# HTTPS server')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#server {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    listen       443 ssl;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    server_name  localhost;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    ssl_certificate      cert.pem;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    ssl_certificate_key  cert.key;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    ssl_session_cache    shared:SSL:1m;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    ssl_session_timeout  5m;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    ssl_ciphers  HIGH:!aNULL:!MD5;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#    ssl_prefer_server_ciphers  on;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    location / {')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#        root   html;')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#        index  index.html index.htm;')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#    }')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('include')]),
                      t._v(' ./modules/*.conf')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
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
      s.default = e.exports
    }
  }
])
