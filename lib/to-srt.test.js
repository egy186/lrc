'use strict';

const toSRT = require('./to-srt');
const { lrc, srt } = require('../test-fixtures');

describe('toSRT', () => {
  test('convert from LRC to SRT', () => {
    const result = toSRT(lrc);
    expect(result).toStrictEqual(srt);
  });
});
