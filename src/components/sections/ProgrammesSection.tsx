import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { programmesData } from '@/data/programmes';

interface ProgrammesSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export function ProgrammesSection({ limit, showAllLink = true }: ProgrammesSectionProps) {
  const displayedProgrammes = limit ? programmesData.slice(0, limit) : programmesData;

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0e0e11] border-b border-[#414045]/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5">
          <SectionHeading
            kicker="TRAINING DISCIPLINES"
            title={
              <span>
                TARGETED PROGRAMMES FOR <br className="hidden sm:inline" />
                <span className="text-[#ffc526]">MEASURABLE RESULTS.</span>
              </span>
            }
            subtitle="Every programme is structured around progressive stimulus, form mastery, and active coach feedback."
            className="mb-0"
          />

          {showAllLink ? (
            <Button href="/programmes" variant="secondary" size="md" className="shrink-0 self-start md:self-auto">
              <span>View All 6 Programmes</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          ) : null}
        </div>

        {/* Programme Cards Grid - Consistent Card Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {displayedProgrammes.map((prog) => (
            <article
              key={prog.id}
              className="bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 hover:bg-[#1c1b20] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-200 group shadow-lg h-full"
            >
              <div className="flex flex-col h-full">
                {/* Media Preview - Grayscale with sharp tag */}
                <div className="relative aspect-[16/10] bg-[#050507] border-b border-[#414045] overflow-hidden shrink-0">
                  <Image
                    src={prog.image}
                    alt={`${prog.title} at Classic Fitness HSR Layout`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  {prog.badge ? (
                    <div className="absolute top-2.5 left-2.5">
                      <Badge variant="accent">{prog.badge}</Badge>
                    </div>
                  ) : null}
                  <div className="absolute bottom-0 right-0 bg-[#0e0e11]/90 text-[#f3f4f2] border-t border-l border-[#414045] rounded-tl px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
                    {prog.intensity}
                  </div>
                </div>

                {/* Card Content - flex-1 for equal alignment */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#ffc526] font-bold block mb-1">
                      {prog.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading uppercase text-[#f3f4f2]">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b3b2b2] font-body leading-relaxed mt-2.5 mb-4">
                      {prog.description}
                    </p>
                  </div>

                  {/* Highlights with checkmarks */}
                  <div className="space-y-2 pt-4 border-t border-[#222126] mt-auto">
                    {prog.benefits.slice(0, 3).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-xs text-[#b3b2b2] font-body">
                        <Check className="w-3.5 h-3.5 text-[#16d5b2] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={`/contact?intent=programme&programme=${encodeURIComponent(prog.title)}`}
                  className="w-full h-10 sm:h-11 bg-[#16161a] border border-[#414045] text-[#f3f4f2] rounded font-body font-bold text-xs uppercase tracking-[0.06em] flex items-center justify-center gap-1.5 hover:bg-[#ffc526] hover:text-[#0e0e11] hover:border-[#ffc526] transition-colors"
                >
                  <span>Enquire For Programme</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
