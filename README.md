# sfutils

主要把平时用到的工具函数封装起来，🚀 为简化开发而生，里面主要涉及到 `基础数据类型校验`、`懒加载`、`数据结构转化`、`浮点型数学计算`、`拓展`
等

[文档这里 👇](http://8.133.185.32/fr/@bianpengfei-utils/v3/)

# 1.快速开始

## npm 安装

```js
npm i sfutils
```

## yarn 安装

```js
yarn add sfutils
```

## cdn 方式

```html
<script src="https://cdn.jsdelivr.net/npm/sf-utils2/lib/index.umd.min.js"></script>
```

# 2.使用

## esm 使用

```js
// 运行在esm中
import butils from 'sf-utils2'

butils.uuid()
```

## cdn 使用

```js
window.butils.uuid()
// Type.isNumber
```

[sf-utils2](https://gitee.com/bianpengfei/bianpengfei-utils)提供一些基础对 dom、数据层面的转化、懒加载等方法，为简化开发、提高效率而生。
<br>
里面主要提供 **基础-Base**、**对象-Object**、**数组-Array**、**方法-Function**、**字符串-String**、**数学-Math**、**dom**、**拓展**模块

- [基础-Base](/pages/e3f3b0/) 基础公共方法
- [对象-Object](/pages/xel48mk0o/) 操作对象方法封装
- [数组-Array](/pages/x0sf8dktg/) 操作数组方法封装
- [方法-Function](/pages/x059mk3g/) Function 方法封装
- [字符串-String](/pages/xf6ds06/) 字符串方法封装
- [数学-Math](/pages/ad3feb/) 支持精确的 js 浮点型运算。
- [dom](/pages/c256cd/) 封装大量对 dom 便捷操作
- [拓展](/pages/fb9692/) 一些拓展方法，大多数是依赖第三方库进行封装方法。即：需要安装第三方库。或者一些方法占据内容过大，如对某一区域内部，文章图片懒加载，非常适用于服务端返回一串不规则的 html，里面夹杂着图片

::: note 愿景
我的愿景就是能够快速相应开发，省去写平时大量用到的工具方法。<br/>
:::

::: warning ⚠️ 注意
🎲 表示用的比较少，考虑下一版本去除。<br/>
🔥 代表 比较常用的方法
:::

### 2、cdn 方式引入

```js
<!-- 引入js -->
<script src="https://cdn.jsdelivr.net/npm/sf-utils2/lib/index.umd.min.js"></script>
```

::: note 建议
我们建议使用 CDN 引入 sf-utils2 的用户在链接地址上锁定版本，以免将来 sf-utils2 升级时受到非兼容性更新的影响。锁定版本的方法请查看
[https://www.jsdelivr.com/](https://www.jsdelivr.com/)
:::

## 为什么选择 sf-utils

- 体积小，支持按需加载
- 放开现在任何工具库，暂时还没提供丰富的对递归一些数据转化的方法，这个非常适用于前端开发对接权限信息时或者其他业务场景中用到。比如遇到后端偏懒，只返回一层的
  数据结构，并没有返回想要的数据结构，要么后端做处理，要么前端擦屁股。
- 对平时用到的 webpack、vite 等主流的工程化项目，提供自动注入文件。
- 提供便捷、准确的数据类型判断
  - 丰富的 dom 基础操作方法。
