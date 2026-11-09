'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { formatPhoneNumber } from '@/lib/utils';
import { trackPhoneClick, trackFreeTrialClick } from '@/lib/analytics';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Modal } from '@/components/ui/Modal';
import { FreeTrialForm } from '@/components/forms/FreeTrialForm';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const pathname = usePathname();
  const mobileMenu = useDisclosure(false);
  const trialModal = useDisclosure(false);

  const handleOpenTrial = () => {
    trackFreeTrialClick('Navbar Button');
    trialModal.onOpen();
  };

  const handlePhoneClick = () => {
    trackPhoneClick('Navbar Header');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0e0e11]/95 backdrop-blur-md border-b border-[#414045]/60 transition-all duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Left: Compact Classic Fitness Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2.5 group focus:outline-none py-1"
                aria-label="Classic Fitness Home"
              >
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded bg-[#111014] text-[#f3f4f2] border border-[#ffc526]/50 flex items-center justify-center font-heading font-black text-xs group-hover:bg-[#ffc526] group-hover:text-[#0e0e11] group-hover:border-[#ffc526] transition-colors shadow-sm">
                  CF
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm sm:text-base tracking-tight text-[#f3f4f2] leading-none">
                    CLASSIC
                  </span>
                  <span className="font-body font-bold text-[9px] sm:text-[10px] tracking-[0.24em] text-[#ffc526] uppercase leading-none mt-0.5">
                    FITNESS
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Properly Aligned Navigation Links (Desktop/Laptop >= 1024px) */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8 flex-1 px-4 max-w-2xl mx-auto"
            >
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-2 text-[12px] xl:text-[13px] font-body uppercase tracking-[0.06em] xl:tracking-[0.08em] whitespace-nowrap transition-colors relative select-none ${
                      isActive
                        ? 'text-[#ffc526] font-bold after:content-[""] after:absolute after:-bottom-[17px] lg:after:-bottom-[19px] after:left-0 after:right-0 after:h-[2px] after:bg-[#ffc526] after:rounded-full'
                        : 'text-[#b3b2b2] font-semibold hover:text-[#f3f4f2]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Compact Contact Phone & Book Free Trial CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              <a
                href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
                onClick={handlePhoneClick}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#b3b2b2] hover:text-[#ffc526] transition-colors whitespace-nowrap py-1.5 px-2 rounded hover:bg-[#16161a]"
                title={`Call ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#ffc526] shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleOpenTrial}
                className="inline-flex items-center justify-center gap-1.5 h-9 sm:h-9.5 px-3.5 sm:px-4 rounded bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] font-body font-bold text-xs uppercase tracking-[0.06em] hover:bg-[#ffd76a] hover:border-[#ffd76a] hover:text-[#161519] transition-all duration-150 cursor-pointer shadow-sm whitespace-nowrap shrink-0 active:scale-[0.98]"
              >
                <span>Book Free Trial</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile / Tablet Controls (< 1024px) */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Tablet Quick Trial CTA (640px to 1023px) */}
              <button
                type="button"
                onClick={handleOpenTrial}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 h-8.5 px-3 rounded bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] font-body font-bold text-xs uppercase tracking-[0.06em] hover:bg-[#ffd76a] transition-colors whitespace-nowrap"
              >
                <span>Free Trial</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={mobileMenu.onOpen}
                aria-label="Open mobile navigation"
                className="p-2 rounded border border-[#414045] bg-[#111014] text-[#f3f4f2] hover:bg-[#1c1b20] hover:text-[#ffc526] transition-colors focus:outline-none cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenu.isOpen}
        onClose={mobileMenu.onClose}
        onOpenTrial={handleOpenTrial}
      />

      {/* Global Free Trial Modal */}
      <Modal
        isOpen={trialModal.isOpen}
        onClose={trialModal.onClose}
        title="Book Your Free Trial Pass"
        description="Experience Classic Fitness with a guided 1-day workout pass and trainer orientation."
      >
        <FreeTrialForm onSuccess={trialModal.onClose} />
      </Modal>
    </>
  );
}
