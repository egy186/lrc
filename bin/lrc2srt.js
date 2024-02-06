#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { Command } from 'commander';
import { lrcToSrt } from '../lib/lrc-to-srt.js';
import { shiftLrc } from '../lib/shift.js';
import { version } from '../package.json';

const program = new Command();

program
  .version(version)
  .argument('<file>', 'file input')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds', Number.parseFloat, 0)
  .action(async (file, options) => {
    const input = await readFile(program.args[0], 'utf8');

    const shifted = shiftLrc(input, options.shift);
    const srt = lrcToSrt(shifted);

    if (typeof options.output === 'string') {
      await writeFile(options.output, srt, 'utf8');
    } else {
      console.log(srt); // eslint-disable-line no-console
    }
  });

program.parse();
