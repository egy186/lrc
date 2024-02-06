#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { Command } from 'commander';
import { shiftLrc } from '../lib/shift.js';
import { srtToLrc } from '../lib/srt-to-lrc.js';
import { version } from '../package.json';

const program = new Command();

program
  .version(version)
  .argument('<file>', 'file input')
  .option('-o, --output <path>', 'file output')
  .option('-s, --shift <seconds>', 'shift in seconds', Number.parseFloat, 0)
  .action(async (file, options) => {
    const input = await readFile(file, 'utf8');

    const parsed = srtToLrc(input);
    const lrc = shiftLrc(parsed, options.shift);

    if (typeof options.output === 'string') {
      await writeFile(options.output, lrc, 'utf8');
    } else {
      console.log(lrc); // eslint-disable-line no-console
    }
  });

program.parse();
