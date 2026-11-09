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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Opaque Noir Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0e11]/85 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content - 8px radius, 1px border #414045, surface #111014 */}
      <div
        className={cn(
          'relative w-full rounded-lg bg-[#111014] border border-[#414045] p-6 sm:p-8 z-10 shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-[#ffc526]/10',
          maxWidths[maxWidth]
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 p-2 text-[#b3b2b2] hover:bg-[#1c1b20] hover:text-[#ffc526] rounded transition-colors focus:outline-none border border-transparent hover:border-[#414045]"
        >
          <X className="w-5 h-5" />
        </button>

        {title ? (
          <div className="mb-6 pr-8">
            <h3
              id="modal-title"
              className="text-xl sm:text-2xl font-heading uppercase text-[#f3f4f2] tracking-[-0.02em]"
            >
              {title}
            </h3>
            {description ? (
              <p id="modal-description" className="mt-1 text-sm text-[#b3b2b2] font-body leading-relaxed">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
