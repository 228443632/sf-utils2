/**
 * 序号列表生成函数
 * @param {number} start 起始值
 * @param {number} stop 结束值
 * @param {number} step 自增值
 * @return {Array}
 * range(0) // []
 * range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * range(-5, 5) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
 * range(0, 10, 2) // [0, 2, 4, 6, 8]
 */
function range (start, stop, step) {
	let index, len
	let result = []
	let args = arguments
	if (args.length < 2) {
		stop = args[0]
		start = 0
	}
	index = start >> 0
	len = stop >> 0
	if (index < stop) {
		step = step >> 0 || 1
		for (; index < len; index += step) {
			result.push(index)
		}
	}
	return result
}

export default range
