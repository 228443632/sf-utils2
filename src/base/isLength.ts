/**
 * 检查给定值是否为有效的长度。
 *
 * 有效长度是类型为 `number` 的非负整数，并且小于或等于
 * JavaScript 的最大安全整数（`Number.MAX_SAFE_INTEGER`）。
 * 如果值是有效的长度，则返回 `true`；否则返回 `false`。
 *
 * 此函数还可以在 TypeScript 中作为类型谓词，将参数的类型缩小到有效的长度（`number`）。
 *
 * @param {unknown} value The value to check.
 * @returns {value is number} Returns `true` if `value` is a valid length, else `false`.
 *
 * @example
 * isLength(0); // true
 * isLength(42); // true
 * isLength(-1); // false
 * isLength(1.5); // false
 * isLength(Number.MAX_SAFE_INTEGER); // true
 * isLength(Number.MAX_SAFE_INTEGER + 1); // false
 * @version 3.3.0-beta11
 */
function isLength(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0
}

export default isLength
