var dispatcher = require('../dispatchers/dispatcher');
var eventEmitter = require('events').EventEmitter;

var basicStore = Object.assign(eventEmitter.prototype, {
    emitChange: function () {
        console.log('emitting');
        this.emit('change');
    }
});

dispatcher.register(function(payload){
    console.log('dispatcher dispatched');
    basicStore.emitChange(payload);
});

module.exports = basicStore;
