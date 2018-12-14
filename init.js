define(function(require, exports, module) {
  var karas = require('./build/index')['default'];
  karas.init = function() {
    var jsx = document.querySelectorAll('script');
    for(var i = 0, len = jsx.length; i < len; i++) {
      var node = jsx[i];
      if(node.getAttribute('type') === 'text/jsx' && !node.getAttribute('karas')) {
        node.setAttribute('karas', 1);
        var code = node.textContent || node.text;
        if(!code) {
          continue;
        }
        code = karas.parse(code);
        node.textContent = node.text = code;
      }
    }
  };
  module.exports = karas;
});