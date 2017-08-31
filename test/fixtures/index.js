'use strict';

const fs = require('fs');
const path = require('path');

const lrc = fs.readFileSync(path.join(__dirname, './index.lrc'), 'utf8');
const srt = fs.readFileSync(path.join(__dirname, './index.srt'), 'utf8');

module.exports = {
  lrc,
  srt
};
