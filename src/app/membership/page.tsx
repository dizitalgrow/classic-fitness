import type { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { MembershipSection } from '@/components/sections/MembershipSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { constructMetadata } from '@/lib/metadata';
import { Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: 'Membership Plans & Packages | Classic Fitness HSR Layout',
  description:
    'Find flexible 1-Month, 3-Month, 6-Month, and 12-Month membership options at Classic Fitness in HSR Layout, Bengaluru. Enquire for seasonal desk offers.',
  path: '/membership',
});

export default function MembershipPage() {
  const inclusions = [
    'Unlimited floor access during morning and evening shifts',
    'Comprehensive workout orientation and initial technique check',
    'Full access to Olympic barbells, dumbbells, and resistance machines',
    'Secure lockers, changing rooms, and shower amenities',
    'Complimentary nutrition advice and macronutrient guideline sheet',
    'Progress tracking and measurement support from floor coaches',
  ];

  return (
    <PageContainer>
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
              MEMBERSHIP TIERS
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading uppercase text-[#f3f4f2] leading-[1.02] tracking-[-0.03em] mb-6">
              INVEST IN YOUR <br />
              <span className="text-[#ffc526]">HEALTH AND STRENGTH.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b3b2b2] font-body leading-relaxed">
              We offer flexible, high-value membership plans designed to keep you consistent without hidden fees or predatory cancellation clauses.
            </p>
          </div>
        </Container>
      </section>

      {/* Membership Plans Grid */}
      <MembershipSection />

      {/* All Membership Inclusions */}
      <section className="py-16 bg-[#08080b] border-b border-[#414045]">
        <Container size="narrow">
          <div className="p-5 sm:p-8 md:p-10 bg-[#111014] border border-[#414045] rounded-lg shadow-xl">
            <h2 className="text-xl sm:text-2xl font-heading uppercase text-[#f3f4f2] mb-3">
              Included in Every Classic Fitness Membership:
            </h2>
            <p className="text-sm text-[#b3b2b2] mb-6 font-body">
              Regardless of your plan duration, every member receives full access to our equipment and guidance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {inclusions.map((inc) => (
                <div key={inc} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f3f4f2] font-body">
                  <Check className="w-4 h-4 text-[#16d5b2] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#222126] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#8e8e8e]">
                Need customized corporate or group membership rates?
              </span>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  'Hi Classic Fitness, I would like to enquire about group/corporate membership options.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body font-bold uppercase tracking-[0.06em] text-[#ffc526] hover:text-[#ffd76a] hover:underline flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire for Group Discount</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <div id="faqs">
        <FAQSection />
      </div>

      {/* Final CTA */}
      <FinalCTA />
    </PageContainer>
  );
}
