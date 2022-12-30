# 其他说明

## package.json 运行命令说明

```js
'dev' // 开启rollup dev启动，默认启动位置在 test/index.html，端口号默认4444
'build:file' // 动态的生成 src/index.js 文件内容
'build:entry' // 打包 src/index.js 入口文件，分别打包成 esm、common、umd 以及压缩umd.min
'build:modules' // 打包 src下各个模块的子文件，为了webpack 按需加载
'build:all' // 同时 运行 build:file、build:entry、build:modules
'build:publish' // 打包所有 且 推送到npm包中
'docs:dev' // 启动docs 开发环境
'docs:build' // 文档打包
'docs:deploy' // 文档部署
'prettier:docs' // 用prettier 格式化文档
'prettier:source' // 用prettier 源代码
'prettier:all' // 运行 prettier:docs、prettier:source
```

[npm version版本升级](https://blog.csdn.net/weixin_41917948/article/details/105296353)

## build 目录下说明

``` shell
├── bin  # node 脚本
│   └── build-entry.js  # 动态的生成 src/index.js 文件内容
├── rollup.base.js # rollup配置基础
├── rollup.dev.js # rollup配置开发环境配置
├── rollup.entry-cdn.js # rollup配置打包生成 cdn文件
├── rollup.entry.js # rollup 依赖src/index.js 打包生成入口
└── rollup.modules.js # rollup打包生成各个src下各个模块的子文件
```
