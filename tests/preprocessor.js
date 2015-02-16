var Babel = require("babel-core");

module.exports = {
  process: function(src, file) {
    if(file.indexOf("node_modules") === -1 && file.match(/\.jsx?$/)) {
      return Babel.transform(src, {filename: file}).code;
    } else if(file.match(/\.css$/)) {
      return '';
    } else {
      return src;
    }
  }
};