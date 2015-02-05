var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');

var config = require('./webpack.config');

gulp.task("webpack-dev-server", function() {
  var conf = config.dev();

  new WebpackDevServer(webpack(conf), {
    contentBase: conf.output.path,
    publicPath: '/',
    hot: true
  }).listen(3000, "localhost", function(err) {
    if(err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }

    gutil.log("[webpack-dev-server]", "Running...");
  });
});