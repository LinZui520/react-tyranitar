import type { Lyrics } from '../components';

export const readLyrics = async (url: string): Promise<Lyrics[]> => {
  const regex = /(\[\d{2}:\d{2}\.\d+])(.*)/;
  const text = await (await fetch(url)).text();

  return text.split('\n')
    .map(line => line.match(regex))
    .filter(match => match !== null)
    .map(match => {
      const timeArr = match[1].slice(1, -1).split(':');
      const seconds = 60 * parseInt(timeArr[0]) + parseFloat(timeArr[1]);
      return {
        time: match[1],
        text: match[2],
        seconds
      };
    });
};
