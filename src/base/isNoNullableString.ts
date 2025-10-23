import isNullableString from 'sf-utils2/base/isNullableString'

/**
 * 判断值是否非 null、undefined、''
 * @param val
 * @return {boolean}
 * @example
 * ```
 * isNoNullableString(null) => false
 * isNoNullableString(undefined) => false
 * isNoNullableString('') => false
 * isNoNullableString(1) => true
 * isNoNullableString(0) => true
 * ```
 */
function isNoNullableString(val: any): boolean {
  return !isNullableString(val)
}

export default isNoNullableString
