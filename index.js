var props = require('./props.json');
for (var i = 0; i < props.length; i++) {
  props[props[i]] = true;
};

exports = module.exports = function isValidProp(prop) {
  return (typeof prop === 'string') && (props[prop] || /^--*/.test(prop) || /^-(webkit|ms|moz|o|khtml|epub|internal)/.test(prop));
};
exports['default'] = exports;
exports.props = props;
