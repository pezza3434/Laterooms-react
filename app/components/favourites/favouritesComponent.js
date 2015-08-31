var React = require('react');
var actions = require('../../actions/userActions');
var FavouritesList = require('./favouritesList');
var favouritesStore = require('../../stores/favouritesStore');

require('./style.css');

module.exports = React.createClass({
    render() {
        return (
            <div className="favourites">
                <h4>Favourites</h4>
                <FavouritesList favourites={this.props.favourites}/>
            </div>
        );
    }
});
