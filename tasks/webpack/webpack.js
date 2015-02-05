var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

var config = require('./webpack.config');

gulp.task("webpack", function(callback) {
  webpack(config.release(), function(err, stats) {
    if(err) {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString());
    callback();
  });
});