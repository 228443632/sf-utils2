/**
 * 分片加载
 * @param {array} data 数据
 * @param {Function} beforeCb 开始之前执行
 * @param {Function} cb 回调函数
 * @param {Function} afterCb 结束后回调
 * @param {number} loopLength 每次分片的大小
 * @param {Function} afterCb 运行结束回掉函数
 */
import { _requestAnimationFrame } from './_constant'
import isPromise from '@/base/isPromise'

function partialCb({ data = [], beforeCb, cb = new Function(), loopLength = 100, afterCb }) {
  const totalLoop = Math.ceil(data.length / loopLength)
  const _context = this
  let partialIndex = 0
  beforeCb && beforeCb()
  async function loadPartCb(_data) {
    let partialData = _data.slice(partialIndex * loopLength, loopLength * (partialIndex + 1))
    const p = cb(partialData, partialIndex, _data)
    if (isPromise(p)) await p
    if (partialIndex < totalLoop) {
      partialIndex++
      _requestAnimationFrame(loadPartCb.bind(_context, _data))
    } else {
      afterCb && afterCb()
    }
  }
  _requestAnimationFrame(loadPartCb.bind(_context, data))
}

export default partialCb
