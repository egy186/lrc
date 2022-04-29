#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const program = require('commander');
const shift = require('../lib/shift');
const toSRT = require('../lib/to-srt');
const { version } = require('../package.json');

program
  .version(version)
  .usage('[options] file')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds')
  .parse(process.argv);

const lrc2srt = async () => {
  const input = await fs.readFile(program.args[0], 'utf8');
  const sec = parseFloat(program.shift) || 0;

  const shifted = shift(input, sec);
  const srt = toSRT(shifted);

  if (typeof program.output === 'string') {
    await fs.writeFile(program.output, srt, 'utf8');
  } else {
    console.log(srt); // eslint-disable-line no-console
  }
};

lrc2srt();
