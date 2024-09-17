import { describe, it } from 'node:test';
import { parseSrt, serializeSrt, srtTimeFormat } from './index.js';
import { strict as assert } from 'node:assert';
import { srt } from '../test-fixtures/index.js';

describe('srt', () => {
  it('have format', () => {
    assert.equal(typeof srtTimeFormat, 'string');
  });

  it('parse and serialize SRT', () => {
    const parsed = parseSrt(srt);
    const serialized = serializeSrt(parsed);

    assert.equal(serialized, srt);
  });
});
