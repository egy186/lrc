'use strict';

const LRC = require('./lrc');
const SRT = require('./srt');
const fromSRT = require('./from-srt');
const shift = require('./shift');
const stretch = require('./stretch');
const toSRT = require('./to-srt');

const lrc = {
  LRC,
  SRT,
  fromSRT,
  shift,
  stretch,
  toSRT
};

module.exports = lrc;
