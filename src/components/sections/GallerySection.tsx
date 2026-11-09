'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryData } from '@/data/gallery';
import { GalleryItem } from '@/types/business';
import { Modal } from '@/components/ui/Modal';
import { ArrowUpRight } from 'lucide-react';

interface GallerySectionProps {
  showHeading?: boolean;
}

export function GallerySection({ showHeading = true }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [selectedImage, setSelectedImage] = React.useState<GalleryItem | null>(null);

  const categories = ['All', 'Strength', 'Facility', 'Coaching', 'Free Weights'];

  const filteredItems = React.useMemo(() => {
    if (activeCategory === 'All') return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
      <Container>
        {showHeading ? (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <SectionHeading
              kicker="FACILITY & IRON ARENA"
              title={
                <span>
                  THE GYM FLOOR IN <br className="hidden sm:inline" />
                  <span className="text-[#ffc526]">HSR LAYOUT.</span>
                </span>
              }
              subtitle="Inspect our iron racks, dumbbells, selectorized machines, and coaching environment."
              className="mb-0"
            />

            {/* Filter Chips - EightbornV 4px rounded buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded text-xs font-body font-bold uppercase tracking-[0.06em] border transition-colors duration-150 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#ffc526] text-[#0e0e11] border-[#ffc526] shadow-sm'
                      : 'bg-[#111014] text-[#b3b2b2] border-[#414045] hover:border-[#8e8e8e] hover:text-[#f3f4f2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-body font-bold uppercase tracking-[0.06em] border transition-colors duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ffc526] text-[#0e0e11] border-[#ffc526] shadow-sm'
                    : 'bg-[#111014] text-[#b3b2b2] border-[#414045] hover:border-[#8e8e8e] hover:text-[#f3f4f2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Gallery Grid - 8px rounded cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-[#111014] border border-[#414045] hover:border-[#ffc526]/50 rounded-lg cursor-pointer aspect-[4/3] overflow-hidden transition-all duration-200 shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
              />

              {/* View Overlay Icon */}
              <div className="absolute top-0 right-0 bg-[#111014]/90 text-[#ffc526] w-9 h-9 border-b border-l border-[#414045] rounded-bl flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Card Label Banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#111014]/95 text-[#f3f4f2] p-3.5 border-t border-[#414045]">
                <span className="font-mono text-[10px] uppercase text-[#ffc526] font-bold block">
                  {item.category}
                </span>
                <h3 className="text-sm font-heading uppercase text-[#f3f4f2] truncate mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage ? (
        <Modal
          isOpen={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title}
          description={`Facility Category: ${selectedImage.category}`}
          maxWidth="lg"
        >
          <div className="relative aspect-[16/10] w-full border border-[#414045] rounded overflow-hidden">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-cover"
            />
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
