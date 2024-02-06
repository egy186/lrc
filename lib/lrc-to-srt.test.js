import { lrc, srt } from '../test-fixtures/index.js';
import { lrcToSrt } from './index.js';

describe('lrcToSrt', () => {
  it('convert from LRC to SRT', () => {
    const result = lrcToSrt(lrc);
    expect(result).toStrictEqual(srt);
  });
});
