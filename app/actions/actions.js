var dispatcher = require('../dispatchers/dispatcher.js');
var constants = require('../constants/constants.js');

module.exports = {
    actionName: function (payload) {
        dispatcher.handleAction({
            actionType: constants.ACTION_NAME,
            action: payload
        });
    }
};
