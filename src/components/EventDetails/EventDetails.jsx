import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTshirt,
  FaEnvelopeOpen,
} from 'react-icons/fa';
import { invitationData } from '../../data/invitationData';
import './EventDetails.css';

const details = [
  {
    icon: FaCalendarAlt,
    label: 'Date',
    value: invitationData.event.displayDate,
  },
  {
    icon: FaClock,
    label: 'Time',
    value: invitationData.event.displayTime,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Venue',
    value: invitationData.event.venue,
    sub: invitationData.event.address,
  },
];

const EventDetails = () => {
  return (
    <section className="event-details" id="details">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Event Details
        </motion.h2>
        <p className="section-subtitle">Everything you need to know for the celebration</p>

        <div className="details-grid">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="detail-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(107, 33, 168, 0.35)' }}
            >
              <motion.div
                className="detail-icon"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon />
              </motion.div>
              <h3 className="detail-label">{item.label}</h3>
              <p className="detail-value">{item.value}</p>
              {item.sub && <p className="detail-sub">{item.sub}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
