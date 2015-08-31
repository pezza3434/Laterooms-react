var dispatcher = require('../dispatchers/dispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');

var selectedFavourites = [];

var favouritesStore = Object.assign(eventEmitter.prototype, {
    getFavourites: function () {
        return selectedFavourites;
    },
    emitChange: function () {
        this.emit('change')
    }
});

dispatcher.register(function(payload){
    if(payload.action.actionType === constants.ADD_FAVOURITE){
        selectedFavourites.push(payload.action.hotel);
    }
    favouritesStore.emitChange();
});

module.exports = favouritesStore;
