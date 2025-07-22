import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LeftAnimation from './LeftAnimation';
import RightAnimation from './RightAnimation';
import './IntroAnimation.css';

const ANIMATION_DURATION = 1.2; // Seconds for slide-in/out
const STAY_DURATION = 3; // Seconds to stay at center

const IntroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => setShow(false),
      (ANIMATION_DURATION + STAY_DURATION) * 1000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="intro-animation-overlay">
          <LeftAnimation />
          <RightAnimation />
        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;