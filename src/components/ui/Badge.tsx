import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'warning' | 'success';
}

export function Badge({
  className,
  variant = 'primary',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary:
      'bg-[#1c1b20] text-[#ffc526] border border-[#ffc526]/35 shadow-sm',
    accent:
      'bg-[#ffc526]/15 text-[#ffc526] border border-[#ffc526]/40',
    outline:
      'bg-[#111014] text-[#b3b2b2] border border-[#414045]',
    warning:
      'bg-[#ffd76a]/15 text-[#ffd76a] border border-[#ffd76a]/35',
    success:
      'bg-[#19b394]/15 text-[#16d5b2] border border-[#16d5b2]/35',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium uppercase tracking-[0.08em]',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
