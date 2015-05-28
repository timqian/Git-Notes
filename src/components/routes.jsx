"use strict";

var React = require('react');
var Router = require('react-router');

var PushContent = require('./PushContent');
var ContentsList = require('./ContentsList');


var App = React.createClass({
  render: function() {
    return (
    	<div className="container">
    		<nav className="navbar">
    			<ul className="navbar-list">
    				<li className="navbar-item"><Router.Link className="navbar-link" to="pushContent">Compose</Router.Link></li>
    				<li className="navbar-item"><Router.Link className="navbar-link" to="contentsList">View Contents</Router.Link></li>
    			</ul>
    		</nav>

    		<Router.RouteHandler/>

    	</div>
    );
  }
});

var routes = (
	<Router.Route name="app" path='/' handler={App}>
		<Router.DefaultRoute name="pushContent" handler={PushContent}/>
		<Router.Route name="contentsList" handler={ContentsList}/>
	</Router.Route>
);


module.exports = routes;