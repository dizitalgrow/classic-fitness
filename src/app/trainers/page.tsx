import type { Metadata } from 'next';
import Image from 'next/image';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { trainersData } from '@/data/trainers';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { constructMetadata } from '@/lib/metadata';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Certified Trainers & Coaches | Head Coach Ravi | Classic Fitness HSR',
  description:
    'Meet the dedicated fitness trainers and Head Coach Ravi at Classic Fitness in HSR Layout, Bengaluru. Expert form instruction, progressive overload, and motivation.',
  path: '/trainers',
});

export default function TrainersPage() {
  return (
    <PageContainer>
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
              COACHING LEADERSHIP
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading uppercase text-[#f3f4f2] leading-[1.02] tracking-[-0.03em] mb-6">
              LEADERSHIP DRIVEN BY <br />
              <span className="text-[#ffc526]">TECHNIQUE AND INTEGRITY.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b3b2b2] font-body leading-relaxed">
              At Classic Fitness, our coaching team does not sit behind a counter looking at phones. We are actively on the floor correcting angles, spotting heavy sets, and celebrating your personal bests.
            </p>
          </div>
        </Container>
      </section>

      {/* Coaches Detailed Section */}
      <section className="py-16 sm:py-24 bg-[#08080b] border-b border-[#414045]">
        <Container>
          <div className="space-y-12 max-w-5xl mx-auto">
            {trainersData.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-[#111014] border border-[#414045] rounded-lg p-5 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl"
              >
                {/* Image */}
                <div className="md:col-span-5 relative aspect-[3/4] border border-[#414045] bg-[#050507] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
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

                {/* Info */}
                <div className="md:col-span-7 space-y-5">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#ffc526] uppercase tracking-wider block mb-1">
                      {trainer.experienceYears}+ Years Field Experience
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-heading uppercase text-[#f3f4f2]">
                      {trainer.name}
                    </h2>
                    <p className="text-xs font-body font-bold text-[#b3b2b2] uppercase tracking-wider mt-1">
                      {trainer.role}
                    </p>
                  </div>

                  <p className="text-base text-[#b3b2b2] font-body leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div>
                    <h3 className="text-xs font-body font-bold uppercase tracking-[0.06em] text-[#f3f4f2] mb-3">
                      Qualifications & Credentials:
                    </h3>
                    <div className="space-y-2">
                      {trainer.qualifications.map((q) => (
                        <div key={q} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f3f4f2] font-body">
                          <CheckCircle2 className="w-4 h-4 text-[#16d5b2] shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-body font-bold uppercase tracking-[0.06em] text-[#f3f4f2] mb-3">
                      Core Specialities:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialisations.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-[#16161a] border border-[#414045] text-xs font-mono text-[#b3b2b2] uppercase rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#222126] flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      href={`/contact?intent=personal-training&coach=${encodeURIComponent(trainer.name)}`}
                      variant="primary"
                      size="md"
                    >
                      <span>Book Consultation With {trainer.name.split(' ')[1] || trainer.name}</span>
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </PageContainer>
  );
}
