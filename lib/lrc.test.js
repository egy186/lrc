import { describe, it } from 'node:test';
import { lrcTimeFormat, parseLrc, serializeLrc } from './index.js';
import { strict as assert } from 'node:assert';
import { lrc } from '../test-fixtures/index.js';

describe('lrc', () => {
  it('have format', () => {
    assert.equal(typeof lrcTimeFormat, 'string');
  });

  it('parse and serialize LRC', () => {
    const parsed = parseLrc(lrc);
    const serialized = serializeLrc(parsed);

    assert.equal(serialized, lrc);
  });
});
