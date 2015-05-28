"use strict";

var React = require('react');
var DataAPI = require('../DataAPI');

var PushContent = React.createClass({
	render: function() {
		return (
			<div>
				<button className="button-primary u-pull-right" onClick={this._onPush}>push</button>
				<input type="text" className="u-pull-left" ref="pushTitle" placeholder="TITLE"/>
				<textarea className="u-full-width" ref="pushText" placeholder="text"/>

			</div>
		);
	},

	_onPush: function(){
		console.log('Going to push things');
		let title = React.findDOMNode(this.refs.pushTitle).value;
		let text = React.findDOMNode(this.refs.pushText).value;
		console.log('title: ' + title);
		console.log('text: ' + text);
		DataAPI.pushContent({title: title, text: text});
	}
});

module.exports = PushContent;