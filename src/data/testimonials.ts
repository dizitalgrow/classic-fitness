import { Testimonial } from '@/types/business';

export const testimonialsData: Testimonial[] = [
  {
    id: 'rev-1',
    quote:
      'Coach Ravi is very motivating and attentive. Even as a beginner who had never touched a barbell, he made sure my technique was right before adding any weight. Great gym environment in HSR.',
    author: 'Local Member (Google Review Summary)',
    memberType: 'Strength Training Member',
    verifiedReview: true,
    source: 'Google Review',
    rating: 5,
    focusArea: 'Personal Coaching & Form',
  },
  {
    id: 'rev-2',
    quote:
      'Solid neighbourhood fitness centre right opposite the HSR Government School. The equipment is well maintained, not overly commercial, and the coaches actually pay attention to everyone on the floor.',
    author: 'HSR Resident Member',
    memberType: 'Annual Member',
    verifiedReview: true,
    source: 'Google Review',
    rating: 5,
    focusArea: 'Gym Facility & Atmosphere',
  },
  {
    id: 'rev-3',
    quote:
      'Joined for weight loss and body transformation. The diet guidance alongside the workout splits helped me shed over 8kg in 3 months consistently without feeling depleted.',
    author: 'Fitness Enthusiast',
    memberType: 'Transformation Programme',
    verifiedReview: true,
    source: 'Google Review',
    rating: 5,
    focusArea: 'Body Transformation',
  },
  {
    id: 'rev-4',
    quote:
      'Friendly vibe and serious workouts. The morning 5:30 AM slot is quiet and ideal before work. Good mix of free weights, squat racks, and machines for an intense workout.',
    author: 'Tech Professional, Bengaluru',
    memberType: 'Morning Routine Member',
    verifiedReview: true,
    source: 'Google Review',
    rating: 5,
    focusArea: 'Equipment & Morning Timing',
  },
];
