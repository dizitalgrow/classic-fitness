import * as React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';
import { formatPhoneNumber } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-[#08080b] text-[#f3f4f2] border-t border-[#414045] pt-16 pb-28 sm:pb-16 font-body">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#222126]">
          {/* Brand Colophon */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#111014] text-[#f3f4f2] border border-[#ffc526]/50 rounded flex items-center justify-center font-heading font-black text-sm">
                CF
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl uppercase tracking-[-0.02em] text-[#f3f4f2] leading-none">
                  CLASSIC
                </span>
                <span className="font-body font-bold text-xs tracking-[0.25em] text-[#ffc526] uppercase leading-tight mt-0.5">
                  FITNESS
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-[#b3b2b2]">
              {siteConfig.shortDescription}
            </p>

            {/* Social channels - 40px rounded blocks */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Classic Fitness on Instagram"
                className="w-10 h-10 rounded bg-[#111014] border border-[#414045] flex items-center justify-center text-[#b3b2b2] hover:bg-[#ffc526] hover:border-[#ffc526] hover:text-[#0e0e11] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Classic Fitness on Facebook"
                className="w-10 h-10 rounded bg-[#111014] border border-[#414045] flex items-center justify-center text-[#b3b2b2] hover:bg-[#ffc526] hover:border-[#ffc526] hover:text-[#0e0e11] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappPrefilledText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Classic Fitness on WhatsApp"
                className="w-10 h-10 rounded bg-[#111014] border border-[#16d5b2]/40 flex items-center justify-center text-[#16d5b2] hover:bg-[#16d5b2] hover:border-[#16d5b2] hover:text-[#0e0e11] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 text-[11px] font-mono font-medium uppercase tracking-wider rounded-full">
                Opposite HSR Government School
              </span>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#f3f4f2] mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs font-body font-bold uppercase tracking-[0.06em]">
              {footerNavigation.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#b3b2b2] hover:text-[#ffc526] transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#f3f4f2] mb-4">
              Programmes
            </h3>
            <ul className="space-y-2 text-xs font-body font-bold uppercase tracking-[0.06em]">
              {footerNavigation.programmes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#b3b2b2] hover:text-[#ffc526] transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Working Hours */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#f3f4f2] mb-4">
              Visit the Gym
            </h3>

            <div className="flex items-start gap-2.5 text-xs text-[#b3b2b2] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#ffc526] shrink-0 mt-0.5" />
              <span>{siteConfig.address.fullAddress}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-[#b3b2b2]">
              <Clock className="w-4 h-4 text-[#ffc526] shrink-0 mt-0.5" />
              <div className="font-mono space-y-0.5">
                <p>Mon–Sat: 5:30 AM – 11 AM & 4:30 PM – 10 PM</p>
                <p>Sun: 5:30 AM – 1:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#b3b2b2]">
              <Phone className="w-4 h-4 text-[#ffc526] shrink-0" />
              <a
                href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
                className="font-mono text-[#f3f4f2] hover:text-[#ffc526] font-bold"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#b3b2b2]">
              <Mail className="w-4 h-4 text-[#ffc526] shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-mono text-[#f3f4f2] hover:text-[#ffc526]"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ffc526] hover:underline"
              >
                <span>Open Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8e8e8e]">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#f3f4f2] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#f3f4f2] transition-colors">
              Support & Directions
            </Link>
            <span>Sector 1, HSR Layout, Bengaluru</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
