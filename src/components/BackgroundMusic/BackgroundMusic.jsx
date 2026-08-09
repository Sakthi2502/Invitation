import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(true);
      } else {
        await audioRef.current.play();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Audio could not be played:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/Dada.mp3"
        loop
        preload="auto"
      />

      <motion.button
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Mute music' : 'Play music'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <FaMusic /> : <FaVolumeMute />}
      </motion.button>
    </>
  );
};

export default BackgroundMusic;