var dispatcher = require('../dispatchers/dispatcher');
var constants = require('../constants/constants')

module.exports = {
    receiveData: function (data) {
        dispatcher.handleServerAction({
            actionType: constants.RECEIVE_DATA,
            data: data
        });
    }
}
