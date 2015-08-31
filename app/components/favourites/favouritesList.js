var React = require('react/addons');
var FavouriteItem = require('./favouriteItem');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

console.log(React);

module.exports = React.createClass({
    render() {

        let items = this.props.favourites.map(favourite => <FavouriteItem key={favourite.id} favourite={favourite}></FavouriteItem>);

        return (
            <ul className="favourites-list">
                <ReactCSSTransitionGroup transitionName="favourites-list">
                    {items}
                </ReactCSSTransitionGroup>
            </ul>
        )
    }
});
