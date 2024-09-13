import { lrc, srt } from '../test-fixtures/index.js';
import { srtToLrc } from './index.js';

describe('srtToLrc', () => {
  it('convert from SRT to LRC', () => {
    const result = srtToLrc(srt);

    expect(result).toStrictEqual(lrc);
  });
});
