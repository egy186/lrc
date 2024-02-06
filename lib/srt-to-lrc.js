import { lrcTimeFormat, serializeLrc } from './lrc.js';
import { parseSrt, srtTimeFormat } from './srt.js';
import moment from 'moment';

const srtToLrc = srt => {
  const parsed = parseSrt(srt);
  parsed.push([
    parsed[parsed.length - 1][1],
    '',
    undefined
  ]);
  const lrc = parsed.map(([start,, lyrics = '']) => {
    const time = moment(start, srtTimeFormat).format(lrcTimeFormat);
    return [time, lyrics];
  });
  const serialized = serializeLrc(lrc);
  return serialized;
};

export { srtToLrc };

export default srtToLrc;
