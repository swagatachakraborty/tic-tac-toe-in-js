const assert = require('assert');
const { toggler,isSubset } = require('../src/util.js');

let firstItem = 0;
let secondItem = 1;
let toggle = toggler(firstItem,secondItem);

describe( 'toggler' , function() {
  it( 'should return firstItem when called first time' , function() {
    assert.equal(toggle(),firstItem);
  });
  it('should return secondItem when called second time' , function () {
    assert.equal(toggle(),secondItem);
  });
})

describe ( 'isSubset', function() {
  it ( 'should return true when subset is subset of superset' , function() {
    assert.deepEqual(isSubset([1,2,3,4],[1,2]),true);
  });
  it ( 'should return false when provided subset is not subset of superset' , function() {
    assert.deepEqual(isSubset([1,2,3],[2,5]),false);
  });
});

