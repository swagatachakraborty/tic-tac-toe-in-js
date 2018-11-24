const assert = require('assert');
const { toggler, botSymbol} = require('../src/util.js');

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

describe('botSymbol' , function() {
  it('should return the opposites symbol' , function() {
    assert.equal(botSymbol('X'),'O');
    assert.equal(botSymbol('O'),'X');
  });
});

