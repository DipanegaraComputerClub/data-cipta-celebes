"use client";

import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      // Observe parent section
      observer.observe(ref.current);
      
      // Observe all stagger-items within the section
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
  }, []);

  return ref;
};
