
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;

      // Automatically start music
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Autoplay blocked by browser:', error);
          setIsPlaying(false);
        });
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        // Turn OFF
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Turn ON
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio could not be played:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
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
