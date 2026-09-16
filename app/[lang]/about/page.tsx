import { Metadata } from 'next';
import Link from 'next/link';
import About from '@/components/sections/About';
import EcosystemSection from '@/components/sections/EcosystemSection';

export const metadata: Metadata = {
  title: 'About PSGCAS E-Summit 2026 & PSG Centenary',
  description: 'Learn about the legacy of PSG College of Arts & Science, the Centenary Year 1926–2026, and the vision behind PSGCAS E-Summit 2026.',
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md border border-secondary-container/30 text-secondary-fixed shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span className="font-label-sm text-xs uppercase tracking-widest font-bold text-secondary-container">
              100 YEARS OF INSTITUTIONAL EXCELLENCE (1926–2026)
            </span>
          </div>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            About PSGCAS E-Summit 2026
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Catalyzing student enterprise, venture capital, and deep-tech innovation at PSG College of Arts & Science, Coimbatore during our historic Centenary Celebrations.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Main About Component */}
      <About lang={lang} />

      {/* Institutional Ecosystem Component */}
      <EcosystemSection />
    </div>
  );
}
