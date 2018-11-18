'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_1 = require('./chunk-3bbbc65d.js');
var __chunk_2 = require('./chunk-45c31861.js');

// TODO: Remove `{ Component }` when Rollup fixes its code splitting.

var ON_ATTRIBUTE = 'on';

var Action = function Action(_ref) {
  var RenderProp = _ref.children,
      events = _ref.events,
      props = __chunk_1.objectWithoutProperties(_ref, ['children', 'events']);

  var eventString = Object.entries(events).reduce(function (entireEventString, _ref2, eventIndex) {
    var _ref3 = __chunk_1.slicedToArray(_ref2, 2),
        eventName = _ref3[0],
        eventActions = _ref3[1];

    var actionString = eventActions.reduce(function (entireActionString, nextAction, actionIndex) {
      return '' + entireActionString + (actionIndex > 0 ? ',' : '') + nextAction;
    }, '');

    return '' + entireEventString + (eventIndex > 0 ? ';' : '') + eventName + ':' + actionString;
  }, '');

  return React__default.createElement(RenderProp, __chunk_1._extends({}, props, __chunk_1.defineProperty({}, ON_ATTRIBUTE, eventString)));
};

Action.propTypes = {
  children: PropTypes.func.isRequired,
  events: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

// TODO: Remove `{ Component }` when Rollup fixes its code splitting.

var BLACKLIST = [ON_ATTRIBUTE];

var boundAttributeRegExp = /^\[.*?\]$/;

var Bind = function Bind(_ref, context) {
  var RenderProp = _ref.children,
      props = __chunk_1.objectWithoutProperties(_ref, ['children']);

  __chunk_2.contextHelper({ context: context, extension: 'amp-bind' });

  var boundAttributeProps = Object.entries(props).reduce(function (allProps, _ref2) {
    var _ref3 = __chunk_1.slicedToArray(_ref2, 2),
        propsName = _ref3[0],
        propValue = _ref3[1];

    return __chunk_1._extends({}, allProps, __chunk_1.defineProperty({}, BLACKLIST.includes(propsName) || boundAttributeRegExp.test(propsName) ? propsName : '[' + propsName + ']', propValue));
  }, {});

  return React__default.createElement(RenderProp, boundAttributeProps);
};

Bind.propTypes = {
  children: PropTypes.func.isRequired
};

Bind.contextTypes = __chunk_1.defineProperty({}, __chunk_1.CONTEXT_KEY, PropTypes.shape({
  addExtension: PropTypes.func.isRequired
}));

exports.Action = Action;
exports.Bind = Bind;
//# sourceMappingURL=helpers.js.map
