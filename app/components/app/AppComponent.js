var React = require('react');
var searchStore = require('../../stores/searchStore');
var favouritesStore = require('../../stores/favouritesStore');
var userActions = require('../../actions/userActions');
var SearchComponent = require('../search/searchComponent');
var SearchResultsComponent = require('../search/SearchResultsComponent');
var FavouritesComponent = require('../favourites/FavouritesComponent');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('./style.css');

module.exports = React.createClass({
    _triggerAction() {
        userActions.search();
    },

    _setSearchResults(response) {
        if (!response.results) {
            return '';
        }

        return response.results.hotels;
    },

    getInitialState() {
        return {
            loading: false,
            results: [],
            favourites: []
        }
    },

    componentWillMount() {

        let _this = this;
        searchStore.on('change', () => {
            _this.setState({
                loading: searchStore.isLoading(),
                results: _this._setSearchResults(searchStore.getSearchResults()),
            })
        });
        favouritesStore.on('change', () => {
            _this.setState({
                favourites: favouritesStore.getFavourites()
            });
        });
    },

    render() {
        return (
            <div>
                <SearchComponent loading={this.state.loading}/>
                {this.state.results.length ? <SearchResultsComponent hotels={this.state.results}/> : ''}
                {this.state.favourites.length ? <FavouritesComponent favourites={this.state.favourites}/> : ''}
            </div>
        );
    }
});
