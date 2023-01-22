import domUtils from '@/dom/domUtils'

/**
 * bus事件总线
 * @type {{offEntire(String): void, dispatchEvent(): void, removeEventListener(): void, hub: null, removeListenerEventEntire(): void, emit(String): void, off(String, Function): void, on(String, Function): void, addEventListener(): void}}
 */
const bus = domUtils.eventBus()

export default bus
