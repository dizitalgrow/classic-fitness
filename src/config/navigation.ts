import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  explore: [
    { label: 'About Classic Fitness', href: '/about' },
    { label: 'All Programmes', href: '/programmes' },
    { label: 'Certified Trainers', href: '/trainers' },
    { label: 'Gym Gallery', href: '/gallery' },
    { label: 'Membership Plans', href: '/membership' },
  ],
  programmes: [
    { label: 'Strength Training', href: '/programmes#strength' },
    { label: 'Personal Coaching', href: '/programmes#personal-training' },
    { label: 'Body Transformation', href: '/programmes#transformation' },
    { label: 'Weight Loss & Conditioning', href: '/programmes#weight-loss' },
    { label: 'Nutrition & Diet Guidance', href: '/programmes#nutrition' },
  ],
  support: [
    { label: 'Contact & Location', href: '/contact' },
    { label: 'Book Free Trial', href: '/contact?intent=free-trial' },
    { label: 'Membership FAQs', href: '/membership#faqs' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};
