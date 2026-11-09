'use client';

import * as React from 'react';
import { EnquiryForm } from './EnquiryForm';

interface FreeTrialFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function FreeTrialForm({ onSuccess, className }: FreeTrialFormProps) {
  return (
    <div className={className}>
      <div className="mb-4 p-3.5 bg-[#16161a] border border-[#414045] rounded text-xs text-[#b3b2b2] font-mono">
        <strong className="text-[#ffc526] font-bold">Free 1-Day Workout Pass:</strong> Includes a full guided workout session, form analysis by floor coaches, and equipment orientation in HSR Layout.
      </div>
      <EnquiryForm defaultEnquiryType="Free Trial" onSuccess={onSuccess} />
    </div>
  );
}
