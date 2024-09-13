import { parseSrt, serializeSrt, srtTimeFormat } from './index.js';
import { srt } from '../test-fixtures/index.js';

describe('srt', () => {
  it('have format', () => {
    expect(typeof srtTimeFormat).toBe('string');
  });

  it('parse and serialize SRT', () => {
    const parsed = parseSrt(srt);
    const serialized = serializeSrt(parsed);

    expect(serialized).toStrictEqual(srt);
  });
});
