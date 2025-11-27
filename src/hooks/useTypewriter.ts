"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  active?: boolean;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
  active = true, // default aktif
}: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (active) {
      // TYPE IN
      let charIndex = 0;

      timeout = setTimeout(() => {
        interval = setInterval(() => {
          if (charIndex < text.length) {
            setDisplayedText(text.slice(0, charIndex + 1));
            charIndex++;
          } else {
            setIsComplete(true);
            clearInterval(interval);
          }
        }, speed);
      }, delay);
    } else {
      // TYPE OUT (hapus)
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            clearInterval(interval);
            setIsComplete(false);
            return "";
          }
        });
      }, speed);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [active]);

  return { displayedText, isComplete };
};
