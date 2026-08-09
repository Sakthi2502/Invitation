import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { invitationData } from '../../data/invitationData';
import './Location.css';

const Location = () => {
  return (
    <section className="location-section" id="location">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Find Us
        </motion.h2>

        <motion.div
          className="location-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="location-info">
            <FaMapMarkerAlt className="location-pin" />
            <h3 className="location-venue">{invitationData.event.venue}</h3>
            <p className="location-address">{invitationData.event.address}</p>

            <motion.a
              href={invitationData.event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              Open in Google Maps
            </motion.a>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Event Location"
              src={invitationData.event.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
