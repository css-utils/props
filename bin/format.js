var properties = require('../all-properties.json')
  .concat(require('../all-descriptors.json'));

var props = properties.reduce(function(acc, prop) {
  acc[(prop.property || prop.descriptor).replace('(extra)', '').trim()] = true;
  return acc;
}, {});

delete props['--*'];

// additional properties

props['ime-mode'] = true;
props['pointer-events'] = true;
props['text-rendering'] = true;
props['touch-action'] = true;

process.stdout.write(JSON.stringify(Object.keys(props).sort(), null, '  '));
