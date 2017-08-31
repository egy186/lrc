'use strict';

const assert = require('assert');
const { lrc, srt } = require('./fixtures/index');
const { toSRT } = require('..');

describe('toSRT', () => {
  it('should convert from LRC to SRT', () => {
    const result = toSRT(lrc);
    assert.deepStrictEqual(result, srt);
  });
});
