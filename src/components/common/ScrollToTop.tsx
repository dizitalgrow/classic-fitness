'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function ScrollToTop() {
  const { scrollY } = useScrollPosition();
  const isVisible = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="hidden md:flex fixed bottom-8 left-8 z-30 items-center justify-center w-11 h-11 rounded bg-[#111014] border border-[#414045] text-[#b3b2b2] hover:bg-[#1c1b20] hover:text-[#ffc526] hover:border-[#ffc526]/50 transition-all duration-200 shadow-lg cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
