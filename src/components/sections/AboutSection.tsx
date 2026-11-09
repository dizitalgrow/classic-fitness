import * as React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Dumbbell, Users, Target } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  const pillars = [
    {
      icon: Dumbbell,
      num: '01',
      title: 'Real Strength & Free Weights',
      description:
        'Focus on foundational multi-joint compound lifts, barbell mastery, and progressive loading rather than hollow gimmicks.',
    },
    {
      icon: Users,
      num: '02',
      title: 'Attentive Coach Mentorship',
      description:
        'Head Coach Ravi and floor trainers actively review your posture, correct bar trajectories, and provide daily technical guidance.',
    },
    {
      icon: Target,
      num: '03',
      title: 'Realistic Nutrition Guidance',
      description:
        'Practical meal guidelines adapted to regular South and North Indian diets to fuel sustainable fat loss and muscle retention.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0e0e11] border-b border-[#414045]/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase on Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#414045] bg-[#111014] aspect-[4/5] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
                alt="Classic Fitness Gym Training Atmosphere in HSR"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale contrast-125 brightness-90"
              />

              {/* Archival Pull-Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#111014]/95 text-[#f3f4f2] p-4 sm:p-5 border-t border-[#414045]">
                <p className="font-mono text-[11px] sm:text-xs uppercase text-[#ffc526] tracking-wider mb-1">
                  EDITORIAL PULL-QUOTE
                </p>
                <p className="font-body text-xs sm:text-sm font-medium leading-snug text-[#f3f4f2]">
                  &ldquo;A neighbourhood gym where coaches know your name, your lift numbers, and your fitness goals.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Text Content on Right */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              kicker="ABOUT CLASSIC FITNESS"
              title={
                <span>
                  BUILT FOR DISCIPLINE, <br className="hidden sm:inline" />
                  <span className="text-[#ffc526]">NOT DISTRACTIONS.</span>
                </span>
              }
              subtitle="Located right opposite HSR Government School in Neelakanteshwara Layout, Classic Fitness is engineered for individuals who take their physical health and strength seriously."
            />

            <p className="text-sm sm:text-base text-[#b3b2b2] font-body leading-[1.65] mb-6 sm:mb-8">
              We cut through the noise of crowded commercial gym chains. Whether your goal is to drop stubborn body fat, build muscular size, or learn proper squat and deadlift mechanics safely, our coaching methodology guarantees you are never left guessing what to do on the floor.
            </p>

            {/* 3 Value Pillars - EightbornV 8px rounded cards */}
            <div className="space-y-3 mb-8 sm:mb-10">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 sm:p-5 bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 hover:bg-[#1c1b20] rounded-lg transition-colors flex items-start gap-3.5 sm:gap-4 shadow-md"
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#ffc526] pt-1 shrink-0">
                      {pillar.num}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base uppercase text-[#f3f4f2]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#b3b2b2] mt-1 font-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button href="/about" variant="primary" size="md">
                <span>Read Full Philosophy</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/trainers" variant="secondary" size="md">
                <span>Meet Head Coach Ravi</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
