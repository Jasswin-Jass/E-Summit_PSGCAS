import { Metadata } from 'next';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | PSGCAS E-Summit 2026',
  description: 'Common questions about registrations, pass tiers, competition rules, accommodation, and visiting PSGCAS E-Summit 2026.',
};

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            HELP & PARTICIPATION GUIDANCE
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Find answers to commonly asked questions regarding registrations, Google Form procedures, Day 3 passes, hackathons, cash prizes, and campus access.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* FAQ Section with Search & Categories */}
      <FAQSection lang={lang} showHeader={false} />
    </div>
  );
}
