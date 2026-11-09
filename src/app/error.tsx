'use client';

import * as React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0e0e11] flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/40 rounded flex items-center justify-center mx-auto text-3xl font-heading shadow-md">
          !
        </div>
        <div>
          <h1 className="text-2xl font-heading uppercase text-[#f3f4f2]">
            Something Went Wrong
          </h1>
          <p className="text-sm text-[#b3b2b2] mt-2 font-body">
            We encountered an unexpected error loading this page. Please try again or reach out to our gym desk.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="h-11 px-6 bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] rounded font-body font-bold text-xs uppercase tracking-[0.08em] hover:bg-[#ffd76a] hover:border-[#ffd76a] transition-colors cursor-pointer shadow-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="h-11 px-6 bg-transparent text-[#f3f4f2] border border-[#414045] rounded font-body font-bold text-xs uppercase tracking-[0.08em] flex items-center justify-center hover:bg-[#1c1b20] hover:border-[#8e8e8e] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
