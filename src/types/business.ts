export interface WorkingHours {
  days: string;
  morning: string;
  evening: string;
  isConfirmed: boolean;
}

export interface BusinessContact {
  phone: string;
  phoneDisplay: string;
  phoneConfirmed: boolean;
  whatsapp: string;
  whatsappPrefilledText: string;
  whatsappConfirmed: boolean;
  email: string;
  emailConfirmed: boolean;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  googleMaps: string;
  googlePlaceId: string;
  isConfirmed: boolean;
}

export interface BusinessAddress {
  street: string;
  landmark: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  metaDescription: string;
  url: string;
  category: string;
  address: BusinessAddress;
  contact: BusinessContact;
  social: SocialLinks;
  hours: WorkingHours[];
}

export interface Programme {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  benefits: string[];
  targetAudience: string;
  intensity: 'Beginner Friendly' | 'Moderate' | 'High Intensity' | 'All Fitness Levels';
  scheduleNote: string;
  image: string;
  badge?: string;
  isConfirmed: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  specialisations: string[];
  bio: string;
  qualifications: string[];
  isConfirmed: boolean;
  image: string;
  social?: {
    instagram?: string;
  };
}

export interface MembershipPlan {
  id: string;
  title: string;
  duration: string;
  priceNote: string;
  priceConfirmed: boolean;
  isPopular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  memberType: string;
  verifiedReview: boolean;
  source: 'Google Review' | 'Gym Member';
  rating: number;
  focusArea: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Facility' | 'Strength' | 'Coaching' | 'Free Weights';
  src: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Membership' | 'Training' | 'Facilities';
}
