'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
}: ModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidths = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
      className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6"
    >
      {/* Opaque Noir Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0e11]/85 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centering wrapper */}
      <div className="flex min-h-full items-center justify-center relative z-10 pointer-events-none">
        {/* Modal Dialog Content - 8px radius, 1px border #414045, surface #111014 */}
        <div
          className={cn(
            'pointer-events-auto relative w-full rounded-lg bg-[#111014] border border-[#414045] p-5 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-[#ffc526]/10 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3.5rem)] flex flex-col',
            maxWidths[maxWidth]
          )}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#222126] shrink-0">
            <div className="pr-2">
              {title ? (
                <h3
                  id="modal-title"
                  className="text-lg sm:text-2xl font-heading uppercase text-[#f3f4f2] tracking-[-0.02em] leading-tight"
                >
                  {title}
                </h3>
              ) : null}
              {description ? (
                <p id="modal-description" className="mt-1 text-xs sm:text-sm text-[#b3b2b2] font-body leading-relaxed">
                  {description}
                </p>
              ) : null}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 sm:p-2 text-[#b3b2b2] hover:bg-[#1c1b20] hover:text-[#ffc526] rounded transition-colors focus:outline-none border border-transparent hover:border-[#414045] shrink-0 -mr-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body with internal smooth scrolling */}
          <div className="mt-4 overflow-y-auto pr-1 sm:pr-2 flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
