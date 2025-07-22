import React from 'react';
import { motion } from 'framer-motion';
import introImg from '../assets/intro.png';

const ANIMATION_DURATION = 1.2;

const rightVariants = {
  initial: { x: '100vw' },
  animate: { x: 0, transition: { duration: ANIMATION_DURATION } },
  exit: { y: '100vh', transition: { duration: ANIMATION_DURATION } },
};

const RightAnimation = () => (
  <motion.div
    className="intro-half right"
    variants={rightVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <div
      className="intro-img right"
      style={{ backgroundImage: `url(${introImg})` }}
    />
  </motion.div>
);

export default RightAnimation;