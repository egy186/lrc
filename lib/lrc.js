'use strict';

const format = 'mm:ss.SS';

const parse = (lrc, linebreak = '\n') => lrc.trim().split(linebreak)
  .map(s => s.substring(1).split(']'));

const serialize = (lrc, linebreak = '\n') => lrc
  .map(([time, lyrics]) => `[${time}]${lyrics}`)
  .join(linebreak) + linebreak;

module.exports = {
  format,
  parse,
  serialize
};
