import { AnimatePresence, motion } from 'framer-motion';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { readLyrics } from '../utils';

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
    readLyrics(props.lyrics).then(res => setLyrics(res));
  }, [props.lyrics]);

  useEffect(() => {
    const audioElement = props.audioRef.current;

    const handleTimeUpdate = () => {
      if (!audioElement) { return; }
      const lyric = lyrics.filter(item => audioElement.currentTime > item.seconds).pop();
      setCurrentLyric(typeof lyric === 'undefined' ? null : lyric);
    };
    const handleEnded = () => setCurrentLyric(null);
    audioElement?.addEventListener('timeupdate', handleTimeUpdate);
    audioElement?.addEventListener('ended', handleEnded);

    return () => {
      audioElement?.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement?.removeEventListener('ended', handleEnded);
    };
  }, [props.audioRef, lyrics]);

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      entries.map(entry => props.setLyricsWidth(entry.contentRect.width));
    });
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, [divRef.current]);

  return (
    <div ref={divRef} style={{ margin: `${props.size}px` }} className='flex flex-col justify-center'>
      <AnimatePresence>
        <motion.span
          key={currentLyric ? currentLyric.seconds : 'default'}
          style={{ fontSize: `${props.size / 3}px` }}
          className='text-nowrap italic text-[#7d7d7e]'
          initial={{ opacity: 0, y: 0.8 * props.size }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, position: 'absolute', y: -0.8 * props.size }}
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
