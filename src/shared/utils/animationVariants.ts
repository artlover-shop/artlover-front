export const fadeInAnimation = ({
  x = 0,
  y = 0,
  scale = 1,
  delay = 0,
  duration = 0.7,
  opacity = 0,
}) => ({
  hidden: {
    opacity: opacity,
    transform: `translate3d(${x}px, ${y}px, 0) scale3d(${scale}, ${scale}, 1)`,
    willChange: 'opacity, transform',
  },
  visible: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    transition: { duration, delay, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
});

export const listVariants = ({
  staggerChildren = 0.5,
  delayChildren = 0,
} = {}) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 1, ease: 'easeIn' },
  },
});

export const headerVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const catalogMenuVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const cartModalVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

export const cartItemVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export const burgerMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};
