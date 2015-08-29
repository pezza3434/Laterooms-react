var React = require('react');

module.exports = React.createClass({
    render: function () {

        let {name,
            urls: {img: img},
            pricing: {totalPriceOfStay: {includingTax:includingTax}}}
            = this.props.hotel;

        return (
            <div className="hotel">
                <div className="hotel__image"><img src={img} /></div>
                <div className="hotel__name">{name}</div>
                <div className="hotel__price">{includingTax}</div>
            </div>
        )
    }
});
