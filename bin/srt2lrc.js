#!/usr/bin/env node

'use strict';

const { Command } = require('commander');
const fromSRT = require('../lib/from-srt');
const fs = require('fs/promises');
const shift = require('../lib/shift');
const { version } = require('../package.json');

const program = new Command();

program
  .version(version)
  .argument('<file>', 'file input')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds', Number.parseFloat, 0)
  .action(async (file, options) => {
    const input = await fs.readFile(file, 'utf8');

    const parsed = fromSRT(input);
    const lrc = shift(parsed, options.shift);

    if (typeof options.output === 'string') {
      await fs.writeFile(options.output, lrc, 'utf8');
    } else {
      console.log(lrc); // eslint-disable-line no-console
    }
  });

program.parse();
