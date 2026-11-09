import type { Metadata, Viewport } from 'next';
import { Archivo_Black, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { StickyMobileCTA } from '@/components/common/StickyMobileCTA';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { constructMetadata } from '@/lib/metadata';

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0e0e11',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata({
  title: 'Classic Fitness | Strength Training & Gym in HSR Layout, Bengaluru',
  description:
    'Experience premier strength training, body transformation, and personal coaching at Classic Fitness, located opposite HSR Government School in Bengaluru.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="bg-[#0e0e11] text-[#f3f4f2] antialiased font-body selection:bg-[#ffc526] selection:text-[#0e0e11]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        {children}

        {/* Global Footer */}
        <Footer />

        {/* Floating Quick Triggers */}
        <WhatsAppButton />
        <StickyMobileCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
