"use strict";

var React = require('react');
var Marty = require('marty');
var ContentsListStore = require('../stores/ContentsListStore');
var ContentsListActions = require('../actions/ContentsListActions');


var ContentsList = React.createClass({
	render: function() {
		console.log("props in view:");
		console.log(this.props.contentsList);

		var contentNodes = this.props.contentsList.map(function(content, index){
			return (
				<Content title={content.title} text={content.text} date={content.updatedAt} key={index}/>
			);
		});

		return (
			<div>
				<button className="u-pull-right button-primary" onClick={this._onClick}>Show all the posts</button>
				{contentNodes}
			</div>
		);
	},

	_onClick: function () {  //不知道为什么，不能直接在上面用 ContentsListActions.getAllContents();
		ContentsListActions.getAllContents();
	}
});


var Content = React.createClass({
	render: function() {
		return (
			<div className="content">
				<h3 className="contentTitle">
					{this.props.title}
				</h3>
				<p>
					{this.props.text}
				</p>
				<p>
				{this.props.date}
				</p>
			</div>
		);
	}
});

// module.exports = ContentsList;

module.exports = Marty.createContainer(ContentsList, {
  listenTo: ContentsListStore,
  fetch: {
    contentsList: function() {
      return ContentsListStore.getState();
    }
  },
	failed: function(errors) {
		console.log("failed fetching data");
		// return <div className="User User-failedToLoad">{errors}</div>;
	}
});