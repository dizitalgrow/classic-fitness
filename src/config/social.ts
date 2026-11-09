import { siteConfig } from './site';

export const socialConfig = {
  instagram: {
    name: 'Instagram',
    url: siteConfig.social.instagram,
    isConfirmed: siteConfig.social.isConfirmed,
    handle: '@classicfitness_hsr',
  },
  facebook: {
    name: 'Facebook',
    url: siteConfig.social.facebook,
    isConfirmed: siteConfig.social.isConfirmed,
    handle: 'Classic Fitness HSR',
  },
  whatsapp: {
    name: 'WhatsApp',
    url: `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      siteConfig.contact.whatsappPrefilledText
    )}`,
    isConfirmed: siteConfig.contact.whatsappConfirmed,
  },
  googleMaps: {
    name: 'Google Maps Directions',
    url: siteConfig.social.googleMaps,
    placeId: siteConfig.social.googlePlaceId,
    isConfirmed: true,
  },
};
