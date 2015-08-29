var React = require('react');
var HotelCard = require('./hotelCard');

module.exports = React.createClass({
    render: function () {
        var hotels = [];
        this.props.hotels.forEach(function (hotel) {
            console.log(hotel);
            hotels.push(<HotelCard key={hotel.id} hotel={hotel}></HotelCard>)
        });
        return (
            <div>
                {hotels}
            </div>
        )
    }
});
