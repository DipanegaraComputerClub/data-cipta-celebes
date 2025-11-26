"use client";

import { useEffect, useRef } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';

interface UseScrollAnimationOptions {
  animationType?: AnimationType;
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    animationType = 'fade',
    threshold = 0.2,
    rootMargin = '0px 0px -50px 0px',
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class to trigger animation in
            entry.target.classList.add('animate-in-view');
            entry.target.classList.remove('animate-out-view');
          } else {
            // Add class for animation out when leaving viewport
            entry.target.classList.remove('animate-in-view');
            entry.target.classList.add('animate-out-view');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
};

// Presets
export const useScrollAnimationFade = () => useScrollAnimation({ animationType: 'fade' });
export const useScrollAnimationSlideUp = () => useScrollAnimation({ animationType: 'slideUp' });
export const useScrollAnimationSlideDown = () => useScrollAnimation({ animationType: 'slideDown' });
export const useScrollAnimationSlideLeft = () => useScrollAnimation({ animationType: 'slideLeft' });
export const useScrollAnimationSlideRight = () => useScrollAnimation({ animationType: 'slideRight' });
