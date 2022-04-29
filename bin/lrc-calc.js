#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const program = require('commander');
const shift = require('../lib/shift');
const stretch = require('../lib/stretch');
const { version } = require('../package.json');

program
  .version(version)
  .usage('<options> file')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds')
  .option('-x, --stretch <rate>', 'stretch rate')
  .parse(process.argv);

const lrcCalc = async () => {
  const input = await fs.readFile(program.args[0], 'utf8');
  const sec = parseFloat(program.shift) || 0;
  const rate = parseFloat(program.stretch) || 1;

  const shifted = shift(input, sec);
  const lrc = stretch(shifted, rate);

  if (typeof program.output === 'string') {
    await fs.writeFile(program.output, lrc, 'utf8');
  } else {
    console.log(lrc); // eslint-disable-line no-console
  }
};

lrcCalc();
