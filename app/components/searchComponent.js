var React = require('react');
var actions = require('../actions/userActions')
var debounce = require('../utils/debounce');

module.exports = React.createClass({
    onChange: function(e) {
        if (e.target.value) {
            actions.search({
                query: e.target.value
            });
        }
    },
    render: function() {

        var _this = this;

        var onChange = debounce(function(ev) {
            _this.onChange(ev);
        });

        return (
            <div>
                <input onChange={onChange} type="text"/>
                {this.props.loading
                    ? <div>loading!!</div>
                    : <div>not loading</div>}
            </div>
        )
    }
});
