import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lyrics from './Lyrics';

export type Music = {
  title?: string,
  cover: string,
  audio: string,
  lyrics?: string,
};

type TyranitarProps = {
  music: Music,
  style?: React.CSSProperties,
  size: number,
};

const Tyranitar = (props: TyranitarProps) => {

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleClick = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().then(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const handleEnded = () => setIsPlaying(false);
    audioElement.addEventListener('ended', handleEnded);
    return () => audioElement.removeEventListener('ended', handleEnded);
  }, [audioRef.current]);

  const [titleWidth, setTitleWidth] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [lyricsWidth, setLyricsWidth] = useState(0);

  useEffect(() => {
    setTitleWidth(spanRef.current?.offsetWidth || 0);
  }, [spanRef.current]);

  return (
    <motion.button
      onClick={handleClick}
      style={{
        ...props.style,
        width: props.size + 'px',
        height: props.size + 'px'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        width: isPlaying
          ? props.size + (props.music.title ? titleWidth + 2 / 5 * props.size : 0)
            + (props.music.lyrics ? lyricsWidth + 2 * props.size : 0) + 'px'
          : props.size + 'px',
        scale: 1,
        opacity: 1
      }}
      transition={{
        duration: 0.618,
        type: audioRef.current?.paused ? 'tween' : 'spring',
        stiffness: 100, damping: 10
      }}
      className={
        'relative select-none overflow-hidden ' +
        'border-[2px] border-double rounded-full bg-[#fbfbfd] ' +
        'flex flex-row items-center justify-start drop-shadow-md'
      }
    >
      <img
        height={props.size - 8} width={props.size - 8}
        src={props.music.cover} alt={''}
        className={'m-[2px] rounded-full animate-spin-8s'}
        style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
      />

      <svg
        height={props.size * 2 / 5} width={props.size * 2 / 5}
        style={{
          left: (props.size * 3 / 10 - 2) + 'px',
          bottom: (props.size * 3 / 10 - 2) + 'px'
        }}
        xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'
        className={'absolute'}
      >
        <AnimatePresence>
          <motion.path
            key={isPlaying ? 'pause' : 'play'}
            fill={'#fbfbfd'}  opacity={0.8}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            exit={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 0.618, ease: 'easeInOut' }}
            d={isPlaying
              ? 'M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z'
              : 'M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z'
            }
          />
        </AnimatePresence>
      </svg>

      {props.music.title && <motion.span
        ref={spanRef}
        initial={{ y: 0.5 * props.size, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.618,
          type: 'spring',
          stiffness: 100, damping: 10
        }}
        style={{fontSize: (props.size * 2 / 5) + 'px', margin: (props.size / 5) + 'px'}} 
        className='text-nowrap font-light text-[#7d7d7e]'
      >
        {props.music.title}
      </motion.span>}

      {props.music.lyrics && <Lyrics
        setLyricsWidth={setLyricsWidth}
        lyrics={props.music.lyrics}
        audioRef={audioRef}
        style={{fontSize: (props.size / 3) + 'px', margin: props.size + 'px'}}
        size={props.size}
      />}

      <audio ref={audioRef}>
        <source src={props.music.audio} type='audio/mp3' />
      </audio>
    </motion.button>
  );
};

export default Tyranitar;
