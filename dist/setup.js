'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var amphtml = require('./amphtml.js');
var __chunk_1 = require('./chunk-3bbbc65d.js');
var PropTypes = _interopDefault(require('prop-types'));
require('./chunk-45c31861.js');

var AmpScripts = function () {
  function AmpScripts() {
    var htmlFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __chunk_1.AMP;
    __chunk_1.classCallCheck(this, AmpScripts);

    this.scripts = new Map([[htmlFormat, React__default.createElement(amphtml.Script, { key: htmlFormat, specName: htmlFormat })]]);
  }

  __chunk_1.createClass(AmpScripts, [{
    key: 'addExtension',
    value: function addExtension(extension) {
      this.scripts.set(extension, React__default.createElement(amphtml.Script, { key: extension, specName: extension }));
    }
  }, {
    key: 'getScriptElements',
    value: function getScriptElements() {
      return [].concat(__chunk_1.toConsumableArray(this.scripts.values()));
    }
  }]);
  return AmpScripts;
}();

var AmpScriptsManager = function (_Component) {
  __chunk_1.inherits(AmpScriptsManager, _Component);

  function AmpScriptsManager() {
    __chunk_1.classCallCheck(this, AmpScriptsManager);
    return __chunk_1.possibleConstructorReturn(this, (AmpScriptsManager.__proto__ || Object.getPrototypeOf(AmpScriptsManager)).apply(this, arguments));
  }

  __chunk_1.createClass(AmpScriptsManager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, this.props.ampScripts);
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.Children.only(this.props.children);
    }
  }]);
  return AmpScriptsManager;
}(React.Component);

AmpScriptsManager.childContextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.instanceOf(AmpScripts).isRequired);

AmpScriptsManager.propTypes = {
  children: PropTypes.node.isRequired,
  ampScripts: PropTypes.instanceOf(AmpScripts).isRequired
};

/* eslint-disable react/no-danger */

var key = function key(suffix) {
  return 'react-amphtml-header-boilerplate-' + suffix;
};

var headerBoilerplate = (function (href) {
  return [React__default.createElement('meta', { key: key('meta-charset'), charSet: 'utf-8' }), React__default.createElement('meta', { key: key('meta-viewport'), name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1' }), React__default.createElement('link', { key: key('canonical-link'), rel: 'canonical', href: href }), React__default.createElement('style', {
    key: key('style'),
    'amp-boilerplate': '',
    dangerouslySetInnerHTML: {
      __html: '\n          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}\n        '
    }
  }), React__default.createElement(
    'noscript',
    { key: key('noscript') },
    React__default.createElement('style', {
      'amp-boilerplate': '',
      dangerouslySetInnerHTML: {
        __html: '\n            body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}\n          '
      }
    })
  )];
});

exports.AmpScripts = AmpScripts;
exports.AmpScriptsManager = AmpScriptsManager;
exports.headerBoilerplate = headerBoilerplate;
//# sourceMappingURL=setup.js.map
