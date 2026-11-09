import * as React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0e0e11] flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#222126] border-t-[#ffc526] rounded-full animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#f3f4f2] font-bold">
          LOADING CLASSIC FITNESS...
        </span>
      </div>
    </div>
  );
}
