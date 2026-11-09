'use client';

import { useState, useEffect } from 'react';

export function useScrollPosition(): { scrollY: number; isScrolled: boolean } {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    isScrolled: scrollY > 20,
  };
}
