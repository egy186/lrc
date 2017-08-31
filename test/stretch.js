'use strict';

const assert = require('assert');
const { stretch } = require('..');

const lrc = '[00:08.88]lyrics\n[00:12.34]\n';

describe('stretch', () => {
  it('should do nothing', () => {
    const stretched = stretch(lrc);
    assert.deepStrictEqual(stretched, lrc);
  });
  it('should stretch LRC', () => {
    const stretched = stretch(lrc, 2);
    const expected = '[00:17.76]lyrics\n[00:24.68]\n';
    assert.deepStrictEqual(stretched, expected);
  });
});
