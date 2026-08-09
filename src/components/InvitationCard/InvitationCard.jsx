import { motion } from 'framer-motion';
import {
  FaBirthdayCake,
  FaHeart,
  FaStar,
} from 'react-icons/fa';

import { invitationData } from '../../data/invitationData';

import './InvitationCard.css';

const InvitationCard = () => {
  return (
    <section className="invitation-section">

      <motion.div
        className="invitation-card glass-card"

        initial={{
          opacity: 0,
          y: 50,
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
          ease: 'easeOut',
        }}
      >

        {/* =========================================
            TOP DECORATION
            ========================================= */}

        <motion.div
          className="card-icons"

          initial={{
            opacity: 0,
            scale: 0.7,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >

          <motion.span
            className="card-icon"
            animate={{
              y: [0, -5, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaStar />
          </motion.span>

          <motion.span
            className="card-icon main-icon"
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaBirthdayCake />
          </motion.span>

          <motion.span
            className="card-icon"
            animate={{
              y: [0, -5, 0],
              rotate: [5, -5, 5],
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

        </motion.div>


        {/* =========================================
            HEADING
            ========================================= */}

        <motion.h2
          className="invitation-heading"

          initial={{
            opacity: 0,
            letterSpacing: '0.5em',
          }}

          whileInView={{
            opacity: 1,
            letterSpacing: '0.3em',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          YOU ARE INVITED
        </motion.h2>


        {/* =========================================
            SUB TEXT
            ========================================= */}

        <motion.p
          className="invitation-subtext"

          initial={{
            opacity: 0,
            y: 10,
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
          Join us to celebrate our little prince&apos;s birthday
        </motion.p>


        {/* =========================================
            DIVIDER
            ========================================= */}

        <motion.div
          className="invitation-divider"

          initial={{
            opacity: 0,
            scale: 0,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <span className="divider-line" />
          <FaBirthdayCake className="divider-cake" />
          <span className="divider-line" />
        </motion.div>


        {/* =========================================
            BABY NAME
            ========================================= */}

        <motion.h3
          className="invitation-baby-name"

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
            type: 'spring',
            stiffness: 160,
            damping: 12,
            delay: 0.5,
          }}
        >
          {invitationData.babyName}
        </motion.h3>


        {/* =========================================
            1ST BIRTHDAY HIGHLIGHT
            ========================================= */}

        <motion.div
          className="birthday-highlight"

          initial={{
            opacity: 0,
            scale: 0.8,
            y: 10,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            type: 'spring',
            stiffness: 140,
            delay: 0.65,
          }}
        >

          <motion.span
            className="birthday-sparkle sparkle-left"

            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ✦
          </motion.span>


          <div className="birthday-highlight-content">

            <span className="birthday-small-text">
              CELEBRATING
            </span>

            <span className="birthday-one">
              {invitationData.babyAge}
            </span>

            <span className="birthday-main-text">
              BIRTHDAY
            </span>

          </div>


          <motion.span
            className="birthday-sparkle sparkle-right"

            animate={{
              rotate: [0, -15, 15, 0],
              scale: [1, 1.2, 1],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            ✦
          </motion.span>

        </motion.div>


        {/* =========================================
            PARENTS SECTION
            ========================================= */}

        <motion.div
          className="invitation-parents"

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
            duration: 0.8,
            delay: 0.85,
          }}
        >

          <p className="son-of-text">
            With love from
          </p>


          <div className="parents-decoration">

            <span className="parent-line" />

            <motion.span
              className="heart-icon"

              animate={{
                scale: [1, 1.2, 1],
              }}

              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeart />
            </motion.span>

            <span className="parent-line" />

          </div>


          {/* Parents Names */}

          <motion.p
            className="parents-names"

            whileInView={{
              opacity: 1,
            }}

            viewport={{
              once: true,
            }}
          >
            <span className="parent-name">
              {invitationData.parents.father}
            </span>

            <span className="parent-ampersand">
              &amp;
            </span>

            <span className="parent-name">
              {invitationData.parents.mother}
            </span>
          </motion.p>


          <motion.div
            className="parents-glow-line"

            initial={{
              width: 0,
            }}

            whileInView={{
              width: '70%',
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


        {/* =========================================
            BOTTOM BORDER
            ========================================= */}

        <motion.div
          className="card-border-bottom"

          initial={{
            width: 0,
          }}

          whileInView={{
            width: '80%',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 1.1,
          }}
        />

      </motion.div>

    </section>
  );
};

export default InvitationCard;