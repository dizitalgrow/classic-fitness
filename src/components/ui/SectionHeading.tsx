import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  kicker?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  badgeVariant?: 'primary' | 'accent' | 'outline' | 'warning' | 'success';
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  className,
  badgeVariant = 'primary',
}: SectionHeadingProps) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div
      className={cn(
        'flex flex-col max-w-4xl mb-10 sm:mb-14',
        alignments[align],
        className
      )}
    >
      {kicker ? (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{kicker}</Badge>
        </div>
      ) : null}

      <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-heading uppercase text-[#f3f4f2] tracking-[-0.02em] leading-[1.1]">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base sm:text-lg text-[#b3b2b2] leading-[1.65] font-body">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
