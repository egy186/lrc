'use strict';

const fromSRT = require('./from-srt');
const { lrc, srt } = require('../test-fixtures');

describe('fromSRT', () => {
  test('convert from SRT to LRC', () => {
    const result = fromSRT(srt);
    expect(result).toStrictEqual(lrc);
  });
});
