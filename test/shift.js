'use strict';

const assert = require('assert');
const { shift } = require('..');

const lrc = '[00:08.88]lyrics\n[00:12.34]\n';

describe('shift', () => {
  it('should do nothing', () => {
    const shifted = shift(lrc);
    assert.deepStrictEqual(shifted, lrc);
  });
  it('should shift LRC', () => {
    const shifted = shift(lrc, 10);
    const expected = '[00:18.88]lyrics\n[00:22.34]\n';
    assert.deepStrictEqual(shifted, expected);
  });
});
