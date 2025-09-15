import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/common/components/header/header";
import Footer from "@/common/components/footer/footer";
import { twitterCard } from '@/common/assets/images';
import favicon from '/public/favicon.jpg';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Barricade Test",
  description:
    "Tired of juggling disconnected security systems? Barricade brings everything together — intrusion, fire, access, surveillance, analytics, and billing — into one powerful, hardware-agnostic platform.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: 'website',
    url: 'https://yourwebsite.com',
    title: 'Barricade',
    description: 'Tired of juggling disconnected security systems? Barricade brings everything together — intrusion, fire, access, surveillance, analytics, and billing — into one powerful, hardware-agnostic platform.',
    siteName: 'Barricade',
    images: [
      {
        url: twitterCard.src,
        width: 1200,
        height: 630,
        alt: 'Barricade - Unified Security Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barricade',
    description: 'Tired of juggling disconnected security systems? Barricade brings everything together — intrusion, fire, access, surveillance, analytics, and billing — into one powerful, hardware-agnostic platform.',
    images: [twitterCard.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional head elements can go here */}
      </head>
      <body className={`antialiased`}>
        <div className="sticky top-0 z-[9999]">
          <Header />
        </div>
        <main className="mt-[-85px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}