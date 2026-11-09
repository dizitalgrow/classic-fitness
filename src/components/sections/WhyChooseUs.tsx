import * as React from 'react';
import { Dumbbell, Clock, Users, Flame, Award, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WhyChooseUs() {
  const reasons = [
    {
      num: '01',
      icon: Users,
      title: 'Attentive Floor Mentorship',
      description:
        'You are never left wandering clueless. Floor trainers actively supervise posture, spot sets, and assist with form adjustments on every visit.',
    },
    {
      num: '02',
      icon: Clock,
      title: '5:30 AM Early Morning Access',
      description:
        'Beat Bengaluru traffic. Get an energizing heavy lifting or cardio session completed before your daily office standup or morning commute.',
    },
    {
      num: '03',
      icon: Dumbbell,
      title: 'Serious Iron & Machine Variety',
      description:
        'Dedicated racks, Olympic barbells, ample dumbbell ranges, and plate-loaded machines to train every single muscle angle effectively.',
    },
    {
      num: '04',
      icon: Flame,
      title: 'Customized Workout Splits',
      description:
        'Say goodbye to cookie-cutter routines. We customize workout programming around your joint health, experience level, and body goals.',
    },
    {
      num: '05',
      icon: Award,
      title: 'Direct Head Coach Oversight',
      description:
        'Coach Ravi brings years of focused coaching in HSR Layout, ensuring members push past plateaus safely with disciplined technique.',
    },
    {
      num: '06',
      icon: ShieldCheck,
      title: 'Unpretentious, Focused Vibe',
      description:
        'No influencer circus or selfie blockades. Just hard-working members and dedicated coaches focused on consistent physical progression.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0e0e11] border-b border-[#414045]/60">
      <Container>
        <SectionHeading
          kicker="THE CLASSIC ADVANTAGE"
          title={
            <span>
              WHY HSR LIFTERS CHOOSE <br className="hidden sm:inline" />
              <span className="text-[#ffc526]">CLASSIC FITNESS.</span>
            </span>
          }
          subtitle="We focus on what genuinely delivers muscle, strength, and fat loss: expert coaching, progressive loading, and zero gimmicks."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-5 sm:p-7 bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 hover:bg-[#1c1b20] rounded-lg transition-colors flex flex-col justify-between group shadow-lg h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#ffc526]">
                      {reason.num}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading uppercase text-[#f3f4f2] mb-2.5">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b3b2b2] font-body leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
