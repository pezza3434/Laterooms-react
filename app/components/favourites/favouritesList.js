var React = require('react');
var FavouriteItem = require('./favouriteItem');

module.exports = React.createClass({
    render() {

        let items = this.props.favourites.map(favourite => <FavouriteItem favourite={favourite}></FavouriteItem>);

        return (
            <ul>
                {items}
            </ul>
        )
    }
});
