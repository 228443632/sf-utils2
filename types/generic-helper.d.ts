/**
 * @Description: 泛型帮助函数
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 28/06/25 PM5:51
 */
export * from './api-response-type.ts'

/**
 * 将连字符分隔的字符串或普通字符串转换为小驼峰命名格式。
 */
type TToCamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${TToCamelCase<P3>}`
  : Lowercase<S>

/**
 * 将事件键从 'event-name' 格式或普通名称格式转换为 'onEventName' 格式。
 */
export type TTransformKeyToOnCamelCase<K extends string> = K extends `${infer Prefix}:${infer Rest}`
  ? `on${Capitalize<TToCamelCase<`${Prefix}${Rest}`>>}`
  : `on${Capitalize<TToCamelCase<K>>}`

/**
 * 将事件键从 'event-name' 格式转换为 'onEventName' 格式。
 * 创建一个符合新事件类型的对象。
 * 将一个接口的所有键转换为以 `on` 开头的小驼峰命名格式。
 * @example
 * // 创建一个符合转换后事件类型的对象实例
 * const transformedEvents: TransformedEvents = {
 *   onUpdateCurrentPage: (val) => console.log(`Current page updated to: ${val}`),
 *   onUpdatePageSize: (val) => console.log(`Page size updated to: ${val}`),
 *   onSizeChange: (val) => console.log(`Size changed to: ${val}`),
 *   onChange: (currentPage, pageSize) =>
 *     console.log(`Page changed to: ${currentPage}, Page size: ${pageSize}`),
 *   onCurrentChange: (val) => console.log(`Current page changed to: ${val}`),
 *   onPrevClick: (val) => console.log(`Previous page clicked, current page is: ${val}`),
 *   onNextClick: (val) => console.log(`Next page clicked, current page is: ${val}`),
 * };
 *s
 * // 使用示例
 * transformedEvents.onPrevClick(2); // 输出: Previous page clicked, current page is: 2
 * transformedEvents.onNextClick(4); // 输出: Next page clicked, current page is: 4
 * transformedEvents.onUpdateCurrentPage(3); // 输出: Current page updated to: 3
 */
export type TTransformKeysToOnCamelCase<T> = {
  [K in keyof T as TTransformKeyToOnCamelCase<K & string>]: T[K]
}

/**
 * 定义一个工具类型，用于将数字转换为其 '数字px' 形式的字符串
 * @example
 * ```ts
 * // 基础类型 TColumnItemWidth
 * type TColumnItemWidthBase = '162px' | 178 | 160;
 *
 * type AB = AppendPxSuffix<TColumnItemWidthBase> => '162px' | '178px' | '160px';
 * ```
 */
export type TAppendPxSuffix<T> = T extends string ? T : T extends number ? `${T}px` : never

/**
 * const INSTALL_TYPE = {
 *   npm: 'npm',
 *   yarn: 'yarn',
 *   pnpm: 'pnpm'
 * } as const
 *
 * ObjectValueType(typeof INSTALL_TYPE)
 *
 * => 'npm' | 'yarn' | 'pnpm'
 */
export type TObjectValueType<T extends object> = T[keyof T]

/**
 * 漂亮的打印interface/type 是对象类型
 */
export type TPrettify<T> = {
  [K in keyof T]: T[K]
} & {}

/**
 * 解决联合类型中的字符串类型
 * @example
 * Type TName = 'zhangsan' ｜ 'lisi' | 'wangwu' | string
 * => 这样就会导致 TName 联合类型不会展示
 * 通过 PrettifyString<TName> 能够解决
 * 或者
 * PrettifyString<zhangsan' ｜ 'lisi' | 'wangwu'>
 */
export type TPrettifyString<T> = T | (string & {})

/**
 * 解析promise 里面的参数类型
 */
export type TPromiseType<T extends (...args: any[]) => Promise<any>> = ReturnType<T> extends Promise<infer U>
  ? U
  : never

/**
 * 自定义工具类型来提取数组元素类型
 * 获取数组元素的类型
 */
export type TElementType<T> = T extends Array<infer U> ? U : never

/**
 * 常规的函数
 */
export type TCommonFunc = ((...args: any[]) => any) & Record<string, any>
