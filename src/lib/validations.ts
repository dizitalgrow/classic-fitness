import { z } from 'zod';

// Indian phone number regex: allows optional +91 or 0 prefix followed by 10 digits starting with 6-9
const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name must be under 80 characters')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Name can only contain letters and basic punctuation'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Phone number is too long')
    .refine((val) => phoneRegex.test(val.replace(/\s+/g, '')), {
      message: 'Please enter a valid 10-digit Indian mobile number',
    }),
  fitnessGoal: z.enum([
    'Muscle Building & Strength',
    'Weight Loss & Fat Reduction',
    'Personal Coaching 1-on-1',
    'General Physical Fitness',
    'Body Recomposition',
    'Not Sure / Need Consultation',
  ]),
  preferredTiming: z.enum([
    'Morning (5:30 AM – 8:00 AM)',
    'Mid-Morning (8:00 AM – 11:00 AM)',
    'Evening (4:30 PM – 7:30 PM)',
    'Late Evening (7:30 PM – 10:00 PM)',
    'Flexible / Weekends',
  ]),
  enquiryType: z.enum([
    'Free Trial',
    'Membership',
    'Personal Training',
    'General Enquiry',
  ]),
  message: z
    .string()
    .max(500, 'Message cannot exceed 500 characters')
    .optional(),
  // Honeypot spam field - must be empty
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
