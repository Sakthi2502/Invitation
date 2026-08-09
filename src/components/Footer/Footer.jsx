import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaGlobe } from 'react-icons/fa';
import { invitationData } from '../../data/invitationData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="container footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="footer-thanks">Thank You</h2>
          <p className="footer-message">We look forward to celebrating with you.</p>
        </motion.div>

        <div className="footer-divider" />

        <motion.div
          className="footer-brand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="footer-designed">Designed &amp; Developed by</p>
          <p className="footer-brand-name">{invitationData.brand}</p>
        </motion.div>

        <div className="footer-social">
          {[
            // { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
            // { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
            // { icon: FaGlobe, href: 'https://codecraftbysakthi.com', label: 'Website' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

 <p className="footer-copyright">
  &copy; 2026 {invitationData.brand}.
  <br />
  <a
    href="tel:8098693640"
    className="footer-contact"
  >
    Contact : 8098693640
  </a>
</p>
      </div>
    </footer>
  );
};

export default Footer;
