import { SiteConfig } from '@/types/business';

export const siteConfig: SiteConfig = {
  name: 'Classic Fitness',
  tagline: 'Build Your Stronger Self',
  shortDescription:
    'Premier neighbourhood strength and fitness training centre in HSR Layout, Bengaluru. Guided training, body transformations, and dedicated coaching.',
  metaDescription:
    'Classic Fitness is HSR Layout’s trusted gym opposite HSR Government School. Expert strength training, personalised fitness guidance, modern weights, and proven coaching in Bengaluru.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://classicfitnesshsr.com',
  category: 'Fitness Center / Gym',
  address: {
    street: '17th A Main Road, opposite HSR Government School',
    landmark: 'Opposite HSR Government School',
    area: 'Neelakanteshwara Layout, HSR Layout Sector 1',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560068',
    country: 'India',
    fullAddress:
      '17th A Main Road, opposite HSR Government School, Neelakanteshwara Layout, Bengaluru, Karnataka 560068',
    coordinates: {
      lat: 12.9112,
      lng: 77.6389,
    },
  },
  contact: {
    // Phone numbers can be overridden via environment variables
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+919876543210',
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+91 98765 43210',
    phoneConfirmed: Boolean(process.env.NEXT_PUBLIC_PHONE_NUMBER), // Flagged false by default until owner provides confirmed SIM
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    whatsappPrefilledText:
      'Hi Classic Fitness, I would like to know more about your membership plans and fitness programmes.',
    whatsappConfirmed: Boolean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@classicfitnesshsr.com',
    emailConfirmed: Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  },
  social: {
    instagram: 'https://instagram.com/classicfitness_hsr', // Pending owner profile confirmation
    facebook: 'https://facebook.com/classicfitnesshsr',
    googleMaps:
      'https://www.google.com/maps/dir//Classic+Fitness,+17th+A+Main+Rd,+opposite+HSR+Government+School,+Neelakanteshwara+Layout,+Bengaluru,+Karnataka+560068/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae153eaa3f50f3:0xdd1f9469a89ddd7',
    googlePlaceId: 'ChIJ83A_puqhDTsR1Qqpj9fd0d0',
    isConfirmed: false,
  },
  hours: [
    {
      days: 'Monday – Saturday',
      morning: '5:30 AM – 11:00 AM',
      evening: '4:30 PM – 10:00 PM',
      isConfirmed: false, // Provisional per prompt specifications
    },
    {
      days: 'Sunday',
      morning: '5:30 AM – 1:00 PM',
      evening: 'Closed (Evening)',
      isConfirmed: false, // Provisional per prompt specifications
    },
  ],
};
