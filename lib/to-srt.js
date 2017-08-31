'use strict';

const LRC = require('./lrc');
const SRT = require('./srt');
const moment = require('moment');

const toSRT = lrc => {
  const parsed = LRC.parse(lrc);
  const double = parsed.slice(1).map((line, index) => [
    parsed[index],
    line
  ]);
  const srt = double
    .map(([
      [
        start,
        lyrics
      ],
      [end]
    ]) => [
      moment(start, LRC.format).format(SRT.format),
      moment(end, LRC.format).format(SRT.format),
      lyrics
    ]);
  const serialized = SRT.serialize(srt);
  return serialized;
};

module.exports = toSRT;
