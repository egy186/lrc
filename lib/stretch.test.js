import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { stretchLrc } from './index.js';

const lrc = `[00:08.88]lyrics
[00:12.34]
`;

describe('stretch', () => {
  it('do nothing', () => {
    const stretched = stretchLrc(lrc);

    assert.equal(stretched, lrc);
  });

  it('stretch LRC', () => {
    const stretched = stretchLrc(lrc, 2);
    const expected = `[00:17.76]lyrics
[00:24.68]
`;

    assert.equal(stretched, expected);
  });
});
