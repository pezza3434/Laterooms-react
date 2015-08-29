var request = require('superagent');
var proxy = 'http://localhost:1337/';
var serverActions = require('./serverActions');
var lateroomsKey = require('../utils/lateroomsKey.dontcommit');

module.exports = {
    search: {
        get: function (query) {
            request
                .get('http://Alex-Perry.local:1337/api.laterooms.com/search/v2/?q=' + query)
                .set('TLRG-AppId', lateroomsKey)
                .end(function(err,res){
                    serverActions.receiveData(res.body);
                });
        }
    }
};
