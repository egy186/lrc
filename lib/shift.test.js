'use strict';

const shift = require('./shift');

const lrc = `[00:08.88]lyrics
[00:12.34]
`;

describe('shift', () => {
  test('do nothing', () => {
    const shifted = shift(lrc);
    expect(shifted).toStrictEqual(lrc);
  });
  test('shift LRC', () => {
    const shifted = shift(lrc, 10);
    const expected = `[00:18.88]lyrics
[00:22.34]
`;
    expect(shifted).toStrictEqual(expected);
  });
});
