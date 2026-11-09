import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}

export function constructMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image = '/og-image.jpg',
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

  const defaultKeywords = [
    'Gym in HSR Layout',
    'Fitness centre in HSR Layout',
    'Gym near HSR Government School',
    'Personal trainer in HSR Layout',
    'Strength training in HSR Layout',
    'Weight training gym Bengaluru',
    'Body transformation gym HSR',
    'Classic Fitness Bengaluru',
  ];

  return {
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.metaDescription,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.metaDescription,
      images: [image],
    },
  };
}
