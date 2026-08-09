import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PopperIcon } from '../DecorIcons/DecorIcons';
import './PartyPopper.css';

const COLORS = ['#FFD700', '#FF69B4', '#FF1493', '#C084FC', '#FFFFFF', '#FF6B9D', '#E879F9', '#FBBF24'];

const createParticles = (count = 80) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 600,
    y: -(Math.random() * 500 + 100),
    rotate: Math.random() * 720 - 360,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: Math.random() * 10 + 4,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
    delay: Math.random() * 0.15,
  }));

const PartyPopper = ({ active, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      setParticles(createParticles(100));
      const timer = setTimeout(onComplete, 1800);
      return () => clearTimeout(timer);
    }
    setParticles([]);
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className="party-popper-overlay" aria-hidden="true">
      <motion.div
        className="popper-burst popper-left"
        initial={{ scale: 0, rotate: -30, opacity: 1 }}
        animate={{ scale: 1.8, rotate: -15, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <PopperIcon size={52} className="icon-popper" />
      </motion.div>

      <motion.div
        className="popper-burst popper-right"
        initial={{ scale: 0, rotate: 30, opacity: 1 }}
        animate={{ scale: 1.8, rotate: 15, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <PopperIcon size={52} className="icon-popper-alt" />
      </motion.div>

      <motion.div
        className="popper-burst popper-center"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <PopperIcon size={64} className="icon-popper-purple" />
      </motion.div>

      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`confetti-piece confetti-${p.shape}`}
            style={{
              backgroundColor: p.color,
              width: p.shape === 'circle' ? p.size : p.size * 0.6,
              height: p.size,
              left: '50%',
              top: '55%',
            }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
            animate={{
              x: p.x,
              y: p.y,
              opacity: [1, 1, 0],
              rotate: p.rotate,
              scale: [1, 1.2, 0.5],
            }}
            transition={{
              duration: 1.6,
              delay: p.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </AnimatePresence>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`streamer-${i}`}
          className="confetti-streamer"
          style={{
            backgroundColor: COLORS[i % COLORS.length],
            left: '50%',
            top: '55%',
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: i * 30 }}
          animate={{
            x: Math.cos((i * 30 * Math.PI) / 180) * 350,
            y: Math.sin((i * 30 * Math.PI) / 180) * 350 - 100,
            opacity: [1, 0.8, 0],
            rotate: i * 30 + 180,
          }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};

export default PartyPopper;
