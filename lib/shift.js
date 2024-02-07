import { lrcTimeFormat, parseLrc, serializeLrc } from './lrc.js';
import moment from 'moment';

const shiftLrc = (lrc, sec = 0) => {
  const parsed = parseLrc(lrc);
  const shifted = parsed.map(([time, lyrics]) => {
    const shiftedTime = moment(time, lrcTimeFormat).add(sec, 'seconds').format(lrcTimeFormat);
    return [shiftedTime, lyrics];
  });
  return serializeLrc(shifted);
};

export { shiftLrc };

export default shiftLrc;
