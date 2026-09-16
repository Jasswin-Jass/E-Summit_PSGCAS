import { Metadata } from 'next';
import PassesSection from '@/components/sections/PassesSection';

export const metadata: Metadata = {
  title: 'Day 3 Summit Passes (Silver, Gold, Platinum) | PSGCAS E-Summit 2026',
  description: 'Choose your Day 3 Delegate Pass for PSGCAS E-Summit 2026: Silver (₹99), Gold (₹199), and Platinum (₹299). Compare benefits, carnival access, and I-Summit entries.',
};

export default async function TicketsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            DAY 3 EXCLUSIVE ADMISSION • 30 SEPTEMBER 2026
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            E-Summit 2026 Delegate Passes
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Day 3 of PSGCAS E-Summit is accessed exclusively through our verified Summit Passes. Select from Silver (₹99), Gold (₹199), or the all-inclusive Platinum Pass (₹299) for complete access to I-Summit and the Pitch Arena.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Passes Section with Comparison Matrix & Registration Modal */}
      <PassesSection lang={lang} showComparisonTable={true} />
    </div>
  );
}
