import * as React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
      <Container>
        <SectionHeading
          kicker="MEMBER VOICES"
          title={
            <span>
              AUTHENTIC FEEDBACK FROM <br className="hidden sm:inline" />
              <span className="text-[#ffc526]">OUR HSR COMMUNITY.</span>
            </span>
          }
          subtitle="Real reviews reflecting the attentive coaching and disciplined environment at Classic Fitness."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-5 sm:p-7 md:p-8 bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 hover:bg-[#1c1b20] rounded-lg relative flex flex-col justify-between transition-colors group shadow-lg"
            >
              <div>
                {/* Rating stars & Quote glyph */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#ffc526]">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffc526]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#ffc526]" />
                </div>

                <p className="text-base text-[#f3f4f2] font-body leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#222126] flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-sm uppercase text-[#f3f4f2]">
                    {testimonial.author}
                  </h3>
                  <p className="text-xs text-[#b3b2b2] font-body mt-0.5">
                    {testimonial.memberType}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#16d5b2] bg-[#19b394]/15 px-2.5 py-0.5 border border-[#16d5b2]/35 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>{testimonial.source}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
