/*!
 * get-first <https://github.com/jonschlinkert/get-first>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var get = require('./');

describe('get', function () {
  it('should get a value from a path string:', function () {
    get({a: 'b'}, 'a').should.eql('b');
  });

  it('should get a value from a path array:', function () {
    get({a: 'b'}, ['a']).should.eql('b');
  });

  it('should get a nested value from a path string:', function () {
    get({a: {b: 'c'}}, 'a.b').should.eql('c');
  });

  it('should get a nested value from a path array:', function () {
    get({a: {b: 'c'}}, ['a.b']).should.eql('c');
  });

  it('should get the first matching value from a path array:', function () {
    get({a: {b: false}}, ['a.b']).should.equal(false);
    (get({a: {b: null}}, ['a.b']) == null).should.be.true;
    get({a: {b: 'c'}}, ['x.y.z', 'a.b']).should.equal('c');
    get({a: {b: 'c'}}, ['a.b', 'x.y.z']).should.equal('c');
    get({a: {b: 'c'}, x: {b: 'd'}}, ['a.b', 'x.b']).should.equal('c');
    get({a: {b: 'c'}, x: {b: 'd'}}, ['x.b', 'a.b']).should.equal('d');
    get({a: {b: {c: 'd'}}}, ['a.b', 'x.y.z']).should.eql({c: 'd'});
    get({a: {b: {c: 'd'}, e: 'f'}}, ['a.c', 'a.e']).should.equal('f');
  });
});
