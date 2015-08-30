var React = require('react');
var searchStore = require('../stores/searchStore');
var userActions = require('../actions/userActions');
var SearchComponent = require('./searchComponent');
var SearchResultsComponent = require('./SearchResultsComponent');

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
            results: []
        }
    },

    componentWillMount() {

        let _this = this;
        searchStore.on('change', () => {
            _this.setState({
                loading: searchStore.isLoading(),
                results: _this._setSearchResults(searchStore.getSearchResults())
            })
        });
    },

    render() {
        return (
            <div>
                <SearchComponent loading={this.state.loading}/>
                {this.state.results
                    ? <SearchResultsComponent hotels={this.state.results}/>
                    : ''}
            </div>
        );
    }
});
