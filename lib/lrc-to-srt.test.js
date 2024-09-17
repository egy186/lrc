import { describe, it } from 'node:test';
import { lrc, srt } from '../test-fixtures/index.js';
import { strict as assert } from 'node:assert';
import { lrcToSrt } from './index.js';

describe('lrcToSrt', () => {
  it('convert from LRC to SRT', () => {
    const result = lrcToSrt(lrc);

    assert.equal(result, srt);
  });
});
