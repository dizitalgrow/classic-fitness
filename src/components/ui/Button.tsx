import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      isExternal = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // EightbornV button foundations: 4px rounded radius, Inter bold uppercase, 1px borders, smooth 200ms ease transition
    const baseStyles =
      'inline-flex items-center justify-center font-body font-bold text-xs uppercase tracking-[0.08em] rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e11] disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px] select-none text-center cursor-pointer';

    const variants = {
      primary:
        'bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] hover:bg-[#ffd76a] hover:border-[#ffd76a] hover:text-[#161519] shadow-sm',
      secondary:
        'bg-transparent text-[#f3f4f2] border border-[#414045] hover:bg-[#1c1b20] hover:border-[#8e8e8e] hover:text-[#f3f4f2]',
      ghost:
        'bg-transparent text-[#b3b2b2] border border-transparent hover:bg-[#1c1b20] hover:text-[#ffc526]',
      destructive:
        'bg-[#e50a3e] text-[#ffffff] border border-[#e50a3e] hover:bg-[#920728] hover:border-[#920728]',
      whatsapp:
        'bg-[#111014] text-[#16d5b2] border border-[#16d5b2]/40 hover:bg-[#16d5b2] hover:border-[#16d5b2] hover:text-[#0e0e11]',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs gap-1.5',
      md: 'h-12 px-6 text-xs gap-2',
      lg: 'h-12 sm:h-14 px-8 text-sm gap-2.5',
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {isLoading ? <span className="animate-spin mr-2">⏳</span> : null}
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {isLoading ? <span className="animate-spin mr-2">⏳</span> : null}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
