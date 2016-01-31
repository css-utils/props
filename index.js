var propList = require('./props.json');
var props = {};
for (var i = 0, name; i < propList.length; i++) {
  name = propList[i];
  propList[name] = props[name] = true;
};

exports = module.exports = function isValidProp(prop) {
  return (typeof prop === 'string') && (props[prop] || /^--.*/.test(prop) || /^-(webkit|ms|moz|o|khtml|epub|internal)/.test(prop));
};
exports['default'] = exports;
exports.props = propList;
