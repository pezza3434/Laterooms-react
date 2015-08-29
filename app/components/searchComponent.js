var React = require('react');
var actions = require('../actions/userActions')
var debounce = require('../utils/debounce');

module.exports = React.createClass({
    _onChange(e) {
        if (e.target.value) {
            actions.search({
                query: e.target.value
            });
        }
    },
    render() {

        let _this = this;

        let onChange = debounce(ev => {
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
