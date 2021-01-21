export function emitEvent(name, data) {
    dispatchEvent(new CustomEvent(name, {
        detail: data
    }))
}

export function listenEvent(name, cb) {
    addEventListener(name, cb)
}

export function unlistenEvent(name, cb) {
    removeEventListener(name, cb)
}