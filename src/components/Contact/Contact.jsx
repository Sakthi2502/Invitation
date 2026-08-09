import { motion } from 'framer-motion';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaUserTie,
  FaFemale,
  FaHeart,
  FaStar,
} from 'react-icons/fa';

import { invitationData } from '../../data/invitationData';

import './Contact.css';

const Contact = () => {
  const { contact, parents } = invitationData;

  return (
    <section className="contact-section">

      {/* =========================================
          HEADING
          ========================================= */}

      <motion.div
        className="contact-heading-wrapper"

        initial={{
          opacity: 0,
          y: 25,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}

        transition={{
          duration: 0.8,
        }}
      >

        <div className="contact-title-decoration">

          <motion.span
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.15, 1],
            }}

            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaStar />
          </motion.span>

          <span className="heading-line" />

          <motion.span
            animate={{
              rotate: [0, -15, 15, 0],
              scale: [1, 1.15, 1],
            }}

            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            <FaStar />
          </motion.span>

        </div>


        <motion.h2
          className="section-title"

          initial={{
            opacity: 0,
            letterSpacing: '0.4em',
          }}

          whileInView={{
            opacity: 1,
            letterSpacing: '0.08em',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.1,
          }}
        >
          Join the Celebration
        </motion.h2>


        <motion.p
          className="contact-subtitle"

          initial={{
            opacity: 0,
            y: 8,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          We'd love to hear from you
        </motion.p>

      </motion.div>


      {/* =========================================
          CONTACT CARD
          ========================================= */}

      <motion.div
        className="contact-card glass-card"

        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        viewport={{
          once: true,
          amount: 0.2,
        }}

        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >

        {/* Decorative glow */}

        <div className="contact-card-glow" />


        {/* =========================================
            FAMILY LABEL
            ========================================= */}

        <motion.div
          className="family-label"

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.25,
          }}
        >

          <span className="family-line" />

          <span className="family-icon">
            <FaHeart />
          </span>

          <span className="family-text">
            WITH LOVE
          </span>

          <span className="family-icon">
            <FaHeart />
          </span>

          <span className="family-line" />

        </motion.div>


        {/* =========================================
            PARENTS
            ========================================= */}

        <div className="contact-parents">


          {/* =====================================
              FATHER
              ===================================== */}

          <motion.div
            className="parent-card"

            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
              delay: 0.4,
            }}

            whileHover={{
              y: -4,
            }}
          >

            <motion.div
              className="parent-icon-wrapper"

              animate={{
                y: [0, -4, 0],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaUserTie className="parent-icon" />
            </motion.div>


            <div className="parent-content">

              <span className="parent-label">
                FATHER
              </span>

              <p className="parent-name">
                {parents.father}
              </p>

              <div className="name-underline">
                <span />
              </div>

            </div>

          </motion.div>


          {/* =====================================
              HEART DIVIDER
              ===================================== */}

          <motion.div
            className="parents-heart-divider"

            animate={{
              scale: [1, 1.15, 1],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span />
            <FaHeart />
            <span />
          </motion.div>


          {/* =====================================
              MOTHER
              ===================================== */}

          <motion.div
            className="parent-card"

            initial={{
              opacity: 0,
              x: 30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
              delay: 0.55,
            }}

            whileHover={{
              y: -4,
            }}
          >

            <motion.div
              className="parent-icon-wrapper"

              animate={{
                y: [0, -4, 0],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            >
              <FaFemale className="parent-icon" />
            </motion.div>


            <div className="parent-content">

              <span className="parent-label">
                MOTHER
              </span>

              <p className="parent-name">
                {parents.mother}
              </p>

              <div className="name-underline">
                <span />
              </div>

            </div>

          </motion.div>

        </div>


        {/* =========================================
            PHONE
            ========================================= */}

        <motion.div
          className="contact-info"

          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.7,
          }}
        >

          <a
            href={`tel:${contact.phone}`}
            className="contact-link"
          >

            <span className="phone-icon">
              <FaPhone />
            </span>

            <span>
              {contact.phone}
            </span>

          </a>


          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="contact-link"
            >
              <FaEnvelope />
              {contact.email}
            </a>
          )}

        </motion.div>


        {/* =========================================
            BUTTONS
            ========================================= */}

        <motion.div
          className="contact-buttons"

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
            delay: 0.85,
          }}
        >

          {/* CALL */}

          <motion.a
            href={`tel:${contact.phone}`}

            className="contact-btn rsvp-btn"

            whileHover={{
              scale: 1.04,
              y: -3,
            }}

            whileTap={{
              scale: 0.96,
            }}
          >

            <span className="button-icon">
              <FaPhone />
            </span>

            <span>
              Call
            </span>

          </motion.a>


          {/* WHATSAPP */}

          <motion.a
            href={`https://wa.me/${contact.whatsapp}?text=Hi! I'd love to confirm my presence for ${invitationData.babyName}'s birthday celebration!`}

            target="_blank"

            rel="noopener noreferrer"

            className="contact-btn whatsapp-btn"

            whileHover={{
              scale: 1.04,
              y: -3,
            }}

            whileTap={{
              scale: 0.96,
            }}
          >

            <span className="button-icon">
              <FaWhatsapp />
            </span>

            <span>
              WhatsApp
            </span>

          </motion.a>

        </motion.div>


        {/* =========================================
            BOTTOM DECORATION
            ========================================= */}

        <motion.div
          className="contact-bottom-decoration"

          initial={{
            width: 0,
            opacity: 0,
          }}

          whileInView={{
            width: '70%',
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 1,
          }}
        />

      </motion.div>

    </section>
  );
};

export default Contact;