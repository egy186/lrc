#!/usr/bin/env node

'use strict';

const { Command } = require('commander');
const fs = require('fs/promises');
const shift = require('../lib/shift');
const toSRT = require('../lib/to-srt');
const { version } = require('../package.json');

const program = new Command();

program
  .version(version)
  .argument('<file>', 'file input')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds', Number.parseFloat, 0)
  .action(async (file, options) => {
    const input = await fs.readFile(program.args[0], 'utf8');

    const shifted = shift(input, options.shift);
    const srt = toSRT(shifted);

    if (typeof options.output === 'string') {
      await fs.writeFile(options.output, srt, 'utf8');
    } else {
      console.log(srt); // eslint-disable-line no-console
    }
  });

program.parse();
