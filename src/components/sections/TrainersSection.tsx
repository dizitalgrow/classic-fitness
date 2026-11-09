import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { trainersData } from '@/data/trainers';

export function TrainersSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0e0e11] border-b border-[#414045]/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5">
          <SectionHeading
            kicker="LEADERSHIP & MENTORSHIP"
            title={
              <span>
                TRAIN WITH COACHES WHO <br className="hidden sm:inline" />
                <span className="text-[#ffc526]">CARE ABOUT YOUR PROGRESS.</span>
              </span>
            }
            subtitle="Led by Coach Ravi, our coaching ethos prioritises correct form, safe progression, and sustained motivation."
            className="mb-0"
          />

          <Button href="/contact?intent=personal-training" variant="primary" size="md" className="shrink-0 self-start md:self-auto">
            <span>Book Coach Consultation</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {trainersData.map((trainer) => (
            <article
              key={trainer.id}
              className="bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 rounded-lg overflow-hidden flex flex-col md:flex-row transition-all duration-200 group shadow-lg h-full"
            >
              {/* Trainer Portrait - Grayscale with sharp border */}
              <div className="relative w-full md:w-5/12 aspect-[4/5] md:aspect-auto border-b md:border-b-0 md:border-r border-[#414045] bg-[#050507] shrink-0 min-h-[260px] sm:min-h-[300px]">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role} at Classic Fitness`}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-top grayscale contrast-125 brightness-90"
                />
                <div className="absolute top-2.5 left-2.5">
                  {trainer.isConfirmed ? (
                    <Badge variant="accent">Verified Head Coach</Badge>
                  ) : (
                    <Badge variant="outline">Gym Staff</Badge>
                  )}
                </div>
              </div>

              {/* Trainer Details */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="font-mono text-xs font-bold text-[#ffc526] uppercase tracking-wider block mb-1">
                    {trainer.experienceYears}+ Years Coaching
                  </span>

                  <h3 className="text-xl sm:text-2xl font-heading uppercase text-[#f3f4f2]">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-body font-bold text-[#b3b2b2] uppercase tracking-wider mb-3 sm:mb-4">
                    {trainer.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[#b3b2b2] font-body leading-relaxed mb-4 sm:mb-5">
                    {trainer.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-[11px] sm:text-xs font-body font-bold uppercase tracking-[0.06em] text-[#f3f4f2] mb-2">
                      Core Specialities:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialisations.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-0.5 sm:py-1 bg-[#16161a] border border-[#414045] text-[10px] sm:text-[11px] font-mono text-[#b3b2b2] uppercase rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#222126] mt-2">
                  <Link
                    href={`/contact?intent=personal-training&coach=${encodeURIComponent(trainer.name)}`}
                    className="text-xs font-body font-bold uppercase tracking-[0.06em] text-[#ffc526] hover:text-[#ffd76a] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request Coaching with {trainer.name.split(' ')[1] || trainer.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
