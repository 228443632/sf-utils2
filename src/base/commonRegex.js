/**
 * @Description: 常用的正则
 * @Author bianpengfei
 * @create 2022/7/11 13:32
 */
const commonRegex = {
  inputFilterNumber: /[^\d^\.]+/g, // 获取所有的非整数的，一般用于输入框里只能输入整数匹配
  htmlTag: /<(\S+?)[^<]*>(.*?)<\/\1>/gi, // 获取所有html标签
  imgHtmlTag: /<(img)[^<]*>(.*?)<\/\1>/gi, // 获取所有的img标签
  htmlTagAttrs: /(?!=<\w+)(\w*)=[\'\"]?([^\'\"]*)[\'\"][^>|^\s]?/gi, // 获取标签里面所有属性
  imgHtmlTagSrcAttr: /src=[\'\"]?([^\'\"]*)[\'\"]?/i, // 获取所有的img src属性值
  url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/ // 判断是否是合法url
}

export default commonRegex
