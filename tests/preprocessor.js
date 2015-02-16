var Babel = require("babel-core");

module.exports = {
  process: function(src, file) {
    if(file.match(/\.jsx?$/)) {
      return Babel.transform(src, {filename: file}).code;
    } else if(file.match(/\.css$/)) {
      return '';
    } else {
      return src;
    }
  }
};