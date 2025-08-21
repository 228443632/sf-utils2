import isNullable from 'sf-utils2/base/isNullable'

/**
 * 判断值是否是 null、undefined、''
 * @param {any} val
 * @example
 * ```
 * isNullableString(null) => true
 * isNullableString(undefined) => true
 * isNullableString('') => true
 * isNullableString(1) => false
 * isNullableString(0) => false
 * ```
 */
function isNullableString(val: any): boolean {
  return isNullable(val) || val === ''
}

export default isNullableString
