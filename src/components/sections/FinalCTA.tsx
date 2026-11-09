'use client';

import * as React from 'react';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { FreeTrialForm } from '@/components/forms/FreeTrialForm';
import { useDisclosure } from '@/hooks/useDisclosure';
import { siteConfig } from '@/config/site';
import { formatPhoneNumber } from '@/lib/utils';
import { trackFreeTrialClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export function FinalCTA() {
  const trialModal = useDisclosure(false);

  const handleOpenTrial = () => {
    trackFreeTrialClick('Final CTA Section');
    trialModal.onOpen();
  };

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#08080b] text-[#f3f4f2] border-b border-[#414045] relative overflow-hidden">
        <Container size="narrow" className="text-center">
          <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
            START YOUR FITNESS JOURNEY TODAY
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-[-0.03em] leading-[1.05] mb-6 text-[#f3f4f2]">
            STOP WAITING. <br />
            <span className="text-[#ffc526]">GET STRONGER THIS WEEK.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#b3b2b2] font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Drop by Classic Fitness opposite HSR Government School. Meet Coach Ravi, try our equipment, and see the difference attentive guidance makes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <button
              type="button"
              onClick={handleOpenTrial}
              className="w-full sm:w-auto h-12 sm:h-14 px-8 rounded bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] font-body font-bold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#ffd76a] hover:border-[#ffd76a] hover:text-[#161519] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book a Free Trial</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                siteConfig.contact.whatsappPrefilledText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Final CTA')}
              className="w-full sm:w-auto h-12 sm:h-14 px-8 rounded bg-[#111014] border border-[#16d5b2]/40 text-[#16d5b2] font-body font-bold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#16d5b2] hover:border-[#16d5b2] hover:text-[#0e0e11] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Coach</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#8e8e8e]">
            <Phone className="w-3.5 h-3.5 text-[#ffc526]" />
            <span>
              Prefer calling?{' '}
              <a
                href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
                onClick={() => trackPhoneClick('Final CTA Text')}
                className="text-[#f3f4f2] font-bold hover:text-[#ffc526] underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </span>
          </div>
        </Container>
      </section>

      {/* Free Trial Modal */}
      <Modal
        isOpen={trialModal.isOpen}
        onClose={trialModal.onClose}
        title="Book Your Free Trial Pass"
        description="Reserve your trial session at Classic Fitness in HSR Layout."
      >
        <FreeTrialForm onSuccess={trialModal.onClose} />
      </Modal>
    </>
  );
}
