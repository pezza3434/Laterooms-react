var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="hotel">
                <div className="hotel__image"><img src={this.props.hotel.urls.img} /></div>
                <div className="hotel__name">{this.props.hotel.name}</div>
                <div className="hotel__price">{this.props.hotel.pricing.totalPriceOfStay.includingTax}</div>
            </div>
        )
    }
});
