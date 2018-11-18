'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_1 = require('./chunk-3bbbc65d.js');
var __chunk_2 = require('./chunk-45c31861.js');

var Script = function Script(_ref) {
  var extension = _ref.extension,
      isCustomTemplate = _ref.isCustomTemplate;

  return React__default.createElement("script", __chunk_1._extends({
    async: true
  }, __chunk_1.defineProperty({}, "custom-" + (isCustomTemplate ? "template" : "element"), extension), {
    src: "https://cdn.ampproject.org/v0/" + extension + "-" + versionForExtension(extension) + ".js"
  }));
};

var versionForExtension = function versionForExtension(extension) {
  switch (extension) {
    case "amp-mustache":
      return "0.2";
    default:
      return "0.1";
  }
};

Script.defaultProps = {
  isCustomTemplate: false
};

Script.propTypes = {
  extension: PropTypes.string.isRequired,
  isCustomTemplate: PropTypes.bool
};

var AmpState = function AmpState(_ref, context) {
  var children = _ref.children,
      id = _ref.id,
      src = _ref.src;

  __chunk_2.contextHelper({ context: context, extension: 'amp-bind' });

  if (src) {
    return React__default.createElement('amp-state', { id: id, src: src });
  }

  return React__default.createElement(
    'amp-state',
    { id: id },
    React__default.createElement('script', {
      type: 'application/json',
      dangerouslySetInnerHTML: { // eslint-disable-line react/no-danger
        __html: JSON.stringify(children)
      }
    })
  );
};

AmpState.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  src: PropTypes.string
};

AmpState.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

AmpState.defaultProps = {
  children: null,
  src: null
};

var _Text$propTypes, _AmpAudio_, _AmpAudio_616d702d, _AmpAudio_616d702d3, _AmpCarousel$propType, _AmpList_64656661756c, _AmpVideo_, _AmpVideo_616d702d, _AmpVideo_616d702d2;
// like `amp-*`. This is mostly here as a convenience.
// https://reactjs.org/docs/web-components.html#using-web-components-in-react
//
// Also, `specName` is only necessary for wrapping components.

var propsHelper = function propsHelper(props, additionalProps) {
  var newProps = Object.assign({}, props, additionalProps);
  delete newProps.specName;

  if (newProps.className) {
    delete newProps.className;
    newProps = Object.assign({}, newProps, {
      class: props.className
    });
  }

  return newProps;
};

var Html_68746d6c20e29aa120666f7220746f702d6c6576656c2068746d6c = function Html_68746d6c20e29aa120666f7220746f702d6c6576656c2068746d6c(props) {
  return React__default.createElement('html', propsHelper(props));
};

Html_68746d6c20e29aa120666f7220746f702d6c6576656c2068746d6c.propTypes = {
  '⚡': PropTypes.any.isRequired
};
Html_68746d6c20e29aa120666f7220746f702d6c6576656c2068746d6c.defaultProps = {
  '⚡': ''
};

var Html_68746d6c20e29aa13461647320666f7220746f702d6c6576656c2068746d6c = function Html_68746d6c20e29aa13461647320666f7220746f702d6c6576656c2068746d6c(props) {
  return React__default.createElement('html', propsHelper(props));
};

Html_68746d6c20e29aa13461647320666f7220746f702d6c6576656c2068746d6c.propTypes = {
  '⚡4ads': PropTypes.any.isRequired
};
Html_68746d6c20e29aa13461647320666f7220746f702d6c6576656c2068746d6c.defaultProps = {
  '⚡4ads': ''
};

var Html_68746d6c20e29aa134656d61696c20666f7220746f702d6c6576656c2068746d6c = function Html_68746d6c20e29aa134656d61696c20666f7220746f702d6c6576656c2068746d6c(props) {
  return React__default.createElement('html', propsHelper(props));
};

Html_68746d6c20e29aa134656d61696c20666f7220746f702d6c6576656c2068746d6c.propTypes = {
  '⚡4email': PropTypes.any.isRequired
};
Html_68746d6c20e29aa134656d61696c20666f7220746f702d6c6576656c2068746d6c.defaultProps = {
  '⚡4email': ''
};

var Head = function Head(props) {
  return React__default.createElement('head', propsHelper(props));
};

var Title_7469746c65 = function Title_7469746c65(props) {
  return React__default.createElement('title', propsHelper(props));
};

var Base = function Base(props) {
  return React__default.createElement('base', propsHelper(props));
};

Base.propTypes = {
  'href': PropTypes.any,
  'target': PropTypes.any
};
Base.defaultProps = {
  'href': null
};

var Link_6c696e6b2072656c3d = function Link_6c696e6b2072656c3d(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b2072656c3d.propTypes = {
  'amp-app-banner data source': PropTypes.any,
  'rel': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Link_6c696e6b2072656c3d63616e6f6e6963616c = function Link_6c696e6b2072656c3d63616e6f6e6963616c(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b2072656c3d63616e6f6e6963616c.propTypes = {
  'href': PropTypes.any.isRequired,
  'rel': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Link_6c696e6b2072656c3d6d616e6966657374 = function Link_6c696e6b2072656c3d6d616e6966657374(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b2072656c3d6d616e6966657374.propTypes = {
  'href': PropTypes.any.isRequired,
  'rel': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Link_6c696e6b2072656c3d7072656c6f6164 = function Link_6c696e6b2072656c3d7072656c6f6164(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b2072656c3d7072656c6f6164.propTypes = {
  'async': PropTypes.any,
  'amp-app-banner data source': PropTypes.any,
  'rel': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Link_6c696e6b2072656c3d7374796c65736865657420666f7220666f6e7473 = function Link_6c696e6b2072656c3d7374796c65736865657420666f7220666f6e7473(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b2072656c3d7374796c65736865657420666f7220666f6e7473.propTypes = {
  'media': PropTypes.any,
  'href': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'rel': PropTypes.any.isRequired,
  'type': PropTypes.any,
  'integrity': PropTypes.any,
  'content': PropTypes.any
};

var Link_6c696e6b206974656d70726f703d73616d654173 = function Link_6c696e6b206974656d70726f703d73616d654173(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b206974656d70726f703d73616d654173.propTypes = {
  'href': PropTypes.any.isRequired,
  'itemprop': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Link_6c696e6b206974656d70726f703d = function Link_6c696e6b206974656d70726f703d(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b206974656d70726f703d.propTypes = {
  'href': PropTypes.any.isRequired,
  'itemprop': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Link_6c696e6b2070726f70657274793d = function Link_6c696e6b2070726f70657274793d(props) {
  return React__default.createElement('link', propsHelper(props));
};

Link_6c696e6b2070726f70657274793d.propTypes = {
  'href': PropTypes.any.isRequired,
  'property': PropTypes.any.isRequired,
  'charset': PropTypes.any,
  'sizes': PropTypes.any,
  'integrity': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'crossorigin': PropTypes.any,
  'srclang': PropTypes.any,
  'amp-story-page': PropTypes.any,
  '[src]': PropTypes.any
};

var Meta_6d65746120636861727365743d7574662d38 = function Meta_6d65746120636861727365743d7574662d38(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120636861727365743d7574662d38.propTypes = {
  'charset': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d76696577706f7274 = function Meta_6d657461206e616d653d76696577706f7274(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d76696577706f7274.propTypes = {
  'content': PropTypes.any.isRequired,
  'name': PropTypes.any.isRequired
};
Meta_6d657461206e616d653d76696577706f7274.defaultProps = {
  'name': 'viewport'
};

var Meta_6d65746120687474702d65717569763d582d55412d436f6d70617469626c65 = function Meta_6d65746120687474702d65717569763d582d55412d436f6d70617469626c65(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d582d55412d436f6d70617469626c65.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d6170706c652d6974756e65732d617070 = function Meta_6d657461206e616d653d6170706c652d6974756e65732d617070(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d6170706c652d6974756e65732d617070.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d6578706572696d656e74732d6f70742d696e = function Meta_6d657461206e616d653d616d702d6578706572696d656e74732d6f70742d696e(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d6578706572696d656e74732d6f70742d696e.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d33702d696672616d652d737263 = function Meta_6d657461206e616d653d616d702d33702d696672616d652d737263(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d33702d696672616d652d737263.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d6578706572696d656e742d746f6b656e = function Meta_6d657461206e616d653d616d702d6578706572696d656e742d746f6b656e(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d6578706572696d656e742d746f6b656e.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d6c696e6b2d7661726961626c652d616c6c6f7765642d6f726967696e = function Meta_6d657461206e616d653d616d702d6c696e6b2d7661726961626c652d616c6c6f7765642d6f726967696e(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d6c696e6b2d7661726961626c652d616c6c6f7765642d6f726967696e.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d676f6f676c652d636c69656e7469642d69642d617069 = function Meta_6d657461206e616d653d616d702d676f6f676c652d636c69656e7469642d69642d617069(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d676f6f676c652d636c69656e7469642d69642d617069.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d61642d646f75626c65636c69636b2d737261 = function Meta_6d657461206e616d653d616d702d61642d646f75626c65636c69636b2d737261(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d61642d646f75626c65636c69636b2d737261.propTypes = {
  'name': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d70346164732d6964 = function Meta_6d657461206e616d653d616d70346164732d6964(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d70346164732d6964.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d20616e6420636f6e74656e743d = function Meta_6d657461206e616d653d20616e6420636f6e74656e743d(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d20616e6420636f6e74656e743d.propTypes = {
  'name': PropTypes.any,
  'itemprop': PropTypes.any,
  'property': PropTypes.any,
  'scheme': PropTypes.any,
  'nonce': PropTypes.any
};

var Meta_6d65746120687474702d65717569763d436f6e74656e742d54797065 = function Meta_6d65746120687474702d65717569763d436f6e74656e742d54797065(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d436f6e74656e742d54797065.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d636f6e74656e742d6c616e6775616765 = function Meta_6d65746120687474702d65717569763d636f6e74656e742d6c616e6775616765(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d636f6e74656e742d6c616e6775616765.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d706963732d6c6162656c = function Meta_6d65746120687474702d65717569763d706963732d6c6162656c(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d706963732d6c6162656c.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d696d616765746f6f6c626172 = function Meta_6d65746120687474702d65717569763d696d616765746f6f6c626172(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d696d616765746f6f6c626172.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d436f6e74656e742d5374796c652d54797065 = function Meta_6d65746120687474702d65717569763d436f6e74656e742d5374796c652d54797065(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d436f6e74656e742d5374796c652d54797065.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d436f6e74656e742d5363726970742d54797065 = function Meta_6d65746120687474702d65717569763d436f6e74656e742d5363726970742d54797065(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d436f6e74656e742d5363726970742d54797065.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d6f726967696e2d747269616c = function Meta_6d65746120687474702d65717569763d6f726967696e2d747269616c(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d6f726967696e2d747269616c.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d7265736f757263652d74797065 = function Meta_6d65746120687474702d65717569763d7265736f757263652d74797065(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d7265736f757263652d74797065.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d65746120687474702d65717569763d782d646e732d70726566657463682d636f6e74726f6c = function Meta_6d65746120687474702d65717569763d782d646e732d70726566657463682d636f6e74726f6c(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d65746120687474702d65717569763d782d646e732d70726566657463682d636f6e74726f6c.propTypes = {
  'http-equiv': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d61642d656e61626c652d72656672657368 = function Meta_6d657461206e616d653d616d702d61642d656e61626c652d72656672657368(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d61642d656e61626c652d72656672657368.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Meta_6d657461206e616d653d616d702d746f2d616d702d6e617669676174696f6e = function Meta_6d657461206e616d653d616d702d746f2d616d702d6e617669676174696f6e(props) {
  return React__default.createElement('meta', propsHelper(props));
};

Meta_6d657461206e616d653d616d702d746f2d616d702d6e617669676174696f6e.propTypes = {
  'name': PropTypes.any.isRequired,
  'content': PropTypes.any.isRequired
};

var Style_7374796c6520616d702d637573746f6d = function Style_7374796c6520616d702d637573746f6d(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_7374796c6520616d702d637573746f6d.propTypes = {
  'amp-custom': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any,
  'type': PropTypes.any
};
Style_7374796c6520616d702d637573746f6d.defaultProps = {
  'amp-custom': ''
};

var Style_7374796c6520616d702d637573746f6d2028414d503441445329 = function Style_7374796c6520616d702d637573746f6d2028414d503441445329(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_7374796c6520616d702d637573746f6d2028414d503441445329.propTypes = {
  'amp-custom': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any,
  'type': PropTypes.any
};
Style_7374796c6520616d702d637573746f6d2028414d503441445329.defaultProps = {
  'amp-custom': ''
};

var Style_7374796c6520616d702d637573746f6d2028414d5034454d41494c29 = function Style_7374796c6520616d702d637573746f6d2028414d5034454d41494c29(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_7374796c6520616d702d637573746f6d2028414d5034454d41494c29.propTypes = {
  'amp-custom': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any,
  'type': PropTypes.any
};
Style_7374796c6520616d702d637573746f6d2028414d5034454d41494c29.defaultProps = {
  'amp-custom': ''
};

var Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74 = function Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74.propTypes = {
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any
};

var Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74 = function Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74.propTypes = {
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any
};

var Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d = function Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d.propTypes = {
  'amp-boilerplate': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any
};
Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d.defaultProps = {
  'amp-boilerplate': ''
};

var Style_68656164203e207374796c655b616d70346164732d626f696c6572706c6174655d = function Style_68656164203e207374796c655b616d70346164732d626f696c6572706c6174655d(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_68656164203e207374796c655b616d70346164732d626f696c6572706c6174655d.propTypes = {
  'amp4ads-boilerplate': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any
};
Style_68656164203e207374796c655b616d70346164732d626f696c6572706c6174655d.defaultProps = {
  'amp4ads-boilerplate': ''
};

var Style_68656164203e207374796c655b616d7034656d61696c2d626f696c6572706c6174655d = function Style_68656164203e207374796c655b616d7034656d61696c2d626f696c6572706c6174655d(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_68656164203e207374796c655b616d7034656d61696c2d626f696c6572706c6174655d.propTypes = {
  'amp4email-boilerplate': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any
};
Style_68656164203e207374796c655b616d7034656d61696c2d626f696c6572706c6174655d.defaultProps = {
  'amp4email-boilerplate': ''
};

var Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d = function Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d.propTypes = {
  'amp-boilerplate': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any
};
Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d.defaultProps = {
  'amp-boilerplate': ''
};

var Style_7374796c655b616d702d6b65796672616d65735d = function Style_7374796c655b616d702d6b65796672616d65735d(props) {
  return React__default.createElement('style', propsHelper(props));
};

Style_7374796c655b616d702d6b65796672616d65735d.propTypes = {
  'amp-keyframes': PropTypes.any.isRequired
};
Style_7374796c655b616d702d6b65796672616d65735d.defaultProps = {
  'amp-keyframes': ''
};

var Body = function Body(props) {
  return React__default.createElement('body', propsHelper(props));
};

var Article = function Article(props) {
  return React__default.createElement('article', propsHelper(props));
};

var Section_64656661756c74 = function Section_64656661756c74(props) {
  return React__default.createElement('section', propsHelper(props));
};

var Nav_64656661756c74 = function Nav_64656661756c74(props) {
  return React__default.createElement('nav', propsHelper(props));
};

var Aside = function Aside(props) {
  return React__default.createElement('aside', propsHelper(props));
};

var H1 = function H1(props) {
  return React__default.createElement('h1', propsHelper(props));
};

H1.propTypes = {
  'hreflang': PropTypes.any
};

var H2 = function H2(props) {
  return React__default.createElement('h2', propsHelper(props));
};

H2.propTypes = {
  'hreflang': PropTypes.any
};

var H3 = function H3(props) {
  return React__default.createElement('h3', propsHelper(props));
};

H3.propTypes = {
  'hreflang': PropTypes.any
};

var H4 = function H4(props) {
  return React__default.createElement('h4', propsHelper(props));
};

H4.propTypes = {
  'hreflang': PropTypes.any
};

var H5 = function H5(props) {
  return React__default.createElement('h5', propsHelper(props));
};

H5.propTypes = {
  'hreflang': PropTypes.any
};

var H6 = function H6(props) {
  return React__default.createElement('h6', propsHelper(props));
};

H6.propTypes = {
  'hreflang': PropTypes.any
};

var Header = function Header(props) {
  return React__default.createElement('header', propsHelper(props));
};

var Footer = function Footer(props) {
  return React__default.createElement('footer', propsHelper(props));
};

var Address = function Address(props) {
  return React__default.createElement('address', propsHelper(props));
};

var P = function P(props) {
  return React__default.createElement('p', propsHelper(props));
};

P.propTypes = {
  'hreflang': PropTypes.any
};

var Hr = function Hr(props) {
  return React__default.createElement('hr', propsHelper(props));
};

var Pre = function Pre(props) {
  return React__default.createElement('pre', propsHelper(props));
};

var Blockquote = function Blockquote(props) {
  return React__default.createElement('blockquote', propsHelper(props));
};

Blockquote.propTypes = {
  'hreflang': PropTypes.any,
  'cite': PropTypes.any
};

var Ol = function Ol(props) {
  return React__default.createElement('ol', propsHelper(props));
};

Ol.propTypes = {
  'reversed': PropTypes.any,
  'start': PropTypes.any,
  'type': PropTypes.any
};
Ol.defaultProps = {
  'reversed': null
};

var Ul = function Ul(props) {
  return React__default.createElement('ul', propsHelper(props));
};

var Li = function Li(props) {
  return React__default.createElement('li', propsHelper(props));
};

Li.propTypes = {
  'value': PropTypes.any
};

var Dl = function Dl(props) {
  return React__default.createElement('dl', propsHelper(props));
};

var Dt = function Dt(props) {
  return React__default.createElement('dt', propsHelper(props));
};

var Dd = function Dd(props) {
  return React__default.createElement('dd', propsHelper(props));
};

var Figure = function Figure(props) {
  return React__default.createElement('figure', propsHelper(props));
};

var Figcaption = function Figcaption(props) {
  return React__default.createElement('figcaption', propsHelper(props));
};

var Div_64656661756c74 = function Div_64656661756c74(props) {
  return React__default.createElement('div', propsHelper(props));
};

Div_64656661756c74.propTypes = {
  'hreflang': PropTypes.any
};

var Main = function Main(props) {
  return React__default.createElement('main', propsHelper(props));
};

var A_64656661756c74 = function A_64656661756c74(props) {
  return React__default.createElement('a', propsHelper(props));
};

A_64656661756c74.propTypes = {
  'href': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'download': PropTypes.any,
  'rel': PropTypes.any,
  'role': PropTypes.any,
  'tabindex': PropTypes.any,
  'target': PropTypes.any,
  'border': PropTypes.any,
  'crossorigin': PropTypes.any,
  'type': PropTypes.any,
  'name': PropTypes.any,
  '[href]': PropTypes.any,
  'datetime': PropTypes.any
};

var A_412028414d5034454d41494c29 = function A_412028414d5034454d41494c29(props) {
  return React__default.createElement('a', propsHelper(props));
};

A_412028414d5034454d41494c29.propTypes = {
  'href': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'role': PropTypes.any,
  'tabindex': PropTypes.any,
  'target': PropTypes.any,
  'crossorigin': PropTypes.any,
  'type': PropTypes.any,
  'name': PropTypes.any,
  '[href]': PropTypes.any
};

var Em = function Em(props) {
  return React__default.createElement('em', propsHelper(props));
};

var Strong = function Strong(props) {
  return React__default.createElement('strong', propsHelper(props));
};

var Small = function Small(props) {
  return React__default.createElement('small', propsHelper(props));
};

var S = function S(props) {
  return React__default.createElement('s', propsHelper(props));
};

var Cite = function Cite(props) {
  return React__default.createElement('cite', propsHelper(props));
};

var Q = function Q(props) {
  return React__default.createElement('q', propsHelper(props));
};

Q.propTypes = {
  'cite': PropTypes.any
};

var Dfn = function Dfn(props) {
  return React__default.createElement('dfn', propsHelper(props));
};

var Abbr = function Abbr(props) {
  return React__default.createElement('abbr', propsHelper(props));
};

var Data = function Data(props) {
  return React__default.createElement('data', propsHelper(props));
};

var Time = function Time(props) {
  return React__default.createElement('time', propsHelper(props));
};

Time.propTypes = {
  'dir': PropTypes.any
};

var Code = function Code(props) {
  return React__default.createElement('code', propsHelper(props));
};

var Var = function Var(props) {
  return React__default.createElement('var', propsHelper(props));
};

var Samp = function Samp(props) {
  return React__default.createElement('samp', propsHelper(props));
};

var Kbd = function Kbd(props) {
  return React__default.createElement('kbd', propsHelper(props));
};

var Sub = function Sub(props) {
  return React__default.createElement('sub', propsHelper(props));
};

var Sup = function Sup(props) {
  return React__default.createElement('sup', propsHelper(props));
};

var I = function I(props) {
  return React__default.createElement('i', propsHelper(props));
};

var B = function B(props) {
  return React__default.createElement('b', propsHelper(props));
};

var U = function U(props) {
  return React__default.createElement('u', propsHelper(props));
};

var Mark = function Mark(props) {
  return React__default.createElement('mark', propsHelper(props));
};

var Ruby = function Ruby(props) {
  return React__default.createElement('ruby', propsHelper(props));
};

var Rb = function Rb(props) {
  return React__default.createElement('rb', propsHelper(props));
};

var Rt = function Rt(props) {
  return React__default.createElement('rt', propsHelper(props));
};

var Rtc = function Rtc(props) {
  return React__default.createElement('rtc', propsHelper(props));
};

var Rp = function Rp(props) {
  return React__default.createElement('rp', propsHelper(props));
};

var Bdi = function Bdi(props) {
  return React__default.createElement('bdi', propsHelper(props));
};

var Bdo = function Bdo(props) {
  return React__default.createElement('bdo', propsHelper(props));
};

Bdo.propTypes = {
  'alt': PropTypes.any
};

var Span = function Span(props) {
  return React__default.createElement('span', propsHelper(props));
};

var Br = function Br(props) {
  return React__default.createElement('br', propsHelper(props));
};

var Wbr = function Wbr(props) {
  return React__default.createElement('wbr', propsHelper(props));
};

var Ins = function Ins(props) {
  return React__default.createElement('ins', propsHelper(props));
};

Ins.propTypes = {
  'dir': PropTypes.any,
  'cite': PropTypes.any
};

var Del = function Del(props) {
  return React__default.createElement('del', propsHelper(props));
};

Del.propTypes = {
  'dir': PropTypes.any,
  'cite': PropTypes.any
};

var Source_616d702d766964656f203e20736f75726365 = function Source_616d702d766964656f203e20736f75726365(props) {
  return React__default.createElement('source', propsHelper(props));
};

Source_616d702d766964656f203e20736f75726365.propTypes = {
  'src': PropTypes.any,
  'crossorigin': PropTypes.any,
  '[src]': PropTypes.any,
  '[type]': PropTypes.any,
  '[label]': PropTypes.any
};

var Source_616d702d617564696f203e20736f75726365 = function Source_616d702d617564696f203e20736f75726365(props) {
  return React__default.createElement('source', propsHelper(props));
};

Source_616d702d617564696f203e20736f75726365.propTypes = {
  'src': PropTypes.any,
  'crossorigin': PropTypes.any,
  '[src]': PropTypes.any,
  '[type]': PropTypes.any,
  '[label]': PropTypes.any
};

var Source_617564696f203e20736f75726365 = function Source_617564696f203e20736f75726365(props) {
  return React__default.createElement('source', propsHelper(props));
};

Source_617564696f203e20736f75726365.propTypes = {
  'src': PropTypes.any.isRequired,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any
};

var Source_766964656f203e20736f75726365 = function Source_766964656f203e20736f75726365(props) {
  return React__default.createElement('source', propsHelper(props));
};

Source_766964656f203e20736f75726365.propTypes = {
  'src': PropTypes.any.isRequired,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any
};

var Source_616d702d696d612d766964656f203e20736f75726365 = function Source_616d702d696d612d766964656f203e20736f75726365(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ima-video'
  });
  return React__default.createElement('source', propsHelper(props));
};

Source_616d702d696d612d766964656f203e20736f75726365.propTypes = {
  'crossorigin': PropTypes.any,
  'src': PropTypes.any,
  '[src]': PropTypes.any,
  '[type]': PropTypes.any,
  '[label]': PropTypes.any
};
Source_616d702d696d612d766964656f203e20736f75726365.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Track_617564696f203e20747261636b = function Track_617564696f203e20747261636b(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_617564696f203e20747261636b.propTypes = {
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any,
  'selected': PropTypes.any,
  'requiredextensions': PropTypes.any
};
Track_617564696f203e20747261636b.defaultProps = {
  'default': null
};

var Track_617564696f203e20747261636b5b6b696e643d7375627469746c65735d = function Track_617564696f203e20747261636b5b6b696e643d7375627469746c65735d(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_617564696f203e20747261636b5b6b696e643d7375627469746c65735d.propTypes = {
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any.isRequired,
  'selected': PropTypes.any,
  'srclang': PropTypes.any.isRequired
};
Track_617564696f203e20747261636b5b6b696e643d7375627469746c65735d.defaultProps = {
  'default': null
};

var Track_766964656f203e20747261636b = function Track_766964656f203e20747261636b(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_766964656f203e20747261636b.propTypes = {
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any,
  'selected': PropTypes.any,
  'requiredextensions': PropTypes.any
};
Track_766964656f203e20747261636b.defaultProps = {
  'default': null
};

var Track_766964656f203e20747261636b5b6b696e643d7375627469746c65735d = function Track_766964656f203e20747261636b5b6b696e643d7375627469746c65735d(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_766964656f203e20747261636b5b6b696e643d7375627469746c65735d.propTypes = {
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any.isRequired,
  'selected': PropTypes.any,
  'srclang': PropTypes.any.isRequired
};
Track_766964656f203e20747261636b5b6b696e643d7375627469746c65735d.defaultProps = {
  'default': null
};

var Track_616d702d617564696f203e20747261636b = function Track_616d702d617564696f203e20747261636b(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_616d702d617564696f203e20747261636b.propTypes = {
  '[srclang]': PropTypes.any,
  '[type]': PropTypes.any,
  'externalresourcesrequired': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any,
  'selected': PropTypes.any,
  'requiredextensions': PropTypes.any
};
Track_616d702d617564696f203e20747261636b.defaultProps = {
  'default': null
};

var Track_616d702d617564696f203e20747261636b5b6b696e643d7375627469746c65735d = function Track_616d702d617564696f203e20747261636b5b6b696e643d7375627469746c65735d(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_616d702d617564696f203e20747261636b5b6b696e643d7375627469746c65735d.propTypes = {
  '[srclang]': PropTypes.any,
  '[type]': PropTypes.any,
  'externalresourcesrequired': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any.isRequired,
  'selected': PropTypes.any,
  'srclang': PropTypes.any.isRequired
};
Track_616d702d617564696f203e20747261636b5b6b696e643d7375627469746c65735d.defaultProps = {
  'default': null
};

var Track_616d702d766964656f203e20747261636b = function Track_616d702d766964656f203e20747261636b(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_616d702d766964656f203e20747261636b.propTypes = {
  '[srclang]': PropTypes.any,
  '[type]': PropTypes.any,
  'externalresourcesrequired': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any,
  'selected': PropTypes.any,
  'requiredextensions': PropTypes.any
};
Track_616d702d766964656f203e20747261636b.defaultProps = {
  'default': null
};

var Track_616d702d766964656f203e20747261636b5b6b696e643d7375627469746c65735d = function Track_616d702d766964656f203e20747261636b5b6b696e643d7375627469746c65735d(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_616d702d766964656f203e20747261636b5b6b696e643d7375627469746c65735d.propTypes = {
  '[srclang]': PropTypes.any,
  '[type]': PropTypes.any,
  'externalresourcesrequired': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any.isRequired,
  'selected': PropTypes.any,
  'srclang': PropTypes.any.isRequired
};
Track_616d702d766964656f203e20747261636b5b6b696e643d7375627469746c65735d.defaultProps = {
  'default': null
};

var Track_616d702d696d612d766964656f203e20747261636b5b6b696e643d7375627469746c65735d = function Track_616d702d696d612d766964656f203e20747261636b5b6b696e643d7375627469746c65735d(props) {
  return React__default.createElement('track', propsHelper(props));
};

Track_616d702d696d612d766964656f203e20747261636b5b6b696e643d7375627469746c65735d.propTypes = {
  '[srclang]': PropTypes.any,
  '[type]': PropTypes.any,
  'externalresourcesrequired': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'default': PropTypes.any,
  'kind': PropTypes.any.isRequired,
  'selected': PropTypes.any,
  'srclang': PropTypes.any.isRequired
};
Track_616d702d696d612d766964656f203e20747261636b5b6b696e643d7375627469746c65735d.defaultProps = {
  'default': null
};

var G = function G(props) {
  return React__default.createElement('g', propsHelper(props));
};

G.propTypes = {
  'transform': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Glyph = function Glyph(props) {
  return React__default.createElement('glyph', propsHelper(props));
};

Glyph.propTypes = {
  'd': PropTypes.any,
  'glyph-name': PropTypes.any,
  'horiz-adv-x': PropTypes.any,
  'orientation': PropTypes.any,
  'unicode': PropTypes.any,
  'vert-origin-x': PropTypes.any,
  'vert-origin-y': PropTypes.any,
  'vert-adv-y': PropTypes.any,
  'dx': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Glyphref = function Glyphref(props) {
  return React__default.createElement('glyphref', propsHelper(props));
};

Glyphref.propTypes = {
  'dy': PropTypes.any,
  'format': PropTypes.any,
  'glyphref': PropTypes.any,
  'x': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Image = function Image(props) {
  return React__default.createElement('image', propsHelper(props));
};

Image.propTypes = {
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'xlink:actuate': PropTypes.any,
  'arabic-form': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Marker = function Marker(props) {
  return React__default.createElement('marker', propsHelper(props));
};

Marker.propTypes = {
  'transform': PropTypes.any,
  'markerwidth': PropTypes.any,
  'markerheight': PropTypes.any,
  'orient': PropTypes.any,
  'refx': PropTypes.any,
  'xlink:actuate': PropTypes.any,
  'refy': PropTypes.any,
  'viewbox': PropTypes.any,
  'arabic-form': PropTypes.any,
  'pathlength': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Metadata = function Metadata(props) {
  return React__default.createElement('metadata', propsHelper(props));
};

Metadata.propTypes = {
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Path = function Path(props) {
  return React__default.createElement('path', propsHelper(props));
};

Path.propTypes = {
  'glyph-name': PropTypes.any,
  'transform': PropTypes.any,
  'sketch:type': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Solidcolor = function Solidcolor(props) {
  return React__default.createElement('solidcolor', propsHelper(props));
};

Solidcolor.propTypes = {
  'solid-opacity': PropTypes.any,
  'contentscripttype': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Svg = function Svg(props) {
  return React__default.createElement('svg', propsHelper(props));
};

Svg.propTypes = {
  'contentstyletype': PropTypes.any,
  'zoomandpan': PropTypes.any,
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'xlink:actuate': PropTypes.any,
  'version': PropTypes.any,
  'pathlength': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'viewtarget': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Switch = function Switch(props) {
  return React__default.createElement('switch', propsHelper(props));
};

Switch.propTypes = {
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var View = function View(props) {
  return React__default.createElement('view', propsHelper(props));
};

View.propTypes = {
  'transform': PropTypes.any,
  'xlink:actuate': PropTypes.any,
  'pathlength': PropTypes.any,
  'cx': PropTypes.any,
  'viewtarget': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Circle = function Circle(props) {
  return React__default.createElement('circle', propsHelper(props));
};

Circle.propTypes = {
  'cy': PropTypes.any,
  'r': PropTypes.any,
  'transform': PropTypes.any,
  'rx': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Ellipse = function Ellipse(props) {
  return React__default.createElement('ellipse', propsHelper(props));
};

Ellipse.propTypes = {
  'cy': PropTypes.any,
  'r': PropTypes.any,
  'transform': PropTypes.any,
  'ry': PropTypes.any,
  'x1': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Line = function Line(props) {
  return React__default.createElement('line', propsHelper(props));
};

Line.propTypes = {
  'transform': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'x2': PropTypes.any,
  'y1': PropTypes.any,
  'y2': PropTypes.any,
  'points': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Polygon = function Polygon(props) {
  return React__default.createElement('polygon', propsHelper(props));
};

Polygon.propTypes = {
  'transform': PropTypes.any,
  'lengthadjust': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Polyline = function Polyline(props) {
  return React__default.createElement('polyline', propsHelper(props));
};

Polyline.propTypes = {
  'transform': PropTypes.any,
  'lengthadjust': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Rect = function Rect(props) {
  return React__default.createElement('rect', propsHelper(props));
};

Rect.propTypes = {
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'ry': PropTypes.any,
  'x1': PropTypes.any,
  'solid-color': PropTypes.any,
  'arabic-form': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Text = function Text(props) {
  return React__default.createElement('text', propsHelper(props));
};

Text.propTypes = (_Text$propTypes = {
  'dy': PropTypes.any,
  'format': PropTypes.any,
  'transform': PropTypes.any,
  'rotate': PropTypes.any,
  'text-anchor': PropTypes.any,
  'textlength': PropTypes.any,
  'method': PropTypes.any,
  'arabic-form': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any
}, __chunk_1.defineProperty(_Text$propTypes, 'textlength', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'text-rendering', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'unicode-bidi', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'vector-effect', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'visibility', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'word-spacing', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'writing-mode', PropTypes.any), __chunk_1.defineProperty(_Text$propTypes, 'amplitude', PropTypes.any), _Text$propTypes);

var Textpath = function Textpath(props) {
  return React__default.createElement('textpath', propsHelper(props));
};

Textpath.propTypes = {
  'transform': PropTypes.any,
  'spacing': PropTypes.any,
  'startoffset': PropTypes.any,
  'clippathunits': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Tref = function Tref(props) {
  return React__default.createElement('tref', propsHelper(props));
};

Tref.propTypes = {
  'transform': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Tspan = function Tspan(props) {
  return React__default.createElement('tspan', propsHelper(props));
};

Tspan.propTypes = {
  'dy': PropTypes.any,
  'format': PropTypes.any,
  'transform': PropTypes.any,
  'text-anchor': PropTypes.any,
  'rotate': PropTypes.any,
  'method': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Clippath = function Clippath(props) {
  return React__default.createElement('clippath', propsHelper(props));
};

Clippath.propTypes = {
  'filterres': PropTypes.any,
  'transform': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Filter = function Filter(props) {
  return React__default.createElement('filter', propsHelper(props));
};

Filter.propTypes = {
  'transform': PropTypes.any,
  'filterunits': PropTypes.any,
  'primitiveunits': PropTypes.any,
  'width': PropTypes.any,
  'g1': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Hkern = function Hkern(props) {
  return React__default.createElement('hkern', propsHelper(props));
};

Hkern.propTypes = {
  'g2': PropTypes.any,
  'k': PropTypes.any,
  'u1': PropTypes.any,
  'u2': PropTypes.any,
  'gradientunits': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Lineargradient = function Lineargradient(props) {
  return React__default.createElement('lineargradient', propsHelper(props));
};

Lineargradient.propTypes = {
  'transform': PropTypes.any,
  'gradienttransform': PropTypes.any,
  'spreadmethod': PropTypes.any,
  'maskcontentunits': PropTypes.any,
  'x2': PropTypes.any,
  'y2': PropTypes.any,
  'y1': PropTypes.any,
  'points': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Mask = function Mask(props) {
  return React__default.createElement('mask', propsHelper(props));
};

Mask.propTypes = {
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'maskunits': PropTypes.any,
  'patternunits': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Pattern = function Pattern(props) {
  return React__default.createElement('pattern', propsHelper(props));
};

Pattern.propTypes = {
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'patterncontentunits': PropTypes.any,
  'patterntransform': PropTypes.any,
  'fr': PropTypes.any,
  'xlink:actuate': PropTypes.any,
  'pathlength': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Radialgradient = function Radialgradient(props) {
  return React__default.createElement('radialgradient', propsHelper(props));
};

Radialgradient.propTypes = {
  'cy': PropTypes.any,
  'r': PropTypes.any,
  'transform': PropTypes.any,
  'fx': PropTypes.any,
  'fy': PropTypes.any,
  'offset': PropTypes.any,
  'gradienttransform': PropTypes.any,
  'spreadmethod': PropTypes.any,
  'rx': PropTypes.any,
  'maskcontentunits': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Stop_6c696e6561726772616469656e74203e2073746f70 = function Stop_6c696e6561726772616469656e74203e2073746f70(props) {
  return React__default.createElement('stop', propsHelper(props));
};

Stop_6c696e6561726772616469656e74203e2073746f70.propTypes = {
  'stop-color': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'style': PropTypes.any
};

var Stop_72616469616c6772616469656e74203e2073746f70 = function Stop_72616469616c6772616469656e74203e2073746f70(props) {
  return React__default.createElement('stop', propsHelper(props));
};

Stop_72616469616c6772616469656e74203e2073746f70.propTypes = {
  'stop-color': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'style': PropTypes.any
};

var Vkern = function Vkern(props) {
  return React__default.createElement('vkern', propsHelper(props));
};

Vkern.propTypes = {
  'g2': PropTypes.any,
  'k': PropTypes.any,
  'u1': PropTypes.any,
  'u2': PropTypes.any,
  'gradientunits': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Defs = function Defs(props) {
  return React__default.createElement('defs', propsHelper(props));
};

Defs.propTypes = {
  'transform': PropTypes.any,
  'arabic-form': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Symbol$1 = function Symbol(props) {
  return React__default.createElement('symbol', propsHelper(props));
};

Symbol$1.propTypes = {
  'transform': PropTypes.any,
  'xlink:actuate': PropTypes.any,
  'pathlength': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Use = function Use(props) {
  return React__default.createElement('use', propsHelper(props));
};

Use.propTypes = {
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'arabic-form': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any,
  'xlink:arcrole': PropTypes.any,
  'xlink:role': PropTypes.any,
  'xlink:href': PropTypes.any,
  'xlink:show': PropTypes.any,
  'xlink:title': PropTypes.any,
  'xlink:type': PropTypes.any,
  'markerunits': PropTypes.any
};

var Fecolormatrix = function Fecolormatrix(props) {
  return React__default.createElement('fecolormatrix', propsHelper(props));
};

Fecolormatrix.propTypes = {
  'values': PropTypes.any,
  '[src]': PropTypes.any,
  'in2': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'width': PropTypes.any,
  'alignment-baseline': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Fecomposite = function Fecomposite(props) {
  return React__default.createElement('fecomposite', propsHelper(props));
};

Fecomposite.propTypes = {
  'values': PropTypes.any,
  'k1': PropTypes.any,
  'k2': PropTypes.any,
  'k3': PropTypes.any,
  'k4': PropTypes.any,
  'operator': PropTypes.any,
  'edgemode': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'width': PropTypes.any,
  'alignment-baseline': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Feflood = function Feflood(props) {
  return React__default.createElement('feflood', propsHelper(props));
};

Feflood.propTypes = {
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'width': PropTypes.any,
  'alignment-baseline': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Fegaussianblur = function Fegaussianblur(props) {
  return React__default.createElement('fegaussianblur', propsHelper(props));
};

Fegaussianblur.propTypes = {
  'stddeviation': PropTypes.any,
  'values': PropTypes.any,
  'sortable': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'width': PropTypes.any,
  'alignment-baseline': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Femerge = function Femerge(props) {
  return React__default.createElement('femerge', propsHelper(props));
};

Femerge.propTypes = {
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'width': PropTypes.any,
  'alignment-baseline': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Femergenode = function Femergenode(props) {
  return React__default.createElement('femergenode', propsHelper(props));
};

Femergenode.propTypes = {
  'values': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Feoffset = function Feoffset(props) {
  return React__default.createElement('feoffset', propsHelper(props));
};

Feoffset.propTypes = {
  'dy': PropTypes.any,
  'format': PropTypes.any,
  'values': PropTypes.any,
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'width': PropTypes.any,
  'alignment-baseline': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Foreignobject = function Foreignobject(props) {
  return React__default.createElement('foreignobject', propsHelper(props));
};

Foreignobject.propTypes = {
  'transform': PropTypes.any,
  'width': PropTypes.any,
  'arabic-form': PropTypes.any,
  'sandbox': PropTypes.any,
  'y': PropTypes.any,
  'preserveaspectratio': PropTypes.any,
  'style': PropTypes.any,
  'requiredfeatures': PropTypes.any,
  'systemlanguage': PropTypes.any,
  'xml:lang': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any,
  'baseline-shift': PropTypes.any,
  'clip': PropTypes.any,
  'clip-path': PropTypes.any,
  'clip-rule': PropTypes.any,
  'color-interpolation': PropTypes.any,
  'sizes': PropTypes.any,
  'color-interpolation-filters': PropTypes.any,
  'color-profile': PropTypes.any,
  'color-rendering': PropTypes.any,
  'cursor': PropTypes.any,
  'direction': PropTypes.any,
  'display': PropTypes.any,
  'dominant-baseline': PropTypes.any,
  'enable-background': PropTypes.any,
  'fill': PropTypes.any,
  'fill-opacity': PropTypes.any,
  'fill-rule': PropTypes.any,
  'filter': PropTypes.any,
  'flood-color': PropTypes.any,
  'flood-opacity': PropTypes.any,
  'font-family': PropTypes.any,
  'font-size': PropTypes.any,
  'font-size-adjust': PropTypes.any,
  'font-stretch': PropTypes.any,
  'glyph-orientation-horizontal': PropTypes.any,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'glyph-orientation-vertical': PropTypes.any,
  'image-rendering': PropTypes.any,
  'kerning': PropTypes.any,
  'letter-spacing': PropTypes.any,
  'lighting-color': PropTypes.any,
  'marker-end': PropTypes.any,
  'marker-mid': PropTypes.any,
  'marker-start': PropTypes.any,
  'mask': PropTypes.any,
  'opacity': PropTypes.any,
  'overflow': PropTypes.any,
  'pointer-events': PropTypes.any,
  'shape-rendering': PropTypes.any,
  'stroke': PropTypes.any,
  'stop-opacity': PropTypes.any,
  'in': PropTypes.any,
  'stroke-dasharray': PropTypes.any,
  'stroke-dashoffset': PropTypes.any,
  'stroke-linecap': PropTypes.any,
  'stroke-linejoin': PropTypes.any,
  'stroke-miterlimit': PropTypes.any,
  'stroke-opacity': PropTypes.any,
  'stroke-width': PropTypes.any,
  'text-decoration': PropTypes.any,
  'textlength': PropTypes.any,
  'text-rendering': PropTypes.any,
  'unicode-bidi': PropTypes.any,
  'vector-effect': PropTypes.any,
  'visibility': PropTypes.any,
  'word-spacing': PropTypes.any,
  'writing-mode': PropTypes.any,
  'amplitude': PropTypes.any
};

var Desc = function Desc(props) {
  return React__default.createElement('desc', propsHelper(props));
};

Desc.propTypes = {
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Title_737667207469746c65 = function Title_737667207469746c65(props) {
  return React__default.createElement('title', propsHelper(props));
};

Title_737667207469746c65.propTypes = {
  'style': PropTypes.any,
  'xml:space': PropTypes.any,
  'xmlns': PropTypes.any,
  'xmlns:xlink': PropTypes.any,
  'result': PropTypes.any
};

var Table = function Table(props) {
  return React__default.createElement('table', propsHelper(props));
};

Table.propTypes = {
  'bgcolor': PropTypes.any,
  'hreflang': PropTypes.any,
  'border': PropTypes.any,
  'cellpadding': PropTypes.any,
  'cellspacing': PropTypes.any,
  'span': PropTypes.any,
  'sandbox': PropTypes.any
};

var Caption = function Caption(props) {
  return React__default.createElement('caption', propsHelper(props));
};

var Colgroup = function Colgroup(props) {
  return React__default.createElement('colgroup', propsHelper(props));
};

Colgroup.propTypes = {
  'valign': PropTypes.any
};

var Col = function Col(props) {
  return React__default.createElement('col', propsHelper(props));
};

Col.propTypes = {
  'valign': PropTypes.any
};

var Tbody = function Tbody(props) {
  return React__default.createElement('tbody', propsHelper(props));
};

var Thead = function Thead(props) {
  return React__default.createElement('thead', propsHelper(props));
};

var Tfoot = function Tfoot(props) {
  return React__default.createElement('tfoot', propsHelper(props));
};

var Tr = function Tr(props) {
  return React__default.createElement('tr', propsHelper(props));
};

Tr.propTypes = {
  'hreflang': PropTypes.any,
  'cellpadding': PropTypes.any,
  'width': PropTypes.any,
  'colspan': PropTypes.any
};

var Td = function Td(props) {
  return React__default.createElement('td', propsHelper(props));
};

Td.propTypes = {
  'headers': PropTypes.any,
  'rowspan': PropTypes.any,
  'abbr': PropTypes.any,
  'hreflang': PropTypes.any,
  'cellpadding': PropTypes.any,
  'width': PropTypes.any,
  'colspan': PropTypes.any,
  'sandbox': PropTypes.any
};

var Th = function Th(props) {
  return React__default.createElement('th', propsHelper(props));
};

Th.propTypes = {
  'scope': PropTypes.any,
  'headers': PropTypes.any,
  'rowspan': PropTypes.any,
  'abbr': PropTypes.any,
  'sorted': PropTypes.any,
  'accept': PropTypes.any,
  'hreflang': PropTypes.any,
  'cellpadding': PropTypes.any,
  'width': PropTypes.any,
  'colspan': PropTypes.any,
  'sandbox': PropTypes.any
};

var Form_464f524d205b6d6574686f643d4745545d = function Form_464f524d205b6d6574686f643d4745545d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-form'
  });
  return React__default.createElement('form', propsHelper(props));
};

Form_464f524d205b6d6574686f643d4745545d.propTypes = {
  'accept-charset': PropTypes.any,
  'autocomplete': PropTypes.any,
  'action': PropTypes.any.isRequired,
  'action-xhr': PropTypes.any,
  'enctype': PropTypes.any,
  'custom-validation-reporting': PropTypes.any,
  'novalidate': PropTypes.any,
  'method': PropTypes.any,
  '[href]': PropTypes.any,
  'for': PropTypes.any,
  'target': PropTypes.any.isRequired,
  'verify-xhr': PropTypes.any
};
Form_464f524d205b6d6574686f643d4745545d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Form_464f524d205b6d6574686f643d504f53545d = function Form_464f524d205b6d6574686f643d504f53545d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-form'
  });
  return React__default.createElement('form', propsHelper(props));
};

Form_464f524d205b6d6574686f643d504f53545d.propTypes = {
  'accept-charset': PropTypes.any,
  'autocomplete': PropTypes.any,
  'action-xhr': PropTypes.any.isRequired,
  'enctype': PropTypes.any,
  'custom-validation-reporting': PropTypes.any,
  'novalidate': PropTypes.any,
  'method': PropTypes.any.isRequired,
  '[href]': PropTypes.any,
  'for': PropTypes.any,
  'target': PropTypes.any.isRequired,
  'verify-xhr': PropTypes.any
};
Form_464f524d205b6d6574686f643d504f53545d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Form_464f524d205b6d6574686f643d4745545d2028414d5034454d41494c29 = function Form_464f524d205b6d6574686f643d4745545d2028414d5034454d41494c29(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-form'
  });
  return React__default.createElement('form', propsHelper(props));
};

Form_464f524d205b6d6574686f643d4745545d2028414d5034454d41494c29.propTypes = {
  'accept-charset': PropTypes.any,
  'autocomplete': PropTypes.any,
  'action-xhr': PropTypes.any,
  'enctype': PropTypes.any,
  'custom-validation-reporting': PropTypes.any,
  'novalidate': PropTypes.any,
  'method': PropTypes.any,
  '[href]': PropTypes.any,
  'for': PropTypes.any,
  'verify-xhr': PropTypes.any
};
Form_464f524d205b6d6574686f643d4745545d2028414d5034454d41494c29.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Form_464f524d205b6d6574686f643d504f53545d2028414d5034454d41494c29 = function Form_464f524d205b6d6574686f643d504f53545d2028414d5034454d41494c29(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-form'
  });
  return React__default.createElement('form', propsHelper(props));
};

Form_464f524d205b6d6574686f643d504f53545d2028414d5034454d41494c29.propTypes = {
  'accept-charset': PropTypes.any,
  'autocomplete': PropTypes.any,
  'action-xhr': PropTypes.any.isRequired,
  'enctype': PropTypes.any,
  'custom-validation-reporting': PropTypes.any,
  'novalidate': PropTypes.any,
  'method': PropTypes.any.isRequired,
  '[href]': PropTypes.any,
  'for': PropTypes.any,
  'verify-xhr': PropTypes.any
};
Form_464f524d205b6d6574686f643d504f53545d2028414d5034454d41494c29.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Div_464f524d203e20444956205b7375626d697474696e675d = function Div_464f524d203e20444956205b7375626d697474696e675d(props) {
  return React__default.createElement('div', propsHelper(props));
};

Div_464f524d203e20444956205b7375626d697474696e675d.propTypes = {
  'hreflang': PropTypes.any,
  'submitting': PropTypes.any.isRequired
};

var Div_464f524d203e20444956205b7375626d69742d737563636573735d = function Div_464f524d203e20444956205b7375626d69742d737563636573735d(props) {
  return React__default.createElement('div', propsHelper(props));
};

Div_464f524d203e20444956205b7375626d69742d737563636573735d.propTypes = {
  'hreflang': PropTypes.any,
  'submit-success': PropTypes.any.isRequired
};

var Div_464f524d203e20444956205b7375626d69742d737563636573735d5b74656d706c6174655d = function Div_464f524d203e20444956205b7375626d69742d737563636573735d5b74656d706c6174655d(props) {
  return React__default.createElement('div', propsHelper(props));
};

Div_464f524d203e20444956205b7375626d69742d737563636573735d5b74656d706c6174655d.propTypes = {
  'hreflang': PropTypes.any,
  'submit-success': PropTypes.any.isRequired,
  'template': PropTypes.any.isRequired
};

var Div_464f524d203e20444956205b7375626d69742d6572726f725d = function Div_464f524d203e20444956205b7375626d69742d6572726f725d(props) {
  return React__default.createElement('div', propsHelper(props));
};

Div_464f524d203e20444956205b7375626d69742d6572726f725d.propTypes = {
  'hreflang': PropTypes.any,
  'submit-error': PropTypes.any.isRequired
};

var Div_464f524d203e20444956205b7375626d69742d6572726f725d5b74656d706c6174655d = function Div_464f524d203e20444956205b7375626d69742d6572726f725d5b74656d706c6174655d(props) {
  return React__default.createElement('div', propsHelper(props));
};

Div_464f524d203e20444956205b7375626d69742d6572726f725d5b74656d706c6174655d.propTypes = {
  'hreflang': PropTypes.any,
  'submit-error': PropTypes.any.isRequired,
  'template': PropTypes.any.isRequired
};

var Label = function Label(props) {
  return React__default.createElement('label', propsHelper(props));
};

Label.propTypes = {
  'accesskey': PropTypes.any
};

var Input = function Input(props) {
  return React__default.createElement('input', propsHelper(props));
};

Input.propTypes = {
  'accept-charset': PropTypes.any,
  'autofocus': PropTypes.any,
  'enctype': PropTypes.any,
  'checked': PropTypes.any,
  'disabled': PropTypes.any,
  'inputmode': PropTypes.any,
  'width': PropTypes.any,
  'list': PropTypes.any,
  'max': PropTypes.any,
  'maxlength': PropTypes.any,
  'min': PropTypes.any,
  'minlength': PropTypes.any,
  'multiple': PropTypes.any,
  'pattern': PropTypes.any,
  'placeholder': PropTypes.any,
  'readonly': PropTypes.any,
  'required': PropTypes.any,
  'selectiondirection': PropTypes.any,
  'size': PropTypes.any,
  'spellcheck': PropTypes.any,
  'step': PropTypes.any,
  'tabindex': PropTypes.any,
  'value': PropTypes.any,
  'type': PropTypes.any,
  '[accept]': PropTypes.any,
  'sandbox': PropTypes.any,
  '[accesskey]': PropTypes.any,
  '[autocomplete]': PropTypes.any,
  '[checked]': PropTypes.any,
  '[disabled]': PropTypes.any,
  '[height]': PropTypes.any,
  '[inputmode]': PropTypes.any,
  '[max]': PropTypes.any,
  '[maxlength]': PropTypes.any,
  '[min]': PropTypes.any,
  '[minlength]': PropTypes.any,
  '[multiple]': PropTypes.any,
  '[pattern]': PropTypes.any,
  '[placeholder]': PropTypes.any,
  '[readonly]': PropTypes.any,
  '[required]': PropTypes.any,
  '[selectiondirection]': PropTypes.any,
  '[size]': PropTypes.any,
  '[spellcheck]': PropTypes.any,
  '[step]': PropTypes.any,
  '[value]': PropTypes.any,
  '[label]': PropTypes.any,
  '[width]': PropTypes.any,
  'amp-app-banner button[open-button]': PropTypes.any,
  'name': PropTypes.any
};

var Button_64656661756c74 = function Button_64656661756c74(props) {
  return React__default.createElement('button', propsHelper(props));
};

Button_64656661756c74.propTypes = {
  'disabled': PropTypes.any,
  'role': PropTypes.any,
  'tabindex': PropTypes.any,
  '[src]': PropTypes.any,
  '[accept]': PropTypes.any,
  '[height]': PropTypes.any,
  '[label]': PropTypes.any,
  '[width]': PropTypes.any,
  'name': PropTypes.any
};
Button_64656661756c74.defaultProps = {
  'disabled': null
};

var Button_616d702d6170702d62616e6e657220627574746f6e5b6f70656e2d627574746f6e5d = function Button_616d702d6170702d62616e6e657220627574746f6e5b6f70656e2d627574746f6e5d(props) {
  return React__default.createElement('button', propsHelper(props));
};

Button_616d702d6170702d62616e6e657220627574746f6e5b6f70656e2d627574746f6e5d.propTypes = {
  'open-button': PropTypes.any,
  'role': PropTypes.any,
  'tabindex': PropTypes.any,
  '[src]': PropTypes.any,
  '[accept]': PropTypes.any,
  'name': PropTypes.any
};
Button_616d702d6170702d62616e6e657220627574746f6e5b6f70656e2d627574746f6e5d.defaultProps = {
  'open-button': null
};

var Select = function Select(props) {
  return React__default.createElement('select', propsHelper(props));
};

Select.propTypes = {
  'checked': PropTypes.any,
  'inputmode': PropTypes.any,
  'pattern': PropTypes.any,
  'selectiondirection': PropTypes.any,
  'spellcheck': PropTypes.any,
  'label': PropTypes.any,
  '[height]': PropTypes.any,
  '[pattern]': PropTypes.any,
  '[selectiondirection]': PropTypes.any,
  '[spellcheck]': PropTypes.any,
  'name': PropTypes.any
};

var Datalist = function Datalist(props) {
  return React__default.createElement('datalist', propsHelper(props));
};

var Optgroup = function Optgroup(props) {
  return React__default.createElement('optgroup', propsHelper(props));
};

Optgroup.propTypes = {
  'inputmode': PropTypes.any,
  'selected': PropTypes.any,
  '[height]': PropTypes.any,
  '[srclang]': PropTypes.any
};

var Option = function Option(props) {
  return React__default.createElement('option', propsHelper(props));
};

Option.propTypes = {
  'inputmode': PropTypes.any,
  'selected': PropTypes.any,
  '[selected]': PropTypes.any,
  '[accept]': PropTypes.any,
  '[height]': PropTypes.any,
  '[srclang]': PropTypes.any,
  'cols': PropTypes.any,
  '[width]': PropTypes.any
};

var Textarea = function Textarea(props) {
  return React__default.createElement('textarea', propsHelper(props));
};

Textarea.propTypes = {
  'enctype': PropTypes.any,
  'checked': PropTypes.any,
  'rows': PropTypes.any,
  'inputmode': PropTypes.any,
  'min': PropTypes.any,
  'multiple': PropTypes.any,
  'readonly': PropTypes.any,
  'required': PropTypes.any,
  'selectiondirection': PropTypes.any,
  'selectionend': PropTypes.any,
  'size': PropTypes.any,
  'selectionstart': PropTypes.any,
  'wrap': PropTypes.any,
  'step': PropTypes.any,
  '[cols]': PropTypes.any,
  '[checked]': PropTypes.any,
  'label': PropTypes.any,
  '[rows]': PropTypes.any,
  '[height]': PropTypes.any,
  '[min]': PropTypes.any,
  '[multiple]': PropTypes.any,
  '[readonly]': PropTypes.any,
  '[required]': PropTypes.any,
  '[selectiondirection]': PropTypes.any,
  '[selectionend]': PropTypes.any,
  '[size]': PropTypes.any,
  '[selectionstart]': PropTypes.any,
  '[wrap]': PropTypes.any,
  '[step]': PropTypes.any,
  'form': PropTypes.any,
  'name': PropTypes.any
};

var Output = function Output(props) {
  return React__default.createElement('output', propsHelper(props));
};

Output.propTypes = {
  'accesskey': PropTypes.any,
  'high': PropTypes.any,
  'name': PropTypes.any
};

var Progress = function Progress(props) {
  return React__default.createElement('progress', propsHelper(props));
};

Progress.propTypes = {
  'maxlength': PropTypes.any,
  '[accept]': PropTypes.any
};

var Meter = function Meter(props) {
  return React__default.createElement('meter', propsHelper(props));
};

Meter.propTypes = {
  'low': PropTypes.any,
  'optimum': PropTypes.any,
  'maxlength': PropTypes.any,
  'minlength': PropTypes.any,
  '(.)': PropTypes.any,
  '[accept]': PropTypes.any
};

var Fieldset = function Fieldset(props) {
  return React__default.createElement('fieldset', propsHelper(props));
};

Fieldset.propTypes = {
  'inputmode': PropTypes.any,
  '[height]': PropTypes.any,
  'name': PropTypes.any
};

var Legend = function Legend(props) {
  return React__default.createElement('legend', propsHelper(props));
};

var Script_616d7068746d6c20656e67696e652076302e6a7320736372697074 = function Script_616d7068746d6c20656e67696e652076302e6a7320736372697074(props) {
  return React__default.createElement('script', propsHelper(props));
};

Script_616d7068746d6c20656e67696e652076302e6a7320736372697074.propTypes = {
  'async': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'type': PropTypes.any
};
Script_616d7068746d6c20656e67696e652076302e6a7320736372697074.defaultProps = {
  'async': true,
  'src': 'https://cdn.ampproject.org/v0.js'
};

var Script_616d703461647320656e67696e6520616d70346164732d76302e6a7320736372697074 = function Script_616d703461647320656e67696e6520616d70346164732d76302e6a7320736372697074(props) {
  return React__default.createElement('script', propsHelper(props));
};

Script_616d703461647320656e67696e6520616d70346164732d76302e6a7320736372697074.propTypes = {
  'async': PropTypes.any.isRequired,
  '(<!--|(^|\W)i-amphtml-|!important)': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'type': PropTypes.any
};
Script_616d703461647320656e67696e6520616d70346164732d76302e6a7320736372697074.defaultProps = {
  'async': true,
  'src': 'https://cdn.ampproject.org/amp4ads-v0.js'
};

var Script_73637269707420747970653d6170706c69636174696f6e2f6c642b6a736f6e = function Script_73637269707420747970653d6170706c69636174696f6e2f6c642b6a736f6e(props) {
  return React__default.createElement(Script, propsHelper(props));
};

var Script_7363726970742069643d616d702d727463 = function Script_7363726970742069643d616d702d727463(props) {
  return React__default.createElement(Script, propsHelper(props));
};

var Script_616d702d696d612d766964656f203e207363726970745b747970653d6170706c69636174696f6e2f6a736f6e5d = function Script_616d702d696d612d766964656f203e207363726970745b747970653d6170706c69636174696f6e2f6a736f6e5d(props) {
  return React__default.createElement(Script, propsHelper(props));
};

var Noscript_6e6f73637269707420656e636c6f7375726520666f7220626f696c6572706c617465 = function Noscript_6e6f73637269707420656e636c6f7375726520666f7220626f696c6572706c617465(props) {
  return React__default.createElement('noscript', propsHelper(props));
};

var Noscript_64656661756c74 = function Noscript_64656661756c74(props) {
  return React__default.createElement('noscript', propsHelper(props));
};

var Acronym = function Acronym(props) {
  return React__default.createElement('acronym', propsHelper(props));
};

var Big = function Big(props) {
  return React__default.createElement('big', propsHelper(props));
};

var Center = function Center(props) {
  return React__default.createElement('center', propsHelper(props));
};

var Dir = function Dir(props) {
  return React__default.createElement('dir', propsHelper(props));
};

var Hgroup = function Hgroup(props) {
  return React__default.createElement('hgroup', propsHelper(props));
};

var Listing = function Listing(props) {
  return React__default.createElement('listing', propsHelper(props));
};

var Multicol = function Multicol(props) {
  return React__default.createElement('multicol', propsHelper(props));
};

var Nextid = function Nextid(props) {
  return React__default.createElement('nextid', propsHelper(props));
};

var Nobr = function Nobr(props) {
  return React__default.createElement('nobr', propsHelper(props));
};

var Spacer = function Spacer(props) {
  return React__default.createElement('spacer', propsHelper(props));
};

var Strike = function Strike(props) {
  return React__default.createElement('strike', propsHelper(props));
};

var Tt = function Tt(props) {
  return React__default.createElement('tt', propsHelper(props));
};

var Xmp = function Xmp(props) {
  return React__default.createElement('xmp', propsHelper(props));
};

var Slot = function Slot(props) {
  return React__default.createElement('slot', propsHelper(props));
};

Slot.propTypes = {
  '[href]': PropTypes.any
};

var AmpImg_64656661756c74 = function AmpImg_64656661756c74(props) {
  return React__default.createElement('amp-img', propsHelper(props));
};

AmpImg_64656661756c74.propTypes = {
  'ismap': PropTypes.any,
  '[alt]': PropTypes.any,
  'readonly': PropTypes.any,
  '[attribution]': PropTypes.any,
  '[srcset]': PropTypes.any,
  '[type]': PropTypes.any,
  'allow-ssr-img': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'amp-access': PropTypes.any,
  'lightbox-exclude': PropTypes.any,
  'lightbox-thumbnail-id': PropTypes.any,
  'src': PropTypes.any.isRequired
};
AmpImg_64656661756c74.defaultProps = {
  'noloading': null,
  'lightbox-exclude': null
};

var AmpImg_414d502d494d472028414d5034454d41494c29 = function AmpImg_414d502d494d472028414d5034454d41494c29(props) {
  return React__default.createElement('amp-img', propsHelper(props));
};

AmpImg_414d502d494d472028414d5034454d41494c29.propTypes = {
  'ismap': PropTypes.any,
  '[alt]': PropTypes.any,
  'readonly': PropTypes.any,
  '[attribution]': PropTypes.any,
  '[srcset]': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'src': PropTypes.any.isRequired
};
AmpImg_414d502d494d472028414d5034454d41494c29.defaultProps = {
  'noloading': null
};

var AmpLayout = function AmpLayout(props) {
  return React__default.createElement('amp-layout', propsHelper(props));
};

AmpLayout.propTypes = {
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpLayout.defaultProps = {
  'noloading': null
};

var AmpPixel = function AmpPixel(props) {
  return React__default.createElement('amp-pixel', propsHelper(props));
};

AmpPixel.propTypes = {
  'amp-access extension .json script': PropTypes.any,
  'referrerpolicy': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpPixel.defaultProps = {
  'referrerpolicy': null,
  'noloading': null
};

var Script_616d702d33712d706c61796572 = function Script_616d702d33712d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-3q-player",
    "isCustomTemplate": false
  }));
};

var Amp3qPlayer = function Amp3qPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-3q-player'
  });
  return React__default.createElement('amp-3q-player', propsHelper(props));
};

Amp3qPlayer.propTypes = {
  'autoplay': PropTypes.any,
  'data-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
Amp3qPlayer.defaultProps = {
  'autoplay': null,
  'noloading': null
};
Amp3qPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6163636573732d6c61746572706179 = function Script_616d702d6163636573732d6c61746572706179(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-access'
  });
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-access-laterpay",
    "isCustomTemplate": false
  }));
};

var Script_616d702d6163636573732d7363726f6c6c = function Script_616d702d6163636573732d7363726f6c6c(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-access'
  });
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-access-scroll",
    "isCustomTemplate": false
  }));
};

var Script_616d702d616363657373 = function Script_616d702d616363657373(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-access",
    "isCustomTemplate": false
  }));
};

var Script_616d702d61636365737320657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d61636365737320657874656e73696f6e202e6a736f6e20736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-access'
  });
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-analytics'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var Script_616d702d6163636f7264696f6e = function Script_616d702d6163636f7264696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-accordion",
    "isCustomTemplate": false
  }));
};

var AmpAccordion = function AmpAccordion(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-accordion'
  });
  return React__default.createElement('amp-accordion', propsHelper(props));
};

AmpAccordion.propTypes = {
  'disable-session-states': PropTypes.any,
  'expand-single-section': PropTypes.any
};
AmpAccordion.defaultProps = {
  'disable-session-states': null,
  'expand-single-section': null
};
AmpAccordion.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Section_616d702d6163636f7264696f6e203e2073656374696f6e = function Section_616d702d6163636f7264696f6e203e2073656374696f6e(props) {
  return React__default.createElement('section', propsHelper(props));
};

Section_616d702d6163636f7264696f6e203e2073656374696f6e.propTypes = {
  'expanded': PropTypes.any
};
Section_616d702d6163636f7264696f6e203e2073656374696f6e.defaultProps = {
  'expanded': null
};

var Script_616d702d61642d65786974 = function Script_616d702d61642d65786974(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-ad-exit",
    "isCustomTemplate": false
  }));
};

var AmpAdExit = function AmpAdExit(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad-exit'
  });
  return React__default.createElement('amp-ad-exit', propsHelper(props));
};

AmpAdExit.propTypes = {
  'id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAdExit.defaultProps = {
  'noloading': null
};
AmpAdExit.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d61642d6578697420636f6e66696775726174696f6e204a534f4e = function Script_616d702d61642d6578697420636f6e66696775726174696f6e204a534f4e(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad-exit'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var Script_616d702d616420657874656e73696f6e202e6a7320736372697074 = function Script_616d702d616420657874656e73696f6e202e6a7320736372697074(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-ad",
    "isCustomTemplate": false
  }));
};

var AmpAd_64656661756c74 = function AmpAd_64656661756c74(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad'
  });
  return React__default.createElement('amp-ad', propsHelper(props));
};

AmpAd_64656661756c74.propTypes = {
  'ismap': PropTypes.any,
  'rtc-config': PropTypes.any,
  'template': PropTypes.any,
  'amp-animation extension .json script': PropTypes.any,
  'src': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAd_64656661756c74.defaultProps = {
  'noloading': null
};
AmpAd_64656661756c74.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpAd_616d702d6164207769746820646174612d6d756c74692d73697a6520617474726962757465 = function AmpAd_616d702d6164207769746820646174612d6d756c74692d73697a6520617474726962757465(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad'
  });
  return React__default.createElement('amp-ad', propsHelper(props));
};

AmpAd_616d702d6164207769746820646174612d6d756c74692d73697a6520617474726962757465.propTypes = {
  'ismap': PropTypes.any,
  'data-multi-size': PropTypes.any.isRequired,
  'rtc-config': PropTypes.any,
  'template': PropTypes.any,
  'src': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAd_616d702d6164207769746820646174612d6d756c74692d73697a6520617474726962757465.defaultProps = {
  'data-multi-size': '',
  'noloading': null
};
AmpAd_616d702d6164207769746820646174612d6d756c74692d73697a6520617474726962757465.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpAd_616d702d6164207769746820646174612d656e61626c652d7265667265736820617474726962757465 = function AmpAd_616d702d6164207769746820646174612d656e61626c652d7265667265736820617474726962757465(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad'
  });
  return React__default.createElement('amp-ad', propsHelper(props));
};

AmpAd_616d702d6164207769746820646174612d656e61626c652d7265667265736820617474726962757465.propTypes = {
  'ismap': PropTypes.any,
  'data-enable-refresh': PropTypes.any.isRequired,
  'rtc-config': PropTypes.any,
  'src': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAd_616d702d6164207769746820646174612d656e61626c652d7265667265736820617474726962757465.defaultProps = {
  'data-enable-refresh': '',
  'noloading': null
};
AmpAd_616d702d6164207769746820646174612d656e61626c652d7265667265736820617474726962757465.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpEmbed_64656661756c74 = function AmpEmbed_64656661756c74(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad'
  });
  return React__default.createElement('amp-embed', propsHelper(props));
};

AmpEmbed_64656661756c74.propTypes = {
  'ismap': PropTypes.any,
  'rtc-config': PropTypes.any,
  'template': PropTypes.any,
  'amp-animation extension .json script': PropTypes.any,
  'src': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpEmbed_64656661756c74.defaultProps = {
  'noloading': null
};
AmpEmbed_64656661756c74.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpEmbed_616d702d656d626564207769746820646174612d6d756c74692d73697a6520617474726962757465 = function AmpEmbed_616d702d656d626564207769746820646174612d6d756c74692d73697a6520617474726962757465(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ad'
  });
  return React__default.createElement('amp-embed', propsHelper(props));
};

AmpEmbed_616d702d656d626564207769746820646174612d6d756c74692d73697a6520617474726962757465.propTypes = {
  'ismap': PropTypes.any,
  'data-multi-size': PropTypes.any.isRequired,
  'rtc-config': PropTypes.any,
  'template': PropTypes.any,
  'src': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpEmbed_616d702d656d626564207769746820646174612d6d756c74692d73697a6520617474726962757465.defaultProps = {
  'data-multi-size': '',
  'noloading': null
};
AmpEmbed_616d702d656d626564207769746820646174612d6d756c74692d73697a6520617474726962757465.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d616e616c7974696373 = function Script_616d702d616e616c7974696373(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-analytics",
    "isCustomTemplate": false
  }));
};

var Script_616d702d616e616c797469637320657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d616e616c797469637320657874656e73696f6e202e6a736f6e20736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-analytics'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var AmpAnalytics = function AmpAnalytics(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-analytics'
  });
  return React__default.createElement('amp-analytics', propsHelper(props));
};

AmpAnalytics.propTypes = {
  '[src]': PropTypes.any,
  'config': PropTypes.any
};
AmpAnalytics.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d616e696d = function Script_616d702d616e696d(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-anim",
    "isCustomTemplate": false
  }));
};

var Script_616d702d616e696d20657874656e73696f6e202e6a73207363726970742028414d5034454d41494c29 = function Script_616d702d616e696d20657874656e73696f6e202e6a73207363726970742028414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-anim",
    "isCustomTemplate": false
  }));
};

var AmpAnim_64656661756c74 = function AmpAnim_64656661756c74(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-anim'
  });
  return React__default.createElement('amp-anim', propsHelper(props));
};

AmpAnim_64656661756c74.propTypes = {
  'ismap': PropTypes.any,
  '[alt]': PropTypes.any,
  'loop': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'src': PropTypes.any.isRequired
};
AmpAnim_64656661756c74.defaultProps = {
  'noloading': null
};
AmpAnim_64656661756c74.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpAnim_414d502d414e494d2028414d5034454d41494c29 = function AmpAnim_414d502d414e494d2028414d5034454d41494c29(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-anim'
  });
  return React__default.createElement('amp-anim', propsHelper(props));
};

AmpAnim_414d502d414e494d2028414d5034454d41494c29.propTypes = {
  'ismap': PropTypes.any,
  '[alt]': PropTypes.any,
  'loop': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'src': PropTypes.any.isRequired
};
AmpAnim_414d502d414e494d2028414d5034454d41494c29.defaultProps = {
  'noloading': null
};
AmpAnim_414d502d414e494d2028414d5034454d41494c29.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d616e696d6174696f6e = function Script_616d702d616e696d6174696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-animation",
    "isCustomTemplate": false
  }));
};

var Script_616d702d616e696d6174696f6e20657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d616e696d6174696f6e20657874656e73696f6e202e6a736f6e20736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-animation'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var AmpAnimation = function AmpAnimation(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-animation'
  });
  return React__default.createElement('amp-animation', propsHelper(props));
};

AmpAnimation.propTypes = {
  'trigger': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAnimation.defaultProps = {
  'trigger': null,
  'noloading': null
};
AmpAnimation.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d617065737465722d6d65646961 = function Script_616d702d617065737465722d6d65646961(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-apester-media",
    "isCustomTemplate": false
  }));
};

var AmpApesterMedia = function AmpApesterMedia(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-apester-media'
  });
  return React__default.createElement('amp-apester-media', propsHelper(props));
};

AmpApesterMedia.propTypes = {
  'data-apester-media-id': PropTypes.any,
  'data-apester-channel-token': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpApesterMedia.defaultProps = {
  'noloading': null
};
AmpApesterMedia.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6170702d62616e6e6572 = function Script_616d702d6170702d62616e6e6572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-app-banner",
    "isCustomTemplate": false
  }));
};

var AmpAppBanner = function AmpAppBanner(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-app-banner'
  });
  return React__default.createElement('amp-app-banner', propsHelper(props));
};

AmpAppBanner.propTypes = {
  'id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAppBanner.defaultProps = {
  'noloading': null
};
AmpAppBanner.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d617564696f = function Script_616d702d617564696f(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-audio",
    "isCustomTemplate": false
  }));
};

var AmpAudio_64656661756c74 = function AmpAudio_64656661756c74(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-audio'
  });
  return React__default.createElement('amp-audio', propsHelper(props));
};

AmpAudio_64656661756c74.propTypes = (_AmpAudio_ = {
  'autoplay': PropTypes.any,
  'preload': PropTypes.any,
  'artist': PropTypes.any,
  'artwork': PropTypes.any,
  'controlslist': PropTypes.any,
  'loop': PropTypes.any,
  'blocked': PropTypes.any
}, __chunk_1.defineProperty(_AmpAudio_, 'loop', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_, 'muted', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_, 'src', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_, 'crossorigin', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_, 'noloading', PropTypes.any), _AmpAudio_);
AmpAudio_64656661756c74.defaultProps = {
  'autoplay': null,
  'loop': null,
  'muted': null,
  'noloading': null
};
AmpAudio_64656661756c74.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpAudio_616d702d73746f7279203e3e20616d702d617564696f = function AmpAudio_616d702d73746f7279203e3e20616d702d617564696f(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-audio'
  });
  return React__default.createElement('amp-audio', propsHelper(props));
};

AmpAudio_616d702d73746f7279203e3e20616d702d617564696f.propTypes = (_AmpAudio_616d702d = {
  'autoplay': PropTypes.any.isRequired,
  'artist': PropTypes.any,
  'artwork': PropTypes.any,
  'controlslist': PropTypes.any,
  'loop': PropTypes.any,
  'blocked': PropTypes.any
}, __chunk_1.defineProperty(_AmpAudio_616d702d, 'loop', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d, 'muted', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d, 'src', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d, 'crossorigin', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d, 'noloading', PropTypes.any), _AmpAudio_616d702d);
AmpAudio_616d702d73746f7279203e3e20616d702d617564696f.defaultProps = {
  'autoplay': '',
  'loop': null,
  'muted': null,
  'noloading': null
};
AmpAudio_616d702d73746f7279203e3e20616d702d617564696f.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpAudio_616d702d617564696f202841344129 = function AmpAudio_616d702d617564696f202841344129(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-audio'
  });
  return React__default.createElement('amp-audio', propsHelper(props));
};

AmpAudio_616d702d617564696f202841344129.propTypes = (_AmpAudio_616d702d3 = {
  'artist': PropTypes.any,
  'artwork': PropTypes.any,
  'controlslist': PropTypes.any,
  'loop': PropTypes.any,
  'blocked': PropTypes.any
}, __chunk_1.defineProperty(_AmpAudio_616d702d3, 'loop', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d3, 'muted', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d3, 'src', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d3, 'crossorigin', PropTypes.any), __chunk_1.defineProperty(_AmpAudio_616d702d3, 'noloading', PropTypes.any), _AmpAudio_616d702d3);
AmpAudio_616d702d617564696f202841344129.defaultProps = {
  'loop': null,
  'muted': null,
  'noloading': null
};
AmpAudio_616d702d617564696f202841344129.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6175746f2d616473 = function Script_616d702d6175746f2d616473(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-auto-ads",
    "isCustomTemplate": false
  }));
};

var AmpAutoAds = function AmpAutoAds(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-auto-ads'
  });
  return React__default.createElement('amp-auto-ads', propsHelper(props));
};

AmpAutoAds.propTypes = {
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpAutoAds.defaultProps = {
  'noloading': null
};
AmpAutoAds.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d62656f70696e696f6e = function Script_616d702d62656f70696e696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-beopinion",
    "isCustomTemplate": false
  }));
};

var AmpBeopinion = function AmpBeopinion(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-beopinion'
  });
  return React__default.createElement('amp-beopinion', propsHelper(props));
};

AmpBeopinion.propTypes = {
  'data-account': PropTypes.any.isRequired,
  'data-content': PropTypes.any,
  'data-my-content': PropTypes.any,
  'overridable': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpBeopinion.defaultProps = {
  'noloading': null
};
AmpBeopinion.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d62696e64 = function Script_616d702d62696e64(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-bind",
    "isCustomTemplate": false
  }));
};

var Script_616d702d62696e6420657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d62696e6420657874656e73696f6e202e6a736f6e20736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-bind'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var AmpState_616d702d7374617465 = function AmpState_616d702d7374617465(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-bind'
  });
  return React__default.createElement(AmpState, propsHelper(props));
};

var AmpState_616d702d73746174652028414d5034454d41494c29 = function AmpState_616d702d73746174652028414d5034454d41494c29(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-bind'
  });
  return React__default.createElement(AmpState, propsHelper(props));
};

var AmpBindMacro = function AmpBindMacro(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-bind'
  });
  return React__default.createElement('amp-bind-macro', propsHelper(props));
};

AmpBindMacro.propTypes = {
  '[data-account]': PropTypes.any,
  'expression': PropTypes.any.isRequired,
  'id': PropTypes.any.isRequired
};
AmpBindMacro.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d626f64796d6f76696e2d616e696d6174696f6e = function Script_616d702d626f64796d6f76696e2d616e696d6174696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-bodymovin-animation",
    "isCustomTemplate": false
  }));
};

var AmpBodymovinAnimation = function AmpBodymovinAnimation(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-bodymovin-animation'
  });
  return React__default.createElement('amp-bodymovin-animation', propsHelper(props));
};

AmpBodymovinAnimation.propTypes = {
  'loop': PropTypes.any,
  'noautoplay': PropTypes.any,
  'src': PropTypes.any.isRequired
};
AmpBodymovinAnimation.defaultProps = {
  'noautoplay': null
};
AmpBodymovinAnimation.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d627269642d706c61796572 = function Script_616d702d627269642d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-brid-player",
    "isCustomTemplate": false
  }));
};

var AmpBridPlayer = function AmpBridPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-brid-player'
  });
  return React__default.createElement('amp-brid-player', propsHelper(props));
};

AmpBridPlayer.propTypes = {
  'controls': PropTypes.any,
  'data-outstream': PropTypes.any,
  'data-partner': PropTypes.any.isRequired,
  'data-player': PropTypes.any.isRequired,
  'data-playlist': PropTypes.any,
  'data-video': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpBridPlayer.defaultProps = {
  'noloading': null
};
AmpBridPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d627269676874636f7665 = function Script_616d702d627269676874636f7665(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-brightcove",
    "isCustomTemplate": false
  }));
};

var AmpBrightcove = function AmpBrightcove(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-brightcove'
  });
  return React__default.createElement('amp-brightcove', propsHelper(props));
};

AmpBrightcove.propTypes = {
  'data-account': PropTypes.any.isRequired,
  '[data-embed]': PropTypes.any,
  '[data-player]': PropTypes.any,
  '[data-player-id]': PropTypes.any,
  '[data-playlist-id]': PropTypes.any,
  '[data-video-id]': PropTypes.any,
  '[slide]': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpBrightcove.defaultProps = {
  'noloading': null
};
AmpBrightcove.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6279736964652d636f6e74656e74 = function Script_616d702d6279736964652d636f6e74656e74(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-byside-content",
    "isCustomTemplate": false
  }));
};

var AmpBysideContent = function AmpBysideContent(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-byside-content'
  });
  return React__default.createElement('amp-byside-content', propsHelper(props));
};

AmpBysideContent.propTypes = {
  'data-label': PropTypes.any.isRequired,
  'data-webcare-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpBysideContent.defaultProps = {
  'noloading': null
};
AmpBysideContent.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d63616c6c2d747261636b696e67 = function Script_616d702d63616c6c2d747261636b696e67(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-call-tracking",
    "isCustomTemplate": false
  }));
};

var AmpCallTracking = function AmpCallTracking(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-call-tracking'
  });
  return React__default.createElement('amp-call-tracking', propsHelper(props));
};

AmpCallTracking.propTypes = {
  'config': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpCallTracking.defaultProps = {
  'noloading': null
};
AmpCallTracking.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6361726f7573656c = function Script_616d702d6361726f7573656c(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-carousel",
    "isCustomTemplate": false
  }));
};

var AmpCarousel = function AmpCarousel(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-carousel'
  });
  return React__default.createElement('amp-carousel', propsHelper(props));
};

AmpCarousel.propTypes = (_AmpCarousel$propType = {
  'arrows': PropTypes.any,
  'autoplay': PropTypes.any,
  'loop': PropTypes.any,
  'delay': PropTypes.any,
  'dots': PropTypes.any
}, __chunk_1.defineProperty(_AmpCarousel$propType, 'loop', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'type', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'amp-consent extension .json script', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'crossorigin', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'noloading', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'amp-access', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'lightbox-exclude', PropTypes.any), __chunk_1.defineProperty(_AmpCarousel$propType, 'lightbox-thumbnail-id', PropTypes.any), _AmpCarousel$propType);
AmpCarousel.defaultProps = {
  'arrows': null,
  'autoplay': null,
  'dots': null,
  'loop': null,
  'noloading': null,
  'lightbox-exclude': null
};
AmpCarousel.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d636f6e73656e74 = function Script_616d702d636f6e73656e74(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-consent",
    "isCustomTemplate": false
  }));
};

var Script_616d702d636f6e73656e7420657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d636f6e73656e7420657874656e73696f6e202e6a736f6e20736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-consent'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var AmpConsent = function AmpConsent(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-consent'
  });
  return React__default.createElement('amp-consent', propsHelper(props));
};

AmpConsent.propTypes = {
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpConsent.defaultProps = {
  'noloading': null
};
AmpConsent.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6461696c796d6f74696f6e = function Script_616d702d6461696c796d6f74696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-dailymotion",
    "isCustomTemplate": false
  }));
};

var AmpDailymotion = function AmpDailymotion(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-dailymotion'
  });
  return React__default.createElement('amp-dailymotion', propsHelper(props));
};

AmpDailymotion.propTypes = {
  'controls': PropTypes.any,
  'data-endscreen-enable': PropTypes.any,
  'data-info': PropTypes.any,
  'data-mute': PropTypes.any,
  'data-sharing-enable': PropTypes.any,
  'data-start': PropTypes.any,
  'data-ui-highlight': PropTypes.any,
  'data-ui-logo': PropTypes.any,
  'data-videoid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpDailymotion.defaultProps = {
  'noloading': null
};
AmpDailymotion.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d646174652d7069636b6572 = function Script_616d702d646174652d7069636b6572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-date-picker",
    "isCustomTemplate": false
  }));
};

var AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d7374617469635d = function AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d7374617469635d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-date-picker'
  });
  return React__default.createElement('amp-date-picker', propsHelper(props));
};

AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d7374617469635d.propTypes = {
  'mode': PropTypes.any,
  'type': PropTypes.any,
  'allow-blocked-ranges': PropTypes.any,
  'highlighted': PropTypes.any,
  'day-size': PropTypes.any,
  'first-day-of-week': PropTypes.any,
  'glyphref': PropTypes.any,
  'month-format': PropTypes.any,
  '[data-videoid]': PropTypes.any,
  'maxlength': PropTypes.any,
  'minlength': PropTypes.any,
  'week-day-format': PropTypes.any,
  'number-of-months': PropTypes.any,
  'open-after-clear': PropTypes.any,
  'open-after-select': PropTypes.any,
  'src': PropTypes.any,
  'end-input-selector': PropTypes.any,
  '[album]': PropTypes.any,
  'fullscreen': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d7374617469635d.defaultProps = {
  'allow-blocked-ranges': null,
  'open-after-clear': null,
  'open-after-select': null,
  'fullscreen': null,
  'noloading': null
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d7374617469635d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d6f7665726c61795d = function AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d6f7665726c61795d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-date-picker'
  });
  return React__default.createElement('amp-date-picker', propsHelper(props));
};

AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d6f7665726c61795d.propTypes = {
  'mode': PropTypes.any.isRequired,
  'type': PropTypes.any,
  'allow-blocked-ranges': PropTypes.any,
  'highlighted': PropTypes.any,
  'day-size': PropTypes.any,
  'first-day-of-week': PropTypes.any,
  'glyphref': PropTypes.any,
  'month-format': PropTypes.any,
  '[data-videoid]': PropTypes.any,
  'maxlength': PropTypes.any,
  'minlength': PropTypes.any,
  'week-day-format': PropTypes.any,
  'number-of-months': PropTypes.any,
  'open-after-clear': PropTypes.any,
  'open-after-select': PropTypes.any,
  'src': PropTypes.any,
  'end-input-selector': PropTypes.any,
  '[album]': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d6f7665726c61795d.defaultProps = {
  'allow-blocked-ranges': null,
  'open-after-clear': null,
  'open-after-select': null,
  'noloading': null
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d6f7665726c61795d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d7374617469635d = function AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d7374617469635d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-date-picker'
  });
  return React__default.createElement('amp-date-picker', propsHelper(props));
};

AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d7374617469635d.propTypes = {
  'mode': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'allow-blocked-ranges': PropTypes.any,
  'highlighted': PropTypes.any,
  'day-size': PropTypes.any,
  'first-day-of-week': PropTypes.any,
  'glyphref': PropTypes.any,
  'month-format': PropTypes.any,
  '[data-videoid]': PropTypes.any,
  'maxlength': PropTypes.any,
  'minlength': PropTypes.any,
  'week-day-format': PropTypes.any,
  'number-of-months': PropTypes.any,
  'open-after-clear': PropTypes.any,
  'open-after-select': PropTypes.any,
  'src': PropTypes.any,
  'end-input-selector': PropTypes.any,
  'start-input-selector': PropTypes.any,
  'input-selector': PropTypes.any,
  'fullscreen': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d7374617469635d.defaultProps = {
  'allow-blocked-ranges': null,
  'open-after-clear': null,
  'open-after-select': null,
  'fullscreen': null,
  'noloading': null
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d7374617469635d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d6f7665726c61795d = function AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d6f7665726c61795d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-date-picker'
  });
  return React__default.createElement('amp-date-picker', propsHelper(props));
};

AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d6f7665726c61795d.propTypes = {
  'mode': PropTypes.any.isRequired,
  'type': PropTypes.any.isRequired,
  'allow-blocked-ranges': PropTypes.any,
  'highlighted': PropTypes.any,
  'day-size': PropTypes.any,
  'first-day-of-week': PropTypes.any,
  'glyphref': PropTypes.any,
  'month-format': PropTypes.any,
  '[data-videoid]': PropTypes.any,
  'maxlength': PropTypes.any,
  'minlength': PropTypes.any,
  'week-day-format': PropTypes.any,
  'number-of-months': PropTypes.any,
  'open-after-clear': PropTypes.any,
  'open-after-select': PropTypes.any,
  'src': PropTypes.any,
  'end-input-selector': PropTypes.any,
  'start-input-selector': PropTypes.any,
  'input-selector': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d6f7665726c61795d.defaultProps = {
  'allow-blocked-ranges': null,
  'open-after-clear': null,
  'open-after-select': null,
  'noloading': null
};
AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d6f7665726c61795d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d646f63756d656e742d7265636f6d6d656e646174696f6e73 = function Script_616d702d646f63756d656e742d7265636f6d6d656e646174696f6e73(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-document-recommendations",
    "isCustomTemplate": false
  }));
};

var Script_616d702d646f63756d656e742d7265636f6d6d656e646174696f6e7320657874656e73696f6e202e6a736f6e20636f6e66696775726174696f6e = function Script_616d702d646f63756d656e742d7265636f6d6d656e646174696f6e7320657874656e73696f6e202e6a736f6e20636f6e66696775726174696f6e(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-document-recommendations'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var AmpDocumentRecommendations = function AmpDocumentRecommendations(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-document-recommendations'
  });
  return React__default.createElement('amp-document-recommendations', propsHelper(props));
};

AmpDocumentRecommendations.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d64796e616d69632d6373732d636c6173736573 = function Script_616d702d64796e616d69632d6373732d636c6173736573(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-dynamic-css-classes",
    "isCustomTemplate": false
  }));
};

var Script_616d702d6578706572696d656e74 = function Script_616d702d6578706572696d656e74(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-experiment",
    "isCustomTemplate": false
  }));
};

var Script_616d702d6578706572696d656e7420657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d6578706572696d656e7420657874656e73696f6e202e6a736f6e20736372697074(props) {
  return React__default.createElement(Script, propsHelper(props));
};

var AmpExperiment = function AmpExperiment(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-experiment'
  });
  return React__default.createElement('amp-experiment', propsHelper(props));
};

AmpExperiment.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d66616365626f6f6b2d636f6d6d656e7473 = function Script_616d702d66616365626f6f6b2d636f6d6d656e7473(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-facebook-comments",
    "isCustomTemplate": false
  }));
};

var AmpFacebookComments = function AmpFacebookComments(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-facebook-comments'
  });
  return React__default.createElement('amp-facebook-comments', propsHelper(props));
};

AmpFacebookComments.propTypes = {
  'data-href': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFacebookComments.defaultProps = {
  'noloading': null
};
AmpFacebookComments.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d66616365626f6f6b2d6c696b65 = function Script_616d702d66616365626f6f6b2d6c696b65(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-facebook-like",
    "isCustomTemplate": false
  }));
};

var AmpFacebookLike = function AmpFacebookLike(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-facebook-like'
  });
  return React__default.createElement('amp-facebook-like', propsHelper(props));
};

AmpFacebookLike.propTypes = {
  'data-href': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFacebookLike.defaultProps = {
  'noloading': null
};
AmpFacebookLike.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d66616365626f6f6b2d70616765 = function Script_616d702d66616365626f6f6b2d70616765(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-facebook-page",
    "isCustomTemplate": false
  }));
};

var AmpFacebookPage = function AmpFacebookPage(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-facebook-page'
  });
  return React__default.createElement('amp-facebook-page', propsHelper(props));
};

AmpFacebookPage.propTypes = {
  'data-href': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFacebookPage.defaultProps = {
  'noloading': null
};
AmpFacebookPage.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d66616365626f6f6b = function Script_616d702d66616365626f6f6b(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-facebook",
    "isCustomTemplate": false
  }));
};

var AmpFacebook = function AmpFacebook(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-facebook'
  });
  return React__default.createElement('amp-facebook', propsHelper(props));
};

AmpFacebook.propTypes = {
  'data-href': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFacebook.defaultProps = {
  'noloading': null
};
AmpFacebook.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6669742d74657874 = function Script_616d702d6669742d74657874(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-fit-text",
    "isCustomTemplate": false
  }));
};

var AmpFitText = function AmpFitText(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-fit-text'
  });
  return React__default.createElement('amp-fit-text', propsHelper(props));
};

AmpFitText.propTypes = {
  'min-font-size': PropTypes.any,
  'font-style': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFitText.defaultProps = {
  'noloading': null
};
AmpFitText.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d666f6e74 = function Script_616d702d666f6e74(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-font",
    "isCustomTemplate": false
  }));
};

var AmpFont = function AmpFont(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-font'
  });
  return React__default.createElement('amp-font', propsHelper(props));
};

AmpFont.propTypes = {
  'font-family': PropTypes.any.isRequired,
  'font-variant': PropTypes.any,
  'font-weight': PropTypes.any,
  'timeout': PropTypes.any,
  'on-error-add-class': PropTypes.any,
  'on-error-remove-class': PropTypes.any,
  'on-load-add-class': PropTypes.any,
  'on-load-remove-class': PropTypes.any,
  'timeline-event-prefix': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFont.defaultProps = {
  'noloading': null
};
AmpFont.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d666f726d = function Script_616d702d666f726d(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-form",
    "isCustomTemplate": false
  }));
};

var Script_616d702d66782d636f6c6c656374696f6e = function Script_616d702d66782d636f6c6c656374696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-fx-collection",
    "isCustomTemplate": false
  }));
};

var Script_616d702d66782d666c79696e672d636172706574 = function Script_616d702d66782d666c79696e672d636172706574(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-fx-flying-carpet",
    "isCustomTemplate": false
  }));
};

var AmpFxFlyingCarpet = function AmpFxFlyingCarpet(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-fx-flying-carpet'
  });
  return React__default.createElement('amp-fx-flying-carpet', propsHelper(props));
};

AmpFxFlyingCarpet.propTypes = {
  'height': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpFxFlyingCarpet.defaultProps = {
  'noloading': null
};
AmpFxFlyingCarpet.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d676679636174 = function Script_616d702d676679636174(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-gfycat",
    "isCustomTemplate": false
  }));
};

var AmpGfycat = function AmpGfycat(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-gfycat'
  });
  return React__default.createElement('amp-gfycat', propsHelper(props));
};

AmpGfycat.propTypes = {
  'data-gfyid': PropTypes.any.isRequired,
  'noautoplay': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpGfycat.defaultProps = {
  'noautoplay': null,
  'noloading': null
};
AmpGfycat.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d67697374 = function Script_616d702d67697374(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-gist",
    "isCustomTemplate": false
  }));
};

var AmpGist = function AmpGist(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-gist'
  });
  return React__default.createElement('amp-gist', propsHelper(props));
};

AmpGist.propTypes = {
  'data-gistid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpGist.defaultProps = {
  'noloading': null
};
AmpGist.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6777642d616e696d6174696f6e = function Script_616d702d6777642d616e696d6174696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-gwd-animation",
    "isCustomTemplate": false
  }));
};

var AmpGwdAnimation = function AmpGwdAnimation(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-gwd-animation'
  });
  return React__default.createElement('amp-gwd-animation', propsHelper(props));
};

AmpGwdAnimation.propTypes = {
  'allow': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpGwdAnimation.defaultProps = {
  'noloading': null
};
AmpGwdAnimation.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d68756c75 = function Script_616d702d68756c75(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-hulu",
    "isCustomTemplate": false
  }));
};

var AmpHulu = function AmpHulu(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-hulu'
  });
  return React__default.createElement('amp-hulu', propsHelper(props));
};

AmpHulu.propTypes = {
  'data-eid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpHulu.defaultProps = {
  'noloading': null
};
AmpHulu.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d696672616d65 = function Script_616d702d696672616d65(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-iframe",
    "isCustomTemplate": false
  }));
};

var AmpIframe = function AmpIframe(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-iframe'
  });
  return React__default.createElement('amp-iframe', propsHelper(props));
};

AmpIframe.propTypes = {
  'from': PropTypes.any,
  'allowfullscreen': PropTypes.any,
  'allowpaymentrequest': PropTypes.any,
  'allowtransparency': PropTypes.any,
  'frameborder': PropTypes.any,
  'download': PropTypes.any,
  'resizable': PropTypes.any,
  'autoplay': PropTypes.any,
  'scrolling': PropTypes.any,
  'src': PropTypes.any,
  'srcdoc': PropTypes.any,
  '[src]': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpIframe.defaultProps = {
  'allowfullscreen': null,
  'allowpaymentrequest': null,
  'allowtransparency': null,
  'resizable': null,
  'noloading': null
};
AmpIframe.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d696d612d766964656f = function Script_616d702d696d612d766964656f(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-ima-video",
    "isCustomTemplate": false
  }));
};

var AmpImaVideo = function AmpImaVideo(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ima-video'
  });
  return React__default.createElement('amp-ima-video', propsHelper(props));
};

AmpImaVideo.propTypes = {
  'autoplay': PropTypes.any,
  'data-src': PropTypes.any,
  'data-tag': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpImaVideo.defaultProps = {
  'autoplay': null,
  'noloading': null
};
AmpImaVideo.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d696d6167652d6c69676874626f78 = function Script_616d702d696d6167652d6c69676874626f78(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-image-lightbox",
    "isCustomTemplate": false
  }));
};

var Script_5343524950545b637573746f6d2d656c656d656e743d616d702d696d6167652d6c69676874626f785d2028414d5034454d41494c29 = function Script_5343524950545b637573746f6d2d656c656d656e743d616d702d696d6167652d6c69676874626f785d2028414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-image-lightbox",
    "isCustomTemplate": false
  }));
};

var AmpImageLightbox = function AmpImageLightbox(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-image-lightbox'
  });
  return React__default.createElement('amp-image-lightbox', propsHelper(props));
};

AmpImageLightbox.propTypes = {
  'loop': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpImageLightbox.defaultProps = {
  'noloading': null
};
AmpImageLightbox.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d696d677572 = function Script_616d702d696d677572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-imgur",
    "isCustomTemplate": false
  }));
};

var AmpImgur = function AmpImgur(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-imgur'
  });
  return React__default.createElement('amp-imgur', propsHelper(props));
};

AmpImgur.propTypes = {
  'data-imgur-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpImgur.defaultProps = {
  'noloading': null
};
AmpImgur.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d696e7374616772616d = function Script_616d702d696e7374616772616d(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-instagram",
    "isCustomTemplate": false
  }));
};

var AmpInstagram = function AmpInstagram(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-instagram'
  });
  return React__default.createElement('amp-instagram', propsHelper(props));
};

AmpInstagram.propTypes = {
  'ismap': PropTypes.any,
  'data-shortcode': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpInstagram.defaultProps = {
  'noloading': null
};
AmpInstagram.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d696e7374616c6c2d73657276696365776f726b6572 = function Script_616d702d696e7374616c6c2d73657276696365776f726b6572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-install-serviceworker",
    "isCustomTemplate": false
  }));
};

var AmpInstallServiceworker = function AmpInstallServiceworker(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-install-serviceworker'
  });
  return React__default.createElement('amp-install-serviceworker', propsHelper(props));
};

AmpInstallServiceworker.propTypes = {
  'src': PropTypes.any.isRequired,
  'data-iframe-src': PropTypes.any
};
AmpInstallServiceworker.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d697a6c6573656e65 = function Script_616d702d697a6c6573656e65(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-izlesene",
    "isCustomTemplate": false
  }));
};

var AmpIzlesene = function AmpIzlesene(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-izlesene'
  });
  return React__default.createElement('amp-izlesene', propsHelper(props));
};

AmpIzlesene.propTypes = {
  'data-videoid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpIzlesene.defaultProps = {
  'noloading': null
};
AmpIzlesene.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6a77706c61796572 = function Script_616d702d6a77706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-jwplayer",
    "isCustomTemplate": false
  }));
};

var AmpJwplayer = function AmpJwplayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-jwplayer'
  });
  return React__default.createElement('amp-jwplayer', propsHelper(props));
};

AmpJwplayer.propTypes = {
  'data-media-id': PropTypes.any,
  'data-player-id': PropTypes.any.isRequired,
  'data-playlist-id': PropTypes.any
};
AmpJwplayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6b616c747572612d706c61796572 = function Script_616d702d6b616c747572612d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-kaltura-player",
    "isCustomTemplate": false
  }));
};

var AmpKalturaPlayer = function AmpKalturaPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-kaltura-player'
  });
  return React__default.createElement('amp-kaltura-player', propsHelper(props));
};

AmpKalturaPlayer.propTypes = {
  'data-partner': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpKalturaPlayer.defaultProps = {
  'noloading': null
};
AmpKalturaPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6c69676874626f782d67616c6c657279 = function Script_616d702d6c69676874626f782d67616c6c657279(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-lightbox-gallery",
    "isCustomTemplate": false
  }));
};

var Script_616d702d6c69676874626f78 = function Script_616d702d6c69676874626f78(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-lightbox",
    "isCustomTemplate": false
  }));
};

var Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6c69676874626f785d2028414d5034454d41494c29 = function Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6c69676874626f785d2028414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-lightbox",
    "isCustomTemplate": false
  }));
};

var AmpLightbox = function AmpLightbox(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-lightbox'
  });
  return React__default.createElement('amp-lightbox', propsHelper(props));
};

AmpLightbox.propTypes = {
  'loop': PropTypes.any,
  'scrollable': PropTypes.any,
  'credentials': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpLightbox.defaultProps = {
  'noloading': null
};
AmpLightbox.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6c697374 = function Script_616d702d6c697374(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-list",
    "isCustomTemplate": false
  }));
};

var Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6c6973745d2028414d5034454d41494c29 = function Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6c6973745d2028414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-list",
    "isCustomTemplate": false
  }));
};

var AmpList_64656661756c74 = function AmpList_64656661756c74(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-list'
  });
  return React__default.createElement('amp-list', propsHelper(props));
};

AmpList_64656661756c74.propTypes = (_AmpList_64656661756c = {
  'items': PropTypes.any,
  'max-items': PropTypes.any,
  'single-item': PropTypes.any,
  'reset-on-refresh': PropTypes.any,
  '[state]': PropTypes.any,
  'src': PropTypes.any.isRequired,
  'amp-animation extension .json script': PropTypes.any,
  '[type]': PropTypes.any
}, __chunk_1.defineProperty(_AmpList_64656661756c, '[state]', PropTypes.any), __chunk_1.defineProperty(_AmpList_64656661756c, 'crossorigin', PropTypes.any), __chunk_1.defineProperty(_AmpList_64656661756c, 'noloading', PropTypes.any), _AmpList_64656661756c);
AmpList_64656661756c74.defaultProps = {
  'reset-on-refresh': null,
  'noloading': null
};
AmpList_64656661756c74.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpList_414d502d4c495354205b5352435d = function AmpList_414d502d4c495354205b5352435d(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-list'
  });
  return React__default.createElement('amp-list', propsHelper(props));
};

AmpList_414d502d4c495354205b5352435d.propTypes = {
  'items': PropTypes.any,
  'max-items': PropTypes.any,
  'single-item': PropTypes.any,
  '[state]': PropTypes.any,
  'src': PropTypes.any,
  'amp-animation extension .json script': PropTypes.any,
  '[src]': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpList_414d502d4c495354205b5352435d.defaultProps = {
  'noloading': null
};
AmpList_414d502d4c495354205b5352435d.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpList_414d502d4c4953542028414d5034454d41494c29 = function AmpList_414d502d4c4953542028414d5034454d41494c29(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-list'
  });
  return React__default.createElement('amp-list', propsHelper(props));
};

AmpList_414d502d4c4953542028414d5034454d41494c29.propTypes = {
  'src': PropTypes.any.isRequired,
  'max-items': PropTypes.any,
  'single-item': PropTypes.any,
  '[state]': PropTypes.any,
  'amp-animation extension .json script': PropTypes.any,
  'data-update-time': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpList_414d502d4c4953542028414d5034454d41494c29.defaultProps = {
  'noloading': null
};
AmpList_414d502d4c4953542028414d5034454d41494c29.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6c6976652d6c697374 = function Script_616d702d6c6976652d6c697374(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-live-list",
    "isCustomTemplate": false
  }));
};

var AmpLiveList = function AmpLiveList(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-live-list'
  });
  return React__default.createElement('amp-live-list', propsHelper(props));
};

AmpLiveList.propTypes = {
  'data-max-items-per-page': PropTypes.any.isRequired,
  'data-poll-interval': PropTypes.any,
  'disabled': PropTypes.any,
  'id': PropTypes.any.isRequired,
  'sort': PropTypes.any
};
AmpLiveList.defaultProps = {
  'disabled': null
};
AmpLiveList.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6d6174686d6c = function Script_616d702d6d6174686d6c(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-mathml",
    "isCustomTemplate": false
  }));
};

var AmpMathml = function AmpMathml(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-mathml'
  });
  return React__default.createElement('amp-mathml', propsHelper(props));
};

AmpMathml.propTypes = {
  'data-formula': PropTypes.any.isRequired,
  'target': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpMathml.defaultProps = {
  'noloading': null
};
AmpMathml.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6d75737461636865 = function Script_616d702d6d75737461636865(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-mustache",
    "isCustomTemplate": true
  }));
};

var Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6d757374616368655d2028414d50344144532f414d5034454d41494c29 = function Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6d757374616368655d2028414d50344144532f414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-mustache",
    "isCustomTemplate": true
  }));
};

var Template_64656661756c74 = function Template_64656661756c74(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-mustache'
  });
  return React__default.createElement('template', propsHelper(props));
};

Template_64656661756c74.propTypes = {
  'type': PropTypes.any.isRequired
};
Template_64656661756c74.defaultProps = {
  'type': 'amp-mustache'
};
Template_64656661756c74.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6e65787874762d706c61796572 = function Script_616d702d6e65787874762d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-nexxtv-player",
    "isCustomTemplate": false
  }));
};

var AmpNexxtvPlayer = function AmpNexxtvPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-nexxtv-player'
  });
  return React__default.createElement('amp-nexxtv-player', propsHelper(props));
};

AmpNexxtvPlayer.propTypes = {
  'data-client': PropTypes.any.isRequired,
  'data-mediaid': PropTypes.any.isRequired,
  'data-mode': PropTypes.any,
  'data-origin': PropTypes.any,
  'data-streamtype': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpNexxtvPlayer.defaultProps = {
  'noloading': null
};
AmpNexxtvPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6f322d706c61796572 = function Script_616d702d6f322d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-o2-player",
    "isCustomTemplate": false
  }));
};

var AmpO2Player = function AmpO2Player(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-o2-player'
  });
  return React__default.createElement('amp-o2-player', propsHelper(props));
};

AmpO2Player.propTypes = {
  'data-bcid': PropTypes.any.isRequired,
  'data-pid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpO2Player.defaultProps = {
  'noloading': null
};
AmpO2Player.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d6f6f79616c612d706c61796572 = function Script_616d702d6f6f79616c612d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-ooyala-player",
    "isCustomTemplate": false
  }));
};

var AmpOoyalaPlayer = function AmpOoyalaPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-ooyala-player'
  });
  return React__default.createElement('amp-ooyala-player', propsHelper(props));
};

AmpOoyalaPlayer.propTypes = {
  'data-embedcode': PropTypes.any.isRequired,
  'data-pcode': PropTypes.any.isRequired,
  'data-playerid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpOoyalaPlayer.defaultProps = {
  'noloading': null
};
AmpOoyalaPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d70696e746572657374 = function Script_616d702d70696e746572657374(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-pinterest",
    "isCustomTemplate": false
  }));
};

var AmpPinterest = function AmpPinterest(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-pinterest'
  });
  return React__default.createElement('amp-pinterest', propsHelper(props));
};

AmpPinterest.propTypes = {
  'data-do': PropTypes.any.isRequired,
  'ismap': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpPinterest.defaultProps = {
  'noloading': null
};
AmpPinterest.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d706c617962757a7a = function Script_616d702d706c617962757a7a(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-playbuzz",
    "isCustomTemplate": false
  }));
};

var AmpPlaybuzz = function AmpPlaybuzz(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-playbuzz'
  });
  return React__default.createElement('amp-playbuzz', propsHelper(props));
};

AmpPlaybuzz.propTypes = {
  'src': PropTypes.any,
  'data-item': PropTypes.any,
  'data-item-info': PropTypes.any,
  'data-share-buttons': PropTypes.any,
  'data-comments': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpPlaybuzz.defaultProps = {
  'noloading': null
};
AmpPlaybuzz.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d706f736974696f6e2d6f62736572766572 = function Script_616d702d706f736974696f6e2d6f62736572766572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-position-observer",
    "isCustomTemplate": false
  }));
};

var AmpPositionObserver = function AmpPositionObserver(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-position-observer'
  });
  return React__default.createElement('amp-position-observer', propsHelper(props));
};

AmpPositionObserver.propTypes = {
  'intersection-ratios': PropTypes.any,
  'amp-story-page': PropTypes.any,
  'viewport-margins': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpPositionObserver.defaultProps = {
  'noloading': null
};
AmpPositionObserver.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d72656163682d706c61796572 = function Script_616d702d72656163682d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-reach-player",
    "isCustomTemplate": false
  }));
};

var AmpReachPlayer = function AmpReachPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-reach-player'
  });
  return React__default.createElement('amp-reach-player', propsHelper(props));
};

AmpReachPlayer.propTypes = {
  'data-embed-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpReachPlayer.defaultProps = {
  'noloading': null
};
AmpReachPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d726564646974 = function Script_616d702d726564646974(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-reddit",
    "isCustomTemplate": false
  }));
};

var AmpReddit = function AmpReddit(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-reddit'
  });
  return React__default.createElement('amp-reddit', propsHelper(props));
};

AmpReddit.propTypes = {
  'data-embedlive': PropTypes.any,
  'data-embedparent': PropTypes.any,
  'data-embedtype': PropTypes.any.isRequired,
  'data-src': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpReddit.defaultProps = {
  'noloading': null
};
AmpReddit.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d726964646c652d7175697a = function Script_616d702d726964646c652d7175697a(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-riddle-quiz",
    "isCustomTemplate": false
  }));
};

var AmpRiddleQuiz = function AmpRiddleQuiz(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-riddle-quiz'
  });
  return React__default.createElement('amp-riddle-quiz', propsHelper(props));
};

AmpRiddleQuiz.propTypes = {
  'data-riddle-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpRiddleQuiz.defaultProps = {
  'noloading': null
};
AmpRiddleQuiz.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d73656c6563746f72 = function Script_616d702d73656c6563746f72(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-selector",
    "isCustomTemplate": false
  }));
};

var Script_5343524950545b637573746f6d2d656c656d656e743d616d702d73656c6563746f725d2028414d5034454d41494c29 = function Script_5343524950545b637573746f6d2d656c656d656e743d616d702d73656c6563746f725d2028414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-selector",
    "isCustomTemplate": false
  }));
};

var AmpSelector = function AmpSelector(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-selector'
  });
  return React__default.createElement('amp-selector', propsHelper(props));
};

AmpSelector.propTypes = {
  'disabled': PropTypes.any,
  'high': PropTypes.any,
  'keyboard-select-mode': PropTypes.any,
  'multiple': PropTypes.any,
  '[height]': PropTypes.any,
  'cols': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'name': PropTypes.any
};
AmpSelector.defaultProps = {
  'disabled': null,
  'multiple': null,
  'noloading': null
};
AmpSelector.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d73696465626172 = function Script_616d702d73696465626172(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-sidebar",
    "isCustomTemplate": false
  }));
};

var Script_5343524950545b637573746f6d2d656c656d656e743d616d702d736964656261725d2028414d5034454d41494c29 = function Script_5343524950545b637573746f6d2d656c656d656e743d616d702d736964656261725d2028414d5034454d41494c29(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-sidebar",
    "isCustomTemplate": false
  }));
};

var AmpSidebar = function AmpSidebar(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-sidebar'
  });
  return React__default.createElement('amp-sidebar', propsHelper(props));
};

AmpSidebar.propTypes = {
  'side': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpSidebar.defaultProps = {
  'noloading': null
};
AmpSidebar.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Nav_616d702d73696465626172203e206e6176 = function Nav_616d702d73696465626172203e206e6176(props) {
  return React__default.createElement('nav', propsHelper(props));
};

Nav_616d702d73696465626172203e206e6176.propTypes = {
  'toolbar': PropTypes.any.isRequired,
  'toolbar-target': PropTypes.any.isRequired
};

var Script_616d702d736c69646573 = function Script_616d702d736c69646573(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-slides",
    "isCustomTemplate": false
  }));
};

var Script_616d702d736f6369616c2d7368617265 = function Script_616d702d736f6369616c2d7368617265(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-social-share",
    "isCustomTemplate": false
  }));
};

var AmpSocialShare = function AmpSocialShare(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-social-share'
  });
  return React__default.createElement('amp-social-share', propsHelper(props));
};

AmpSocialShare.propTypes = {
  'data-share-endpoint': PropTypes.any,
  'type': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpSocialShare.defaultProps = {
  'noloading': null
};
AmpSocialShare.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d736f756e64636c6f7564 = function Script_616d702d736f756e64636c6f7564(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-soundcloud",
    "isCustomTemplate": false
  }));
};

var AmpSoundcloud = function AmpSoundcloud(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-soundcloud'
  });
  return React__default.createElement('amp-soundcloud', propsHelper(props));
};

AmpSoundcloud.propTypes = {
  'data-color': PropTypes.any,
  'data-playlistid': PropTypes.any,
  'data-secret-token': PropTypes.any,
  'data-trackid': PropTypes.any,
  'data-visual': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpSoundcloud.defaultProps = {
  'noloading': null
};
AmpSoundcloud.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d737072696e67626f6172642d706c61796572 = function Script_616d702d737072696e67626f6172642d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-springboard-player",
    "isCustomTemplate": false
  }));
};

var AmpSpringboardPlayer = function AmpSpringboardPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-springboard-player'
  });
  return React__default.createElement('amp-springboard-player', propsHelper(props));
};

AmpSpringboardPlayer.propTypes = {
  'data-content-id': PropTypes.any.isRequired,
  'data-domain': PropTypes.any.isRequired,
  'data-items': PropTypes.any.isRequired,
  'data-mode': PropTypes.any.isRequired,
  'data-player-id': PropTypes.any.isRequired,
  'data-site-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpSpringboardPlayer.defaultProps = {
  'noloading': null
};
AmpSpringboardPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d737469636b792d6164 = function Script_616d702d737469636b792d6164(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-sticky-ad",
    "isCustomTemplate": false
  }));
};

var AmpStickyAd = function AmpStickyAd(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-sticky-ad'
  });
  return React__default.createElement('amp-sticky-ad', propsHelper(props));
};

AmpStickyAd.propTypes = {
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpStickyAd.defaultProps = {
  'noloading': null
};
AmpStickyAd.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d73746f72792d6175746f2d616473 = function Script_616d702d73746f72792d6175746f2d616473(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-story-auto-ads",
    "isCustomTemplate": false
  }));
};

var AmpStoryAutoAds = function AmpStoryAutoAds(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-story-auto-ads'
  });
  return React__default.createElement('amp-story-auto-ads', propsHelper(props));
};

AmpStoryAutoAds.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d73746f72792d6175746f2d61647320636f6e66696720736372697074 = function Script_616d702d73746f72792d6175746f2d61647320636f6e66696720736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-story-auto-ads'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var Template_616d702d73746f72792d6175746f2d616473203e2074656d706c617465 = function Template_616d702d73746f72792d6175746f2d616473203e2074656d706c617465(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-mustache'
  });
  return React__default.createElement('template', propsHelper(props));
};

Template_616d702d73746f72792d6175746f2d616473203e2074656d706c617465.propTypes = {
  'type': PropTypes.any.isRequired
};
Template_616d702d73746f72792d6175746f2d616473203e2074656d706c617465.defaultProps = {
  'type': 'amp-mustache'
};
Template_616d702d73746f72792d6175746f2d616473203e2074656d706c617465.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d73746f7279 = function Script_616d702d73746f7279(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-story",
    "isCustomTemplate": false
  }));
};

var AmpStory = function AmpStory(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-story'
  });
  return React__default.createElement('amp-story', propsHelper(props));
};

AmpStory.propTypes = {
  'standalone': PropTypes.any.isRequired,
  'bookend-config-src': PropTypes.any,
  'background-audio': PropTypes.any
};
AmpStory.defaultProps = {
  'standalone': ''
};
AmpStory.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpStoryPage = function AmpStoryPage(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-story'
  });
  return React__default.createElement('amp-story-page', propsHelper(props));
};

AmpStoryPage.propTypes = {
  'id': PropTypes.any.isRequired,
  'grid-area': PropTypes.any,
  'background-audio': PropTypes.any
};
AmpStoryPage.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpStoryGridLayer = function AmpStoryGridLayer(props) {
  return React__default.createElement('amp-story-grid-layer', propsHelper(props));
};

AmpStoryGridLayer.propTypes = {
  'template': PropTypes.any.isRequired
};

var AmpStoryCtaLayer = function AmpStoryCtaLayer(props) {
  return React__default.createElement('amp-story-cta-layer', propsHelper(props));
};

var Script_616d702d737562736372697074696f6e73 = function Script_616d702d737562736372697074696f6e73(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-subscriptions",
    "isCustomTemplate": false
  }));
};

var Script_616d702d737562736372697074696f6e7320657874656e73696f6e202e6a736f6e20736372697074 = function Script_616d702d737562736372697074696f6e7320657874656e73696f6e202e6a736f6e20736372697074(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-subscriptions'
  });
  return React__default.createElement(Script, propsHelper(props));
};

var Script_616d702d737562736372697074696f6e732d676f6f676c65 = function Script_616d702d737562736372697074696f6e732d676f6f676c65(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-subscriptions'
  });
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-subscriptions-google",
    "isCustomTemplate": false
  }));
};

var Script_616d702d74696d6561676f = function Script_616d702d74696d6561676f(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-timeago",
    "isCustomTemplate": false
  }));
};

var AmpTimeago = function AmpTimeago(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-timeago'
  });
  return React__default.createElement('amp-timeago', propsHelper(props));
};

AmpTimeago.propTypes = {
  'cutoff': PropTypes.any,
  'datetime': PropTypes.any.isRequired,
  '[data-videoid]': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpTimeago.defaultProps = {
  'noloading': null
};
AmpTimeago.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d74776974746572 = function Script_616d702d74776974746572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-twitter",
    "isCustomTemplate": false
  }));
};

var AmpTwitter = function AmpTwitter(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-twitter'
  });
  return React__default.createElement('amp-twitter', propsHelper(props));
};

AmpTwitter.propTypes = {
  'data-tweetid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpTwitter.defaultProps = {
  'noloading': null
};
AmpTwitter.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d757365722d6e6f74696669636174696f6e = function Script_616d702d757365722d6e6f74696669636174696f6e(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-user-notification",
    "isCustomTemplate": false
  }));
};

var AmpUserNotification = function AmpUserNotification(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-user-notification'
  });
  return React__default.createElement('amp-user-notification', propsHelper(props));
};

AmpUserNotification.propTypes = {
  'data-dismiss-href': PropTypes.any,
  'data-show-if-href': PropTypes.any,
  'enctype': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpUserNotification.defaultProps = {
  'enctype': null,
  'noloading': null
};
AmpUserNotification.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d766964656f20657874656e73696f6e202e6a7320736372697074 = function Script_616d702d766964656f20657874656e73696f6e202e6a7320736372697074(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-video",
    "isCustomTemplate": false
  }));
};

var AmpVideo_64656661756c74 = function AmpVideo_64656661756c74(props) {
  return React__default.createElement('amp-video', propsHelper(props));
};

AmpVideo_64656661756c74.propTypes = (_AmpVideo_ = {
  'preload': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'artist': PropTypes.any,
  'ismap': PropTypes.any,
  'artwork': PropTypes.any,
  'controlslist': PropTypes.any,
  '[alt]': PropTypes.any,
  'autoplay': PropTypes.any,
  'controls': PropTypes.any,
  'blocked': PropTypes.any,
  'integrity': PropTypes.any,
  'disableremoteplayback': PropTypes.any,
  'loop': PropTypes.any,
  'muted': PropTypes.any,
  'readonly': PropTypes.any
}, __chunk_1.defineProperty(_AmpVideo_, 'preload', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, 'src', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[artist]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[attribution]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[artwork]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[controls]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[srcset]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[controlslist]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[loop]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[poster]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[preload]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[title]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, '[type]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, 'amp-access', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, 'lightbox-exclude', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_, 'lightbox-thumbnail-id', PropTypes.any), _AmpVideo_);
AmpVideo_64656661756c74.defaultProps = {
  'noloading': null,
  'autoplay': null,
  'controls': null,
  'disableremoteplayback': null,
  'loop': null,
  'muted': null,
  'lightbox-exclude': null
};

var AmpVideo_616d702d73746f7279203e3e20616d702d766964656f = function AmpVideo_616d702d73746f7279203e3e20616d702d766964656f(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-video'
  });
  return React__default.createElement('amp-video', propsHelper(props));
};

AmpVideo_616d702d73746f7279203e3e20616d702d766964656f.propTypes = (_AmpVideo_616d702d = {
  'autoplay': PropTypes.any.isRequired,
  'poster': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'artist': PropTypes.any,
  'ismap': PropTypes.any,
  'artwork': PropTypes.any,
  'controlslist': PropTypes.any,
  '[alt]': PropTypes.any
}, __chunk_1.defineProperty(_AmpVideo_616d702d, 'autoplay', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'controls', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'blocked', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'integrity', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'disableremoteplayback', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'loop', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'muted', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'readonly', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'preload', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, 'src', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[artist]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[attribution]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[artwork]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[controls]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[srcset]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[controlslist]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[loop]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[poster]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[preload]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[title]', PropTypes.any), __chunk_1.defineProperty(_AmpVideo_616d702d, '[type]', PropTypes.any), _AmpVideo_616d702d);
AmpVideo_616d702d73746f7279203e3e20616d702d766964656f.defaultProps = (_AmpVideo_616d702d2 = {
  'autoplay': '',
  'noloading': null
}, __chunk_1.defineProperty(_AmpVideo_616d702d2, 'autoplay', null), __chunk_1.defineProperty(_AmpVideo_616d702d2, 'controls', null), __chunk_1.defineProperty(_AmpVideo_616d702d2, 'disableremoteplayback', null), __chunk_1.defineProperty(_AmpVideo_616d702d2, 'loop', null), __chunk_1.defineProperty(_AmpVideo_616d702d2, 'muted', null), _AmpVideo_616d702d2);
AmpVideo_616d702d73746f7279203e3e20616d702d766964656f.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d76696d656f = function Script_616d702d76696d656f(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-vimeo",
    "isCustomTemplate": false
  }));
};

var AmpVimeo = function AmpVimeo(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-vimeo'
  });
  return React__default.createElement('amp-vimeo', propsHelper(props));
};

AmpVimeo.propTypes = {
  'data-videoid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpVimeo.defaultProps = {
  'noloading': null
};
AmpVimeo.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d76696e65 = function Script_616d702d76696e65(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-vine",
    "isCustomTemplate": false
  }));
};

var AmpVine = function AmpVine(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-vine'
  });
  return React__default.createElement('amp-vine', propsHelper(props));
};

AmpVine.propTypes = {
  'data-vineid': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpVine.defaultProps = {
  'noloading': null
};
AmpVine.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d766b = function Script_616d702d766b(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-vk",
    "isCustomTemplate": false
  }));
};

var AmpVk = function AmpVk(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-vk'
  });
  return React__default.createElement('amp-vk', propsHelper(props));
};

AmpVk.propTypes = {
  'data-embedtype': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpVk.defaultProps = {
  'noloading': null
};
AmpVk.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d7765622d70757368 = function Script_616d702d7765622d70757368(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-web-push",
    "isCustomTemplate": false
  }));
};

var AmpWebPush = function AmpWebPush(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-web-push'
  });
  return React__default.createElement('amp-web-push', propsHelper(props));
};

AmpWebPush.propTypes = {
  'helper-iframe-url': PropTypes.any.isRequired,
  'id': PropTypes.any.isRequired,
  'permission-dialog-url': PropTypes.any.isRequired,
  'service-worker-url': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpWebPush.defaultProps = {
  'noloading': null
};
AmpWebPush.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var AmpWebPushWidget = function AmpWebPushWidget(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-web-push'
  });
  return React__default.createElement('amp-web-push-widget', propsHelper(props));
};

AmpWebPushWidget.propTypes = {
  'visibility': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpWebPushWidget.defaultProps = {
  'noloading': null
};
AmpWebPushWidget.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d7769737469612d706c61796572 = function Script_616d702d7769737469612d706c61796572(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-wistia-player",
    "isCustomTemplate": false
  }));
};

var AmpWistiaPlayer = function AmpWistiaPlayer(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-wistia-player'
  });
  return React__default.createElement('amp-wistia-player', propsHelper(props));
};

AmpWistiaPlayer.propTypes = {
  'data-media-hashed-id': PropTypes.any.isRequired,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any
};
AmpWistiaPlayer.defaultProps = {
  'noloading': null
};
AmpWistiaPlayer.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Script_616d702d796f7574756265 = function Script_616d702d796f7574756265(props) {
  return React__default.createElement(Script, propsHelper(props, {
    "extension": "amp-youtube",
    "isCustomTemplate": false
  }));
};

var AmpYoutube = function AmpYoutube(props, context) {
  __chunk_2.contextHelper({
    context: context,
    extension: 'amp-youtube'
  });
  return React__default.createElement('amp-youtube', propsHelper(props));
};

AmpYoutube.propTypes = {
  'controls': PropTypes.any,
  'credentials': PropTypes.any,
  'data-live-channelid': PropTypes.any,
  'data-videoid': PropTypes.any,
  '(_blank|_self|_top)': PropTypes.any,
  'crossorigin': PropTypes.any,
  'noloading': PropTypes.any,
  'amp-access': PropTypes.any,
  'lightbox-exclude': PropTypes.any,
  'lightbox-thumbnail-id': PropTypes.any
};
AmpYoutube.defaultProps = {
  'noloading': null,
  'lightbox-exclude': null
};
AmpYoutube.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

var Html = function Html(props) {
  if (props.specName === 'html ⚡ for top-level html') {
    return React__default.createElement(Html_68746d6c20e29aa120666f7220746f702d6c6576656c2068746d6c, props);
  }

  if (props.specName === 'html ⚡4ads for top-level html') {
    return React__default.createElement(Html_68746d6c20e29aa13461647320666f7220746f702d6c6576656c2068746d6c, props);
  }

  if (props.specName === 'html ⚡4email for top-level html') {
    return React__default.createElement(Html_68746d6c20e29aa134656d61696c20666f7220746f702d6c6576656c2068746d6c, props);
  }
  return null;
};

Html.propTypes = {
  specName: PropTypes.oneOf(["html ⚡ for top-level html", "html ⚡4ads for top-level html", "html ⚡4email for top-level html"]).isRequired
};

var Title = function Title(props) {
  if (props.specName === 'title') {
    return React__default.createElement(Title_7469746c65, props);
  }

  if (props.specName === 'svg title') {
    return React__default.createElement(Title_737667207469746c65, props);
  }
  return null;
};

Title.propTypes = {
  specName: PropTypes.oneOf(["title", "svg title"]).isRequired
};

var Link = function Link(props) {
  if (props.specName === 'link rel=') {
    return React__default.createElement(Link_6c696e6b2072656c3d, props);
  }

  if (props.specName === 'link rel=canonical') {
    return React__default.createElement(Link_6c696e6b2072656c3d63616e6f6e6963616c, props);
  }

  if (props.specName === 'link rel=manifest') {
    return React__default.createElement(Link_6c696e6b2072656c3d6d616e6966657374, props);
  }

  if (props.specName === 'link rel=preload') {
    return React__default.createElement(Link_6c696e6b2072656c3d7072656c6f6164, props);
  }

  if (props.specName === 'link rel=stylesheet for fonts') {
    return React__default.createElement(Link_6c696e6b2072656c3d7374796c65736865657420666f7220666f6e7473, props);
  }

  if (props.specName === 'link itemprop=sameAs') {
    return React__default.createElement(Link_6c696e6b206974656d70726f703d73616d654173, props);
  }

  if (props.specName === 'link itemprop=') {
    return React__default.createElement(Link_6c696e6b206974656d70726f703d, props);
  }

  if (props.specName === 'link property=') {
    return React__default.createElement(Link_6c696e6b2070726f70657274793d, props);
  }
  return null;
};

Link.propTypes = {
  specName: PropTypes.oneOf(["link rel=", "link rel=canonical", "link rel=manifest", "link rel=preload", "link rel=stylesheet for fonts", "link itemprop=sameAs", "link itemprop=", "link property="]).isRequired
};

var Meta = function Meta(props) {
  if (props.specName === 'meta charset=utf-8') {
    return React__default.createElement(Meta_6d65746120636861727365743d7574662d38, props);
  }

  if (props.specName === 'meta name=viewport') {
    return React__default.createElement(Meta_6d657461206e616d653d76696577706f7274, props);
  }

  if (props.specName === 'meta http-equiv=X-UA-Compatible') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d582d55412d436f6d70617469626c65, props);
  }

  if (props.specName === 'meta name=apple-itunes-app') {
    return React__default.createElement(Meta_6d657461206e616d653d6170706c652d6974756e65732d617070, props);
  }

  if (props.specName === 'meta name=amp-experiments-opt-in') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d6578706572696d656e74732d6f70742d696e, props);
  }

  if (props.specName === 'meta name=amp-3p-iframe-src') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d33702d696672616d652d737263, props);
  }

  if (props.specName === 'meta name=amp-experiment-token') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d6578706572696d656e742d746f6b656e, props);
  }

  if (props.specName === 'meta name=amp-link-variable-allowed-origin') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d6c696e6b2d7661726961626c652d616c6c6f7765642d6f726967696e, props);
  }

  if (props.specName === 'meta name=amp-google-clientid-id-api') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d676f6f676c652d636c69656e7469642d69642d617069, props);
  }

  if (props.specName === 'meta name=amp-ad-doubleclick-sra') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d61642d646f75626c65636c69636b2d737261, props);
  }

  if (props.specName === 'meta name=amp4ads-id') {
    return React__default.createElement(Meta_6d657461206e616d653d616d70346164732d6964, props);
  }

  if (props.specName === 'meta name= and content=') {
    return React__default.createElement(Meta_6d657461206e616d653d20616e6420636f6e74656e743d, props);
  }

  if (props.specName === 'meta http-equiv=Content-Type') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d436f6e74656e742d54797065, props);
  }

  if (props.specName === 'meta http-equiv=content-language') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d636f6e74656e742d6c616e6775616765, props);
  }

  if (props.specName === 'meta http-equiv=pics-label') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d706963732d6c6162656c, props);
  }

  if (props.specName === 'meta http-equiv=imagetoolbar') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d696d616765746f6f6c626172, props);
  }

  if (props.specName === 'meta http-equiv=Content-Style-Type') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d436f6e74656e742d5374796c652d54797065, props);
  }

  if (props.specName === 'meta http-equiv=Content-Script-Type') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d436f6e74656e742d5363726970742d54797065, props);
  }

  if (props.specName === 'meta http-equiv=origin-trial') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d6f726967696e2d747269616c, props);
  }

  if (props.specName === 'meta http-equiv=resource-type') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d7265736f757263652d74797065, props);
  }

  if (props.specName === 'meta http-equiv=x-dns-prefetch-control') {
    return React__default.createElement(Meta_6d65746120687474702d65717569763d782d646e732d70726566657463682d636f6e74726f6c, props);
  }

  if (props.specName === 'meta name=amp-ad-enable-refresh') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d61642d656e61626c652d72656672657368, props);
  }

  if (props.specName === 'meta name=amp-to-amp-navigation') {
    return React__default.createElement(Meta_6d657461206e616d653d616d702d746f2d616d702d6e617669676174696f6e, props);
  }
  return null;
};

Meta.propTypes = {
  specName: PropTypes.oneOf(["meta charset=utf-8", "meta name=viewport", "meta http-equiv=X-UA-Compatible", "meta name=apple-itunes-app", "meta name=amp-experiments-opt-in", "meta name=amp-3p-iframe-src", "meta name=amp-experiment-token", "meta name=amp-link-variable-allowed-origin", "meta name=amp-google-clientid-id-api", "meta name=amp-ad-doubleclick-sra", "meta name=amp4ads-id", "meta name= and content=", "meta http-equiv=Content-Type", "meta http-equiv=content-language", "meta http-equiv=pics-label", "meta http-equiv=imagetoolbar", "meta http-equiv=Content-Style-Type", "meta http-equiv=Content-Script-Type", "meta http-equiv=origin-trial", "meta http-equiv=resource-type", "meta http-equiv=x-dns-prefetch-control", "meta name=amp-ad-enable-refresh", "meta name=amp-to-amp-navigation"]).isRequired
};

var Style = function Style(props) {
  if (props.specName === 'style amp-custom') {
    return React__default.createElement(Style_7374796c6520616d702d637573746f6d, props);
  }

  if (props.specName === 'style amp-custom (AMP4ADS)') {
    return React__default.createElement(Style_7374796c6520616d702d637573746f6d2028414d503441445329, props);
  }

  if (props.specName === 'style amp-custom (AMP4EMAIL)') {
    return React__default.createElement(Style_7374796c6520616d702d637573746f6d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'head > style[amp-boilerplate] - old variant') {
    return React__default.createElement(Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74, props);
  }

  if (props.specName === 'noscript > style[amp-boilerplate] - old variant') {
    return React__default.createElement(Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d202d206f6c642076617269616e74, props);
  }

  if (props.specName === 'head > style[amp-boilerplate]') {
    return React__default.createElement(Style_68656164203e207374796c655b616d702d626f696c6572706c6174655d, props);
  }

  if (props.specName === 'head > style[amp4ads-boilerplate]') {
    return React__default.createElement(Style_68656164203e207374796c655b616d70346164732d626f696c6572706c6174655d, props);
  }

  if (props.specName === 'head > style[amp4email-boilerplate]') {
    return React__default.createElement(Style_68656164203e207374796c655b616d7034656d61696c2d626f696c6572706c6174655d, props);
  }

  if (props.specName === 'noscript > style[amp-boilerplate]') {
    return React__default.createElement(Style_6e6f736372697074203e207374796c655b616d702d626f696c6572706c6174655d, props);
  }

  if (props.specName === 'style[amp-keyframes]') {
    return React__default.createElement(Style_7374796c655b616d702d6b65796672616d65735d, props);
  }
  return null;
};

Style.propTypes = {
  specName: PropTypes.oneOf(["style amp-custom", "style amp-custom (AMP4ADS)", "style amp-custom (AMP4EMAIL)", "head > style[amp-boilerplate] - old variant", "noscript > style[amp-boilerplate] - old variant", "head > style[amp-boilerplate]", "head > style[amp4ads-boilerplate]", "head > style[amp4email-boilerplate]", "noscript > style[amp-boilerplate]", "style[amp-keyframes]"]).isRequired
};

var Section = function Section(props) {
  if (props.specName === 'default') {
    return React__default.createElement(Section_64656661756c74, props);
  }

  if (props.specName === 'amp-accordion > section') {
    return React__default.createElement(Section_616d702d6163636f7264696f6e203e2073656374696f6e, props);
  }
  return null;
};

Section.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-accordion > section"]).isRequired
};

var Nav = function Nav(props) {
  if (props.specName === 'default') {
    return React__default.createElement(Nav_64656661756c74, props);
  }

  if (props.specName === 'amp-sidebar > nav') {
    return React__default.createElement(Nav_616d702d73696465626172203e206e6176, props);
  }
  return null;
};

Nav.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-sidebar > nav"]).isRequired
};

var Div = function Div(props) {
  if (props.specName === 'default') {
    return React__default.createElement(Div_64656661756c74, props);
  }

  if (props.specName === 'FORM > DIV [submitting]') {
    return React__default.createElement(Div_464f524d203e20444956205b7375626d697474696e675d, props);
  }

  if (props.specName === 'FORM > DIV [submit-success]') {
    return React__default.createElement(Div_464f524d203e20444956205b7375626d69742d737563636573735d, props);
  }

  if (props.specName === 'FORM > DIV [submit-success][template]') {
    return React__default.createElement(Div_464f524d203e20444956205b7375626d69742d737563636573735d5b74656d706c6174655d, props);
  }

  if (props.specName === 'FORM > DIV [submit-error]') {
    return React__default.createElement(Div_464f524d203e20444956205b7375626d69742d6572726f725d, props);
  }

  if (props.specName === 'FORM > DIV [submit-error][template]') {
    return React__default.createElement(Div_464f524d203e20444956205b7375626d69742d6572726f725d5b74656d706c6174655d, props);
  }
  return null;
};

Div.propTypes = {
  specName: PropTypes.oneOf(["default", "FORM > DIV [submitting]", "FORM > DIV [submit-success]", "FORM > DIV [submit-success][template]", "FORM > DIV [submit-error]", "FORM > DIV [submit-error][template]"]).isRequired
};

var A = function A(props) {
  if (props.specName === 'default') {
    return React__default.createElement(A_64656661756c74, props);
  }

  if (props.specName === 'A (AMP4EMAIL)') {
    return React__default.createElement(A_412028414d5034454d41494c29, props);
  }
  return null;
};

A.propTypes = {
  specName: PropTypes.oneOf(["default", "A (AMP4EMAIL)"]).isRequired
};

var Source = function Source(props) {
  if (props.specName === 'amp-video > source') {
    return React__default.createElement(Source_616d702d766964656f203e20736f75726365, props);
  }

  if (props.specName === 'amp-audio > source') {
    return React__default.createElement(Source_616d702d617564696f203e20736f75726365, props);
  }

  if (props.specName === 'audio > source') {
    return React__default.createElement(Source_617564696f203e20736f75726365, props);
  }

  if (props.specName === 'video > source') {
    return React__default.createElement(Source_766964656f203e20736f75726365, props);
  }

  if (props.specName === 'amp-ima-video > source') {
    return React__default.createElement(Source_616d702d696d612d766964656f203e20736f75726365, props);
  }
  return null;
};

Source.propTypes = {
  specName: PropTypes.oneOf(["amp-video > source", "amp-audio > source", "audio > source", "video > source", "amp-ima-video > source"]).isRequired
};

var Track = function Track(props) {
  if (props.specName === 'audio > track') {
    return React__default.createElement(Track_617564696f203e20747261636b, props);
  }

  if (props.specName === 'audio > track[kind=subtitles]') {
    return React__default.createElement(Track_617564696f203e20747261636b5b6b696e643d7375627469746c65735d, props);
  }

  if (props.specName === 'video > track') {
    return React__default.createElement(Track_766964656f203e20747261636b, props);
  }

  if (props.specName === 'video > track[kind=subtitles]') {
    return React__default.createElement(Track_766964656f203e20747261636b5b6b696e643d7375627469746c65735d, props);
  }

  if (props.specName === 'amp-audio > track') {
    return React__default.createElement(Track_616d702d617564696f203e20747261636b, props);
  }

  if (props.specName === 'amp-audio > track[kind=subtitles]') {
    return React__default.createElement(Track_616d702d617564696f203e20747261636b5b6b696e643d7375627469746c65735d, props);
  }

  if (props.specName === 'amp-video > track') {
    return React__default.createElement(Track_616d702d766964656f203e20747261636b, props);
  }

  if (props.specName === 'amp-video > track[kind=subtitles]') {
    return React__default.createElement(Track_616d702d766964656f203e20747261636b5b6b696e643d7375627469746c65735d, props);
  }

  if (props.specName === 'amp-ima-video > track[kind=subtitles]') {
    return React__default.createElement(Track_616d702d696d612d766964656f203e20747261636b5b6b696e643d7375627469746c65735d, props);
  }
  return null;
};

Track.propTypes = {
  specName: PropTypes.oneOf(["audio > track", "audio > track[kind=subtitles]", "video > track", "video > track[kind=subtitles]", "amp-audio > track", "amp-audio > track[kind=subtitles]", "amp-video > track", "amp-video > track[kind=subtitles]", "amp-ima-video > track[kind=subtitles]"]).isRequired
};

var Stop = function Stop(props) {
  if (props.specName === 'lineargradient > stop') {
    return React__default.createElement(Stop_6c696e6561726772616469656e74203e2073746f70, props);
  }

  if (props.specName === 'radialgradient > stop') {
    return React__default.createElement(Stop_72616469616c6772616469656e74203e2073746f70, props);
  }
  return null;
};

Stop.propTypes = {
  specName: PropTypes.oneOf(["lineargradient > stop", "radialgradient > stop"]).isRequired
};

var Form = function Form(props) {
  if (props.specName === 'FORM [method=GET]') {
    return React__default.createElement(Form_464f524d205b6d6574686f643d4745545d, props);
  }

  if (props.specName === 'FORM [method=POST]') {
    return React__default.createElement(Form_464f524d205b6d6574686f643d504f53545d, props);
  }

  if (props.specName === 'FORM [method=GET] (AMP4EMAIL)') {
    return React__default.createElement(Form_464f524d205b6d6574686f643d4745545d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'FORM [method=POST] (AMP4EMAIL)') {
    return React__default.createElement(Form_464f524d205b6d6574686f643d504f53545d2028414d5034454d41494c29, props);
  }
  return null;
};

Form.propTypes = {
  specName: PropTypes.oneOf(["FORM [method=GET]", "FORM [method=POST]", "FORM [method=GET] (AMP4EMAIL)", "FORM [method=POST] (AMP4EMAIL)"]).isRequired
};

var Button = function Button(props) {
  if (props.specName === 'default') {
    return React__default.createElement(Button_64656661756c74, props);
  }

  if (props.specName === 'amp-app-banner button[open-button]') {
    return React__default.createElement(Button_616d702d6170702d62616e6e657220627574746f6e5b6f70656e2d627574746f6e5d, props);
  }
  return null;
};

Button.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-app-banner button[open-button]"]).isRequired
};

var Script$1 = function Script$$1(props) {
  if (props.specName === 'amphtml engine v0.js script') {
    return React__default.createElement(Script_616d7068746d6c20656e67696e652076302e6a7320736372697074, props);
  }

  if (props.specName === 'amp4ads engine amp4ads-v0.js script') {
    return React__default.createElement(Script_616d703461647320656e67696e6520616d70346164732d76302e6a7320736372697074, props);
  }

  if (props.specName === 'script type=application/ld+json') {
    return React__default.createElement(Script_73637269707420747970653d6170706c69636174696f6e2f6c642b6a736f6e, props);
  }

  if (props.specName === 'script id=amp-rtc') {
    return React__default.createElement(Script_7363726970742069643d616d702d727463, props);
  }

  if (props.specName === 'amp-ima-video > script[type=application/json]') {
    return React__default.createElement(Script_616d702d696d612d766964656f203e207363726970745b747970653d6170706c69636174696f6e2f6a736f6e5d, props);
  }

  if (props.specName === 'amp-3q-player') {
    return React__default.createElement(Script_616d702d33712d706c61796572, props);
  }

  if (props.specName === 'amp-access-laterpay') {
    return React__default.createElement(Script_616d702d6163636573732d6c61746572706179, props);
  }

  if (props.specName === 'amp-access-scroll') {
    return React__default.createElement(Script_616d702d6163636573732d7363726f6c6c, props);
  }

  if (props.specName === 'amp-access') {
    return React__default.createElement(Script_616d702d616363657373, props);
  }

  if (props.specName === 'amp-access extension .json script') {
    return React__default.createElement(Script_616d702d61636365737320657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-accordion') {
    return React__default.createElement(Script_616d702d6163636f7264696f6e, props);
  }

  if (props.specName === 'amp-ad-exit') {
    return React__default.createElement(Script_616d702d61642d65786974, props);
  }

  if (props.specName === 'amp-ad-exit configuration JSON') {
    return React__default.createElement(Script_616d702d61642d6578697420636f6e66696775726174696f6e204a534f4e, props);
  }

  if (props.specName === 'amp-ad extension .js script') {
    return React__default.createElement(Script_616d702d616420657874656e73696f6e202e6a7320736372697074, props);
  }

  if (props.specName === 'amp-analytics') {
    return React__default.createElement(Script_616d702d616e616c7974696373, props);
  }

  if (props.specName === 'amp-analytics extension .json script') {
    return React__default.createElement(Script_616d702d616e616c797469637320657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-anim') {
    return React__default.createElement(Script_616d702d616e696d, props);
  }

  if (props.specName === 'amp-anim extension .js script (AMP4EMAIL)') {
    return React__default.createElement(Script_616d702d616e696d20657874656e73696f6e202e6a73207363726970742028414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-animation') {
    return React__default.createElement(Script_616d702d616e696d6174696f6e, props);
  }

  if (props.specName === 'amp-animation extension .json script') {
    return React__default.createElement(Script_616d702d616e696d6174696f6e20657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-apester-media') {
    return React__default.createElement(Script_616d702d617065737465722d6d65646961, props);
  }

  if (props.specName === 'amp-app-banner') {
    return React__default.createElement(Script_616d702d6170702d62616e6e6572, props);
  }

  if (props.specName === 'amp-audio') {
    return React__default.createElement(Script_616d702d617564696f, props);
  }

  if (props.specName === 'amp-auto-ads') {
    return React__default.createElement(Script_616d702d6175746f2d616473, props);
  }

  if (props.specName === 'amp-beopinion') {
    return React__default.createElement(Script_616d702d62656f70696e696f6e, props);
  }

  if (props.specName === 'amp-bind') {
    return React__default.createElement(Script_616d702d62696e64, props);
  }

  if (props.specName === 'amp-bind extension .json script') {
    return React__default.createElement(Script_616d702d62696e6420657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-bodymovin-animation') {
    return React__default.createElement(Script_616d702d626f64796d6f76696e2d616e696d6174696f6e, props);
  }

  if (props.specName === 'amp-brid-player') {
    return React__default.createElement(Script_616d702d627269642d706c61796572, props);
  }

  if (props.specName === 'amp-brightcove') {
    return React__default.createElement(Script_616d702d627269676874636f7665, props);
  }

  if (props.specName === 'amp-byside-content') {
    return React__default.createElement(Script_616d702d6279736964652d636f6e74656e74, props);
  }

  if (props.specName === 'amp-call-tracking') {
    return React__default.createElement(Script_616d702d63616c6c2d747261636b696e67, props);
  }

  if (props.specName === 'amp-carousel') {
    return React__default.createElement(Script_616d702d6361726f7573656c, props);
  }

  if (props.specName === 'amp-consent') {
    return React__default.createElement(Script_616d702d636f6e73656e74, props);
  }

  if (props.specName === 'amp-consent extension .json script') {
    return React__default.createElement(Script_616d702d636f6e73656e7420657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-dailymotion') {
    return React__default.createElement(Script_616d702d6461696c796d6f74696f6e, props);
  }

  if (props.specName === 'amp-date-picker') {
    return React__default.createElement(Script_616d702d646174652d7069636b6572, props);
  }

  if (props.specName === 'amp-document-recommendations') {
    return React__default.createElement(Script_616d702d646f63756d656e742d7265636f6d6d656e646174696f6e73, props);
  }

  if (props.specName === 'amp-document-recommendations extension .json configuration') {
    return React__default.createElement(Script_616d702d646f63756d656e742d7265636f6d6d656e646174696f6e7320657874656e73696f6e202e6a736f6e20636f6e66696775726174696f6e, props);
  }

  if (props.specName === 'amp-dynamic-css-classes') {
    return React__default.createElement(Script_616d702d64796e616d69632d6373732d636c6173736573, props);
  }

  if (props.specName === 'amp-experiment') {
    return React__default.createElement(Script_616d702d6578706572696d656e74, props);
  }

  if (props.specName === 'amp-experiment extension .json script') {
    return React__default.createElement(Script_616d702d6578706572696d656e7420657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-facebook-comments') {
    return React__default.createElement(Script_616d702d66616365626f6f6b2d636f6d6d656e7473, props);
  }

  if (props.specName === 'amp-facebook-like') {
    return React__default.createElement(Script_616d702d66616365626f6f6b2d6c696b65, props);
  }

  if (props.specName === 'amp-facebook-page') {
    return React__default.createElement(Script_616d702d66616365626f6f6b2d70616765, props);
  }

  if (props.specName === 'amp-facebook') {
    return React__default.createElement(Script_616d702d66616365626f6f6b, props);
  }

  if (props.specName === 'amp-fit-text') {
    return React__default.createElement(Script_616d702d6669742d74657874, props);
  }

  if (props.specName === 'amp-font') {
    return React__default.createElement(Script_616d702d666f6e74, props);
  }

  if (props.specName === 'amp-form') {
    return React__default.createElement(Script_616d702d666f726d, props);
  }

  if (props.specName === 'amp-fx-collection') {
    return React__default.createElement(Script_616d702d66782d636f6c6c656374696f6e, props);
  }

  if (props.specName === 'amp-fx-flying-carpet') {
    return React__default.createElement(Script_616d702d66782d666c79696e672d636172706574, props);
  }

  if (props.specName === 'amp-gfycat') {
    return React__default.createElement(Script_616d702d676679636174, props);
  }

  if (props.specName === 'amp-gist') {
    return React__default.createElement(Script_616d702d67697374, props);
  }

  if (props.specName === 'amp-gwd-animation') {
    return React__default.createElement(Script_616d702d6777642d616e696d6174696f6e, props);
  }

  if (props.specName === 'amp-hulu') {
    return React__default.createElement(Script_616d702d68756c75, props);
  }

  if (props.specName === 'amp-iframe') {
    return React__default.createElement(Script_616d702d696672616d65, props);
  }

  if (props.specName === 'amp-ima-video') {
    return React__default.createElement(Script_616d702d696d612d766964656f, props);
  }

  if (props.specName === 'amp-image-lightbox') {
    return React__default.createElement(Script_616d702d696d6167652d6c69676874626f78, props);
  }

  if (props.specName === 'SCRIPT[custom-element=amp-image-lightbox] (AMP4EMAIL)') {
    return React__default.createElement(Script_5343524950545b637573746f6d2d656c656d656e743d616d702d696d6167652d6c69676874626f785d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-imgur') {
    return React__default.createElement(Script_616d702d696d677572, props);
  }

  if (props.specName === 'amp-instagram') {
    return React__default.createElement(Script_616d702d696e7374616772616d, props);
  }

  if (props.specName === 'amp-install-serviceworker') {
    return React__default.createElement(Script_616d702d696e7374616c6c2d73657276696365776f726b6572, props);
  }

  if (props.specName === 'amp-izlesene') {
    return React__default.createElement(Script_616d702d697a6c6573656e65, props);
  }

  if (props.specName === 'amp-jwplayer') {
    return React__default.createElement(Script_616d702d6a77706c61796572, props);
  }

  if (props.specName === 'amp-kaltura-player') {
    return React__default.createElement(Script_616d702d6b616c747572612d706c61796572, props);
  }

  if (props.specName === 'amp-lightbox-gallery') {
    return React__default.createElement(Script_616d702d6c69676874626f782d67616c6c657279, props);
  }

  if (props.specName === 'amp-lightbox') {
    return React__default.createElement(Script_616d702d6c69676874626f78, props);
  }

  if (props.specName === 'SCRIPT[custom-element=amp-lightbox] (AMP4EMAIL)') {
    return React__default.createElement(Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6c69676874626f785d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-list') {
    return React__default.createElement(Script_616d702d6c697374, props);
  }

  if (props.specName === 'SCRIPT[custom-element=amp-list] (AMP4EMAIL)') {
    return React__default.createElement(Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6c6973745d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-live-list') {
    return React__default.createElement(Script_616d702d6c6976652d6c697374, props);
  }

  if (props.specName === 'amp-mathml') {
    return React__default.createElement(Script_616d702d6d6174686d6c, props);
  }

  if (props.specName === 'amp-mustache') {
    return React__default.createElement(Script_616d702d6d75737461636865, props);
  }

  if (props.specName === 'SCRIPT[custom-element=amp-mustache] (AMP4ADS/AMP4EMAIL)') {
    return React__default.createElement(Script_5343524950545b637573746f6d2d656c656d656e743d616d702d6d757374616368655d2028414d50344144532f414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-nexxtv-player') {
    return React__default.createElement(Script_616d702d6e65787874762d706c61796572, props);
  }

  if (props.specName === 'amp-o2-player') {
    return React__default.createElement(Script_616d702d6f322d706c61796572, props);
  }

  if (props.specName === 'amp-ooyala-player') {
    return React__default.createElement(Script_616d702d6f6f79616c612d706c61796572, props);
  }

  if (props.specName === 'amp-pinterest') {
    return React__default.createElement(Script_616d702d70696e746572657374, props);
  }

  if (props.specName === 'amp-playbuzz') {
    return React__default.createElement(Script_616d702d706c617962757a7a, props);
  }

  if (props.specName === 'amp-position-observer') {
    return React__default.createElement(Script_616d702d706f736974696f6e2d6f62736572766572, props);
  }

  if (props.specName === 'amp-reach-player') {
    return React__default.createElement(Script_616d702d72656163682d706c61796572, props);
  }

  if (props.specName === 'amp-reddit') {
    return React__default.createElement(Script_616d702d726564646974, props);
  }

  if (props.specName === 'amp-riddle-quiz') {
    return React__default.createElement(Script_616d702d726964646c652d7175697a, props);
  }

  if (props.specName === 'amp-selector') {
    return React__default.createElement(Script_616d702d73656c6563746f72, props);
  }

  if (props.specName === 'SCRIPT[custom-element=amp-selector] (AMP4EMAIL)') {
    return React__default.createElement(Script_5343524950545b637573746f6d2d656c656d656e743d616d702d73656c6563746f725d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-sidebar') {
    return React__default.createElement(Script_616d702d73696465626172, props);
  }

  if (props.specName === 'SCRIPT[custom-element=amp-sidebar] (AMP4EMAIL)') {
    return React__default.createElement(Script_5343524950545b637573746f6d2d656c656d656e743d616d702d736964656261725d2028414d5034454d41494c29, props);
  }

  if (props.specName === 'amp-slides') {
    return React__default.createElement(Script_616d702d736c69646573, props);
  }

  if (props.specName === 'amp-social-share') {
    return React__default.createElement(Script_616d702d736f6369616c2d7368617265, props);
  }

  if (props.specName === 'amp-soundcloud') {
    return React__default.createElement(Script_616d702d736f756e64636c6f7564, props);
  }

  if (props.specName === 'amp-springboard-player') {
    return React__default.createElement(Script_616d702d737072696e67626f6172642d706c61796572, props);
  }

  if (props.specName === 'amp-sticky-ad') {
    return React__default.createElement(Script_616d702d737469636b792d6164, props);
  }

  if (props.specName === 'amp-story-auto-ads') {
    return React__default.createElement(Script_616d702d73746f72792d6175746f2d616473, props);
  }

  if (props.specName === 'amp-story-auto-ads config script') {
    return React__default.createElement(Script_616d702d73746f72792d6175746f2d61647320636f6e66696720736372697074, props);
  }

  if (props.specName === 'amp-story') {
    return React__default.createElement(Script_616d702d73746f7279, props);
  }

  if (props.specName === 'amp-subscriptions') {
    return React__default.createElement(Script_616d702d737562736372697074696f6e73, props);
  }

  if (props.specName === 'amp-subscriptions extension .json script') {
    return React__default.createElement(Script_616d702d737562736372697074696f6e7320657874656e73696f6e202e6a736f6e20736372697074, props);
  }

  if (props.specName === 'amp-subscriptions-google') {
    return React__default.createElement(Script_616d702d737562736372697074696f6e732d676f6f676c65, props);
  }

  if (props.specName === 'amp-timeago') {
    return React__default.createElement(Script_616d702d74696d6561676f, props);
  }

  if (props.specName === 'amp-twitter') {
    return React__default.createElement(Script_616d702d74776974746572, props);
  }

  if (props.specName === 'amp-user-notification') {
    return React__default.createElement(Script_616d702d757365722d6e6f74696669636174696f6e, props);
  }

  if (props.specName === 'amp-video extension .js script') {
    return React__default.createElement(Script_616d702d766964656f20657874656e73696f6e202e6a7320736372697074, props);
  }

  if (props.specName === 'amp-vimeo') {
    return React__default.createElement(Script_616d702d76696d656f, props);
  }

  if (props.specName === 'amp-vine') {
    return React__default.createElement(Script_616d702d76696e65, props);
  }

  if (props.specName === 'amp-vk') {
    return React__default.createElement(Script_616d702d766b, props);
  }

  if (props.specName === 'amp-web-push') {
    return React__default.createElement(Script_616d702d7765622d70757368, props);
  }

  if (props.specName === 'amp-wistia-player') {
    return React__default.createElement(Script_616d702d7769737469612d706c61796572, props);
  }

  if (props.specName === 'amp-youtube') {
    return React__default.createElement(Script_616d702d796f7574756265, props);
  }
  return null;
};

Script$1.propTypes = {
  specName: PropTypes.oneOf(["amphtml engine v0.js script", "amp4ads engine amp4ads-v0.js script", "script type=application/ld+json", "script id=amp-rtc", "amp-ima-video > script[type=application/json]", "amp-3q-player", "amp-access-laterpay", "amp-access-scroll", "amp-access", "amp-access extension .json script", "amp-accordion", "amp-ad-exit", "amp-ad-exit configuration JSON", "amp-ad extension .js script", "amp-analytics", "amp-analytics extension .json script", "amp-anim", "amp-anim extension .js script (AMP4EMAIL)", "amp-animation", "amp-animation extension .json script", "amp-apester-media", "amp-app-banner", "amp-audio", "amp-auto-ads", "amp-beopinion", "amp-bind", "amp-bind extension .json script", "amp-bodymovin-animation", "amp-brid-player", "amp-brightcove", "amp-byside-content", "amp-call-tracking", "amp-carousel", "amp-consent", "amp-consent extension .json script", "amp-dailymotion", "amp-date-picker", "amp-document-recommendations", "amp-document-recommendations extension .json configuration", "amp-dynamic-css-classes", "amp-experiment", "amp-experiment extension .json script", "amp-facebook-comments", "amp-facebook-like", "amp-facebook-page", "amp-facebook", "amp-fit-text", "amp-font", "amp-form", "amp-fx-collection", "amp-fx-flying-carpet", "amp-gfycat", "amp-gist", "amp-gwd-animation", "amp-hulu", "amp-iframe", "amp-ima-video", "amp-image-lightbox", "SCRIPT[custom-element=amp-image-lightbox] (AMP4EMAIL)", "amp-imgur", "amp-instagram", "amp-install-serviceworker", "amp-izlesene", "amp-jwplayer", "amp-kaltura-player", "amp-lightbox-gallery", "amp-lightbox", "SCRIPT[custom-element=amp-lightbox] (AMP4EMAIL)", "amp-list", "SCRIPT[custom-element=amp-list] (AMP4EMAIL)", "amp-live-list", "amp-mathml", "amp-mustache", "SCRIPT[custom-element=amp-mustache] (AMP4ADS/AMP4EMAIL)", "amp-nexxtv-player", "amp-o2-player", "amp-ooyala-player", "amp-pinterest", "amp-playbuzz", "amp-position-observer", "amp-reach-player", "amp-reddit", "amp-riddle-quiz", "amp-selector", "SCRIPT[custom-element=amp-selector] (AMP4EMAIL)", "amp-sidebar", "SCRIPT[custom-element=amp-sidebar] (AMP4EMAIL)", "amp-slides", "amp-social-share", "amp-soundcloud", "amp-springboard-player", "amp-sticky-ad", "amp-story-auto-ads", "amp-story-auto-ads config script", "amp-story", "amp-subscriptions", "amp-subscriptions extension .json script", "amp-subscriptions-google", "amp-timeago", "amp-twitter", "amp-user-notification", "amp-video extension .js script", "amp-vimeo", "amp-vine", "amp-vk", "amp-web-push", "amp-wistia-player", "amp-youtube"]).isRequired
};

var Noscript = function Noscript(props) {
  if (props.specName === 'noscript enclosure for boilerplate') {
    return React__default.createElement(Noscript_6e6f73637269707420656e636c6f7375726520666f7220626f696c6572706c617465, props);
  }

  if (props.specName === 'default') {
    return React__default.createElement(Noscript_64656661756c74, props);
  }
  return null;
};

Noscript.propTypes = {
  specName: PropTypes.oneOf(["noscript enclosure for boilerplate", "default"]).isRequired
};

var AmpImg = function AmpImg(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpImg_64656661756c74, props);
  }

  if (props.specName === 'AMP-IMG (AMP4EMAIL)') {
    return React__default.createElement(AmpImg_414d502d494d472028414d5034454d41494c29, props);
  }
  return null;
};

AmpImg.propTypes = {
  specName: PropTypes.oneOf(["default", "AMP-IMG (AMP4EMAIL)"]).isRequired
};

var AmpAd = function AmpAd(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpAd_64656661756c74, props);
  }

  if (props.specName === 'amp-ad with data-multi-size attribute') {
    return React__default.createElement(AmpAd_616d702d6164207769746820646174612d6d756c74692d73697a6520617474726962757465, props);
  }

  if (props.specName === 'amp-ad with data-enable-refresh attribute') {
    return React__default.createElement(AmpAd_616d702d6164207769746820646174612d656e61626c652d7265667265736820617474726962757465, props);
  }
  return null;
};

AmpAd.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-ad with data-multi-size attribute", "amp-ad with data-enable-refresh attribute"]).isRequired
};

var AmpEmbed = function AmpEmbed(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpEmbed_64656661756c74, props);
  }

  if (props.specName === 'amp-embed with data-multi-size attribute') {
    return React__default.createElement(AmpEmbed_616d702d656d626564207769746820646174612d6d756c74692d73697a6520617474726962757465, props);
  }
  return null;
};

AmpEmbed.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-embed with data-multi-size attribute"]).isRequired
};

var AmpAnim = function AmpAnim(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpAnim_64656661756c74, props);
  }

  if (props.specName === 'AMP-ANIM (AMP4EMAIL)') {
    return React__default.createElement(AmpAnim_414d502d414e494d2028414d5034454d41494c29, props);
  }
  return null;
};

AmpAnim.propTypes = {
  specName: PropTypes.oneOf(["default", "AMP-ANIM (AMP4EMAIL)"]).isRequired
};

var AmpAudio = function AmpAudio(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpAudio_64656661756c74, props);
  }

  if (props.specName === 'amp-story >> amp-audio') {
    return React__default.createElement(AmpAudio_616d702d73746f7279203e3e20616d702d617564696f, props);
  }

  if (props.specName === 'amp-audio (A4A)') {
    return React__default.createElement(AmpAudio_616d702d617564696f202841344129, props);
  }
  return null;
};

AmpAudio.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-story >> amp-audio", "amp-audio (A4A)"]).isRequired
};

var AmpState$1 = function AmpState$$1(props) {
  if (props.specName === 'amp-state') {
    return React__default.createElement(AmpState_616d702d7374617465, props);
  }

  if (props.specName === 'amp-state (AMP4EMAIL)') {
    return React__default.createElement(AmpState_616d702d73746174652028414d5034454d41494c29, props);
  }
  return null;
};

AmpState$1.propTypes = {
  specName: PropTypes.oneOf(["amp-state", "amp-state (AMP4EMAIL)"]).isRequired
};

var AmpDatePicker = function AmpDatePicker(props) {
  if (props.specName === 'amp-date-picker[type=single][mode=static]') {
    return React__default.createElement(AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d7374617469635d, props);
  }

  if (props.specName === 'amp-date-picker[type=single][mode=overlay]') {
    return React__default.createElement(AmpDatePicker_616d702d646174652d7069636b65725b747970653d73696e676c655d5b6d6f64653d6f7665726c61795d, props);
  }

  if (props.specName === 'amp-date-picker[type=range][mode=static]') {
    return React__default.createElement(AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d7374617469635d, props);
  }

  if (props.specName === 'amp-date-picker[type=range][mode=overlay]') {
    return React__default.createElement(AmpDatePicker_616d702d646174652d7069636b65725b747970653d72616e67655d5b6d6f64653d6f7665726c61795d, props);
  }
  return null;
};

AmpDatePicker.propTypes = {
  specName: PropTypes.oneOf(["amp-date-picker[type=single][mode=static]", "amp-date-picker[type=single][mode=overlay]", "amp-date-picker[type=range][mode=static]", "amp-date-picker[type=range][mode=overlay]"]).isRequired
};

var AmpList = function AmpList(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpList_64656661756c74, props);
  }

  if (props.specName === 'AMP-LIST [SRC]') {
    return React__default.createElement(AmpList_414d502d4c495354205b5352435d, props);
  }

  if (props.specName === 'AMP-LIST (AMP4EMAIL)') {
    return React__default.createElement(AmpList_414d502d4c4953542028414d5034454d41494c29, props);
  }
  return null;
};

AmpList.propTypes = {
  specName: PropTypes.oneOf(["default", "AMP-LIST [SRC]", "AMP-LIST (AMP4EMAIL)"]).isRequired
};

var Template = function Template(props) {
  if (props.specName === 'default') {
    return React__default.createElement(Template_64656661756c74, props);
  }

  if (props.specName === 'amp-story-auto-ads > template') {
    return React__default.createElement(Template_616d702d73746f72792d6175746f2d616473203e2074656d706c617465, props);
  }
  return null;
};

Template.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-story-auto-ads > template"]).isRequired
};

var AmpVideo = function AmpVideo(props) {
  if (props.specName === 'default') {
    return React__default.createElement(AmpVideo_64656661756c74, props);
  }

  if (props.specName === 'amp-story >> amp-video') {
    return React__default.createElement(AmpVideo_616d702d73746f7279203e3e20616d702d766964656f, props);
  }
  return null;
};

AmpVideo.propTypes = {
  specName: PropTypes.oneOf(["default", "amp-story >> amp-video"]).isRequired
};

exports.Head = Head;
exports.Base = Base;
exports.Body = Body;
exports.Article = Article;
exports.Aside = Aside;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Header = Header;
exports.Footer = Footer;
exports.Address = Address;
exports.P = P;
exports.Hr = Hr;
exports.Pre = Pre;
exports.Blockquote = Blockquote;
exports.Ol = Ol;
exports.Ul = Ul;
exports.Li = Li;
exports.Dl = Dl;
exports.Dt = Dt;
exports.Dd = Dd;
exports.Figure = Figure;
exports.Figcaption = Figcaption;
exports.Main = Main;
exports.Em = Em;
exports.Strong = Strong;
exports.Small = Small;
exports.S = S;
exports.Cite = Cite;
exports.Q = Q;
exports.Dfn = Dfn;
exports.Abbr = Abbr;
exports.Data = Data;
exports.Time = Time;
exports.Code = Code;
exports.Var = Var;
exports.Samp = Samp;
exports.Kbd = Kbd;
exports.Sub = Sub;
exports.Sup = Sup;
exports.I = I;
exports.B = B;
exports.U = U;
exports.Mark = Mark;
exports.Ruby = Ruby;
exports.Rb = Rb;
exports.Rt = Rt;
exports.Rtc = Rtc;
exports.Rp = Rp;
exports.Bdi = Bdi;
exports.Bdo = Bdo;
exports.Span = Span;
exports.Br = Br;
exports.Wbr = Wbr;
exports.Ins = Ins;
exports.Del = Del;
exports.G = G;
exports.Glyph = Glyph;
exports.Glyphref = Glyphref;
exports.Image = Image;
exports.Marker = Marker;
exports.Metadata = Metadata;
exports.Path = Path;
exports.Solidcolor = Solidcolor;
exports.Svg = Svg;
exports.Switch = Switch;
exports.View = View;
exports.Circle = Circle;
exports.Ellipse = Ellipse;
exports.Line = Line;
exports.Polygon = Polygon;
exports.Polyline = Polyline;
exports.Rect = Rect;
exports.Text = Text;
exports.Textpath = Textpath;
exports.Tref = Tref;
exports.Tspan = Tspan;
exports.Clippath = Clippath;
exports.Filter = Filter;
exports.Hkern = Hkern;
exports.Lineargradient = Lineargradient;
exports.Mask = Mask;
exports.Pattern = Pattern;
exports.Radialgradient = Radialgradient;
exports.Vkern = Vkern;
exports.Defs = Defs;
exports.Symbol = Symbol$1;
exports.Use = Use;
exports.Fecolormatrix = Fecolormatrix;
exports.Fecomposite = Fecomposite;
exports.Feflood = Feflood;
exports.Fegaussianblur = Fegaussianblur;
exports.Femerge = Femerge;
exports.Femergenode = Femergenode;
exports.Feoffset = Feoffset;
exports.Foreignobject = Foreignobject;
exports.Desc = Desc;
exports.Table = Table;
exports.Caption = Caption;
exports.Colgroup = Colgroup;
exports.Col = Col;
exports.Tbody = Tbody;
exports.Thead = Thead;
exports.Tfoot = Tfoot;
exports.Tr = Tr;
exports.Td = Td;
exports.Th = Th;
exports.Label = Label;
exports.Input = Input;
exports.Select = Select;
exports.Datalist = Datalist;
exports.Optgroup = Optgroup;
exports.Option = Option;
exports.Textarea = Textarea;
exports.Output = Output;
exports.Progress = Progress;
exports.Meter = Meter;
exports.Fieldset = Fieldset;
exports.Legend = Legend;
exports.Acronym = Acronym;
exports.Big = Big;
exports.Center = Center;
exports.Dir = Dir;
exports.Hgroup = Hgroup;
exports.Listing = Listing;
exports.Multicol = Multicol;
exports.Nextid = Nextid;
exports.Nobr = Nobr;
exports.Spacer = Spacer;
exports.Strike = Strike;
exports.Tt = Tt;
exports.Xmp = Xmp;
exports.Slot = Slot;
exports.AmpLayout = AmpLayout;
exports.AmpPixel = AmpPixel;
exports.Amp3qPlayer = Amp3qPlayer;
exports.AmpAccordion = AmpAccordion;
exports.AmpAdExit = AmpAdExit;
exports.AmpAnalytics = AmpAnalytics;
exports.AmpAnimation = AmpAnimation;
exports.AmpApesterMedia = AmpApesterMedia;
exports.AmpAppBanner = AmpAppBanner;
exports.AmpAutoAds = AmpAutoAds;
exports.AmpBeopinion = AmpBeopinion;
exports.AmpBindMacro = AmpBindMacro;
exports.AmpBodymovinAnimation = AmpBodymovinAnimation;
exports.AmpBridPlayer = AmpBridPlayer;
exports.AmpBrightcove = AmpBrightcove;
exports.AmpBysideContent = AmpBysideContent;
exports.AmpCallTracking = AmpCallTracking;
exports.AmpCarousel = AmpCarousel;
exports.AmpConsent = AmpConsent;
exports.AmpDailymotion = AmpDailymotion;
exports.AmpDocumentRecommendations = AmpDocumentRecommendations;
exports.AmpExperiment = AmpExperiment;
exports.AmpFacebookComments = AmpFacebookComments;
exports.AmpFacebookLike = AmpFacebookLike;
exports.AmpFacebookPage = AmpFacebookPage;
exports.AmpFacebook = AmpFacebook;
exports.AmpFitText = AmpFitText;
exports.AmpFont = AmpFont;
exports.AmpFxFlyingCarpet = AmpFxFlyingCarpet;
exports.AmpGfycat = AmpGfycat;
exports.AmpGist = AmpGist;
exports.AmpGwdAnimation = AmpGwdAnimation;
exports.AmpHulu = AmpHulu;
exports.AmpIframe = AmpIframe;
exports.AmpImaVideo = AmpImaVideo;
exports.AmpImageLightbox = AmpImageLightbox;
exports.AmpImgur = AmpImgur;
exports.AmpInstagram = AmpInstagram;
exports.AmpInstallServiceworker = AmpInstallServiceworker;
exports.AmpIzlesene = AmpIzlesene;
exports.AmpJwplayer = AmpJwplayer;
exports.AmpKalturaPlayer = AmpKalturaPlayer;
exports.AmpLightbox = AmpLightbox;
exports.AmpLiveList = AmpLiveList;
exports.AmpMathml = AmpMathml;
exports.AmpNexxtvPlayer = AmpNexxtvPlayer;
exports.AmpO2Player = AmpO2Player;
exports.AmpOoyalaPlayer = AmpOoyalaPlayer;
exports.AmpPinterest = AmpPinterest;
exports.AmpPlaybuzz = AmpPlaybuzz;
exports.AmpPositionObserver = AmpPositionObserver;
exports.AmpReachPlayer = AmpReachPlayer;
exports.AmpReddit = AmpReddit;
exports.AmpRiddleQuiz = AmpRiddleQuiz;
exports.AmpSelector = AmpSelector;
exports.AmpSidebar = AmpSidebar;
exports.AmpSocialShare = AmpSocialShare;
exports.AmpSoundcloud = AmpSoundcloud;
exports.AmpSpringboardPlayer = AmpSpringboardPlayer;
exports.AmpStickyAd = AmpStickyAd;
exports.AmpStoryAutoAds = AmpStoryAutoAds;
exports.AmpStory = AmpStory;
exports.AmpStoryPage = AmpStoryPage;
exports.AmpStoryGridLayer = AmpStoryGridLayer;
exports.AmpStoryCtaLayer = AmpStoryCtaLayer;
exports.AmpTimeago = AmpTimeago;
exports.AmpTwitter = AmpTwitter;
exports.AmpUserNotification = AmpUserNotification;
exports.AmpVimeo = AmpVimeo;
exports.AmpVine = AmpVine;
exports.AmpVk = AmpVk;
exports.AmpWebPush = AmpWebPush;
exports.AmpWebPushWidget = AmpWebPushWidget;
exports.AmpWistiaPlayer = AmpWistiaPlayer;
exports.AmpYoutube = AmpYoutube;
exports.Html = Html;
exports.Title = Title;
exports.Link = Link;
exports.Meta = Meta;
exports.Style = Style;
exports.Section = Section;
exports.Nav = Nav;
exports.Div = Div;
exports.A = A;
exports.Source = Source;
exports.Track = Track;
exports.Stop = Stop;
exports.Form = Form;
exports.Button = Button;
exports.Script = Script$1;
exports.Noscript = Noscript;
exports.AmpImg = AmpImg;
exports.AmpAd = AmpAd;
exports.AmpEmbed = AmpEmbed;
exports.AmpAnim = AmpAnim;
exports.AmpAudio = AmpAudio;
exports.AmpState = AmpState$1;
exports.AmpDatePicker = AmpDatePicker;
exports.AmpList = AmpList;
exports.Template = Template;
exports.AmpVideo = AmpVideo;
//# sourceMappingURL=amphtml.js.map
