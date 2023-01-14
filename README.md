# @bianpengfei/utils

主要把平时用到的工具函数封装起来，🚀 为简化开发而生，里面主要涉及到 `基础数据类型校验`、`懒加载`、`数据结构转化`、`浮点型数学计算`、`拓展`
等

[文档这里👇](http://8.133.185.32/fr/@bianpengfei-utils/v2/)

# 1.快速开始

## npm 安装

```js
npm i @bianpengfei/utils
```

## yarn 安装

```js
yarn add @bianpengfei/utils
```

## cdn 方式

```html
<script src="https://cdn.jsdelivr.net/npm/@bianpengfei/utils/lib/b-utils.min.js"></script>
```

# 2.使用

## esm 使用

```js
// 运行在esm中
import butils from '@bianpengfei/utils'

butils.uuid()
```

## cdn 使用

```js
window.butils.uuid()
// Type.isNumber
```
