var dispatcher = require('../dispatchers/dispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');

var searchResults = {};
var isLoading = false;

//Responsible for emitting events for the componenets
var basicStore = Object.assign(eventEmitter.prototype, {
    emitChange: function () {
        this.emit('change');
    },
    getSearchResults: function () {
        return searchResults;
    },
    isLoading: function () {
        return isLoading;
    }
});

//Responsible for setting things on the store
dispatcher.register(function(payload){

    if (payload.action.actionType === constants.RECEIVE_DATA) {
        searchResults = payload.action.data;
        isLoading = false;
    }

    if (payload.action.actionType === constants.SEARCH) {
        isLoading = true;
    }

    basicStore.emitChange();
});

module.exports = basicStore;
