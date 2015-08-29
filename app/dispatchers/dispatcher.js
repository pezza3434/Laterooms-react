var Dispatcher = require('flux').Dispatcher;

module.exports = Object.assign(new Dispatcher(), {
    handleAction: function (action) {
        this.dispatch({
            source: 'A_VIEW_ACTION',
            action: action
        });
    },
    handleServerAction: function (action) {
        this.dispatch({
            source: 'A_SERVER_ACTION',
            action: action
        });
    }
});
