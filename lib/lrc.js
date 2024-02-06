const lrcTimeFormat = 'mm:ss.SS';

const parseLrc = (lrc, linebreak = '\n') => lrc.trim().split(linebreak)
  .map(s => s.substring(1).split(']'));

const serializeLrc = (lrc, linebreak = '\n') => lrc
  .map(([time, lyrics]) => `[${time}]${lyrics}`)
  .join(linebreak) + linebreak;

const lrc = {
  lrcTimeFormat,
  parseLrc,
  serializeLrc
};

export {
  lrcTimeFormat,
  parseLrc,
  serializeLrc
};

export default lrc;
