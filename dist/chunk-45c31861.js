'use strict';

var __chunk_1 = require('./chunk-3bbbc65d.js');

var contextHelper = (function (_ref) {
  var context = _ref.context,
      extension = _ref.extension;

  if ((typeof context === 'undefined' ? 'undefined' : __chunk_1._typeof(context)) === 'object' && __chunk_1._typeof(context[__chunk_1.CONTEXT_KEY]) === 'object' && typeof context[__chunk_1.CONTEXT_KEY].addExtension === 'function') {
    context[__chunk_1.CONTEXT_KEY].addExtension(extension);
  }
});

exports.contextHelper = contextHelper;
//# sourceMappingURL=chunk-45c31861.js.map
