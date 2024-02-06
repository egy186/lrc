import { stretchLrc } from './index.js';

const lrc = `[00:08.88]lyrics
[00:12.34]
`;

describe('stretch', () => {
  it('do nothing', () => {
    const stretched = stretchLrc(lrc);
    expect(stretched).toStrictEqual(lrc);
  });
  it('stretch LRC', () => {
    const stretched = stretchLrc(lrc, 2);
    const expected = `[00:17.76]lyrics
[00:24.68]
`;
    expect(stretched).toStrictEqual(expected);
  });
});
