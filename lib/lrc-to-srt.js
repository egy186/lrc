import { lrcTimeFormat, parseLrc } from './lrc.js';
import { serializeSrt, srtTimeFormat } from './srt.js';
import moment from 'moment';

const lrcToSrt = lrc => {
  const parsed = parseLrc(lrc);
  const double = parsed.slice(1).map((line, index) => [parsed[index], line]);
  const srt = double.map(([[start, lyrics], [end]]) => {
    const startTime = moment(start, lrcTimeFormat).format(srtTimeFormat);
    const endTime = moment(end, lrcTimeFormat).format(srtTimeFormat);
    return [
      startTime,
      endTime,
      lyrics
    ];
  });
  const serialized = serializeSrt(srt);
  return serialized;
};

export { lrcToSrt };

export default lrcToSrt;
