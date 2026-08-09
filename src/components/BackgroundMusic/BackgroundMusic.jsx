
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    // Try to play music automatically when page loads
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Browser blocked autoplay
        setIsPlaying(false);
      });
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (isPlaying) {
        // Turn music OFF
        audio.pause();
        setIsPlaying(false);
      } else {
        // Turn music ON
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio could not be played:', error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source
          src="/music/background-music.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Music Toggle Button */}
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

