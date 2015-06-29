'use strict';

var expect = require('chai').expect;
var getKeys = require('../');

describe('getKeys(obj)', function () {
  it('should ignore parents properties', function () {
    var a = { a: 123 };
    var b = Object.create(a);
    var keys = getKeys(b);
    expect(keys).to.have.length(0);
  });

  it('should return all property names', function () {
    var obj = {
      a: 1,
      b: 2,
      c: 3
    };
    var keys = getKeys(obj);
    expect(keys).to.deep.equal([
      'a',
      'b',
      'c'
    ]);
  });
});
