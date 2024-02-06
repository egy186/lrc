import { lrcTimeFormat, parseLrc, serializeLrc } from './lrc.js';
import { parseSrt, serializeSrt, srtTimeFormat } from './srt.js';
import { lrcToSrt } from './lrc-to-srt.js';
import { shiftLrc } from './shift.js';
import { srtToLrc } from './srt-to-lrc.js';
import { stretchLrc } from './stretch.js';

const lrcV1 = {
  LRC: {
    /** @deprecated Use `lrcTimeFormat` instead. */
    format: lrcTimeFormat,
    /** @deprecated Use `parseLrc` instead. */
    parse: parseLrc,
    /** @deprecated Use `serializeLrc` instead. */
    serialize: serializeLrc
  },
  SRT: {
    /** @deprecated Use `srtTimeFormat` instead. */
    format: srtTimeFormat,
    /** @deprecated Use `parseSrt` instead. */
    parse: parseSrt,
    /** @deprecated Use `serializeSrt` instead. */
    serialize: serializeSrt
  },
  /** @deprecated Use `srtToLrc` instead. */
  fromSRT: srtToLrc,
  /** @deprecated Use `shiftLrc` instead. */
  shift: shiftLrc,
  /** @deprecated Use `stretchLrc` instead. */
  stretch: stretchLrc,
  /** @deprecated Use `lrcToSrt` instead. */
  toSRT: lrcToSrt
};

const lrc = {
  ...lrcV1,
  lrcTimeFormat,
  lrcToSrt,
  parseLrc,
  parseSrt,
  serializeLrc,
  serializeSrt,
  shiftLrc,
  srtTimeFormat,
  srtToLrc,
  stretchLrc
};

export * from './lrc-to-srt.js';
export * from './lrc.js';
export * from './shift.js';
export * from './srt-to-lrc.js';
export * from './srt.js';
export * from './stretch.js';

export default lrc;
