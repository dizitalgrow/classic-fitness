'use client';

import * as React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { formatPhoneNumber } from '@/lib/utils';
import { trackPhoneClick, trackFreeTrialClick } from '@/lib/analytics';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Modal } from '@/components/ui/Modal';
import { FreeTrialForm } from '@/components/forms/FreeTrialForm';

export function StickyMobileCTA() {
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  const handleCall = () => {
    trackPhoneClick('Sticky Mobile Bar');
  };

  const handleTrialClick = () => {
    trackFreeTrialClick('Sticky Mobile Bar');
    onOpen();
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0e0e11] border-t border-[#414045] px-4 py-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          {/* Quick Call Button */}
          <a
            href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
            onClick={handleCall}
            aria-label="Call gym desk directly"
            className="flex items-center justify-center gap-2 h-11 rounded bg-[#111014] border border-[#414045] text-[#f3f4f2] font-body font-bold text-xs uppercase tracking-[0.06em] active:bg-[#1c1b20] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#ffc526]" />
            <span>Call Desk</span>
          </a>

          {/* Book Free Trial Modal Trigger */}
          <button
            type="button"
            onClick={handleTrialClick}
            aria-label="Open free trial booking form"
            className="flex items-center justify-center gap-1.5 h-11 rounded bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] font-body font-bold text-xs uppercase tracking-[0.06em] active:bg-[#ffd76a] transition-colors shadow-sm"
          >
            <span>Free Trial</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Free Trial Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Book Your Free Trial Pass"
        description="Experience Classic Fitness with a guided 1-day workout pass and trainer orientation."
      >
        <FreeTrialForm onSuccess={onClose} />
      </Modal>
    </>
  );
}
