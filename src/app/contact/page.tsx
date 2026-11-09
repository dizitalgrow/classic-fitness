import type { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';
import { formatPhoneNumber } from '@/lib/utils';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Mail, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Contact & Location | Book a Free Trial | Classic Fitness HSR Layout',
  description:
    'Visit Classic Fitness opposite HSR Government School on 17th A Main Rd, Neelakanteshwara Layout, Bengaluru 560068. Call, WhatsApp, or send an enquiry form.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageContainer>
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-6 rounded-full shadow-sm">
              GET IN TOUCH • ENQUIRIES
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading uppercase text-[#f3f4f2] leading-[1.02] tracking-[-0.03em] mb-6">
              LET’S TALK ABOUT <br />
              <span className="text-[#ffc526]">YOUR FITNESS GOALS.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b3b2b2] font-body leading-relaxed">
              Drop by for a gym tour, send us an enquiry, or message Coach Ravi directly on WhatsApp. We are here to help you get started without pressure.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-24 bg-[#08080b] border-b border-[#414045]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#111014] border border-[#414045] rounded-lg p-5 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-heading uppercase text-[#f3f4f2] mb-2">
                Send an Enquiry or Book Free Trial
              </h2>
              <p className="text-sm text-[#b3b2b2] mb-8 font-body">
                Fill in your details below. Our team will get back to you promptly via phone or WhatsApp.
              </p>

              <EnquiryForm defaultEnquiryType="General Enquiry" />
            </div>

            {/* Business Contact Cards on Right */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address card */}
              <div className="p-6 bg-[#111014] border border-[#414045] rounded-lg space-y-3 shadow-lg">
                <div className="w-10 h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#ffc526]" />
                </div>
                <h3 className="font-heading uppercase text-base text-[#f3f4f2]">
                  Gym Location
                </h3>
                <p className="text-sm text-[#b3b2b2] leading-relaxed font-body">
                  {siteConfig.address.fullAddress}
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-body font-bold uppercase tracking-[0.06em] text-[#ffc526] hover:text-[#ffd76a] hover:underline transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Working Hours card */}
              <div className="p-6 bg-[#111014] border border-[#414045] rounded-lg space-y-3 shadow-lg">
                <div className="w-10 h-10 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 rounded flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#ffc526]" />
                </div>
                <h3 className="font-heading uppercase text-base text-[#f3f4f2]">
                  Operating Hours (Provisional)
                </h3>
                <div className="text-sm font-mono text-[#b3b2b2] space-y-1.5">
                  <p className="flex justify-between">
                    <span className="text-[#f3f4f2] font-bold">Mon – Sat:</span>
                    <span>5:30 AM – 11:00 AM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#f3f4f2] font-bold">Evening Shift:</span>
                    <span>4:30 PM – 10:00 PM</span>
                  </p>
                  <p className="flex justify-between pt-1 border-t border-[#222126]">
                    <span className="text-[#f3f4f2] font-bold">Sunday:</span>
                    <span>5:30 AM – 1:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Direct Instant Channels */}
              <div className="p-6 bg-[#111014] border border-[#414045] rounded-lg space-y-3 shadow-lg">
                <h3 className="font-heading uppercase text-base text-[#f3f4f2]">
                  Instant Communication
                </h3>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      siteConfig.contact.whatsappPrefilledText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded bg-[#16161a] text-[#16d5b2] border border-[#16d5b2]/40 hover:bg-[#16d5b2] hover:text-[#0e0e11] hover:border-[#16d5b2] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span className="font-body font-bold text-xs uppercase tracking-[0.06em]">
                        WhatsApp Fast Chat
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
                    className="flex items-center justify-between p-3.5 rounded bg-[#16161a] text-[#f3f4f2] border border-[#ffc526]/40 hover:bg-[#ffc526] hover:text-[#0e0e11] hover:border-[#ffc526] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#ffc526]" />
                      <span className="font-body font-bold text-xs uppercase tracking-[0.06em]">
                        Call {siteConfig.contact.phoneDisplay}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#b3b2b2]">DESK</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center justify-between p-3.5 rounded bg-[#16161a] text-[#f3f4f2] border border-[#414045] hover:border-[#8e8e8e] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#ffc526]" />
                      <span className="font-mono text-xs">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#8e8e8e]">EMAIL</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded Google Map */}
      <section className="py-12 bg-[#0e0e11] border-b border-[#414045]">
        <Container>
          <div className="border border-[#414045] bg-[#111014] rounded-lg h-[400px] sm:h-[480px] relative overflow-hidden shadow-xl">
            <iframe
              title="Classic Fitness HSR Layout Full Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750379051398!2d77.6366627!3d12.9112218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153eaa3f50f3%3A0xdd1f9469a89ddd7!2sClassic%20Fitness!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </PageContainer>
  );
}
