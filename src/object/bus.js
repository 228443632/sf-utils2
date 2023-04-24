import _helperEventBus from '@/_helper/_helperEventBus'

/**
 * bus事件总线
 * @version v3.0.9+
 * @type {{offEntire(String): void, dispatchEvent(): void, removeEventListener(): void, hub: null, removeListenerEventEntire(): void, emit(String): void, off(String, Function): void, on(String, Function): void, addEventListener(): void}}
 */
const bus = _helperEventBus()

export default bus
