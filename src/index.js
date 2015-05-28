"use strict";

require('./components/normalize.css'); //插入css
require('./components/skeleton.css'); //插入css
require('./components/costomize.css'); //插入css

var React = require("react");
var Router = require("react-router");
var routes = require("./components/routes.jsx");

window.Marty = require('marty');

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.body);
});


// React.render(React.createElement(App), document.body);
