import type { Metadata } from 'next';
import Image from 'next/image';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TrainersSection } from '@/components/sections/TrainersSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { constructMetadata } from '@/lib/metadata';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Us | The Classic Fitness Philosophy in HSR Layout',
  description:
    'Learn about Classic Fitness in Neelakanteshwara Layout, HSR Layout. Our training approach, strength philosophy, and dedicated coaching under Coach Ravi.',
  path: '/about',
});

export default function AboutPage() {
  const values = [
    {
      num: '01',
      title: 'Technique Before Weight',
      desc: 'We never let members sacrifice lift mechanics for ego. Mastering bar path and bracing ensures lifelong progression without avoidable back or shoulder injuries.',
    },
    {
      num: '02',
      title: 'Progressive Overload',
      desc: 'Whether your target is muscle growth or athletic power, our coaches track your sets, reps, and resistance increases week over week.',
    },
    {
      num: '03',
      title: 'No Crowded Waiting',
      desc: 'Our spacious layout and multiple barbell stations ensure you spend your gym time training, not waiting around for a single bench.',
    },
    {
      num: '04',
      title: 'Sustainable Nutrition',
      desc: 'Real food for real results. We advise on balanced protein, healthy carbohydrates, and hydration adapted to Indian diets and daily schedules.',
    },
  ];

  return (
    <PageContainer>
      {/* Archival Noir Editorial Header */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
              EDITORIAL FEATURE • HSR LAYOUT
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading uppercase text-[#f3f4f2] leading-[1.02] tracking-[-0.03em] mb-6">
              A DISCIPLINED FITNESS COMMUNITY <br />
              <span className="text-[#ffc526]">BUILT ON REAL RESULTS.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b3b2b2] font-body leading-relaxed">
              Established opposite the HSR Government School on 17th A Main Road, Classic Fitness was created to bring disciplined, guided strength training and personal transformation back to the neighbourhood.
            </p>
          </div>
        </Container>
      </section>

      {/* Brand Story & Split Column with 1px borders */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                kicker="OUR STORY"
                title={
                  <span>
                    BEYOND THE <br />
                    <span className="text-[#ffc526]">COMMERCIAL CLUTTER.</span>
                  </span>
                }
                subtitle="Why we built Classic Fitness for HSR Layout residents."
              />
              <p className="text-base text-[#b3b2b2] font-body leading-relaxed">
                Many modern gyms have become social media stages where beginners are left intimidated, and serious lifters find inadequate equipment and little to no coach support.
              </p>
              <p className="text-base text-[#b3b2b2] font-body leading-relaxed">
                At Classic Fitness, we stripped away the hype. We invested in sturdy racks, calibrated Olympic bars, reliable dumbbells, and a training culture rooted in humility, mutual support, and daily discipline.
              </p>
              <div className="p-4 bg-[#111014] border border-[#414045] rounded-lg flex items-center gap-3 font-mono text-xs text-[#f3f4f2]">
                <MapPin className="w-5 h-5 text-[#ffc526] shrink-0" />
                <span>
                  17th A Main Road, opposite HSR Government School, Neelakanteshwara Layout, Bengaluru 560068.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] border border-[#414045] bg-[#111014] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Classic Fitness Facility Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale contrast-125 brightness-90"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Philosophy Grid */}
      <section className="py-16 sm:py-24 bg-[#08080b] border-b border-[#414045]">
        <Container>
          <SectionHeading
            kicker="OUR CORE PHILOSOPHY"
            title={
              <span>
                FOUR PILLARS OF <br />
                <span className="text-[#ffc526]">EVERY WORKOUT SESSION.</span>
              </span>
            }
            subtitle="The fundamental principles guiding every member and coach at Classic Fitness."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 rounded-lg transition-colors flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#ffc526] uppercase tracking-wider block mb-3">
                    PILLAR {v.num}
                  </span>
                  <h3 className="text-lg font-heading uppercase text-[#f3f4f2] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#b3b2b2] font-body leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trainers Showcase */}
      <TrainersSection />

      {/* Conversion Final CTA */}
      <FinalCTA />
    </PageContainer>
  );
}
