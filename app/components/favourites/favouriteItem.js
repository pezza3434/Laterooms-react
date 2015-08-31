var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <li>
                <div>{this.props.favourite.name}</div>
            </li>
        )
    }
});
