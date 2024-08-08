import React, { RefObject, useEffect, useRef, useState } from 'react';
import { readLyrics } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';

export type Lyrics = {
  time: string,
  text: string,
  seconds: number,
};

type LyricsProps = {
  lyrics: string,
  audioRef: RefObject<HTMLAudioElement>,
  style?: React.CSSProperties,
  size: number,
  setLyricsWidth: React.Dispatch<React.SetStateAction<number>>,
};

const Lyrics = (props: LyricsProps) => {

  const [lyrics, setLyrics] = useState<Lyrics[]>([]);
  const [currentLyric, setCurrentLyric] = useState<Lyrics | null>(null);

  useEffect(() => {
    readLyrics(props.lyrics).then(lyrics => setLyrics(lyrics));
  }, [props.lyrics]);

  useEffect(() => {
    if (!props.audioRef.current) return;
    const audioElement = props.audioRef.current;

    const handleTimeUpdate = () => {
      const lyric = lyrics.filter(lyric => audioElement.currentTime > lyric.seconds).pop();
      setCurrentLyric(lyric === undefined ? null : lyric);
    };
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    const handleEnded = () => setCurrentLyric(null);
    audioElement.addEventListener('ended', handleEnded);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('ended', handleEnded);
    };
  }, [props.audioRef, lyrics]);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = divRef.current;
    if (!divElement) return;

    const resizeObserver = new ResizeObserver(entries => {
      entries.map(entry => props.setLyricsWidth(entry.contentRect.width));
    });
    resizeObserver.observe(divElement);
    return () => resizeObserver.unobserve(divElement);
  }, [divRef.current]);

  return (
    <div ref={divRef} style={{ margin: props.size + 'px' }} className='flex flex-col justify-center'>
      <AnimatePresence>
        <motion.span
          key={currentLyric ? currentLyric.seconds : 'default'}
          style={{ fontSize: (props.size / 3) + 'px' }}
          className='text-nowrap italic text-[#7d7d7e]'
          initial={{ y: 0.8 * props.size, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -0.8 * props.size, opacity: 0, position: 'absolute' }}
          transition={{
            duration: 0.618, ease: 'easeInOut'
          }}
        >
          {currentLyric?.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Lyrics;
