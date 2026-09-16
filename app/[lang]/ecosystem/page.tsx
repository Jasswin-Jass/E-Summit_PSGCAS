import { Metadata } from 'next';
import EcosystemSection from '@/components/sections/EcosystemSection';

export const metadata: Metadata = {
  title: 'Our Ecosystem & Affiliations | PSGCAS E-Summit 2026',
  description: 'PSGCAS E-Summit 2026 is strengthened by its network of institutional, entrepreneurship and innovation ecosystem affiliations.',
};

export default async function EcosystemPage({ params }: { params: Promise<{ lang: string }> }) {
  await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            INSTITUTIONAL & INNOVATION ALLIANCES
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Our Ecosystem
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Connected with institutions, innovation bodies and entrepreneurship organizations driving ideas, innovation and impact.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Ecosystem Section */}
      <EcosystemSection />
    </div>
  );
}
