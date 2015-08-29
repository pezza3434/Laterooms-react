var React = require('react');
var searchStore = require('../stores/searchStore');
var userActions = require('../actions/userActions');
var SearchComponent = require('./searchComponent');
var SearchResultsComponent = require('./SearchResultsComponent');

module.exports = React.createClass({
    triggerAction: function() {
        userActions.search();
    },
    getInitialState: function() {
        return {
            loading: false,
            results: []
        }
    },
    componentWillMount: function() {

        let _this = this;
        searchStore.on('change',() => {
            _this.setState({
                loading: searchStore.isLoading(),
                results: _this.setSearchResults(searchStore.getSearchResults())
            })
        });
    },
    setSearchResults: function(response) {
        if (!response.results) {
            return '';
        }

        return response.results.hotels;
    },

    render: function() {
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
