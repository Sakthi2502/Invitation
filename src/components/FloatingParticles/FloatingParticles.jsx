import { motion } from 'framer-motion';
import './FloatingParticles.css';

const FloatingParticles = ({ type = 'mixed', count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 6,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
    type: type === 'mixed' ? ['star', 'heart', 'balloon', 'confetti'][i % 4] : type,
  }));

  const symbols = {
    star: '✦',
    heart: '♥',
    balloon: '🎈',
    confetti: '✨',
  };

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`particle particle-${p.type}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {symbols[p.type]}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingParticles;
