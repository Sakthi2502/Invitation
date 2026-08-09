import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell, FaCheckCircle } from 'react-icons/fa';
import { generateICS } from '../../utils/generateICS';
import { invitationData } from '../../data/invitationData';
import './Reminder.css';

const Reminder = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddReminder = () => {
    generateICS({
      title: `${invitationData.babyName}'s ${invitationData.babyAge}`,
      date: invitationData.event.date,
      time: invitationData.event.time,
      venue: invitationData.event.venue,
      address: invitationData.event.address,
      description: `Join us to celebrate ${invitationData.babyName}'s ${invitationData.babyAge}! ${invitationData.event.dressCode}`,
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="reminder-section" id="reminder">
      <div className="container">
        <motion.div
          className="reminder-wrapper glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <FaBell className="reminder-icon" />
          <h2 className="reminder-title">Don&apos;t Miss the Celebration!</h2>
          <p className="reminder-text">
            Add this event to your calendar and get reminded before the big day.
          </p>

          <motion.button
            className="reminder-btn"
            onClick={handleAddReminder}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBell />
            Add Reminder
          </motion.button>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="reminder-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <FaCheckCircle />
                <span>Calendar event downloaded successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Reminder;
