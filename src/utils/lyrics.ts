import type { Lyrics } from '../components';

export const readLyrics = async (url: string): Promise<Lyrics[]> => {
  const regex = /(?<time>\[\d{2}:\d{2}\.\d+\])(?<text>.*)/u;
  const text = await (await fetch(url)).text();

  return text.split('\n')
    .map(line => line.match(regex))
    .filter(match => match !== null)
    .map(match => {
      const timeArr = match[1].slice(1, -1).split(':');
      const seconds = 60 * parseInt(timeArr[0], 10) + parseFloat(timeArr[1]);
      return {
        seconds,
        text: match[2],
        time: match[1],
      };
    });
};
