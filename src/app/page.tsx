import { PageContainer } from '@/components/layout/PageContainer';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProgrammesSection } from '@/components/sections/ProgrammesSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TrainersSection } from '@/components/sections/TrainersSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { MembershipSection } from '@/components/sections/MembershipSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <PageContainer hasHero>
      {/* 1. Hero: BUILT THROUGH DISCIPLINE */}
      <Hero />

      {/* 2. Editorial About Section */}
      <AboutSection />

      {/* 3. Training Programmes Grid */}
      <ProgrammesSection limit={3} />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Trainers (Coach Ravi) */}
      <TrainersSection />

      {/* 6. Gym Gallery */}
      <GallerySection />

      {/* 7. Structured Membership Tiers */}
      <MembershipSection />

      {/* 8. Authentic Member Reviews */}
      <TestimonialsSection />

      {/* 9. FAQs */}
      <FAQSection />

      {/* 10. Location, Hours & Embedded Map */}
      <LocationSection />

      {/* 11. Final Conversion CTA */}
      <FinalCTA />
    </PageContainer>
  );
}
