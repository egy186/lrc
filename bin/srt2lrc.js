#!/usr/bin/env node

'use strict';

const fromSRT = require('../lib/from-srt');
const fs = require('fs/promises');
const program = require('commander');
const shift = require('../lib/shift');
const { version } = require('../package.json');

program
  .version(version)
  .usage('[options] file')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds')
  .parse(process.argv);

const srt2lrc = async () => {
  const input = await fs.readFile(program.args[0], 'utf8');
  const sec = parseFloat(program.shift) || 0;

  const lrc = fromSRT(input);
  const result = shift(lrc, sec);

  if (typeof program.output === 'string') {
    await fs.writeFile(program.output, result, 'utf8');
  } else {
    console.log(result); // eslint-disable-line no-console
  }
};

srt2lrc();
