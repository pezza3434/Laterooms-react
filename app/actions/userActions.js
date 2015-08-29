var dispatcher = require('../dispatchers/dispatcher.js');
var constants = require('../constants/constants.js');
var appApi = require('./api');

module.exports = {
    search: function (payload) {
        dispatcher.handleAction({
            actionType: constants.SEARCH,
            action: payload
        });
        appApi.search.get(payload.query);
    }
};
