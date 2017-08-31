'use strict';

const assert = require('assert');
const { lrc } = require('./fixtures/index');
const { LRC } = require('..');

describe('LRC', () => {
  it('should have format', () => {
    assert.deepStrictEqual(typeof LRC.format, 'string');
  });
  it('should parse and serialize LRC', () => {
    const parsed = LRC.parse(lrc);
    const serialized = LRC.serialize(parsed);
    assert.deepStrictEqual(serialized, lrc);
  });
});
