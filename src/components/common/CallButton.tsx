'use client';

import * as React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick } from '@/lib/analytics';
import { formatPhoneNumber, cn } from '@/lib/utils';

interface CallButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  location?: string;
}

export function CallButton({
  className,
  variant = 'secondary',
  size = 'md',
  showNumber = false,
  location = 'General CTA',
}: CallButtonProps) {
  const telHref = `tel:${formatPhoneNumber(siteConfig.contact.phone)}`;

  const handleClick = () => {
    trackPhoneClick(location);
  };

  const variants = {
    primary:
      'bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] hover:bg-[#ffd76a] hover:border-[#ffd76a]',
    secondary:
      'bg-transparent text-[#f3f4f2] border border-[#414045] hover:bg-[#1c1b20] hover:border-[#8e8e8e]',
    ghost: 'bg-transparent text-[#b3b2b2] border border-transparent hover:bg-[#1c1b20] hover:text-[#ffc526]',
  };

  const sizes = {
    sm: 'h-9 px-3.5 text-xs gap-1.5',
    md: 'h-11 px-5 text-xs gap-2',
    lg: 'h-12 sm:h-14 px-7 text-sm gap-2.5',
  };

  return (
    <a
      href={telHref}
      onClick={handleClick}
      aria-label={`Call Classic Fitness at ${siteConfig.contact.phoneDisplay}`}
      className={cn(
        'inline-flex items-center justify-center font-body font-bold uppercase tracking-[0.08em] rounded transition-colors duration-150',
        variants[variant],
        sizes[size],
        className
      )}
    >
      <Phone className="w-4 h-4 shrink-0 text-[#ffc526]" />
      <span>{showNumber ? siteConfig.contact.phoneDisplay : 'Call Gym Desk'}</span>
    </a>
  );
}
