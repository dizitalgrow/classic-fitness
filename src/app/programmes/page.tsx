import type { Metadata } from 'next';
import Image from 'next/image';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { programmesData } from '@/data/programmes';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { constructMetadata } from '@/lib/metadata';
import { Check, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Training Programmes | Strength, Personal Training & Weight Loss HSR',
  description:
    'Explore our focused training programmes at Classic Fitness: Strength Training, 1-on-1 Personal Coaching, Body Transformation, Weight Loss, and Nutrition Guidance in HSR Layout.',
  path: '/programmes',
});

export default function ProgrammesPage() {
  return (
    <PageContainer>
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
              COACHED DISCIPLINES
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading uppercase text-[#f3f4f2] leading-[1.02] tracking-[-0.03em] mb-6">
              PROGRAMMES TAILORED <br />
              <span className="text-[#ffc526]">FOR REAL RESULTS.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b3b2b2] font-body leading-relaxed">
              Whether you are picking up a barbell for the first time or breaking through an established plateau, our training splits are engineered around safety, progressive overload, and active coach feedback.
            </p>
          </div>
        </Container>
      </section>

      {/* Detailed Programmes List */}
      <section className="py-16 sm:py-24 bg-[#08080b] border-b border-[#414045]">
        <Container>
          <div className="space-y-12">
            {programmesData.map((prog, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="bg-[#111014] border border-[#414045] rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-5 sm:p-8 lg:p-10 scroll-mt-28 shadow-xl"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative aspect-[16/11] border border-[#414045] bg-[#050507] rounded-lg overflow-hidden shadow-md ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Image
                      src={prog.image}
                      alt={`${prog.title} at Classic Fitness HSR`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover grayscale contrast-125 brightness-90"
                    />
                    {prog.badge ? (
                      <div className="absolute top-2.5 left-2.5">
                        <Badge variant="accent">{prog.badge}</Badge>
                      </div>
                    ) : null}
                    <div className="absolute bottom-0 right-0 bg-[#0e0e11]/90 text-[#f3f4f2] border-t border-l border-[#414045] rounded-tl px-3 py-1 font-mono text-xs uppercase tracking-wider">
                      {prog.intensity}
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffc526] block mb-2">
                        {prog.tagline}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-heading uppercase text-[#f3f4f2]">
                        {prog.title}
                      </h2>
                    </div>

                    <div className="space-y-3 text-sm sm:text-base text-[#b3b2b2] font-body leading-relaxed">
                      {prog.fullDescription.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </div>

                    <div className="pt-2">
                      <h3 className="text-xs font-body font-bold uppercase tracking-[0.06em] text-[#f3f4f2] mb-3">
                        Key Programme Benefits:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prog.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-2.5 text-xs text-[#b3b2b2] font-body">
                            <Check className="w-4 h-4 text-[#16d5b2] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#222126] flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        href={`/contact?intent=programme&programme=${encodeURIComponent(prog.title)}`}
                        variant="primary"
                        size="md"
                      >
                        <span>Enquire About Programme</span>
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </Button>
                      <span className="text-xs font-mono text-[#8e8e8e]">
                        Orientation included in Free Trial
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final Conversion CTA */}
      <FinalCTA />
    </PageContainer>
  );
}
