var React = require('react');
var basicStore = require('../stores/basicStore');
var actions = require('../actions/actions');

module.exports = React.createClass({
    triggerAction: function () {
        console.log('trigger action');
        actions.actionName();
    },
    componentWillMount: function() {
        basicStore.on('change', function (action) {
            console.log(action);
        });
    },
    render: function () {
        return (
            <h1><div onClick={this.triggerAction}>Hello world! And this</div></h1>
        );
    }
});
