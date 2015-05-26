"use strict";
var Marty = require('marty');
var ContentsListConstants = require('../constants/ContentsListConstants');
var DataAPI = require('../DataAPI');

var ContentsListActions = Marty.createActionCreators({
	id: 'ContentsListActions',
	getAllContents: function(){
		DataAPI.getAllContents().then((res) => {
          console.log('res arrived actionCentor: ');
          console.log(res.body.results);
          this.dispatch(ContentsListConstants.GET_ALL_CONTENTS, res.body.results);
        });
	}
});

module.exports = ContentsListActions;