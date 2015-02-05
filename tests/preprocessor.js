var ReactTools = require('react-tools');

module.exports = {
  process: function(src, file) {
    if(file.match(/\.jsx$/)) {
      return ReactTools.transform(src);
    } else if(file.match(/\.css$/)) {
      return '';
    } else {
      return src;
    }
  }
};