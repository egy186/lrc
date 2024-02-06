import { readFile } from 'node:fs/promises';

const lrc = await readFile(new URL('./index.lrc', import.meta.url), 'utf8');
const srt = await readFile(new URL('./index.srt', import.meta.url), 'utf8');

const fixtures = {
  lrc,
  srt
};

export { lrc, srt };

export default fixtures;
