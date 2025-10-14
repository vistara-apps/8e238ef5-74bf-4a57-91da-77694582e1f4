import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VetTech X-ray Guide',
  description: 'Precision X-ray guidance for Vet Techs with 3D models and community insights',
  openGraph: {
    title: 'VetTech X-ray Guide',
    description: 'Precision X-ray guidance for Vet Techs with 3D models and community insights',
    images: ['/og-image.png'],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
