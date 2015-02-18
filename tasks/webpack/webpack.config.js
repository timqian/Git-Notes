var WebPack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var common = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/../../dist'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /src\/.*\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
};

module.exports = {
  release: function() {
    common.debug = false;

    common.module.loaders.push({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    });

    common.plugins = common.plugins || [];
    common.plugins.push(new ExtractTextPlugin("bundle.css"));
    common.plugins.push(new WebPack.optimize.MinChunkSizePlugin({minChunkSize: 10000}));
    common.plugins.push(new WebPack.optimize.LimitChunkCountPlugin({maxChunks: 15}));
    common.plugins.push(new WebPack.optimize.DedupePlugin());
    common.plugins.push(new WebPack.optimize.OccurenceOrderPlugin());
    common.plugins.push(new WebPack.optimize.UglifyJsPlugin({
      compress: {
        dead_code : true,
        drop_debugger : true,
        global_defs   : {
          DEBUG: false,
          RELEASE: true
        }
      }
    }));

    return common;
  },

  dev: function() {
    common.debug = true;
    common.entry.unshift('webpack/hot/only-dev-server');
    common.entry.unshift('webpack-dev-server/client?http://0.0.0.0:3000'); // WebpackDevServer host and port

    common.module.loaders[0].loaders.unshift('react-hot');
    common.module.loaders.push({
      test: /\.css$/,
      loader: "style-loader!css-loader"
    });

    common.plugins = common.plugins || [];
    common.plugins.push(new WebPack.HotModuleReplacementPlugin());
    common.plugins.push(new WebPack.NoErrorsPlugin());

    return common;
  }
};