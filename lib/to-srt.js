'use strict';

const LRC = require('./lrc');
const SRT = require('./srt');
const moment = require('moment');

const toSRT = lrc => {
  const parsed = LRC.parse(lrc);
  const double = parsed.slice(1).map((line, index) => [parsed[index], line]);
  const srt = double.map(([[start, lyrics], [end]]) => {
    const startTime = moment(start, LRC.format).format(SRT.format);
    const endTime = moment(end, LRC.format).format(SRT.format);
    return [
      startTime,
      endTime,
      lyrics
    ];
  });
  const serialized = SRT.serialize(srt);
  return serialized;
};

module.exports = toSRT;
