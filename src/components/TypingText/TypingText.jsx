import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TypingText.css';

const TypingText = ({ text, speed = 80, className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.span className={`typing-text ${className}`}>
      {displayed}
      {!done && <span className="typing-cursor">|</span>}
    </motion.span>
  );
};

export default TypingText;
