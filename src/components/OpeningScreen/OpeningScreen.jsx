
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import BokehParticles from '../BokehParticles/BokehParticles';
import PartyPopper from '../PartyPopper/PartyPopper';

import {
  SparkleIcon,
  SparkleRow,
  CrownIcon,
  CakeIcon,
  MusicIcon,
} from '../DecorIcons/DecorIcons';

import { invitationData } from '../../data/invitationData';

import './OpeningScreen.css';

const OpeningScreen = ({ onOpen }) => {
  const [isPopping, setIsPopping] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    if (isPopping) return;

    setIsPopping(true);
  };

  const handlePopComplete = useCallback(() => {
    setIsExiting(true);

    setTimeout(() => {
      onOpen();
    }, 400);
  }, [onOpen]);

  const brandParts = invitationData.brand.split(' by ');

  const brandLine1 =
    brandParts[0]?.toUpperCase() ||
    invitationData.brand.toUpperCase();

  const brandLine2 = brandParts[1]
    ? `BY ${brandParts[1].toUpperCase()}`
    : '';

  return (
    <motion.div
      className="opening-screen"

      exit={{
        opacity: 0,
        scale: 1.05,
      }}

      animate={{
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 1.08 : 1,
      }}

      transition={{
        duration: 0.6,
        ease: 'easeInOut',
      }}
    >

      {/* Background */}
      <BokehParticles />

      {/* Party popper */}
      <PartyPopper
        active={isPopping}
        onComplete={handlePopComplete}
      />

      {/* Content */}
      <motion.div
        className="opening-content"

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >

    

{/* =================================================
    BIRTHDAY HERO PHOTO
    ================================================= */}

<motion.div
  className="birthday-photo-scene"
  initial={{
    opacity: 0,
    y: 20,
    scale: 0.9,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.9,
    ease: 'easeOut',
    delay: 0.25,
  }}
>

  {/* Left balloons */}

  <div className="photo-balloon balloon-left-1" />
  <div className="photo-balloon balloon-left-2" />

  {/* Right balloons */}

  <div className="photo-balloon balloon-right-1" />
  <div className="photo-balloon balloon-right-2" />


  {/* Main tilted photo */}

  <div className="birthday-polaroid">

    <div className="polaroid-photo-wrapper">

      <img
        src={invitationData.photos.opening}
        alt="Birthday"
        className="birthday-hero-photo"
      />

    </div>

    {/* Small handwritten-style decoration */}

    <div className="polaroid-bottom">
      ✦
    </div>

  </div>


  {/* Birthday number */}

  <motion.div
    className="birthday-number"

    animate={{
      y: [0, -4, 0],
      rotate: [-4, -2, -4],
    }}

    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <span className="number-value">1</span>

    <span className="number-text">
      Birthday
    </span>
  </motion.div>


  {/* Little sparkles */}

  <motion.span
    className="photo-star photo-star-one"
    animate={{
      scale: [1, 1.25, 1],
      rotate: [0, 15, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
  >
    ✦
  </motion.span>

  <motion.span
    className="photo-star photo-star-two"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -15, 0],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
    }}
  >
    ✦
  </motion.span>

</motion.div>


        {/* =================================================
            BRAND
            ================================================= */}

        <motion.div
          className="brand-block"

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.5,
          }}
        >

          {brandLine2 && (
            <h1 className="brand-serif brand-line2">
              {brandLine1} {brandLine2}
            </h1>
          )}

        </motion.div>


        {/* =================================================
            PRESENTS
            ================================================= */}

        <motion.p
          className="presents-text"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.7,
          }}
        >
          Presents
        </motion.p>


        {/* =================================================
            BIRTHDAY TITLE
            ================================================= */}

        <motion.div
          className="birthday-title-wrapper"

          initial={{
            opacity: 0,
            y: 10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.85,
          }}
        >

          <div className="title-top-decoration">

            <span className="tiny-line" />

            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <SparkleIcon size={15} />
            </motion.span>

            <span className="tiny-line right" />

          </div>


          <h2 className="celebration-heading">

            <span className="heading-first-line">
              A Special Birthday Celebration
            </span>


            <div className="birthday-name-row">

              <motion.span
                className="name-decoration"

                animate={{
                  rotate: [0, 12, -12, 0],
                  scale: [1, 1.15, 1],
                }}

                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <SparkleIcon size={14} />
              </motion.span>


              <span className="birthday-name">
                HARDIK SKANDHAN
              
              </span>


              <motion.span
                className="name-decoration"

                animate={{
                  rotate: [0, -12, 12, 0],
                  scale: [1, 1.15, 1],
                }}

                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <SparkleIcon size={14} />
              </motion.span>

            </div>

          </h2>


          {/* Developer signature */}

          <motion.p
            className="crafted-by"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 1.15,
            }}
          >
            Code crafted by Sakthi
          </motion.p>

        </motion.div>


        {/* =================================================
            CROWN DIVIDER
            ================================================= */}

        <motion.div
          className="crown-divider"

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            delay: 1.25,
          }}
        >

          <SparkleRow
            className="mini-sparkles"
          />

          <div className="divider-line">

            <span className="divider-bar" />

            <motion.span
              className="crown-wrap"

              animate={{
                y: [0, -3, 0],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <CrownIcon size={22} />
            </motion.span>

            <span className="divider-bar" />

          </div>

        </motion.div>


        {/* =================================================
            OPEN INVITATION BUTTON
            ================================================= */}

        <motion.div
          className="btn-wrapper"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1.4,
          }}
        >

          <div className="btn-glass-shell">

            <motion.button
              className="open-btn"

              onClick={handleClick}

              disabled={isPopping}

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              <CakeIcon size={19} />

              <span className="open-btn-text">
                Tap To Open Invitation
              </span>

              <CakeIcon size={19} />

            </motion.button>

          </div>

        </motion.div>


        {/* =================================================
            SOUND HINT
            ================================================= */}

        <motion.p
          className="sound-hint"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 1.6,
          }}
        >

          <MusicIcon size={12} />

          <span>
            Best experienced with sound on
          </span>

        </motion.p>

      </motion.div>

    </motion.div>
  );
};

export default OpeningScreen;
