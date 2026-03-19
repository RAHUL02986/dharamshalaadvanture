import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adventure Tourism Dharamshala | Paragliding, Trekking & More in Himachal Pradesh',
  description: 'Explore the best adventure tourism in Dharamshala, Himachal Pradesh. Book paragliding, trekking, rock climbing, hotels, and taxi services. Your ultimate adventure destination.',
  keywords: ['adventure tourism Dharamshala', 'paragliding Himachal Pradesh', 'trekking Dharamshala', 'best hotels Dharamshala', 'taxi services Dharamshala', 'adventure activities Himachal', 'rock climbing Dharamshala'],
  authors: [{ name: 'Dharamshala Adventure Tourism' }],
  openGraph: {
    title: 'Adventure Tourism Dharamshala | Best Adventure Activities in Himachal Pradesh',
    description: 'Experience thrilling adventures in Dharamshala - paragliding, trekking, rock climbing, and more. Book your adventure today!',
    url: 'https://www.dharamshalaadventure.com',
    siteName: 'Dharamshala Adventure',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
        width: 1200,
        height: 630,
        alt: 'Adventure Tourism in Dharamshala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adventure Tourism Dharamshala | Paragliding & Trekking in Himachal',
    description: 'Your gateway to adventure in Dharamshala, Himachal Pradesh',
    images: ['https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SpeedInsights />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
