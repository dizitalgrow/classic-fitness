import type { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { GallerySection } from '@/components/sections/GallerySection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Gym Gallery & Facilities | Classic Fitness HSR Layout',
  description:
    'Browse our facility photo gallery: Olympic barbells, dumbbell racks, functional workout turf, selectorized machines, and training environment in HSR Layout.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <PageContainer>
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
              PHOTO GALLERY & FACILITY TOUR
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading uppercase text-[#f3f4f2] leading-[1.02] tracking-[-0.03em] mb-6">
              THE WORKOUT FLOOR <br />
              <span className="text-[#ffc526]">IN PICTURES.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b3b2b2] font-body leading-relaxed">
              Take an authentic visual tour of Classic Fitness. Check out our free-weight stations, dedicated lifting racks, cable stations, and energetic training environment.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <GallerySection showHeading={false} />

      {/* Final CTA */}
      <FinalCTA />
    </PageContainer>
  );
}
