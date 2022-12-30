;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    908: function (s, t, a) {
      'use strict'
      a.r(t)
      var e = a(41),
        n = Object(e.a)(
          {},
          function () {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': s.$parent.slotKey } }, [
              a('div', { staticClass: 'language-nginx extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-nginx' } }, [
                  a('code', [
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#user  nobody;')]),
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('worker_processes')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('1')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#error_log  logs/error.log;')]),
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#error_log  logs/error.log  notice;')
                    ]),
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#error_log  logs/error.log  info;')
                    ]),
                    s._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#pid        logs/nginx.pid;')]),
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('events')])
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('worker_connections')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('1024')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('http')])
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('include')]),
                      s._v(' mime.types')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('default_type')]),
                      s._v(' application/octet-stream')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#                  \'$status $body_bytes_sent "$http_referer" \'')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')
                    ]),
                    s._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#access_log  logs/access.log  main;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('sendfile')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#tcp_nopush     on;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('server_tokens')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('off')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#keepalive_timeout  0;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('keepalive_timeout')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('65')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('gzip')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('gzip_min_length')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('1k')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('gzip_buffers')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('4')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('16k')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('gzip_comp_level')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('2')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('gzip_types')]),
                      s._v(
                        ' text/plain\n    application/javascript\n    application/x-javascript\n    text/css\n    application/xml\n    text/javascript\n    application/x-httpd-php\n    image/jpeg\n    image/gif\n    image/png'
                      )
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('gzip_vary')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('off')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('server')])
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# listen 20001;')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('listen')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('20001')]),
                      s._v(' ssl')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('server_name')]),
                      s._v(' 127.0.0.1')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl_certificate')]),
                      s._v(' /usr/local/nginx/cert/hlwyy.lyrmyy.com.crt')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#这里是ssl key文件存放的绝对路径，根据自己的文件名称和路径来写')
                    ]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl_certificate_key')]),
                      s._v(' /usr/local/nginx/cert/hlwyy.lyrmyy.com.key')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#这里是ssl key文件存放的绝对路径，根据自己的文件名称和路径来写')
                    ]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl_session_cache')]),
                      s._v(' shared:SSL:1m')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl_session_timeout')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('5m')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl_ciphers')]),
                      s._v(' HIGH:!aNULL:!MD5')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('ssl_prefer_server_ciphers')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('on')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('server_tokens')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [s._v('off')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' Strict-Transport-Security '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"max-age=15768000"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_cookie_path')]),
                      s._v(' / '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"/; httponly; secure; SameSite=Strict"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('error_page')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('497')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('301')]),
                      s._v(' https://'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$http_host')]),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_uri')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# 重点')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$time_iso8601')]),
                      s._v(' ~ '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"^(\\d{4})-(\\d{2})-(\\d{2})"')]),
                      s._v(' )')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('set')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$date')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$1')]),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$2')]),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$3')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# 日期记录日志')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('access_log')]),
                      s._v(' /usr/local/nginx/logs/'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$date')]),
                      s._v('.host.access.log')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#错误日志')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('# error_log   logs/error/$year-$month-$day-$hour.log;')
                    ]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$host')]),
                      s._v(' != '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'hlwyy.lyrmyy.com'")]),
                      s._v(' )')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('return')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('500')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' /')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_pass')]),
                      s._v(' http://hlwyy.lyrmyy.com:20000')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# root html;')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('# if ($request_filename ~* .*\\.(?:htm|html)$) {')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   add_header Cache-Control')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#     "private, no-store, no-cache, must-revalidate, proxy-revalidate";')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#   add_header X-Content-Options "nosniff";')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#   add_header X-Frame-Options "DENY";')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#   add_header X-XSS-Protection "1; mode=block";')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#   # proxy_connect_timeout 600;')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   # proxy_send_timeout 600;')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   # proxy_read_timeout 600;')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# }')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('# if ($request_filename ~* .*\\.(?:js|css)) {')
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   expires 7d;')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# }')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v(
                        '# if ($request_filename ~* .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$) {'
                      )
                    ]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   expires 7d;')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# }')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# index index.html index.htm;')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#charset koi8-r;')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#access_log  logs/host.access.log  main;')
                    ]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' ^~ /admin/')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('root')]),
                      s._v(' /zlk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' Cache-Control\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:js|css))')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('expires')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('7d')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('expires')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('7d')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('index')]),
                      s._v(' /admin/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' ~ /main-api')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('rewrite')]),
                      s._v(' ^/main-api/(.*)$ /'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$1')]),
                      s._v(' break')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_pass')]),
                      s._v(' http://localhost:2001')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# 主数据代理地址')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# 在这里设置')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_set_header')]),
                      s._v(' Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$host')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_set_header')]),
                      s._v(' X-Real-IP '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$remote_addr')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_set_header')]),
                      s._v(' X-Forwarded-For '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$proxy_add_x_forwarded_for')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('proxy_cookie_path')]),
                      s._v(' / '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"/; httponly; secure; SameSite=Strict"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' ~ /h5/')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('root')]),
                      s._v(' /zlk')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('try_files')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$uri')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$uri')]),
                      s._v('/ /h5/index.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:htm|html))')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' Cache-Control\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:js|css))')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('expires')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('7d')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('expires')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('7d')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' ^~ /zlk/files/image/')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('alias')]),
                      s._v(' /zlk/files/image/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:htm|html)$)')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' Cache-Control\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' /MP_verify_m2qoYP0kcbviE0H1.txt')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('root')]),
                      s._v(' /zlk/h5/certificate')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('error_page')]),
                      s._v('  '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('404')]),
                      s._v('              /40x.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' = /40x.html')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('root')]),
                      s._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:htm|html)$)')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' Cache-Control\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('# redirect server error pages to the static page /50x.html')
                    ]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('error_page')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('500')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('502')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('503')]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('504')]),
                      s._v(' /50x.html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' = /50x.html')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('root')]),
                      s._v(' html')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_filename')]),
                      s._v(' ~* .*\\.(?:htm|html)$)')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' Cache-Control\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('  Nginx-Cache '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"'),
                        a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$upstream_cache_status')]),
                        s._v('"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n        '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('location')]),
                      s._v(' ^~ /zlk/files/')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Content-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"nosniff"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-Frame-Options '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"DENY"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v(' X-XSS-Protection '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v('"1; mode=block"')]),
                      s._v(' always')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('  Nginx-Cache '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"'),
                        a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$upstream_cache_status')]),
                        s._v('"')
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                             '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'Access-Control-Allow-Origin'")]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'*'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                             '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'Access-Control-Allow-Credentials'")
                      ]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'true'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('if')]),
                      s._v(' ('),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [s._v('$request_method')]),
                      s._v(' = OPTIONS)')
                    ]),
                    s._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('{')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'Access-Control-Allow-Origin'")]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'*'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'Access-Control-Allow-Credentials'")
                      ]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'true'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'Access-Control-Max-Age'")]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('1728000')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'Access-Control-Allow-Credentials'")
                      ]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'true'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'Access-Control-Allow-Methods'")
                      ]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'GET, POST, OPTIONS, DELETE'")])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('add_header')]),
                      s._v('                                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'Access-Control-Allow-Headers'")
                      ]),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v(
                          "'reqid, nid, host, x-real-ip, x-forwarded-ip, event-type, event-id, accept, content-type'"
                        )
                      ])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n                '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('return')]),
                      s._v('                                             '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [s._v('200')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n            '),
                    a('span', { pre: !0, attrs: { class: 'token directive' } }, [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [s._v('alias')]),
                      s._v('                                                  /zlk/files/')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(';')]),
                    s._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('# another virtual host using mix of IP-, name-, and port-based configuration')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#')]),
                    s._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#server {')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#    listen       8000;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#    listen       somename:8080;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#    server_name  somename  alias  another.alias;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#    location / {')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#        root   html;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#        index  index.html index.htm;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#    }')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#}')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('# HTTPS server')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#')]),
                    s._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   server {')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#      listen       443 ssl;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#     #  server_name  hlwyy.lyrmyy.com;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#      ssl on;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v(
                        '#      ssl_certificate  /usr/local/nginx/cert/hlwyy.lyrmyy.com.crt; #这里是ssl key文件存放的绝对路径，根据自己的文件名称和路径来写'
                      )
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v(
                        '#      ssl_certificate_key  /usr/local/nginx/cert/hlwyy.lyrmyy.com.key; #这里是ssl key文件存放的绝对路径，根据自己的文件名称和路径来写'
                      )
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#      ssl_session_cache    shared:SSL:1m;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#      ssl_session_timeout  5m;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#      ssl_ciphers  HIGH:!aNULL:!MD5;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#      ssl_prefer_server_ciphers  on;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#      location / {')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#          root   html;')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      s._v('#          index  index.html index.htm;')
                    ]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#      }')]),
                    s._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [s._v('#   }')]),
                    s._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('}')]),
                    s._v('\n\n\n')
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
      t.default = n.exports
    }
  }
])
