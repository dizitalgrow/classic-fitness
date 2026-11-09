import * as React from 'react';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { membershipPlans } from '@/data/membership';

export function MembershipSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0e0e11] border-b border-[#414045]/60">
      <Container>
        <SectionHeading
          kicker="TRANSPARENT MEMBERSHIP"
          title={
            <span>
              STRUCTURED TIERS FOR <br className="hidden sm:inline" />
              <span className="text-[#ffc526]">SERIOUS COMMITMENT.</span>
            </span>
          }
          subtitle="Choose the commitment period that matches your goals. Enquire directly for current seasonal desk rates and student/partner discounts."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-2">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 relative bg-[#111014] rounded-lg shadow-lg h-full ${
                plan.isPopular
                  ? 'border-2 border-[#ffc526] shadow-[0_0_24px_rgba(255,197,38,0.18)]'
                  : 'border border-[#414045] hover:border-[#8e8e8e]'
              }`}
            >
              {plan.isPopular ? (
                <div className="absolute -top-3.5 left-4 z-10">
                  <Badge variant="accent">
                    ★ Most Popular Choice
                  </Badge>
                </div>
              ) : null}

              <div className="flex flex-col flex-1">
                <div className="mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffc526] block">
                    {plan.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading uppercase text-[#f3f4f2] mt-1">
                    {plan.title}
                  </h3>
                  <div className="mt-3 p-2.5 bg-[#050507] border border-[#414045] rounded text-center">
                    <span className="font-mono text-xs font-bold text-[#f3f4f2] uppercase tracking-wider block">
                      {plan.priceNote}
                    </span>
                    <span className="text-[11px] text-[#8e8e8e] font-mono">
                      Call desk or WhatsApp for rate
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#b3b2b2] font-body leading-relaxed mb-5">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#222126] flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs text-[#f3f4f2] font-body">
                      <Check className="w-3.5 h-3.5 text-[#16d5b2] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-2">
                <Link
                  href={`/contact?intent=membership&plan=${encodeURIComponent(plan.title)}`}
                  className={`w-full h-10 sm:h-11 font-body font-bold text-xs uppercase tracking-[0.06em] rounded flex items-center justify-center gap-1.5 transition-colors ${
                    plan.isPopular
                      ? 'bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] hover:bg-[#ffd76a] hover:border-[#ffd76a] shadow-sm'
                      : 'bg-transparent text-[#f3f4f2] border border-[#414045] hover:bg-[#1c1b20] hover:border-[#8e8e8e]'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing verification note */}
        <div className="mt-10 sm:mt-12 text-center max-w-xl mx-auto p-4 bg-[#111014] border border-[#414045] rounded-lg text-xs font-mono text-[#b3b2b2]">
          NOTE: Final seasonal rates, couple packages, and student discounts are verified directly at the gym desk opposite HSR Govt School or via WhatsApp.
        </div>
      </Container>
    </section>
  );
}
