var React = require('react');
var HotelCard = require('./hotelCard');

module.exports = React.createClass({
    render: function () {
        let hotels = [];

        this.props.hotels.forEach(hotel => hotels.push(<HotelCard key={hotel.id} hotel={hotel}></HotelCard>));

        return (
            <div>
                {hotels}
            </div>
        )
    }
});
