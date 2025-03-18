type RafThrottleFn<T extends any[]> = (...args: T) => void

/**
 * rAF 节流实现代码
 * @param fn
 */
function rafThrottle<T extends any[]>(fn: RafThrottleFn<T>): RafThrottleFn<T> {
  let isPending = false
  let lastArgs: T | null = null

  const throttledFn: RafThrottleFn<T> = (...args) => {
    lastArgs = args
    if (!isPending) {
      isPending = true
      requestAnimationFrame(() => {
        fn(...lastArgs!)
        isPending = false
        lastArgs = null
      })
    }
  }
  return throttledFn
}

export default rafThrottle
