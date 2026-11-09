import * as React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { formatPhoneNumber } from '@/lib/utils';

export function LocationSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]" id="location">
      <Container>
        <SectionHeading
          kicker="VISIT CLASSIC FITNESS"
          title={
            <span>
              LOCATION & DIRECTIONS <br className="hidden sm:inline" />
              <span className="text-[#ffc526]">IN HSR LAYOUT.</span>
            </span>
          }
          subtitle="Conveniently situated in Sector 1, Neelakanteshwara Layout, directly opposite HSR Government School."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 bg-[#111014] border border-[#414045] rounded-lg space-y-5 shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#ffc526]" />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-base text-[#f3f4f2]">
                    Address & Landmark
                  </h3>
                  <p className="text-sm text-[#b3b2b2] font-body mt-1 leading-relaxed">
                    {siteConfig.address.fullAddress}
                  </p>
                  <p className="font-mono text-xs text-[#ffc526] font-bold uppercase mt-2">
                    ★ DIRECTLY OPPOSITE HSR GOVERNMENT SCHOOL
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#222126]">
                <div className="w-10 h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#ffc526]" />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-base text-[#f3f4f2]">
                    Training Hours (Provisional)
                  </h3>
                  <div className="text-sm font-mono text-[#b3b2b2] mt-1 space-y-1">
                    <p>
                      <strong className="text-[#f3f4f2]">Mon – Sat:</strong> 5:30 AM – 11:00 AM & 4:30 PM – 10:00 PM
                    </p>
                    <p>
                      <strong className="text-[#f3f4f2]">Sun:</strong> 5:30 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#222126]">
                <div className="w-10 h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#ffc526]" />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-base text-[#f3f4f2]">
                    Direct Contact
                  </h3>
                  <p className="text-sm text-[#b3b2b2] font-body mt-1">
                    Call:{' '}
                    <a
                      href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
                      className="text-[#f3f4f2] font-bold hover:text-[#ffc526] font-mono"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-[#8e8e8e] font-mono mt-0.5">
                    WhatsApp enquiries answered during desk hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href={siteConfig.social.googleMaps}
                isExternal
                variant="primary"
                size="md"
                className="flex-1"
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span>Get Directions</span>
              </Button>

              <Button
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappPrefilledText
                )}`}
                isExternal
                variant="whatsapp"
                size="md"
                className="flex-1"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Message on WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div className="lg:col-span-7">
            <div className="border border-[#414045] bg-[#111014] rounded-lg overflow-hidden h-[420px] sm:h-[460px] relative shadow-xl">
              <iframe
                title="Classic Fitness HSR Layout Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750379051398!2d77.6366627!3d12.9112218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153eaa3f50f3%3A0xdd1f9469a89ddd7!2sClassic%20Fitness!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Address Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#111014]/95 border border-[#414045] p-3 rounded font-mono text-xs text-[#f3f4f2] shadow-lg">
                <span className="block font-bold text-[#ffc526] uppercase">Location Check:</span>
                Opposite HSR Government School, Sector 1, Bengaluru.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
