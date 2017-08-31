'use strict';

const LRC = require('./lib/lrc');
const SRT = require('./lib/srt');
const fromSRT = require('./lib/from-srt');
const shift = require('./lib/shift');
const stretch = require('./lib/stretch');
const toSRT = require('./lib/to-srt');

const lrc = {
  LRC,
  SRT,
  fromSRT,
  shift,
  stretch,
  toSRT
};

module.exports = lrc;
