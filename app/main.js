var React = require('react');
var AppComponent = require('./components/AppComponent.js');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('./components/style.css');

React.render(<AppComponent/>, document.getElementById('reactapp'));
