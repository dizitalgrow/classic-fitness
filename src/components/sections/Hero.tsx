'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { FreeTrialForm } from '@/components/forms/FreeTrialForm';
import { useDisclosure } from '@/hooks/useDisclosure';
import { trackFreeTrialClick } from '@/lib/analytics';

export function Hero() {
  const trialModal = useDisclosure(false);

  const handleOpenTrial = () => {
    trackFreeTrialClick('Hero Section');
    trialModal.onOpen();
  };

  return (
    <>
      {/* EightbornV Archival Noir Hero: Deep Noir Canvas, Warm Amber Highlights */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-[#0e0e11] border-b border-[#414045]/60 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Massive Editorial Typography & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1 sm:py-2">
              <div>
                {/* Location / Section Overline Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 bg-[#16161a] text-[#b3b2b2] border border-[#414045] font-mono text-[11px] sm:text-xs uppercase tracking-wider mb-5 sm:mb-6 rounded-full shadow-sm max-w-full">
                  <MapPin className="w-3.5 h-3.5 text-[#ffc526] shrink-0" />
                  <span className="truncate">HSR Layout • Sector 1 • Bengaluru</span>
                </div>

                {/* Massive Display Headline */}
                <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-heading uppercase text-[#f3f4f2] leading-[1.0] sm:leading-[0.98] tracking-[-0.03em] mb-5 sm:mb-6">
                  BUILT THROUGH <br />
                  <span className="relative inline-block text-[#f3f4f2]">
                    DISCIPLINE.
                    <span className="absolute left-0 bottom-1 w-full h-2.5 sm:h-3 bg-[#ffc526]/20 -z-10 rounded-sm" />
                  </span>
                </h1>

                {/* Supporting Copy */}
                <p className="text-sm sm:text-base lg:text-lg text-[#b3b2b2] font-body leading-[1.6] max-w-xl mb-6 sm:mb-8">
                  Strength is earned. Progress is built. Take the first step towards a stronger version of yourself at Classic Fitness. Located directly opposite HSR Government School.
                </p>

                {/* EightbornV Tactical Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                  <button
                    type="button"
                    onClick={handleOpenTrial}
                    className="h-11 sm:h-12 px-6 sm:px-7 rounded bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] font-body font-bold text-xs uppercase tracking-[0.08em] hover:bg-[#ffd76a] hover:border-[#ffd76a] hover:text-[#161519] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    <span>Book a Free Trial</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/programmes"
                    className="h-11 sm:h-12 px-6 sm:px-7 rounded bg-transparent text-[#f3f4f2] border border-[#414045] font-body font-bold text-xs uppercase tracking-[0.08em] hover:bg-[#1c1b20] hover:border-[#8e8e8e] transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <span>Explore the Gym</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Technical Performance Specs Bar */}
              <div className="grid grid-cols-3 border-t border-[#414045] pt-4 font-mono text-xs gap-1 sm:gap-2">
                <div className="border-r border-[#222126] pr-2 sm:pr-3">
                  <span className="block text-[#8e8e8e] uppercase text-[9px] sm:text-[10px] tracking-wider truncate">Open Shift</span>
                  <span className="font-bold text-[#f3f4f2] text-xs sm:text-sm">05:30 AM</span>
                </div>
                <div className="border-r border-[#222126] px-2 sm:px-3">
                  <span className="block text-[#8e8e8e] uppercase text-[9px] sm:text-[10px] tracking-wider truncate">Coaching</span>
                  <span className="font-bold text-[#ffc526] text-xs sm:text-sm truncate block">Coach Ravi</span>
                </div>
                <div className="pl-2 sm:pl-3">
                  <span className="block text-[#8e8e8e] uppercase text-[9px] sm:text-[10px] tracking-wider truncate">Facility</span>
                  <span className="font-bold text-[#f3f4f2] text-xs sm:text-sm truncate block">HSR Govt School</span>
                </div>
              </div>
            </div>

            {/* Right Column: Grayscale Photography with 8px rounded card */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] border border-[#414045] bg-[#111014] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Classic Fitness Heavy Free Weights Arena in HSR Layout"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale contrast-125 brightness-90"
                />

                {/* Overlaid Archival Issue Tag */}
                <div className="absolute top-0 right-0 bg-[#111014]/90 text-[#ffc526] px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider border-b border-l border-[#414045] rounded-bl">
                  ISSUE NO. 01 • HSR
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#111014]/95 text-[#f3f4f2] p-3.5 sm:p-4 border-t border-[#414045]">
                  <p className="font-heading text-xs sm:text-sm uppercase tracking-wide text-[#f3f4f2]">
                    The Neighbourhood Iron House
                  </p>
                  <p className="font-body text-[11px] sm:text-xs text-[#b3b2b2] mt-0.5 truncate">
                    17th A Main Road, Neelakanteshwara Layout, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Free Trial Modal */}
      <Modal
        isOpen={trialModal.isOpen}
        onClose={trialModal.onClose}
        title="Claim Your Free Workout Session"
        description="Book your complimentary workout pass at Classic Fitness, HSR Layout. No commitment required."
      >
        <FreeTrialForm onSuccess={trialModal.onClose} />
      </Modal>
    </>
  );
}
