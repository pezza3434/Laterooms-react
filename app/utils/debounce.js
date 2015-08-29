module.exports = function (cb) {
    var timer;
    return function (ev) {
        ev.persist();
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            cb(ev);
        }, 500);
    }
}
