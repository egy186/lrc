'use strict';

const assert = require('assert');
const { srt } = require('./fixtures/index');
const { SRT } = require('..');

describe('SRT', () => {
  it('should have format', () => {
    assert.deepStrictEqual(typeof SRT.format, 'string');
  });
  it('should parse and serialize SRT', () => {
    const parsed = SRT.parse(srt);
    const serialized = SRT.serialize(parsed);
    assert.deepStrictEqual(serialized, srt);
  });
});
