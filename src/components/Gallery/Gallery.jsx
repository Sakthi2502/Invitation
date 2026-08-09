import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { invitationData } from '../../data/invitationData';
import './Gallery.css';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = invitationData.photos.gallery;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => setLightboxIndex((prev) => (prev + 1) % photos.length);
  const goPrev = () => setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Little Memories
        </motion.h2>
        <p className="section-subtitle">Precious moments captured with love</p>

        <div className="gallery-grid">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(i)}
            >
              <img src={src} alt={`Memory ${i + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <FaTimes />
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <motion.img
              key={lightboxIndex}
              src={photos[lightboxIndex]}
              alt={`Memory ${lightboxIndex + 1}`}
              className="lightbox-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
