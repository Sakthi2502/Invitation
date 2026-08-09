import { FaBirthdayCake, FaCrown, FaMusic } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import './DecorIcons.css';

/** Gold four-point sparkle — no emoji border */
export const SparkleIcon = ({ size = 18, className = '' }) => (
  <svg
    className={`deco-icon sparkle-svg ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 2L13.4 8.6L20 10L13.4 11.4L12 18L10.6 11.4L4 10L10.6 8.6L12 2Z"
      fill="currentColor"
    />
    <path
      d="M19 14L19.7 17.3L23 18L19.7 18.7L19 22L18.3 18.7L15 18L18.3 17.3L19 14Z"
      fill="currentColor"
      opacity="0.7"
    />
  </svg>
);

export const CrownIcon = ({ size = 20, className = '' }) => (
  <FaCrown className={`deco-icon icon-crown ${className}`} size={size} aria-hidden="true" />
);

export const CakeIcon = ({ size = 20, className = '' }) => (
  <FaBirthdayCake className={`deco-icon icon-cake ${className}`} size={size} aria-hidden="true" />
);

export const MusicIcon = ({ size = 14, className = '' }) => (
  <FaMusic className={`deco-icon icon-music ${className}`} size={size} aria-hidden="true" />
);

export const PopperIcon = ({ size = 48, className = '' }) => (
  <GiPartyPopper className={`deco-icon icon-popper ${className}`} size={size} aria-hidden="true" />
);

/** Row of three small sparkles */
export const SparkleRow = ({ className = '' }) => (
  <span className={`sparkle-row ${className}`} aria-hidden="true">
    <SparkleIcon size={12} />
    <SparkleIcon size={14} />
    <SparkleIcon size={12} />
  </span>
);
