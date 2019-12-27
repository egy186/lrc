'use strict';

const LRC = require('./lrc');
const { lrc } = require('../test-fixtures');

describe('LRC', () => {
  test('have format', () => {
    expect(typeof LRC.format).toStrictEqual('string');
  });
  test('parse and serialize LRC', () => {
    const parsed = LRC.parse(lrc);
    const serialized = LRC.serialize(parsed);
    expect(serialized).toStrictEqual(lrc);
  });
});
