'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { formatPhoneNumber } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenTrial }: MobileMenuProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Opaque Noir Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0e11]/85 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Tray - Archival Noir #111014 container with 1px border #414045 */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#111014] border-l border-[#414045] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#414045]">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 bg-[#0e0e11] text-[#f3f4f2] border border-[#ffc526]/50 rounded flex items-center justify-center font-heading font-black text-xs">
                CF
              </span>
              <span className="font-heading text-sm uppercase tracking-tight text-[#f3f4f2]">
                CLASSIC <span className="text-[#ffc526]">FITNESS</span>
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded border border-[#414045] text-[#b3b2b2] hover:text-[#ffc526] hover:bg-[#1c1b20] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1.5 py-6">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded font-body text-xs font-bold uppercase tracking-[0.08em] transition-colors border-l-2 ${
                    isActive
                      ? 'border-[#ffc526] bg-[#16161a] text-[#ffc526]'
                      : 'border-transparent text-[#b3b2b2] hover:text-[#f3f4f2] hover:bg-[#1c1b20]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer CTAs */}
        <div className="pt-6 border-t border-[#414045] flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenTrial();
            }}
            className="w-full h-12 rounded bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] font-body font-bold text-xs uppercase tracking-[0.08em] flex items-center justify-center gap-2 hover:bg-[#ffd76a] hover:border-[#ffd76a] transition-colors shadow-sm"
          >
            <span>Book Free Trial</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${formatPhoneNumber(siteConfig.contact.phone)}`}
              onClick={() => {
                trackPhoneClick('Mobile Drawer Call');
                onClose();
              }}
              className="h-11 rounded border border-[#414045] bg-[#16161a] text-[#f3f4f2] hover:border-[#8e8e8e] hover:bg-[#1c1b20] font-body font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffc526]" />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                siteConfig.contact.whatsappPrefilledText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick('Mobile Drawer WhatsApp');
                onClose();
              }}
              className="h-11 rounded border border-[#16d5b2]/40 bg-[#16161a] text-[#16d5b2] hover:border-[#16d5b2] hover:bg-[#1c1b20] font-body font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#16d5b2]" />
              <span>Chat</span>
            </a>
          </div>

          <p className="text-[11px] font-mono text-[#8e8e8e] text-center pt-2">
            Opposite HSR Government School, Sector 1
          </p>
        </div>
      </div>
    </div>
  );
}
