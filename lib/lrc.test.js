import { lrcTimeFormat, parseLrc, serializeLrc } from './index.js';
import { lrc } from '../test-fixtures/index.js';

describe('lrc', () => {
  it('have format', () => {
    expect(typeof lrcTimeFormat).toBe('string');
  });

  it('parse and serialize LRC', () => {
    const parsed = parseLrc(lrc);
    const serialized = serializeLrc(parsed);

    expect(serialized).toStrictEqual(lrc);
  });
});
