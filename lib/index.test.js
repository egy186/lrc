'use strict';

const index = require('./index');

const functions = [
  'fromSRT',
  'shift',
  'stretch',
  'toSRT'
];

functions.forEach(name => {
  test('have functions', () => {
    expect(index[name]).toBeInstanceOf(Function);
  });
});
