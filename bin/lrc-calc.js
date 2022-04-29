#!/usr/bin/env node

'use strict';

const { Command } = require('commander');
const fs = require('fs/promises');
const shift = require('../lib/shift');
const stretch = require('../lib/stretch');
const { version } = require('../package.json');

const program = new Command();

program
  .version(version)
  .argument('<file>', 'file input')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds', Number.parseFloat, 0)
  .option('-x, --stretch <rate>', 'stretch rate', Number.parseFloat, 1)
  .action(async (file, options) => {
    const input = await fs.readFile(file, 'utf8');

    const shifted = shift(input, options.shift);
    const lrc = stretch(shifted, options.stretch);

    if (typeof options.output === 'string') {
      await fs.writeFile(options.output, lrc, 'utf8');
    } else {
      console.log(lrc); // eslint-disable-line no-console
    }
  });

program.parse();
