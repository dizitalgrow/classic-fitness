import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  hasHero?: boolean;
}

export function PageContainer({
  children,
  className,
  hasHero = false,
}: PageContainerProps) {
  return (
    <main
      className={cn(
        'min-h-screen flex flex-col bg-background text-content-primary',
        !hasHero ? 'pt-16 lg:pt-18' : '',
        className
      )}
    >
      {children}
    </main>
  );
}
