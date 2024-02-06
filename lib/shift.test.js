import { shiftLrc } from './index.js';

const lrc = `[00:08.88]lyrics
[00:12.34]
`;

describe('shift', () => {
  it('do nothing', () => {
    const shifted = shiftLrc(lrc);
    expect(shifted).toStrictEqual(lrc);
  });
  it('shift LRC', () => {
    const shifted = shiftLrc(lrc, 10);
    const expected = `[00:18.88]lyrics
[00:22.34]
`;
    expect(shifted).toStrictEqual(expected);
  });
});
