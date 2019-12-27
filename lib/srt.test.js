'use strict';

const SRT = require('./srt');
const { srt } = require('../test-fixtures');

describe('SRT', () => {
  test('have format', () => {
    expect(typeof SRT.format).toStrictEqual('string');
  });
  test('parse and serialize SRT', () => {
    const parsed = SRT.parse(srt);
    const serialized = SRT.serialize(parsed);
    expect(serialized).toStrictEqual(srt);
  });
});
