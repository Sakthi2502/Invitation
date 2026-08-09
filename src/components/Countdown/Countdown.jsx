import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../../data/invitationData';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isComplete, setIsComplete] = useState(false);

  function calculateTimeLeft() {
    const difference = new Date(invitationData.countdownTarget) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      if (!remaining) {
        setIsComplete(true);
        clearInterval(timer);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft?.days ?? 0 },
    { label: 'Hours', value: timeLeft?.hours ?? 0 },
    { label: 'Minutes', value: timeLeft?.minutes ?? 0 },
    { label: 'Seconds', value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <section className="countdown-section" id="countdown">
      <div className="countdown-bg-animation" />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Countdown to the Celebration
        </motion.h2>

        {isComplete ? (
          <motion.div
            className="countdown-complete"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="complete-emoji">🎉</span>
            <h3>The Celebration Begins!</h3>
          </motion.div>
        ) : (
          <div className="countdown-grid">
            {units.map((unit, i) => (
              <motion.div
                key={unit.label}
                className="countdown-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192, 132, 252, 0.5)' }}
              >
                <motion.span
                  key={unit.value}
                  className="countdown-value"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
                <span className="countdown-label">{unit.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;
