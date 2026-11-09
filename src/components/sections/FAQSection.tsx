'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqsData } from '@/data/faqs';

export function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(faqsData[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
      <Container size="narrow">
        <SectionHeading
          kicker="FREQUENTLY ASKED QUESTIONS"
          title={
            <span>
              EVERYTHING YOU NEED <br className="hidden sm:inline" />
              <span className="text-[#ffc526]">TO GET STARTED.</span>
            </span>
          }
          subtitle="Answers to common questions about training, memberships, facilities, and our location in HSR Layout."
          align="center"
        />

        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#111014] border rounded-lg transition-colors duration-150 overflow-hidden ${
                  isOpen ? 'border-[#ffc526]/50' : 'border-[#414045] hover:border-[#8e8e8e]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-heading text-base sm:text-lg uppercase text-[#f3f4f2]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 flex items-center justify-center rounded border shrink-0 transition-colors ${
                    isOpen ? 'bg-[#ffc526] text-[#0e0e11] border-[#ffc526]' : 'bg-[#16161a] text-[#b3b2b2] border-[#414045]'
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen ? (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#b3b2b2] font-body leading-relaxed border-t border-[#222126]"
                  >
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
