"use client";

import { useEffect, useRef } from 'react';

type AnimationType = 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'bounceIn' | 'slideInLeft' | 'slideInRight';

interface UseScrollAnimationOptions {
  animationType?: AnimationType;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    animationType = 'fadeInUp',
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    once = true,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class to parent
            entry.target.classList.add('animate-in-view');
            if (entry.target instanceof HTMLElement) {
              entry.target.style.setProperty('--animation-type', animationType);
            }
            
            // Add stagger animations to children
            const staggerItems = entry.target.querySelectorAll('.stagger-item');
            staggerItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in-view');
              }, index * 100);
            });

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Remove animation class if not once
            entry.target.classList.remove('animate-in-view');
            const staggerItems = entry.target.querySelectorAll('.stagger-item');
            staggerItems.forEach((item) => {
              item.classList.remove('animate-in-view');
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
      
      // Also observe direct stagger-items for better stagger effect
      const staggerItems = ref.current.querySelectorAll('.stagger-item');
      staggerItems.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [animationType, threshold, rootMargin, once]);

  return ref;
};

// Presets untuk animasi tertentu
export const useScrollAnimationFadeInUp = () => useScrollAnimation({ animationType: 'fadeInUp' });
export const useScrollAnimationFadeInDown = () => useScrollAnimation({ animationType: 'fadeInDown' });
export const useScrollAnimationFadeInLeft = () => useScrollAnimation({ animationType: 'fadeInLeft' });
export const useScrollAnimationFadeInRight = () => useScrollAnimation({ animationType: 'fadeInRight' });
export const useScrollAnimationScaleIn = () => useScrollAnimation({ animationType: 'scaleIn' });
export const useScrollAnimationSlideInLeft = () => useScrollAnimation({ animationType: 'slideInLeft' });
export const useScrollAnimationSlideInRight = () => useScrollAnimation({ animationType: 'slideInRight' });
