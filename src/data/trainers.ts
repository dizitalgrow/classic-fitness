import { Trainer } from '@/types/business';

export const trainersData: Trainer[] = [
  {
    id: 'coach-ravi',
    name: 'Coach Ravi',
    role: 'Head Strength & Fitness Coach',
    experienceYears: 8,
    specialisations: [
      'Strength & Conditioning',
      'Body Transformation',
      'Posture & Form Correction',
      'Powerlifting Basics',
    ],
    bio: 'Dedicated head coach widely commended by Classic Fitness members for hands-on motivation, disciplined form checks, and patient personal instruction.',
    qualifications: [
      'Certified Strength & Fitness Trainer',
      'CPR & First Aid Trained',
      'Years of hands-on coaching experience in HSR Layout',
    ],
    isConfirmed: true, // Confirmed in local research and member reviews
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    social: {
      instagram: 'https://instagram.com/classicfitness_hsr',
    },
  },
  {
    id: 'coach-assistant',
    name: 'Floor Trainer & Conditioning Coach',
    role: 'Fitness Instructor',
    experienceYears: 4,
    specialisations: [
      'Functional Training',
      'Weight Loss Protocols',
      'Circuit Training',
      'Beginner Gym Onboarding',
    ],
    bio: 'Assists members with exercise setups, spotting during heavy lifts, circuit flow, and ensuring safe execution across all gym floor stations.',
    qualifications: [
      'Fitness Instruction Certification (Pending profile verification by management)',
    ],
    isConfirmed: false, // Flagged pending gym roster submission
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
];
