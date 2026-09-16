import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Locale } from '@/lib/dictionary';
import RegistrationModal from '@/components/layout/RegistrationModal';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://esummit.psgcas.ac.in'),
  title: {
    default: "PSGCAS E-Summit 2026 | Entrepreneurship, Innovation & Technology",
    template: "%s | PSGCAS E-Summit 2026"
  },
  description: "PSGCAS E-Summit 2026, 28–30 September 2026, Coimbatore, entrepreneurship, startups, hackathons, fintech, workshops, competitions, investors and networking.",
  keywords: [
    "PSGCAS E-Summit 2026",
    "PSG College of Arts & Science",
    "Coimbatore",
    "Entrepreneurship",
    "Startups",
    "Hackathons",
    "Fintech Hackathon 2026",
    "Techkathon 2K26",
    "Elampreneur 2026",
    "CaseQuest",
    "Bid Bizz",
    "I-Summit",
    "Investors",
    "Networking",
    "Workshops",
    "Competitions"
  ],
  icons: {
    icon: '/images/logos/psg-logo.png',
    apple: '/images/logos/psg-logo.png',
  },
  openGraph: {
    title: "PSGCAS E-Summit 2026 | Entrepreneurship, Innovation & Technology",
    description: "PSGCAS E-Summit 2026, 28–30 September 2026, Coimbatore, entrepreneurship, startups, hackathons, fintech, workshops, competitions, investors and networking.",
    url: "https://esummit.psgcas.ac.in",
    siteName: "PSGCAS E-Summit 2026",
    images: [
      {
        url: '/images/brochure/esummit_brochure_p1.png',
        width: 1200,
        height: 630,
        alt: 'PSGCAS E-Summit 2026'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PSGCAS E-Summit 2026 | Entrepreneurship, Innovation & Technology",
    description: "PSGCAS E-Summit 2026, 28–30 September 2026, Coimbatore, entrepreneurship, startups, hackathons, fintech, workshops, competitions, investors and networking.",
    images: ['/images/brochure/esummit_brochure_p1.png'],
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} bg-surface font-body-md text-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed`}>
        <Header lang={lang as Locale} />
        <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
          <div className="flex flex-col w-full selection:bg-secondary-fixed selection:text-on-secondary-fixed">
            {children}
          </div>
        </main>
        <Footer lang={lang as Locale} />
        <RegistrationModal />
      </body>
    </html>
  );
}
