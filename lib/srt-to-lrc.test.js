import { describe, it } from 'node:test';
import { lrc, srt } from '../test-fixtures/index.js';
import { strict as assert } from 'node:assert';
import { srtToLrc } from './index.js';

describe('srtToLrc', () => {
  it('convert from SRT to LRC', () => {
    const result = srtToLrc(srt);

    assert.equal(result, lrc);
  });
});
