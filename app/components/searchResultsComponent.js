var React = require('react');
var HotelCard = require('./hotelCard');

module.exports = React.createClass({
    render() {

        let hotels = this.props.hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel}></HotelCard>);

        return (
            <div>
                {hotels}
            </div>
        )
    }
});
