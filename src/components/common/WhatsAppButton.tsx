'use client';

import * as React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackWhatsAppClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  className?: string;
  variant?: 'floating' | 'inline';
  label?: string;
  location?: string;
}

export function WhatsAppButton({
  className,
  variant = 'floating',
  label = 'Chat on WhatsApp',
  location = 'Floating Trigger',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefilledText
  )}`;

  const handleClick = () => {
    trackWhatsAppClick(location);
  };

  if (variant === 'inline') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded font-body font-bold text-xs uppercase tracking-[0.08em] text-[#16d5b2] bg-[#111014] border border-[#16d5b2]/40 hover:bg-[#16d5b2] hover:text-[#0e0e11] hover:border-[#16d5b2] transition-colors duration-150',
          className
        )}
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>{label}</span>
      </a>
    );
  }

  // EightbornV Floating trigger: 4px rounded box, #111014 dark surface, teal indicator border & icon
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with Classic Fitness on WhatsApp"
        className={cn(
          'flex items-center justify-center w-13 h-13 p-3.5 rounded bg-[#111014] text-[#16d5b2] border border-[#16d5b2]/40 hover:bg-[#16d5b2] hover:border-[#16d5b2] hover:text-[#0e0e11] transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group',
          className
        )}
      >
        <MessageSquare className="w-6 h-6 fill-current" />

        {/* Noir tooltip on desktop hover */}
        <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded bg-[#16161a] text-[#f3f4f2] text-xs font-mono tracking-wider whitespace-nowrap border border-[#414045] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          WHATSAPP CHAT
        </span>
      </a>
    </aside>
  );
}
