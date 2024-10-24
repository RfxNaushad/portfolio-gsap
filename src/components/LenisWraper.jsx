/* eslint-disable react/prop-types */
// LenisWrapper.jsx
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Set up Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 2.5,  // A higher duration for slower scrolling
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing curve for fluid motion
      smooth: true,  // Enable smooth scrolling
      gestureMultiplier: 1, // Adjust this to change the speed of scroll triggered by mouse gestures
      wheelMultiplier: 0.5, // Adjust this to change how much scroll happens on each wheel event
      touchMultiplier: 1.2, // Adjust for touch gestures if applicable
      lerp: 0.1, // Linear interpolation for smooth motion
    });

    const scroll = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
