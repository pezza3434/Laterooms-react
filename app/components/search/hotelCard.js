var React = require('react');
var actions = require('../../actions/userActions');

module.exports = React.createClass({

    _addFavourite() {
        actions.addFavourite(this.props.hotel);
    },

    render() {

        let {
            name,
            urls: {
                img: img
            },
            pricing: {
                totalPriceOfStay: {
                    includingTax: includingTax
                }
            }
        } = this.props.hotel;

        return (
            <div className="hotel col-md-4" onClick={this._addFavourite}>
                <div className="hotel__image"><img src={img}/></div>
                <div className="hotel__details">
                    <div className="hotel__name">{name}</div>
                    <div className="hotel__price">£{includingTax}</div>
                </div>
            </div>
        )
    }
});
