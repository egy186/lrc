const srtTimeFormat = 'HH:mm:ss,SSS';

const parseSrt = (srt, linebreak = '\n') => srt.trim().split(linebreak.repeat(2))
  .map(line => {
    const [
      ,
      time,
      lyrics
    ] = line.trim().split(linebreak);
    return [...time.split('-->').map(s => s.trim()), lyrics];
  });

const serializeSrt = (srt, linebreak = '\n') => srt
  .map(([
    start,
    end,
    lyrics
  ], index) => [
    index + 1,
    `${start} --> ${end}`,
    lyrics
  ].join(linebreak))
  .join(linebreak.repeat(2)) + linebreak;

const srt = {
  parseSrt,
  serializeSrt,
  srtTimeFormat
};

export {
  parseSrt,
  serializeSrt,
  srtTimeFormat
};

export default srt;
