var React = require('react');
var actions = require('../../actions/userActions')
var debounce = require('../../utils/debounce');
require('./style.css')

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
            _this._onChange(ev);
        });

        return (
            <div className="col-md-12">
                <input className="form-control" placeholder="Text input" onChange={onChange} type="text"/>
                {this.props.loading
                    ? <div className="loading">loading!!</div>
                : ''}
            </div>
        )
    }
});
