'use strict';

const assert = require('assert');
const { fromSRT } = require('..');
const { lrc, srt } = require('./fixtures/index');

describe('fromSRT', () => {
  it('should convert from SRT to LRC', () => {
    const result = fromSRT(srt);
    assert.deepStrictEqual(result, lrc);
  });
});
