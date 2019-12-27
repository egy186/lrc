'use strict';

const stretch = require('./stretch');

const lrc = `[00:08.88]lyrics
[00:12.34]
`;

describe('stretch', () => {
  test('do nothing', () => {
    const stretched = stretch(lrc);
    expect(stretched).toStrictEqual(lrc);
  });
  test('stretch LRC', () => {
    const stretched = stretch(lrc, 2);
    const expected = `[00:17.76]lyrics
[00:24.68]
`;
    expect(stretched).toStrictEqual(expected);
  });
});
