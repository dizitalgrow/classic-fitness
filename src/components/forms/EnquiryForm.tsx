'use client';

import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { enquirySchema, EnquiryFormValues } from '@/lib/validations';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { trackEnquirySubmit } from '@/lib/analytics';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface EnquiryFormProps {
  defaultEnquiryType?: 'Free Trial' | 'Membership' | 'Personal Training' | 'General Enquiry';
  onSuccess?: () => void;
  className?: string;
}

export function EnquiryForm({
  defaultEnquiryType = 'Membership',
  onSuccess,
  className,
}: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    success: boolean;
    message: string;
    enquiryId?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      fitnessGoal: 'Muscle Building & Strength',
      preferredTiming: 'Morning (5:30 AM – 8:00 AM)',
      enquiryType: defaultEnquiryType,
      message: '',
      honeypot: '',
    },
  });

  const onSubmit: SubmitHandler<EnquiryFormValues> = async (values) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you. We will contact you directly.',
          enquiryId: data.enquiryId,
        });
        trackEnquirySubmit(values.enquiryType);
        reset();
        if (onSuccess) {
          setTimeout(onSuccess, 1500);
        }
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Unable to submit enquiry. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again or message directly on WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      noValidate
      aria-label="Gym Membership and Coaching Enquiry Form"
    >
      {/* Honeypot field for bot defense */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />
      </div>

      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="e.g. Rahul Sharma"
          required
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="e.g. 9876543210"
          required
          error={errors.phone?.message}
          helperText="We will contact you via WhatsApp or Call."
          {...register('phone')}
        />

        <Select
          label="Primary Fitness Goal"
          required
          error={errors.fitnessGoal?.message}
          options={[
            { value: 'Muscle Building & Strength', label: 'Muscle Building & Strength' },
            { value: 'Weight Loss & Fat Reduction', label: 'Weight Loss & Fat Reduction' },
            { value: 'Personal Coaching 1-on-1', label: 'Personal Coaching 1-on-1' },
            { value: 'General Physical Fitness', label: 'General Physical Fitness' },
            { value: 'Body Recomposition', label: 'Body Recomposition' },
            { value: 'Not Sure / Need Consultation', label: 'Not Sure / Need Consultation' },
          ]}
          {...register('fitnessGoal')}
        />

        <Select
          label="Preferred Workout Timing"
          required
          error={errors.preferredTiming?.message}
          options={[
            {
              value: 'Morning (5:30 AM – 8:00 AM)',
              label: 'Morning (5:30 AM – 8:00 AM)',
            },
            {
              value: 'Mid-Morning (8:00 AM – 11:00 AM)',
              label: 'Mid-Morning (8:00 AM – 11:00 AM)',
            },
            {
              value: 'Evening (4:30 PM – 7:30 PM)',
              label: 'Evening (4:30 PM – 7:30 PM)',
            },
            {
              value: 'Late Evening (7:30 PM – 10:00 PM)',
              label: 'Late Evening (7:30 PM – 10:00 PM)',
            },
            { value: 'Flexible / Weekends', label: 'Flexible / Weekends' },
          ]}
          {...register('preferredTiming')}
        />

        <Textarea
          label="Specific Requirements / Background (Optional)"
          placeholder="Tell us about your fitness background, past injuries, or current routine..."
          rows={3}
          error={errors.message?.message}
          {...register('message')}
        />

        {submitStatus ? (
          <div
            className={`p-4 rounded border flex items-start gap-3 text-sm ${
              submitStatus.success
                ? 'bg-[#050507] border-[#16d5b2] text-[#16d5b2]'
                : 'bg-[#050507] border-[#ff425f] text-[#ff425f]'
            }`}
            role="status"
          >
            {submitStatus.success ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#16d5b2]" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#ff425f]" />
            )}
            <div>
              <p className="font-bold uppercase tracking-wide">{submitStatus.message}</p>
              {submitStatus.enquiryId ? (
                <p className="text-xs text-[#b3b2b2] mt-1 font-mono">
                  REF: {submitStatus.enquiryId}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
          isLoading={isSubmitting}
        >
          {defaultEnquiryType === 'Free Trial'
            ? 'Confirm Free Trial Pass'
            : 'Submit Membership Enquiry'}
        </Button>

        <p className="text-xs text-center text-[#8e8e8e] font-mono pt-1">
          LOCK: Strict privacy guaranteed. Zero promotional spam.
        </p>
      </div>
    </form>
  );
}
