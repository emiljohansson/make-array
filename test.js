"use strict";

var test = require('tape');
var makeArray = require('./');

test('exist', function(t) {
    t.equal(typeof makeArray, 'function');
    t.end();
});

test('should return a new array', function(t) {
    t.deepEqual(makeArray(), []);
    t.deepEqual(makeArray(null), []);
    t.deepEqual(makeArray({}), []);
    t.deepEqual(makeArray(123), []);
    t.deepEqual(makeArray("abc"), []);
    t.end();
});

test('should return the same array', function(t) {
    var a = [];
    t.equal(makeArray(a), a);
    a = [1, 2, 3];
    t.equal(makeArray(a), a);
    t.end();
});
