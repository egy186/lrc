'use strict';

const moment = require('moment');
const { format, parse, serialize } = require('./lrc');

const shift = (lrc, sec = 0) => {
  const parsed = parse(lrc);
  const shifted = parsed.map(([
    time,
    lyrics
  ]) => [
    moment(time, format).add(sec, 'seconds').format(format),
    lyrics
  ]);
  return serialize(shifted);
};

module.exports = shift;
