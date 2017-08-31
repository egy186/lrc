'use strict';

const format = 'HH:mm:ss,SSS';

const parse = (srt, linebreak = '\n') =>
  srt.trim().split(linebreak.repeat(2))
    .map(line => {
      const [
        ,
        time,
        lyrics
      ] = line.trim().split(linebreak);
      return [
        ...time.split('-->').map(s => s.trim()),
        lyrics
      ];
    });

const serialize = (srt, linebreak = '\n') =>
  srt
    .map(([
      start,
      end,
      lyrics
    ], index) => [
      index + 1,
      `${start} --> ${end}`,
      lyrics
    ].join(linebreak))
    .join(linebreak.repeat(2)) + linebreak;

module.exports = {
  format,
  parse,
  serialize
};
