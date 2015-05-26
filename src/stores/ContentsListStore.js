"use strict";
var Marty = require('marty');
var ContentsListConstants = require('../constants/ContentsListConstants');


var ContentsListStore = Marty.createStore({
	id: 'ContentsListStore',
	handlers: {
		getAllContents: ContentsListConstants.GET_ALL_CONTENTS
	},

	getInitialState: function () {
		return [];
	},

	getAllContents: function (data) {
        console.log('res arrived store: ')
        console.log(data);
        this.state = data;
	}
});

module.exports = ContentsListStore;