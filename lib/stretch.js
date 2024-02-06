import { lrcTimeFormat, parseLrc, serializeLrc } from './lrc.js';
import moment from 'moment';

const stretchLrc = (lrc, rate = 1) => {
  const zero = moment('00:00.00', lrcTimeFormat);
  const parsed = parseLrc(lrc);
  const stretched = parsed.map(([time, lyrics]) => {
    const diff = moment(time, lrcTimeFormat).diff(zero);
    const stretchedTime = zero.clone().add(diff * rate, 'milliseconds').format(lrcTimeFormat);
    return [stretchedTime, lyrics];
  });
  return serializeLrc(stretched);
};

export { stretchLrc };

export default stretchLrc;
