import { motion } from 'framer-motion';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import TypingText from '../TypingText/TypingText';
import { invitationData } from '../../data/invitationData';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <FloatingParticles type="heart" count={15} />

      <div className="container hero-container">
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="hero-photo-ring" />
          <motion.img
            src={invitationData.photos.main}
            alt={invitationData.babyName}
            className="hero-photo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TypingText text={invitationData.babyName} speed={120} />
        </motion.h1>

        <motion.p
          className="hero-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {invitationData.quote}
        </motion.p>

        <motion.div
          className="hero-hearts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          {['💜', '💜', '💜'].map((heart, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
