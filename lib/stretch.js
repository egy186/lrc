'use strict';

const moment = require('moment');
const { format, parse, serialize } = require('./lrc');

const stretch = (lrc, rate = 1) => {
  const zero = moment('00:00.00', format);
  const parsed = parse(lrc);
  const stretched = parsed.map(([time, lyrics]) => {
    const diff = moment(time, format).diff(zero);
    const stretchedTime = zero.clone().add(diff * rate, 'milliseconds').format(format);
    return [stretchedTime, lyrics];
  });
  return serialize(stretched);
};

module.exports = stretch;
