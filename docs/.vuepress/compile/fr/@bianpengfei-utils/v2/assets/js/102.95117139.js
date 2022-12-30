;(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    910: function (t, s, a) {
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
              a('h2', { attrs: { id: '_1-介绍' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_1-介绍' } }, [t._v('#')]),
                t._v(' 1.介绍')
              ]),
              t._v(' '),
              a('blockquote', [
                a('p', [
                  t._v(
                    '是一款是由俄罗斯的程序设计师 Igor Sysoev 所开发高性能的 Web 和 反向代理 服务器，也是一个 IMAP/POP3/SMTP 代理服务器。\n在高连接并发的情况下，Nginx 是 Apache 服务器不错的替代品。'
                  ),
                  a('br'),
                  t._v(
                    ' Nginx 的最重要的几个使用场景：\n静态资源服务，通过本地文件系统提供服务；\n反向代理服务，延伸出包括缓存、负载均衡等；\nAPI 服务，OpenResty ；'
                  ),
                  a('br'),
                  t._v('\n个人觉得 作为一名前端还是有必要去了解和使用 nginx。'),
                  a(
                    'a',
                    { attrs: { href: 'http://nginx.org/en/docs/', target: '_blank', rel: 'noopener noreferrer' } },
                    [t._v('Nginx 官方文档'), a('OutboundLink')],
                    1
                  )
                ])
              ]),
              t._v(' '),
              a('p', [
                t._v('以下例子运行环境\nnginx：'),
                a('code', [t._v('1.8.0')]),
                t._v('\ncentos: '),
                a('code', [t._v('7.8')])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -v')]),
                    t._v('\nnginx version: nginx/1.8.0\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# lsb_release -a')]),
                    t._v(
                      '\nLSB Version:    :core-4.1-amd64:core-4.1-noarch\nDistributor ID: CentOS\nDescription:    CentOS Linux release '
                    ),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7.8')]),
                    t._v('.2003 '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('Core'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nRelease:        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7.8')]),
                    t._v('.2003\nCodename:       Core\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: '_2-概念' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-概念' } }, [t._v('#')]),
                t._v(' 2.概念')
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_2-1-跨域' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-1-跨域' } }, [t._v('#')]),
                t._v(' 2.1 跨域')
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '在浏览器上当前访问的网站向另一个网站发送请求获取数据的过程就是跨域请求。\n跨域是浏览器的同源策略决定的，是一个重要的浏览器安全策略，用于限制一个 origin 的文档或者它加载的脚本与另一个源的资源进行交互，它能够帮助阻隔恶意文档，减少可能被攻击的媒介，可以使用 CORS 配置解除这个限制。\n关于跨域网上已经有很多解释，这里就不啰嗦，也可以直接看 MDN 的 <浏览器的同源策略> 文档进一步了解，这里就列举几个同源和不同元的例子，相信程序员都能看得懂。'
                )
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 同源的例子')]),
                    t._v('\nhttp://example.com/app1/index.html  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 只是路径不同')]),
                    t._v('\nhttp://example.com/app2/index.html\n\nhttp://Example.com:80  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 只是大小写差异')]),
                    t._v('\nhttp://example.com\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 不同源的例子')]),
                    t._v('\nhttp://example.com/app1   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 协议不同')]),
                    t._v('\nhttps://example.com/app2\n\nhttp://example.com        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# host 不同')]),
                    t._v('\nhttp://www.example.com\nhttp://myapp.example.com\n\nhttp://example.com        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 端口不同')]),
                    t._v('\nhttp://example.com:8080\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_2-2-正向代理和反向代理-🔥' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-2-正向代理和反向代理-🔥' } }, [t._v('#')]),
                t._v(' 2.2 正向代理和反向代理 🔥')
              ]),
              t._v(' '),
              a('img', { attrs: { src: t.$withBase('/nginx/正向代理.png') } }),
              t._v(' '),
              a('h3', { attrs: { id: '_2-3-负载均衡-🔥' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-3-负载均衡-🔥' } }, [t._v('#')]),
                t._v(' 2.3 负载均衡 🔥')
              ]),
              t._v(' '),
              a('img', { attrs: { src: t.$withBase('/nginx/负载均衡.png') } }),
              t._v(' '),
              a('h3', { attrs: { id: '_2-4-动静分离' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-4-动静分离' } }, [t._v('#')]),
                t._v(' 2.4 动静分离')
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度，降低原来单个服务器的压力。\n'
                ),
                a('img', { attrs: { src: t.$withBase('/nginx/动静分离.png') } }),
                t._v(
                  '\n一般来说，都需要将动态资源和静态资源分开，由于 Nginx 的高并发和静态资源缓存等特性，经常将静态资源部署在 Nginx 上。如果请求的是静态资源，直接到静态资源目录获取资源，如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。\n'
                ),
                a('br'),
                t._v(' '),
                a('br'),
                t._v(
                  '\n使用前后端分离后，可以很大程度提升静态资源的访问速度，即使动态服务不可用，静态资源的访问也不会受到影响。'
                )
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '_3-nginx-开始' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-nginx-开始' } }, [t._v('#')]),
                t._v(' 3.nginx 开始')
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_3-1-安装' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-1-安装' } }, [t._v('#')]),
                t._v(' 3.1 安装')
              ]),
              t._v(' '),
              a('div', { staticClass: 'custom-block warning' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('安装教程不做过多介绍，安装请参考下面')])
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://blog.csdn.net/qq_37345604/article/details/90034424',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('centos 安装 Nginx'), a('OutboundLink')],
                  1
                ),
                t._v(' '),
                a('br'),
                t._v(' '),
                a('br'),
                t._v(' '),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://blog.csdn.net/yang5726685/article/details/81186834',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('window 安装 Nginx'), a('OutboundLink')],
                  1
                )
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_3-2-查找-nginx-配置文件路径' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-2-查找-nginx-配置文件路径' } }, [t._v('#')]),
                t._v(' 3.2 查找 nginx 配置文件路径')
              ]),
              t._v(' '),
              a('p', [t._v('若不知道 nginx 的安装目录和配置文件路径，则可以通过以下方式查找。')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -t')]),
                    t._v('\nnginx: the configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' /usr/local/nginx/conf/nginx.conf '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('test')]),
                    t._v(' is successful\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('从日志就可以看到 nginx 配置文件在 '),
                a('code', [t._v('/usr/local/nginx/conf/nginx.conf')])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_3-3-查看-nginx-监听的端口' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-3-查看-nginx-监听的端口' } }, [t._v('#')]),
                t._v(' 3.3 查看 nginx 监听的端口')
              ]),
              t._v(' '),
              a('h4', { attrs: { id: '方式一' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#方式一' } }, [t._v('#')]),
                t._v(' 方式一')
              ]),
              t._v(' '),
              a('blockquote', [
                a('p', [
                  t._v('先获取到 nginx 服务的'),
                  a('code', [t._v('PID')]),
                  t._v('，然后调用'),
                  a('code', [t._v('netstat -anp | grep [PID]')]),
                  t._v('，查看 nginx 监听的端口。')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# ps -ef | grep nginx')]),
                    t._v('\nnobody     '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('15672')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('13')]),
                    t._v(':22 ?        00:00:00 nginx: worker process\nroot       '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('843')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('591')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('13')]),
                    t._v(':51 pts/0    00:00:00 '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('grep')]),
                    t._v(' --color'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v('auto nginx\nroot     '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('15672')]),
                    t._v('     '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' Mar18 ?        00:00:00 nginx: master process nginx\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# netstat -anp | grep 712')]),
                    t._v('\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:80              '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8081            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8082            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8083            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8089            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\nunix  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('         STREAM     CONNECTED     '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5926516')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('从日志可以看到 nginx 启动的服务占用的端口号有：'),
                a('code', [t._v('80')]),
                t._v('、'),
                a('code', [t._v('8081')]),
                t._v('、'),
                a('code', [t._v('8082')]),
                t._v('、'),
                a('code', [t._v('8083')]),
                t._v('、'),
                a('code', [t._v('8089')])
              ]),
              t._v(' '),
              a('h4', { attrs: { id: '方式二' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#方式二' } }, [t._v('#')]),
                t._v(' 方式二')
              ]),
              t._v(' '),
              a('blockquote', [
                a('p', [
                  t._v('直接调用'),
                  a('code', [t._v('netstat -anp | grep nginx')]),
                  t._v('，查看 nginx 监听的端口。')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# netstat -anp | grep nginx')]),
                    t._v('\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:80              '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8081            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8082            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8083            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\ntcp        '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:8089            '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0.0')]),
                    t._v('.0.0:*               LISTEN      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\nunix  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('         STREAM     CONNECTED     '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5926515')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('15672')]),
                    t._v('/nginx: master\nunix  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('         STREAM     CONNECTED     '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5926516')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('712')]),
                    t._v('/nginx: worker p\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_3-4-nginx-基本命令' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-4-nginx-基本命令' } }, [t._v('#')]),
                t._v(' 3.4 nginx 基本命令')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -h')]),
                    t._v('\nnginx version: nginx/1.8.0\nUsage: nginx '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('-?hvVtq'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('-s signal'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('-c filename'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('-p prefix'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('-g directives'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n\nOptions:\n  -?,-h         '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' this '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('help')]),
                    t._v('\n  -v            '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' show version and '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('exit')]),
                    t._v('\n  -V            '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' show version and configure options '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('then')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('exit')]),
                    t._v('\n  -t            '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('test')]),
                    t._v(' configuration and '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('exit')]),
                    t._v('\n  -q            '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' suppress non-error messages during configuration testing\n  -s signal     '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' send signal to a master process: stop, quit, reopen, reload\n  -p prefix     '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('set')]),
                    t._v(' prefix path '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('default: /usr/local/nginx/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n  -c filename   '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('set')]),
                    t._v(' configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('default: conf/nginx.conf'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n  -g directives '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('set')]),
                    t._v(' global directives out of configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [t._v('常用的命令有：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 启动 nginx')]),
                    t._v('\nnginx\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 停止 nginx')]),
                    t._v('\nnginx -s stop\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 检查 NGINX 配置是否正确')]),
                    t._v('\nnginx -t\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 重启 nginx，常用')]),
                    t._v('\nnginx -s reload\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 重新打开 nginx')]),
                    t._v('\nnginx -s reopen\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 设置配置文件，默认为 /usr/local/etc/nginx/nginx.conf')
                    ]),
                    t._v('\nnginx -c filename\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_3-5-nginx-conf-文件配置简要说明' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-5-nginx-conf-文件配置简要说明' } }, [
                  t._v('#')
                ]),
                t._v(' 3.5 Nginx.conf 文件配置简要说明')
              ]),
              t._v(' '),
              a('details', { staticClass: 'custom-block details' }, [
                a('summary', [t._v('配置，点击查看')]),
                t._v(' '),
                a('div', { staticClass: 'language-shell extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#定义 nginx 运行的用户和用户组')
                      ]),
                      t._v('\nuser www www'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#nginx 进程数，建议设置为等于 CPU 总核心数。')
                      ]),
                      t._v('\nworker_processes '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#nginx 默认没有开启利用多核 CPU, 通过增加 worker_cpu_affinity 配置参数来充分利用多核 CPU 以下是 8 核的配置参数'
                        )
                      ]),
                      t._v('\nworker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10000000')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]')
                      ]),
                      t._v('\nerror_log /var/log/nginx/error.log info'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#进程文件')]),
                      t._v('\npid /var/run/nginx.pid'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#一个 nginx 进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值 ulimit -n）与 nginx 进程数相除，但是 nginx 分配请求并不均匀，所以建议与 ulimit -n 的值保持一致。'
                        )
                      ]),
                      t._v('\nworker_rlimit_nofile '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('65535')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#工作模式与连接数上限')]),
                      t._v('\nevents\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll 模型是 Linux 2.6 以上版本内核中的高性能网络 I/O 模型，如果跑在 FreeBSD 上面，就用 kqueue 模型。'
                        )
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#epoll 是多路复用 IO(I/O Multiplexing) 中的一种方式，但是仅用于 linux2.6 以上内核，可以大大提高 nginx 的性能'
                        )
                      ]),
                      t._v('\n    use epoll'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('############################################################################')
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#单个后台 worker process 进程的最大并发链接数')
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#事件模块指令，定义 nginx 每个进程最大连接数，默认 1024。最大客户连接数由 worker_processes 和 worker_connections 决定'
                        )
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#即 max_client=worker_processes*worker_connections, 在作为反向代理时：max_client=worker_processes*worker_connections / 4'
                        )
                      ]),
                      t._v('\n    worker_connections '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('65535')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('############################################################################')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定 http 服务器')]),
                      t._v('\nhttp '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    include mime.types'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#文件扩展名与文件类型映射表')]),
                      t._v('\n    default_type application/octet-stream'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#默认文件类型')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#charset utf-8; #默认编码')]),
                      t._v('\n\n    server_names_hash_bucket_size '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('128')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#服务器名字的 hash 表大小')]),
                      t._v('\n    client_header_buffer_size 32k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#上传文件大小限制')]),
                      t._v('\n    large_client_header_buffers '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                      t._v(' 64k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定请求缓')]),
                      t._v('\n    client_max_body_size 8m'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定请求缓')]),
                      t._v('\n    sendfile on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#开启高效文件传输模式，sendfile 指令指定 nginx 是否调用 sendfile 函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成 off。'
                        )
                      ]),
                      t._v('\n    autoindex on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#开启目录列表访问，合适下载服务器，默认关闭。')
                      ]),
                      t._v('\n    tcp_nopush on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#防止网络阻塞')]),
                      t._v('\n    tcp_nodelay on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#防止网络阻塞')]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('##连接客户端超时时间各种参数设置##')
                      ]),
                      t._v('\n    keepalive_timeout  '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('120')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('          '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#单位是秒，客户端连接时时间，超时之后服务器端自动关闭该连接 如果 nginx 守护进程在这个等待的时间里，一直没有收到浏览发过来 http 请求，则关闭这个 http 连接'
                        )
                      ]),
                      t._v('\n    client_header_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#客户端请求头的超时时间')]),
                      t._v('\n    client_body_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('          '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#客户端请求主体超时时间')]),
                      t._v('\n    reset_timedout_connection on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#告诉 nginx 关闭不响应的客户端连接。这将会释放那个客户端所占有的内存空间')
                      ]),
                      t._v('\n    send_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('                 '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#客户端响应超时时间，在两次客户端读取操作之间。如果在这段时间内，客户端没有读取任何数据，nginx 就会关闭连接'
                        )
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('################################')
                      ]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#FastCGI 相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。'
                        )
                      ]),
                      t._v('\n    fastcgi_connect_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('300')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    fastcgi_send_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('300')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    fastcgi_read_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('300')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    fastcgi_buffer_size 64k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    fastcgi_buffers '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                      t._v(' 64k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    fastcgi_busy_buffers_size 128k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    fastcgi_temp_file_write_size 128k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('###作为代理缓存服务器设置#######')
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('###先写到 temp 再移动到 cache')
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#proxy_cache_path /var/tmp/nginx/proxy_cache levels=1:2 keys_zone=cache_one:512m inactive=10m max_size=64m;'
                        )
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('###以上 proxy_temp 和 proxy_cache 需要在同一个分区中')
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '###levels=1:2 表示缓存级别，表示缓存目录的第一级目录是 1 个字符，第二级目录是 2 个字符 keys_zone=cache_one:128m 缓存空间起名为 cache_one 大小为 512m'
                        )
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '###max_size=64m 表示单个文件超过 128m 就不缓存了  inactive=10m 表示缓存的数据，10 分钟内没有被访问过就删除'
                        )
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#########end####################')
                      ]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#####对传输文件压缩###########')
                      ]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#gzip 模块设置')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('gzip')]),
                      t._v(' on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#开启 gzip 压缩输出')]),
                      t._v('\n    gzip_min_length 1k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#最小压缩文件大小')]),
                      t._v('\n    gzip_buffers '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                      t._v(' 16k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#压缩缓冲区')]),
                      t._v('\n    gzip_http_version '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1.0')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#压缩版本（默认 1.1，前端如果是 squid2.5 请使用 1.0）')
                      ]),
                      t._v('\n    gzip_comp_level '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#压缩等级，gzip 压缩比，1 为最小，处理最快；9 为压缩比最大，处理最慢，传输速度最快，也最消耗 CPU；'
                        )
                      ]),
                      t._v('\n    gzip_types text/plain application/x-javascript text/css application/xml'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#压缩类型，默认就已经包含 text/html，所以下面就不用再写了，写上去也不会有问题，但是会有一个 warn。'
                        )
                      ]),
                      t._v('\n    gzip_vary on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('##############################')
                      ]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#limit_zone crawler $binary_remote_addr 10m; #开启限制 IP 连接数的时候需要使用')
                      ]),
                      t._v('\n\n    upstream blog.ha97.com '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。'
                        )
                      ]),
                      t._v('\n        server '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('192.168')]),
                      t._v('.80.121:80 '),
                      a('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [t._v('weight')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        server '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('192.168')]),
                      t._v('.80.122:80 '),
                      a('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [t._v('weight')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        server '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('192.168')]),
                      t._v('.80.123:80 '),
                      a('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [t._v('weight')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#虚拟主机的配置')]),
                      t._v('\n    server '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#监听端口')]),
                      t._v('\n        listen '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('80')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#############https##################')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#listen 443 ssl;')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#ssl_certificate /opt/https/xxxxxx.crt;')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#ssl_certificate_key /opt/https/xxxxxx.key;')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#ssl_protocols SSLv3 TLSv1;')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#ssl_ciphers HIGH:!ADH:!EXPORT57:RC4+RSA:+MEDIUM;')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#ssl_prefer_server_ciphers on;')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#ssl_session_cache shared:SSL:2m;')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#ssl_session_timeout 5m;')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('####################################end')
                      ]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#域名可以有多个，用空格隔开')]),
                      t._v('\n        server_name www.ha97.com ha97.com'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        index index.html index.htm index.php'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        root /data/www/ha97'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        location ~ .*.'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('php'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('php5'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('?$ '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n            fastcgi_pass '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('127.0')]),
                      t._v('.0.1:9000'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            fastcgi_index index.php'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            include fastcgi.conf'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#图片缓存时间设置')]),
                      t._v('\n        location ~ .*.'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('gif'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('jpg'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('jpeg'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('png'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('bmp'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('swf'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('$ '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n            expires 10d'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#JS 和 CSS 缓存时间设置')]),
                      t._v('\n        location ~ .*.'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('js'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('css'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('?$ '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n            expires 1h'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#日志格式设定')]),
                      t._v('\n        log_format access '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'$remote_addr - $remote_user [$time_local] "$request" \'')
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'$status $body_bytes_sent "$http_referer" \'')
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'"$http_user_agent" $http_x_forwarded_for\'')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#定义本虚拟主机的访问日志')]),
                      t._v('\n        access_log /var/log/nginx/ha97access.log access'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#对 "/" 启用反向代理')]),
                      t._v('\n        location / '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n            proxy_pass http://127.0.0.1:88'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            proxy_redirect off'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            proxy_set_header X-Real-IP '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#后端的 Web 服务器可以通过 X-Forwarded-For 获取用户真实 IP')
                      ]),
                      t._v('\n            proxy_set_header X-Forwarded-For '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$proxy_add_x_forwarded_for')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#以下是一些反向代理的配置，可选。')
                      ]),
                      t._v('\n            proxy_set_header Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$host')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            client_max_body_size 10m'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#允许客户端请求的最大单文件字节数')
                      ]),
                      t._v('\n            client_body_buffer_size 128k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#缓冲区代理缓冲用户端请求的最大字节数，')
                      ]),
                      t._v('\n\n            '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('##代理设置 以下设置是 nginx 和后端服务器之间通讯的设置##')
                      ]),
                      t._v('\n            proxy_connect_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('90')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#nginx 跟后端服务器连接超时时间（代理连接超时）')
                      ]),
                      t._v('\n            proxy_send_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('90')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#后端服务器数据回传时间（代理发送超时）')
                      ]),
                      t._v('\n            proxy_read_timeout '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('90')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#连接成功后，后端服务器响应时间（代理接收超时）')
                      ]),
                      t._v('\n            proxy_buffering on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#该指令开启从后端被代理服务器的响应内容缓冲 此参数开启后 proxy_buffers 和 proxy_busy_buffers_size 参数才会起作用'
                        )
                      ]),
                      t._v('\n            proxy_buffer_size 4k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('  '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#设置代理服务器（nginx）保存用户头信息的缓冲区大小')
                      ]),
                      t._v('\n            proxy_buffers '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                      t._v(' 32k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('   '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#proxy_buffers 缓冲区，网页平均在 32k 以下的设置')
                      ]),
                      t._v('\n            proxy_busy_buffers_size 64k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#高负荷下缓冲大小（proxy_buffers*2）')
                      ]),
                      t._v('\n            proxy_max_temp_file_size 2048m'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v(
                          '#默认 1024m, 该指令用于设置当网页内容大于 proxy_buffers 时，临时文件大小的最大值。如果文件大于这个值，它将从 upstream 服务器同步地传递请求，而不是缓冲到磁盘'
                        )
                      ]),
                      t._v('\n            proxy_temp_file_write_size 512k'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(
                        ' 这是当被代理服务器的响应过大时 nginx 一次性写入临时文件的数据量。\n            proxy_temp_path  /var/tmp/nginx/proxy_temp'
                      ),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('##定义缓冲存储目录，之前必须要先手动创建此目录')
                      ]),
                      t._v('\n            proxy_headers_hash_max_size '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('51200')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            proxy_headers_hash_bucket_size '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6400')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#######################################################')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定查看 nginx 状态的地址')]),
                      t._v('\n        location /nginxStatus '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n            stub_status on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            access_log on'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            auth_basic '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"nginxStatus"')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            auth_basic_user_file conf/htpasswd'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#htpasswd 文件的内容可以用 apache 提供的 htpasswd 工具来产生。')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#本地动静分离反向代理配置')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#所有 jsp 的页面均交由 tomcat 或 resin 处理')
                      ]),
                      t._v('\n        location ~ .'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('jsp'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('jspx'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('do')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('?$ '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n            proxy_set_header Host '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$host')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            proxy_set_header X-Real-IP '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$remote_addr')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            proxy_set_header X-Forwarded-For '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$proxy_add_x_forwarded_for')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n            proxy_pass http://127.0.0.1:8080'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('#所有静态文件由 nginx 直接读取不经过 tomcat 或 resin')
                      ]),
                      t._v('\n        location ~ .*.'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('htm'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('html'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('gif'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('jpg'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('jpeg'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('png'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('bmp'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('swf'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('ioc'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('rar')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('zip')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('txt'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('flv'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('mid'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('doc'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('ppt'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('pdf'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('xls'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('mp3'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('wma'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('$\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' expires 15d'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n        location ~ .*.'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('js'),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                      t._v('css'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('?$\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' expires 1h'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ])
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '_4-nginx-配置语法' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_4-nginx-配置语法' } }, [t._v('#')]),
                t._v(' 4.Nginx 配置语法')
              ]),
              t._v(' '),
              a('p', [
                t._v('比如说我们的 nginx 配置文件在 '),
                a('code', [t._v('/usr/local/nginx/conf/nginx.conf')]),
                t._v('中，你以进行 '),
                a('code', [t._v('cat /usr/local/nginx/conf/nginx.conf')]),
                t._v(' 查看 nginx 配置')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('main        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 全局配置，对全局生效')]),
                    t._v('\n├── events  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 配置影响 Nginx 服务器或与用户的网络连接')
                    ]),
                    t._v('\n├── http    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置')
                    ]),
                    t._v('\n│   ├── upstream '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 配置后端服务器具体地址，负载均衡配置不可或缺的部分')
                    ]),
                    t._v('\n│   ├── server   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块')
                    ]),
                    t._v('\n│   ├── server\n│   │   ├── location  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# server 块可以包含多个 location 块，location 指令用于匹配 uri')
                    ]),
                    t._v('\n│   │   ├── location\n│   │   └── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n│   └── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n└── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('一个 Nginx 配置文件的结构就像 nginx.conf 显示的那样，配置文件的语法规则：\n'),
                a('br'),
                t._v(' '),
                a('br')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [t._v('配置文件由指令与指令块构成；'), a('br')]),
                t._v(' '),
                a('li', [
                  t._v('每条指令以 '),
                  a('code', [t._v(';')]),
                  t._v(' 分号结尾，指令与参数间以空格符号分隔；'),
                  a('br')
                ]),
                t._v(' '),
                a('li', [t._v('指令块以 '), a('code', [t._v('{}')]), t._v(' 大括号将多条指令组织在一起；'), a('br')]),
                t._v(' '),
                a('li', [a('code', [t._v('include')]), t._v(' 语句允许组合多个配置文件以提升可维护性；'), a('br')]),
                t._v(' '),
                a('li', [t._v('使用 '), a('code', [t._v('#')]), t._v(' 符号添加注释，提高可读性；'), a('br')]),
                t._v(' '),
                a('li', [
                  t._v('使用 '),
                  a('code', [t._v('$')]),
                  t._v('符号使用变量；'),
                  a('br'),
                  t._v('\n部分指令的参数支持正则表达式；'),
                  a('br')
                ])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_4-1-经典配置' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_4-1-经典配置' } }, [t._v('#')]),
                t._v(' 4.1 经典配置')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('user  nginx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('                        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 运行用户，默认即是nginx，可以不进行设置')
                    ]),
                    t._v('\nworker_processes  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('                '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# Nginx 进程数，一般设置为和 CPU 核数一样')
                    ]),
                    t._v('\nerror_log  /var/log/nginx/error.log warn'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# Nginx 的错误日志存放目录')]),
                    t._v('\npid        /var/run/nginx.pid'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# Nginx 服务启动时的 pid 存放位置')
                    ]),
                    t._v('\n\nevents '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    use epoll'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('     '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)'
                      )
                    ]),
                    t._v('\n    worker_connections '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1024')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 每个进程允许最大并发数')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\nhttp '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置')
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 设置日志模式')]),
                    t._v('\n    log_format  main  '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('\'$remote_addr - $remote_user [$time_local] "$request" \'')
                    ]),
                    t._v('\n                      '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('\'$status $body_bytes_sent "$http_referer" \'')
                    ]),
                    t._v('\n                      '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    access_log  /var/log/nginx/access.log  main'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# Nginx访问日志存放位置')]),
                    t._v('\n\n    sendfile            on'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 开启高效传输模式')]),
                    t._v('\n    tcp_nopush          on'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 减少网络报文段的数量')]),
                    t._v('\n    tcp_nodelay         on'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    keepalive_timeout   '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('65')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 保持连接的时间，也叫超时时间，单位秒')
                    ]),
                    t._v('\n    types_hash_max_size '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2048')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    include             /etc/nginx/mime.types'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('      '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 文件扩展名与类型映射表')]),
                    t._v('\n    default_type        application/octet-stream'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 默认文件类型')]),
                    t._v('\n\n    include /etc/nginx/conf.d/*.conf'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 加载子配置项')]),
                    t._v('\n\n    server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    \tlisten       '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('80')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('       '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 配置监听的端口')]),
                    t._v('\n    \tserver_name  localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 配置的域名')]),
                    t._v('\n\n    \tlocation / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    \t\troot   /usr/share/nginx/html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 网站根目录')]),
                    t._v('\n    \t\tindex  index.html index.htm'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 默认首页文件')]),
                    t._v('\n    \t\tdeny '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('172.168')]),
                    t._v('.22.11'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 禁止访问的ip地址，可以为all')]),
                    t._v('\n    \t\tallow '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('172.168')]),
                    t._v('.33.44； '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 允许访问的ip地址，可以为all')]),
                    t._v('\n    \t'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    \terror_page '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('500')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('502')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('503')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('504')]),
                    t._v(' /50x.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 默认50x对应的访问页面')]),
                    t._v('\n    \terror_page '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('400')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('404')]),
                    t._v(' error.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 同上')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: '_5-nginx-实战' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-nginx-实战' } }, [t._v('#')]),
                t._v(' 5 Nginx 实战')
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-1-前端-vue-传统的-spa-项目打包' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-1-前端-vue-传统的-spa-项目打包' } }, [
                  t._v('#')
                ]),
                t._v(' 5.1 前端 vue 传统的 spa 项目打包')
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '针对于 Vue MPA 工程，工程里会存在多个业务，每个业务都是一个 SPA。假设上线后，\n前端模板代码都位于 '
                ),
                a('code', [t._v('/data/mandalat-web/')]),
                t._v(' 目录下，该目录结构如下：')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('├── front-end\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   └── index.html\n├── back-end\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   ├── index.html\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   └── main.html\n├── es6\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   └── index.html\n├── vue\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   └── index.html\n├── '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('test')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   └── index-test.html\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('其中，'),
                a('code', [t._v('front-end')]),
                t._v('、'),
                a('code', [t._v('back-end')]),
                t._v('、'),
                a('code', [t._v('es6')]),
                t._v('、'),
                a('code', [t._v('vue')]),
                t._v('分别代表不同的业务，每个业务都是 SPA。\n'),
                a('br'),
                t._v('\n这时候我想访问 分别访问 '),
                a('code', [t._v('front-end')]),
                t._v('、'),
                a('code', [t._v('back-end')]),
                t._v('、'),
                a('code', [t._v('es6')]),
                t._v('、'),
                a('code', [t._v('vue')])
              ]),
              t._v(' '),
              a('p', [t._v('Nginx 的 '), a('code', [t._v('nginx.conf')]), t._v(' 配置文件如下：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen      '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8080')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 访问日志')]),
                    t._v('\n    access_log  /data/logs/nginx/access.log  main'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    error_log  /data/logs/nginx/error.log'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    keepalive_requests '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 根目录，在如下描述中用 $root 占位')
                    ]),
                    t._v('\n    root /data/mandalat-web/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    error_page   '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('500')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('502')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('503')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('504')]),
                    t._v('  /50x.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    location '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' /50x.html '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root   html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    error_page   '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('403')]),
                    t._v('  /403.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    location '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' /403.html '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root   html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    error_page  '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('404')]),
                    t._v('  /404.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    location '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' /404.html '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root   html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location /front-end/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /front-end/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location /back-end/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /back-end/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location /es6/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /es6/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location /test/hello '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /es6/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index world.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# ...')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_5-1-location-匹配流程' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-1-location-匹配流程' } }, [t._v('#')]),
                t._v(' 5.1 location 匹配流程')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('location '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 完全匹配  =')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 大小写敏感 ~')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 忽略大小写 ~*')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\nlocation ^~ /images/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前半部分匹配 ^~')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 可以使用正则，如：')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# location ~* \\.(gif|jpg|png)$ { }')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\nlocation / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 如果以上都未匹配，会进入这里')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [t._v('server 块可以包含多个 location 块，location 指令用于匹配 uri，语法：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('location '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' ~ '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' ~* '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' ^~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v(' uri '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n\t'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [t._v('指令后面：'), a('br')]),
              t._v(' '),
              a('ol', [
                a('li', [
                  a('code', [t._v('=')]),
                  t._v(' 精确匹配路径，用于不含正则表达式的 uri 前，如果匹配成功，不再进行后续的查找；'),
                  a('br')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('^~')]),
                  t._v(
                    ' 用于不含正则表达式的 uri； 前，表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找；'
                  ),
                  a('br')
                ]),
                t._v(' '),
                a('li', [a('code', [t._v('~')]), t._v(' 表示用该符号后面的正则去匹配路径，区分大小写；'), a('br')]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('~*')]),
                  t._v(
                    ' 表示用该符号后面的正则去匹配路径，不区分大小写。跟 ~ 优先级都比较低，如有多个 location 的正则能匹配的话，则使用正则表达式最长的那个；'
                  ),
                  a('br')
                ])
              ]),
              t._v(' '),
              a('p', [
                t._v('匹配流程：\n'),
                a('img', { attrs: { src: t.$withBase('/nginx/nginx-location-匹配流程.png') } })
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-2-root-和-alias' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-2-root-和-alias' } }, [t._v('#')]),
                t._v(' 5.2 root 和 alias')
              ]),
              t._v(' '),
              a('p', [
                t._v('假设访问 es6 语法\n'),
                a('code', [t._v('root')]),
                t._v('与'),
                a('code', [t._v('alias')]),
                t._v('的区别主要在于 Nginx 如何解释'),
                a('code', [t._v('location')]),
                t._v('后面的路径的 URI，这会使两者分别以不同的方式将请求映射到服务器文件上。具体来看：')
              ]),
              t._v(' '),
              a('p', [
                t._v('root 的处理结果是：'),
                a('code', [t._v('root')]),
                t._v('路径+'),
                a('code', [t._v('location')]),
                t._v('路径\nalias 的处理结果是：使用'),
                a('code', [t._v('alias')]),
                t._v('路径替换'),
                a('code', [t._v('location')]),
                t._v('路径')
              ]),
              t._v(' '),
              a('p', [t._v('例如，如下的 Nginx 配置：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen              '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('9001')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    server_name         localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    location /hello '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root            /usr/local/var/www/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('在请求'),
                a('code', [t._v('http://localhost:9001/hello/')]),
                t._v('时，真实服务器返回的路径地址应该是'),
                a('code', [t._v('/usr/local/var/www/hello/index.html')])
              ]),
              t._v(' '),
              a('p', [t._v('当使用 alias 时：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen              '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('9001')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    server_name         localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    location /hello '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('alias')]),
                    t._v('           /usr/local/var/www/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('在请求 '),
                a('code', [t._v('http://localhost:9001/hello/')]),
                t._v(' 时，服务器返回的路径地址应该是 '),
                a('code', [t._v('/usr/local/var/www/index.html')]),
                t._v('（用 alias 后面的路径将请求的 location 的地址 hello 替换掉）')
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '另外，要注意的是，alias 路径后面必须使用/结束，否则无法匹配正确的路径，而 root 后则可有可无。所以建议都加上/，反之出错'
                )
              ]),
              t._v(' '),
              a('div', { staticClass: 'custom-block warning' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('提示')]),
                t._v(' '),
                a('p', [t._v('alias 大多数是处理 文件静态资源的。')])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-2-try-files' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-2-try-files' } }, [t._v('#')]),
                t._v(' 5.2 try_files')
              ]),
              t._v(' '),
              a('p', [
                t._v('当访问 '),
                a('code', [t._v('http://192.168.8.55/es6/array')]),
                t._v(' 时，会经过 Nginx 的如下规则处理。')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('  location /es6/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /es6/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [t._v('根据'), a('code', [t._v('try_files')]), t._v('的写法，')]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('首先，查找'),
                  a('code', [t._v('$uri')]),
                  t._v('即'),
                  a('code', [t._v('/es6/array')]),
                  t._v('，也就是'),
                  a('code', [t._v('$root/es6')]),
                  t._v('文件夹下的 array 文件，找到则返回文件，否则进入下一步；')
                ]),
                t._v(' '),
                a('li', [
                  t._v('其次，查找'),
                  a('code', [t._v('$uri/')]),
                  t._v('即'),
                  a('code', [t._v('/es6/array/')]),
                  t._v('，也就是'),
                  a('code', [t._v('$root/es6/array')]),
                  t._v('文件夹，查看该文件夹下是否有'),
                  a('code', [t._v('index.html')]),
                  t._v('文件，有则返回文件，否则进入下一步；')
                ]),
                t._v(' '),
                a('li', [
                  t._v('最后，查找'),
                  a('code', [t._v('/es6/index.html')]),
                  t._v('，即'),
                  a('code', [t._v('$root/es6/index.html')]),
                  t._v('文件，有则返回。')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'custom-block warning' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('⚠️ 注意')]),
                t._v(' '),
                a('ol', [
                  a('li', [
                    t._v('当 location 中有设置 '),
                    a('code', [t._v('root')]),
                    t._v(' 时，try_files 路径是开始是从 '),
                    a('code', [t._v('root')]),
                    t._v(' 目录下开始的，假如配置这样')
                  ])
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-shell extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                    a('code', [
                      t._v('    location /test/hello '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        root /data/front'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        try_files '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /es6/index.html'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        index world.html'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('当访问 '),
                  a('code', [t._v('http://192.168.8.55/test/hello/1.wps')]),
                  t._v(' 时，真实访问地址是 '),
                  a('code', [t._v('http://192.168.8.55/data/front/test/hello/1.wps')]),
                  t._v('，会经过 Nginx 的如下规则处理。它会访问 本台服务器 '),
                  a('code', [t._v('/data/front/test/hello/1.wps')]),
                  t._v('，假设找不到，这时候会默认返回一个默认的 '),
                  a('code', [t._v('/data/front/es6/index.html')])
                ]),
                t._v(' '),
                a('ol', { attrs: { start: '2' } }, [
                  a('li', [
                    t._v('当 location 中有设置 '),
                    a('code', [t._v('alias')]),
                    t._v(' 时，try_files 路径是开始是从 最近的 '),
                    a('code', [t._v('root')]),
                    t._v(' 目录下开始的，如果上级没有设置 '),
                    a('code', [t._v('root')]),
                    t._v('，那么会从 '),
                    a('code', [t._v('nginx')]),
                    t._v(' 的安装默认位置中'),
                    a('code', [t._v('html')]),
                    t._v(' 算起，')
                  ])
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-shell extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                    a('code', [
                      t._v('    location /test/hello '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('alias')]),
                      t._v(' /data/front'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        try_files '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                      t._v('/ /es6/index.html'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        index world.html'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('比如我们设定 nginx 中 html 目录地址是 '),
                  a('code', [t._v('/usr/local/nginx/html')]),
                  t._v('\n当访问 '),
                  a('code', [t._v('http://192.168.8.55/test/hello/1.wps')]),
                  t._v(' 时，真实访问地址是 '),
                  a('code', [t._v('http://192.168.8.55/data/front/1.wps')]),
                  t._v('，会经过 Nginx 的如下规则处理。\n它会访问 本台服务器 '),
                  a('code', [t._v('/data/front/1.wps')]),
                  t._v('，假设找不到，这时候会默认返回一个默认的 '),
                  a('code', [t._v('/usr/local/nginx/html/es6/index.html')])
                ])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-3-index' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-3-index' } }, [t._v('#')]),
                t._v(' 5.3 index')
              ]),
              t._v(' '),
              a('p', [
                t._v('当访问 '),
                a('code', [t._v('http://192.168.8.55/es6/array')]),
                t._v(' 时，会经过 Nginx 的如下规则处理。')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('    location /test/hello '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /es6/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index world.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('先按照 try_files 进行处理，当处理第二步的'),
                a('code', [t._v('$uri/')]),
                t._v('时，会结合'),
                a('code', [t._v('index world.html')]),
                t._v('，此时会查找'),
                a('code', [t._v('/test/hello/world.html')]),
                t._v('是否存在，不存在则进入下一步。')
              ]),
              t._v(' '),
              a('p', [
                t._v('因此 location 里的 index 的作用时，在查找文件夹时，指定该文件夹下默认匹配的文件。因此当访问 '),
                a('code', [t._v('http://localhost:9527/test/hello')]),
                t._v(' 时，会返回``')
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-4-proxy-pass' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-4-proxy-pass' } }, [t._v('#')]),
                t._v(' 5.4 proxy_pass')
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '实际使用中，可以将请求转发到本机另一个服务器上，也可以根据访问的路径跳转到不同端口的服务中。\n比如我们监听 9001 端口，然后把访问不同路径的请求进行反向代理：'
                )
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('把访问 '),
                  a('code', [t._v('http://127.0.0.1:9001/edu')]),
                  t._v(' 的请求转发到 '),
                  a('code', [t._v('http://127.0.0.1:8080')])
                ]),
                t._v(' '),
                a('li', [
                  t._v('把访问 '),
                  a('code', [t._v('http://127.0.0.1:9001/vod')]),
                  t._v(' 的请求转发到 '),
                  a('code', [t._v('http://127.0.0.1:8081')])
                ])
              ]),
              t._v(' '),
              a('p', [t._v('这种要怎么配置呢，首先同样打开主配置文件，然后在 http 模块下增加一个 server 块：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  listen '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('9001')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n  location ~ /edu/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    proxy_pass http://127.0.0.1:8080'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    rewrite ^/edu/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n  location ~ /vod/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    proxy_pass http://127.0.0.1:8081'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [t._v('反向代理还有一些其他的指令，可以了解一下：')]),
              t._v(' '),
              a('ol', [
                a('li', [
                  a('code', [t._v('proxy_set_header')]),
                  t._v('：在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('proxy_connect_timeout')]),
                  t._v('：配置 Nginx 与后端代理服务器尝试建立连接的超时时间。')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('proxy_read_timeout')]),
                  t._v('：配置 Nginx 向后端服务器组发出 read 请求后，等待相应的超时时间。')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('proxy_send_timeout')]),
                  t._v('：配置 Nginx 向后端服务器组发出 write 请求后，等待相应的超时时间。')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('proxy_redirect')]),
                  t._v('：用于修改后端服务器返回的响应头中的 Location 和 Refresh。')
                ])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-5-rewrite' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-5-rewrite' } }, [t._v('#')]),
                t._v(' 5.5 rewrite')
              ]),
              t._v(' '),
              a('p', [
                a('code', [t._v('rewrite')]),
                t._v('模块即'),
                a('code', [t._v('ngx_http_rewrite_module')]),
                t._v('模块，主要功能是改写请求 URI，是'),
                a('code', [t._v('Nginx')]),
                t._v('默认安装的模块。'),
                a('code', [t._v('rewrite')]),
                t._v('模块会根据 PCRE 正则匹配重写'),
                a('code', [t._v('URI')]),
                t._v('，然后发起内部跳转再匹配'),
                a('code', [t._v('location')]),
                t._v('，或者直接做 30x 重定向返回客户端。')
              ]),
              t._v(' '),
              a('p', [
                t._v('场景：假设后端 api 服务器地址是 '),
                a('code', [t._v('192.168.8.55:3280')]),
                t._v('，前端在业务项目中用特定标识前缀开头，比如用 '),
                a('code', [t._v('/grade')]),
                t._v('，我们可以在'),
                a('code', [t._v('server')]),
                t._v('下，我们前端打包部署在'),
                a('code', [t._v('8081')]),
                t._v('端口号上')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  listen '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8081')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n  location / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n      root /data/grade-ui'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n      index index.html index.htm'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n      try_files '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n  location ^~ /grade/ '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    proxy_pass '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('192.168')]),
                    t._v('.8.55:3280'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    rewrite ^/grade/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('其中的 '),
                a('code', [t._v('$1')]),
                t._v(' 指的是 '),
                a('code', [t._v('(.*)')]),
                t._v('，由配置我们可以知道，'),
                a('code', [t._v('nginx')]),
                t._v(' 判断请求路径 开头是否是'),
                a('code', [t._v('/grade')]),
                t._v('，如果是 将'),
                a('code', [t._v('/grade')]),
                t._v('开头去除，保留后面'),
                a('code', [t._v('url')]),
                t._v('，然后代理到'),
                a('code', [t._v('192.168.8.55:3280')]),
                t._v(' 上')
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://segmentfault.com/a/1190000008102599',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('rewrite 参考文档'), a('OutboundLink')],
                  1
                )
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: { href: 'https://www.phpmianshi.com/?id=98', target: '_blank', rel: 'noopener noreferrer' }
                  },
                  [t._v('break 和 last 区别、permanent 和 redirect 区别'), a('OutboundLink')],
                  1
                )
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_5-5-upstream' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-5-upstream' } }, [t._v('#')]),
                t._v(' 5.5 upstream')
              ]),
              t._v(' '),
              a('p', [t._v('主要思想就是把负载均匀合理地分发到多个服务器上，实现压力分流的目的。')]),
              t._v(' '),
              a('p', [t._v('主要配置如下：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('http '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  upstream myserver '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  \t'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# ip_hash;  # ip_hash 方式')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# fair;   # fair 方式')]),
                    t._v('\n    server '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('127.0')]),
                    t._v('.0.1:8081'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 负载均衡目的服务地址')]),
                    t._v('\n    server '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('127.0')]),
                    t._v('.0.1:8080'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    server '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('127.0')]),
                    t._v('.0.1:8082 '),
                    a('span', { pre: !0, attrs: { class: 'token assign-left variable' } }, [t._v('weight')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# weight 方式，不写默认为 1')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n  server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    location / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n      proxy_pass http://myserver'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n      proxy_connect_timeout '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('p', [t._v('Nginx 提供了好几种分配方式，默认为轮询，就是轮流来。有以下几种分配方式：')]),
              t._v(' '),
              a('ol', [
                a('li', [
                  a('code', [t._v('轮询')]),
                  t._v('，默认方式，每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务挂了，能自动剔除；')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('weight')]),
                  t._v('，权重分配，指定轮询几率，权重越高，在被访问的概率越大，用于后端服务器性能不均的情况；')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('ip_hash')]),
                  t._v(
                    '，每个请求按访问 IP 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决动态网页 session 共享问题。负载均衡每次请求都会重新定位到服务器集群中的某一个，那么已经登录某一个服务器的用户再重新定位到另一个服务器，其登录信息将会丢失，这样显然是不妥的；'
                  )
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('fair（第三方）')]),
                  t._v(
                    '，按后端服务器的响应时间分配，响应时间短的优先分配，依赖第三方插件 nginx-upstream-fair，需要先安装；'
                  )
                ])
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '_6-结合院内实际业务中使用-🔥' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_6-结合院内实际业务中使用-🔥' } }, [t._v('#')]),
                t._v(' 6.结合院内实际业务中使用 🔥')
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_6-1-背景' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_6-1-背景' } }, [t._v('#')]),
                t._v(' 6.1 背景')
              ]),
              t._v(' '),
              a('p', [
                t._v('前后端分离虽然是 '),
                a('code', [t._v('ajax')]),
                t._v(' 的功劳，但是真根本性的问题是'),
                a('code', [t._v('路由跳转')]),
                t._v('到底是谁来控制，谁来进行跳转。前端分离后，前端路由跳转是交由前端来把控。\n'),
                a('br'),
                t._v('\n前端路由模式常用的分为两种：')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  a('code', [t._v('hash')]),
                  t._v(
                    " 模式，利用浏览器原生的提供的抛锚事件 window.addEventListener('hashchange', e => {})。监听到变化根据"
                  ),
                  a('code', [t._v('#')]),
                  t._v('后面的链接地址，去注册路由 path 中正则匹配，匹配到的将对应的路由组件（'),
                  a('code', [t._v('component')]),
                  t._v('）渲染出来。')
                ]),
                t._v(' '),
                a('li', [
                  a('code', [t._v('history')]),
                  t._v(
                    " 模式, 利用浏览器原生的提供的抛锚事件 window.addEventListener('popstate', e => {}).监听到变化根据"
                  ),
                  a('code', [t._v('#')]),
                  t._v('后面的链接地址，去注册路由 path 中正则匹配，匹配到的将对应的路由组件（'),
                  a('code', [t._v('component')]),
                  t._v('）渲染出来。')
                ])
              ]),
              t._v(' '),
              a('p', [
                t._v('前端项目又分为'),
                a('code', [t._v('mpa')]),
                t._v('项目和'),
                a('code', [t._v('spa')]),
                t._v('项目。我们公司大多数产品都是'),
                a('code', [t._v('spa')]),
                t._v('项目。')
              ]),
              t._v(' '),
              a('p', [t._v('前端请求接口会产生跨域（同源策略），发布到生产线上，可能也要调其他非本后端的接口。')]),
              t._v(' '),
              a('h3', { attrs: { id: '_6-1-例子一-广东等级评审' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_6-1-例子一-广东等级评审' } }, [t._v('#')]),
                t._v(' 6.1 例子一 广东等级评审')
              ]),
              t._v(' '),
              a('p', [t._v('假设我们以 '), a('code', [t._v('广东等级评审')]), t._v(' 为例子。我的需求是这样的。')]),
              t._v(' '),
              a('ul', [
                a('li', [
                  t._v('将前端部署在 '),
                  a('code', [t._v('192.168.8.55')]),
                  t._v(' 服务器中文件夹 '),
                  a('code', [t._v('/data/grade-ui')]),
                  t._v(' 下，')
                ]),
                t._v(' '),
                a('li', [t._v('代理接口到后端服务器地址 '), a('code', [t._v('192.168.8.55:3280')]), t._v('，')]),
                t._v(' '),
                a('li', [
                  t._v('不要挂载到端口根路径下，能够允许多个项目部署在同一个端口'),
                  a('code', [t._v('8081')]),
                  t._v('上访问。')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('广东等级评审')]),
                  t._v('项目，地址是这样的 '),
                  a('code', [t._v('http://192.168.8.55:8081/review-gd/xxxx')]),
                  t._v('访问')
                ])
              ]),
              t._v(' '),
              a('ol', [a('li', [t._v('前端采用路由 '), a('code', [t._v('history')]), t._v(' 模式。')])]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' router '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('VueRouter')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('mode')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'history'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('base')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('meta'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('env'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('BASE_URL')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/front'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('routes')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '2' } }, [a('li', [t._v('前端打包目录：')])]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v(
                      'dist\n├── assets\n│  ├── -anesthesia-legacy.898d93ea.js\n│  ├── -anesthesia-legacy.898d93ea.js.gz\n│  ├── vendor.60602741.js\n│  └── vendor.60602741.js.gz\n'
                    ),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('       '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('\n├── favicon.ico\n├── front\n│  ├── index.html\n│  └── index.html.gz\n')
                  ])
                ])
              ]),
              a('p', [t._v('前端需要做法')]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('需要在 '),
                  a('code', [t._v('vite')]),
                  t._v(' 打包中配置 base，找到项目根路径下 '),
                  a('code', [t._v('vite.config.js')]),
                  t._v('文，如果是以'),
                  a('code', [t._v('webpack')]),
                  t._v('为为基础的，比如 vue-cli，找到根路径下 '),
                  a('code', [t._v('vue.config.js')]),
                  t._v('，设置'),
                  a('code', [t._v('publicPath')]),
                  t._v('。')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('defineConfig')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' mode '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' mode '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'production'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' publicPath '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/review-gd/'")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 指定打包前缀，设置打包 打包静态资源文件前缀')
                    ]),
                    t._v('\n\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('base')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' publicPath'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '2' } }, [
                a('li', [
                  t._v('在'),
                  a('code', [t._v('192.168.8.55')]),
                  t._v('服务器中'),
                  a('code', [t._v('/data/grade-ui')]),
                  t._v('，新建'),
                  a('code', [t._v('review-gd')]),
                  t._v(' 文件夹， 注意一定要 '),
                  a('code', [t._v('新建文件夹名字和请求前缀名一致')])
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('├── data\n│   └── grade-ui\n│       └── review-gd\n│           └── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('   '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '3' } }, [
                a('li', [
                  t._v('配置 '),
                  a('code', [t._v('nginx.conf')]),
                  t._v('文件，找到 '),
                  a('code', [t._v('nginx.conf')]),
                  t._v(' 文件里面 '),
                  a('code', [t._v('include /usr/local/nginx/conf.d/*.conf')]),
                  t._v('。\n进入 '),
                  a('code', [t._v('/usr/local/nginx/conf.d')]),
                  t._v(' 目录中。\n新建一个 文件以 '),
                  a('code', [t._v('.conf')]),
                  t._v('为结尾的配置文件，这里我起了'),
                  a('code', [t._v('grade-ui.conf')]),
                  t._v('。')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('\nserver '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8080')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    root                      /data/grade-ui'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 顶级设置了root')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 代理接口')]),
                    t._v('\n    location /grade '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://localhost:3280'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#代理的地址')]),
                    t._v('\n        rewrite               ^/grade/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /grade/'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 重写路径')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 假如前端需要访问其他接口地址，前端在代码中给出特定标识开头，比如 /grade-gd')
                    ]),
                    t._v('\n    location /grade-gd '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://localhost:3281'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#代理的地址')]),
                    t._v('\n        rewrite               ^//grade-gd/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /grade/'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 重写路径')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location ^~ /review-gd '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                  /data/grade-ui'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        try_files             '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /review-gd/front/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 表示找不到资源，始终返回 /data/grade-ui/review-gd/front/index.html资源文件')
                    ]),
                    t._v('\n        index                 index.html index.htm'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h4', { attrs: { id: 'q1-如果我前端是hash模式路由-该怎么配置' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#q1-如果我前端是hash模式路由-该怎么配置' } }, [
                  t._v('#')
                ]),
                t._v(' Q1: 如果我前端是'),
                a('code', [t._v('hash')]),
                t._v('模式路由，该怎么配置？')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('需要在 '),
                  a('code', [t._v('vite')]),
                  t._v(' 打包中配置 base，找到项目根路径下 '),
                  a('code', [t._v('vite.config.js')]),
                  t._v('文，如果是以'),
                  a('code', [t._v('webpack')]),
                  t._v('为为基础的，比如 vue-cli，找到根路径下 '),
                  a('code', [t._v('vue.config.js')]),
                  t._v('，设置'),
                  a('code', [t._v('publicPath')]),
                  t._v('。')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('defineConfig')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' mode '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' mode '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'production'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' publicPath '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./'")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 设置相对路径，设置打包 打包静态资源文件前缀')
                    ]),
                    t._v('\n\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('base')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' publicPath'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '2' } }, [a('li', [a('code', [t._v('nginx')]), t._v(' 配置和上面一样。')])]),
              t._v(' '),
              a(
                'h4',
                { attrs: { id: 'q2-我想继续采用history模式-我配置不想在locaton中使用用root-我想改用alias比较直观' } },
                [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#q2-我想继续采用history模式-我配置不想在locaton中使用用root-我想改用alias比较直观'
                      }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Q2: 我想继续采用'),
                  a('code', [t._v('history')]),
                  t._v('模式，我配置不想在'),
                  a('code', [t._v('locaton')]),
                  t._v('中使用用'),
                  a('code', [t._v('root')]),
                  t._v('，我想改用'),
                  a('code', [t._v('alias')]),
                  t._v('比较直观？')
                ]
              ),
              t._v(' '),
              a('p', [t._v('nginx 配置如下')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8080')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    root                      /data/grade-ui'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 顶级设置根路径')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 代理接口')]),
                    t._v('\n    location /grade '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://localhost:3280'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#代理的地址')]),
                    t._v('\n        rewrite               ^/grade/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /grade/'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 重写路径')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 假如前端需要访问其他接口地址，前端在代码中给出特定标识开头，比如 /grade-gd')
                    ]),
                    t._v('\n    location /grade-gd '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://localhost:3281'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#代理的地址')]),
                    t._v('\n        rewrite               ^/grade-gd/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /grade/'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 重写路径')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location ^~ /review-gd '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('alias')]),
                    t._v('                  /data/grade-ui/review-gd/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 用alias必须要/为结尾')]),
                    t._v('\n        try_files             '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /review-gd/front/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index                 index.html index.htm'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_6-2-例子二-危重、广东、重庆四个项目放在一个项目下' } }, [
                a(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#_6-2-例子二-危重、广东、重庆四个项目放在一个项目下' }
                  },
                  [t._v('#')]
                ),
                t._v(' 6.2 例子二 危重、广东、重庆四个项目放在一个项目下')
              ]),
              t._v(' '),
              a('p', [t._v('要求')]),
              t._v(' '),
              a('ul', [
                a('li', [
                  t._v('危重、广东、重庆四个项目放在一个项目下，都是通过同一个端口号'),
                  a('code', [t._v('8088')]),
                  t._v('访问')
                ]),
                t._v(' '),
                a('li', [
                  t._v('将前端部署在 '),
                  a('code', [t._v('192.168.8.55')]),
                  t._v(' 服务器中文件夹 '),
                  a('code', [t._v('/data/grade-ui')]),
                  t._v(' 下，')
                ]),
                t._v(' '),
                a('li', [
                  t._v('项目'),
                  a('code', [t._v('case')]),
                  t._v('、'),
                  a('code', [t._v('critical')]),
                  t._v('、'),
                  a('code', [t._v('examine')]),
                  t._v('、'),
                  a('code', [t._v('subject')]),
                  t._v('、'),
                  a('code', [t._v('target')]),
                  t._v('项目接口代理'),
                  a('code', [t._v('192.168.8.55:3280')]),
                  t._v('，'),
                  a('code', [t._v('review-gd')]),
                  t._v('项目接口代理到'),
                  a('code', [t._v('192.168.8.55:3281')]),
                  t._v('，')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('case')]),
                  t._v('项目，地址 '),
                  a('code', [t._v('http://192.168.8.55:8088/case/index.html/#/xxxx')]),
                  t._v('访问')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('critical')]),
                  t._v('项目，地址 '),
                  a('code', [t._v('http://192.168.8.55:8088/critical/index.html/#/xxxx')]),
                  t._v('访问')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('examine')]),
                  t._v('项目，地址 '),
                  a('code', [t._v('http://192.168.8.55:8088/examine/index.html/#/xxxx')]),
                  t._v('访问')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('subject')]),
                  t._v('项目，地址 '),
                  a('code', [t._v('http://192.168.8.55:8088/subject/index.html/#/xxxx')]),
                  t._v('访问')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('target')]),
                  t._v('项目，地址 '),
                  a('code', [t._v('http://192.168.8.55:8088/target/index.html/#/xxxx')]),
                  t._v('访问')
                ]),
                t._v(' '),
                a('li', [
                  t._v('要求浏览器访问'),
                  a('code', [t._v('review-gd')]),
                  t._v('项目，地址 '),
                  a('code', [t._v('http://192.168.8.55:8088/review-gd/xxxx')]),
                  t._v('访问')
                ])
              ]),
              t._v(' '),
              a('ol', [a('li', [t._v('前端打包后的合并的文件目录如下')])]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('├── assets\n│  ├── windi.c6df3ebe.js\n│  └── windi.c6df3ebe.js.gz\n├── '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('case')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 危重项目 hash模式，路径设置为./')
                    ]),
                    t._v(
                      '\n│  ├── index.html\n│  └── index.html.gz\n├── critical\n│  ├── index.html\n│  └── index.html.gz\n├── examine '
                    ),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# examine项目 hash模式，路径设置为./')
                    ]),
                    t._v('\n│  ├── index.html\n│  └── index.html.gz\n├── favicon.ico\n├── review-gd '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 广东绩效 history模式，路径设置为/review-gd')
                    ]),
                    t._v(
                      '\n│  ├── assets\n│  │  ├── vendor.60602741.js\n│  │  └── vendor.60602741.js.gz\n│  ├── favicon.ico\n│  ├── front\n│  │  ├── index.html\n│  │  └── index.html.gz\n├── subject '
                    ),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# subject项目 hash模式，路径设置为./')
                    ]),
                    t._v('\n│  ├── index.html\n│  └── index.html.gz\n└── target '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# examine项目 hash模式，路径设置为./')
                    ]),
                    t._v('\n    ├── index.html\n    └── index.html.gz\n')
                  ])
                ])
              ]),
              a('p', [
                t._v('因为 '),
                a('code', [t._v('case')]),
                t._v('、'),
                a('code', [t._v('critical')]),
                t._v('、'),
                a('code', [t._v('examine')]),
                t._v('、'),
                a('code', [t._v('subject')]),
                t._v('、'),
                a('code', [t._v('target')]),
                t._v('都是 hash 路由模式，而广东绩效项目'),
                a('code', [t._v('review-gd')]),
                t._v('是 history 模式。')
              ]),
              t._v(' '),
              a('p', [t._v('配置如下：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8088')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定端口号')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n    root                      /data/grade-ui'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#部署地址，文件存放的地址')]),
                    t._v('\n\n    location /grade '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://localhost:3280'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# `case`、`critical`、`examine`、`subject`、`target` 项目后端接口地址')
                    ]),
                    t._v('\n        rewrite               ^/grade/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /grade/'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location /grade-gd '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://localhost:3281'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# `review-gd` 后端接口地址')]),
                    t._v('\n        rewrite               ^/grade-gd/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /grade/'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    location ^~ /review-gd '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        try_files             '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /review-gd/front/index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        index                 index.html index.htm'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: '_7-单个部署' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_7-单个部署' } }, [t._v('#')]),
                t._v(' 7.单个部署')
              ]),
              t._v(' '),
              a('p', [
                t._v('总的来说 前端 pc 项目要推荐采用 '),
                a('code', [t._v('hash')]),
                t._v(' 模式，配置\n理由如下：')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [t._v('兼容性强')]),
                t._v(' '),
                a('li', [t._v('nginx 配置简单、方便【主要原因】')]),
                t._v(' '),
                a('li', [
                  t._v(
                    '因为是 pc 场景，基本不会出现和第三方对接，比如微信，因为从微信有些地方中转过来，链接中携带#会被微信拦截掉。'
                  )
                ])
              ]),
              t._v(' '),
              a('p', [t._v('前端一般 spa 打包出的项目结构如下：')]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v(
                      '├── config.js\n├── css\n│  ├── app.54cd93ee.css\n│  ├── chunk-1b329e6a.2953a92f.css\n│  ├── chunk-2394cd92.ae6b30f4.css\n│  ├── xxxx\n├── favicon.ico\n├── fonts\n│  ├── element-icons.535877f5.woff\n│  └── element-icons.732389de.ttf\n├── img\n│  ├── bpf-error-404.b0e61908.jpg\n│  └── logo-white.68740006.png\n├── inject\n│  ├── css\n│  │  └── loading.css\n│  └── js\n│      ├── jsplumb.js\n│      ├── jsplumb.min.js\n│      └── preload.js\n├── js\n│  ├── app.ba205fb1.js\n│  ├── chunk-1b329e6a.7eae04ce.js\n│  ├── chunk-2394cd92.7eb8acd8.js\n│  ├── chunk-2d0baac6.47f8b7fa.js\n│  └── chunk-vendors.e6fdc261.js\n├── index.html\n'
                    )
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_7-1-部署要求' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_7-1-部署要求' } }, [t._v('#')]),
                t._v(' 7.1 部署要求')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('服务器地址 '),
                  a('code', [t._v('192.168.5.88')]),
                  t._v('，前端部署端口号 '),
                  a('code', [t._v('10001')]),
                  t._v('，存放在 '),
                  a('code', [t._v('/data/front/project')]),
                  t._v(' 目录下')
                ]),
                t._v(' '),
                a('li', [
                  t._v('后端接口部署的地址：'),
                  a('code', [t._v('192.168.5.88')]),
                  t._v('，端口号 '),
                  a('code', [t._v('10002')])
                ]),
                t._v(' '),
                a('li', [t._v('前端使用调用接口前缀：'), a('code', [t._v('back-api')])])
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '_7-2-前端准备' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_7-2-前端准备' } }, [t._v('#')]),
                t._v(' 7.2 前端准备')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('如果项目基于'),
                  a('code', [t._v('vue-cli')]),
                  t._v('的，'),
                  a('code', [t._v('vue-cli')]),
                  t._v('中的设置 '),
                  a('code', [t._v('vue.config.js')]),
                  t._v('，本质上是进行 webpack 操作')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' process'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('env'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('NODE_ENV')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'production'")]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 是否是生产环境打包')]),
                    t._v('\nmodule'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exports '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('publicPath')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./'")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 打包静态资源文件前缀')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('blockquote', [
                a('p', [
                  t._v('如果项目是基于 vite 的，需要在 '),
                  a('code', [t._v('vite')]),
                  t._v(' 打包中配置 base，找到项目根路径下 '),
                  a('code', [t._v('vite.config.js')]),
                  t._v('文，修改如下')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('defineConfig')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' mode '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' mode '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'production'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' publicPath '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/review-gd/'")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 指定打包前缀，设置打包 打包静态资源文件前缀')
                    ]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('base')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' publicPath'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '2' } }, [a('li', [t._v('vue-router 配置')])]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' router '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Router')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('mode')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'hash'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('//   base: process.env.BASE_URL,  base只有是history路由匹配')
                    ]),
                    t._v('\n  routes'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '3' } }, [a('li', [t._v('在 public 目录下新建 nginx.conf，')])]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('要告知测试前端有哪些接口是要代理的。')])]),
              t._v(' '),
              a('img', { attrs: { src: t.$withBase('/nginx/nginx配置文件部署.png') } }),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    xxx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定端口号，【可修改】')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设置当前服务名')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# root                      /data/grade-ui;  #部署地址，前端存放的地址，这里选择不甜')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端项目匹配规则')]),
                    t._v('\n    location / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    xxx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 前端请求后端接口前缀 back-api，走代理')
                    ]),
                    t._v('\n    location ^~ /back-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            xxx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/back-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 注：如果前端要调用多个后端地址，写成和上面的类似，一些参数自行调整')
                    ]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_7-3-测试人员准备' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_7-3-测试人员准备' } }, [t._v('#')]),
                t._v(' 7.3 测试人员准备')
              ]),
              t._v(' '),
              a('blockquote', [a('ol', [a('li', [t._v('找到 nginx 所在的位置')])])]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -t')]),
                    t._v('\nnginx: the configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' /usr/local/nginx/conf/nginx.conf '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('test')]),
                    t._v(' is successful\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('blockquote', [
                a('ol', { attrs: { start: '2' } }, [
                  a('li', [
                    t._v('查看的 '),
                    a('code', [t._v('/usr/local/nginx/conf/nginx.conf')]),
                    t._v('，配置文件内容，找到'),
                    a('code', [t._v('include xxx/nginx.d/*.conf;')]),
                    t._v('，这样类似的位置，比如我从服务器中找的一张截图。\n'),
                    a('img', { attrs: { src: t.$withBase('/nginx/nginx配置文件截图1.png') } })
                  ])
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 进入 /etc/nginx/nginx.d/ 下')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# cd /etc/nginx/nginx.d/')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 在其目录下新建demo.10001.conf，新建文件名根据实际情况 按照这样的格式 [项目名].[端口号].conf'
                      )
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# touch demo.10001.conf')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 编辑内容')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# vim demo.10001.conf')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 拿到前端部署根路径下的 nginx.conf 配置文件，根据实际情况替换xxx。')
                    ]),
                    t._v('\n\nserver '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10001')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定端口号，【可修改】')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设置当前服务名')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# root                      /data/grade-ui;  #部署地址，前端存放的地址，这里选择不甜')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端项目匹配规则')]),
                    t._v('\n    location / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    /data/front/project'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 前端请求后端接口前缀 back-api，走代理')
                    ]),
                    t._v('\n    location ^~ /back-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://192.168.5.88:10002'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/back-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# wq保存')]),
                    t._v('\n\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 重新启动nginx，让nginx重新读取配置')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -s reload')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: '_8-多个项目部署' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_8-多个项目部署' } }, [t._v('#')]),
                t._v(' 8.多个项目部署')
              ]),
              t._v(' '),
              a('p', [
                t._v('总的来说 前端 pc 项目要推荐采用 '),
                a('code', [t._v('hash')]),
                t._v(' 模式，配置\n理由如下：')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [t._v('兼容性强')]),
                t._v(' '),
                a('li', [t._v('nginx 配置简单、方便【主要原因】')]),
                t._v(' '),
                a('li', [
                  t._v(
                    '因为是 pc 场景，基本不会出现和第三方对接，比如微信，因为从微信有些地方中转过来，链接中携带#会被微信拦截掉。'
                  )
                ])
              ]),
              t._v(' '),
              a('p', [t._v('前端一般 spa 打包出的项目结构如下：')]),
              t._v(' '),
              a('h3', { attrs: { id: '_8-1-部署要求' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_8-1-部署要求' } }, [t._v('#')]),
                t._v(' 8.1 部署要求')
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('服务器地址 '),
                  a('code', [t._v('192.168.5.88')]),
                  t._v('，前端部署端口号 '),
                  a('code', [t._v('10001')]),
                  t._v('，存放在 '),
                  a('code', [t._v('/data/front/project')]),
                  t._v(' 目录下')
                ]),
                t._v(' '),
                a('li', [
                  t._v('后端接口部署的地址：'),
                  a('code', [t._v('192.168.5.88')]),
                  t._v('，端口号 '),
                  a('code', [t._v('10002')])
                ]),
                t._v(' '),
                a('li', [t._v('在一个项目下5个项目部署在同一个端口上，根据不同的接口前缀代理不同的地址。')]),
                t._v(' '),
                a('li', [t._v('A项目，访问地址 '), a('code', [t._v('http://192.168.5.88:10001/A/#/xxxx')])]),
                t._v(' '),
                a('li', [t._v('B项目，访问地址 '), a('code', [t._v('http://192.168.5.88:10001/B/#/xxxx')])]),
                t._v(' '),
                a('li', [t._v('C项目，访问地址 '), a('code', [t._v('http://192.168.5.88:10001/C/#/xxxx')])]),
                t._v(' '),
                a('li', [t._v('D项目，访问地址 '), a('code', [t._v('http://192.168.5.88:10001/D/#/xxxx')])]),
                t._v(' '),
                a('li', [t._v('E项目，访问地址 '), a('code', [t._v('http://192.168.5.88:10001/E/#/xxxx')])])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('├── A  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# A hash模式，路径设置为./ 接口前缀 A-api，代理地址是 192.168.5.88:8001')
                    ]),
                    t._v('\n│  ├── static\n│  ├── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n│  ├── nginx.conf\n│  └── index.html\n├── B  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# B hash模式，路径设置为./ 接口前缀 B-api，代理地址是 192.168.5.88:8002')
                    ]),
                    t._v('\n│  ├── static\n│  ├── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n│  ├── nginx.conf\n│  └── index.html\n├── C  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# C hash模式，路径设置为./ 接口前缀 C-api，代理地址是 192.168.5.88:8003')
                    ]),
                    t._v('\n│  ├── static\n│  ├── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n│  ├── nginx.conf\n│  └── index.html\n├── D  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# D hash模式，路径设置为./ 接口前缀 D-api，代理地址是 192.168.5.88:8004')
                    ]),
                    t._v('\n│  ├── static\n│  ├── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n│  ├── nginx.conf\n│  └── index.html\n├── E  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# E hash模式，路径设置为./ 接口前缀 E-api，代理地址是 192.168.5.88:8005')
                    ]),
                    t._v('\n│  ├── static\n│  ├── '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('..')]),
                    t._v('.\n│  ├── nginx.conf\n│  └── index.html\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_8-2-前端准备' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_8-2-前端准备' } }, [t._v('#')]),
                t._v(' 8.2 前端准备')
              ]),
              t._v(' '),
              a('blockquote', [
                a('p', [
                  t._v('⚠️ 下面相当于每个项目基本是这样打包配置流程，以'),
                  a('code', [t._v('A')]),
                  t._v('项目为例子')
                ])
              ]),
              t._v(' '),
              a('ol', [
                a('li', [
                  t._v('如果项目基于'),
                  a('code', [t._v('vue-cli')]),
                  t._v('的，'),
                  a('code', [t._v('vue-cli')]),
                  t._v('中的设置 '),
                  a('code', [t._v('vue.config.js')]),
                  t._v('，本质上是进行 webpack 操作')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' process'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('env'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('NODE_ENV')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'production'")]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 是否是生产环境打包')]),
                    t._v('\nmodule'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exports '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('publicPath')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./'")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 打包静态资源文件前缀')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('blockquote', [
                a('p', [
                  t._v('如果项目是基于 vite 的，需要在 '),
                  a('code', [t._v('vite')]),
                  t._v(' 打包中配置 base，找到项目根路径下 '),
                  a('code', [t._v('vite.config.js')]),
                  t._v('文，修改如下')
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('defineConfig')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' mode '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' mode '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'production'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' publicPath '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('IS_PRO')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'/review-gd/'")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 指定打包前缀，设置打包 打包静态资源文件前缀')
                    ]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('base')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' publicPath'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '2' } }, [a('li', [t._v('vue-router 配置')])]),
              t._v(' '),
              a('div', { staticClass: 'language-javascript extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' router '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Router')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('mode')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'hash'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('//   base: process.env.BASE_URL,  base只有是history路由匹配')
                    ]),
                    t._v('\n  routes'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('ol', { attrs: { start: '3' } }, [a('li', [t._v('在 public 目录下新建 nginx.conf，')])]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('要告知测试前端有哪些接口是要代理的。')])]),
              t._v(' '),
              a('img', { attrs: { src: t.$withBase('/nginx/nginx配置文件部署.png') } }),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    t._v('server '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    xxx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定端口号，【可修改】')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设置当前服务名')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# root                      /data/grade-ui;  #部署地址，前端存放的地址，这里选择不甜')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端项目匹配规则')]),
                    t._v('\n    location / '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    xxx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 前端请求后端接口前缀 A-api，走代理')
                    ]),
                    t._v('\n    location ^~ /A-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            xxx'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/A-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 注：如果前端要调用多个后端地址，写成和上面的类似，一些参数自行调整')
                    ]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h3', { attrs: { id: '_8-3-测试准备' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_8-3-测试准备' } }, [t._v('#')]),
                t._v(' 8.3 测试准备')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -t')]),
                    t._v('\nnginx: the configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('file')]),
                    t._v(' /usr/local/nginx/conf/nginx.conf '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('test')]),
                    t._v(' is successful\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ ~'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('blockquote', [
                a('ol', { attrs: { start: '2' } }, [
                  a('li', [
                    t._v('查看的 '),
                    a('code', [t._v('/usr/local/nginx/conf/nginx.conf')]),
                    t._v('，配置文件内容，找到'),
                    a('code', [t._v('include xxx/nginx.d/*.conf;')]),
                    t._v('，这样类似的位置，比如我从服务器中找的一张截图。\n'),
                    a('img', { attrs: { src: t.$withBase('/nginx/nginx配置文件截图1.png') } })
                  ])
                ])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-shell extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 进入 /etc/nginx/nginx.d/ 下')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# cd /etc/nginx/nginx.d/')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 在其目录下新建demo.10001.conf，新建文件名根据实际情况 按照这样的格式 [项目名].[端口号].conf'
                      )
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# touch demo.10001.conf')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 编辑内容')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# vim demo.10001.conf')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 拿到前端部署根路径下的 nginx.conf 配置文件，根据实际情况替换xxx。')
                    ]),
                    t._v('\n\nserver '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    listen                    '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10001')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('  '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设定端口号，【可修改】')]),
                    t._v('\n    server_name               localhost'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#设置当前服务名')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# root                      /data/grade-ui;  #部署地址，前端存放的地址，这里选择不甜')
                    ]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 项目A 前端项目匹配规则')]),
                    t._v('\n    location /A '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    /data/front/project'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n     '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 项目A 前端请求后端接口前缀 A-api，走代理')
                    ]),
                    t._v('\n    location ^~ /A-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://192.168.5.88:10002'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/A-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 项目B 前端项目匹配规则')]),
                    t._v('\n    location /B '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    /data/front/project'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 项目B 前端请求后端接口前缀 B-api，走代理')
                    ]),
                    t._v('\n    location ^~ /B-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://192.168.5.88:10002'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/B-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 项目C 前端项目匹配规则')]),
                    t._v('\n    location /C '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    /data/front/project'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 项目C 前端请求后端接口前缀 C-api，走代理')
                    ]),
                    t._v('\n    location ^~ /C-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://192.168.5.88:10002'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/C-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 项目D 前端项目匹配规则')]),
                    t._v('\n    location /D '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    /data/front/project'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 项目D 前端请求后端接口前缀 D-api，走代理')
                    ]),
                    t._v('\n    location ^~ /D-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://192.168.5.88:10002'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/D-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n     '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 项目E 前端项目匹配规则')]),
                    t._v('\n    location /E '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        root                    /data/front/project'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 前端文件存放的地址【可修改】')]),
                    t._v('\n        try_files               '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$uri')]),
                    t._v('/ /index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 这里要保证前端打包出来的index.html是在 root 根路径下，根据实际情况。')
                    ]),
                    t._v('\n        index                   index.html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n         '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('#设置某个文件不缓存读取本地，永远走200，拿到最新的，防止缓存情况')
                    ]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$request_filename')]),
                    t._v(' ~* .*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('\\')]),
                    t._v('.'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('?:htm'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v('html'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n            add_header        Cache-Control '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('"private, no-store, no-cache, must-revalidate, proxy-revalidate"')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n        '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 项目D 前端请求后端接口前缀 E-api，走代理')
                    ]),
                    t._v('\n    location ^~ /E-api '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        proxy_pass            http://192.168.5.88:10002'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 代理后端接口地址，如果前、后端部署在同一台服务器上，这里可以写localhost 【可修改】')
                    ]),
                    t._v('\n        rewrite               ^/E-api/'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('.*'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('$ /'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$1')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('break')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '# 这里的 $1 等于 (.*) 里的内容，break这里表示不需要在交给nginx进行location再次匹配了。【可修改】'
                      )
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# wq保存')]),
                    t._v('\n\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 重新启动nginx，让nginx重新读取配置')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('root@iZuf6eednvvtf310byi0kaZ nginx.d'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# nginx -s reload')]),
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
