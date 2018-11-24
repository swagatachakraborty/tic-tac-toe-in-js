const assert = require('assert');
const { toggler } = require('../src/util.js');

let toggle = toggler(firstItem,secondItem);
assert.equal(toggle(),firstItem);
assert.equal(toggle(),secondItem);
