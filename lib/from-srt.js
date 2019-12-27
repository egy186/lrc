'use strict';

const LRC = require('./lrc');
const SRT = require('./srt');
const moment = require('moment');

const fromSRT = srt => {
  const parsed = SRT.parse(srt);
  parsed.push([
    parsed[parsed.length - 1][1],
    '',
    undefined
  ]);
  const lrc = parsed.map(([start,, lyrics = '']) => {
    const time = moment(start, SRT.format).format(LRC.format);
    return [time, lyrics];
  });
  const serialized = LRC.serialize(lrc);
  return serialized;
};

module.exports = fromSRT;
