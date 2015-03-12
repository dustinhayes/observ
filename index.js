module.exports = Observable

function Observable(value) {
    var listeners = []
    value = value === undefined ? null : value

    observable.set = function (v) {
        value = v

        for (var i = 0, len = listeners.length; i < len; i++) {
            listeners[i](v)
        }
    }

    return observable

    function observable(listener) {
        if (!listener) {
            return value
        }

        var index = listeners.push(listener) - 1

        return function remove() {
            listeners.splice(index, 1)
        }
    }
}
