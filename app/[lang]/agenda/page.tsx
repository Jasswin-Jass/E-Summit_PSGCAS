import { Metadata } from 'next';
import TimelineSection from '@/components/sections/TimelineSection';

export const metadata: Metadata = {
  title: 'Full 3-Day Summit Agenda & Timeline | PSGCAS E-Summit 2026',
  description: 'Detailed schedule for PSGCAS E-Summit 2026 across Day 1 (28 Sep), Day 2 (29 Sep), and Day 3 (30 Sep), including pass indicators and venue locations.',
};

export default async function AgendaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            OFFICIAL PROGRAM CALENDAR • 28–30 SEPTEMBER 2026
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Summit Agenda & Timeline
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Navigate through all 3 days of high-octane entrepreneurship sessions, technical hackathons, school pitch arenas, investor conclaves, and the entrepreneurship carnival.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Timeline Section */}
      <TimelineSection lang={lang} />
    </div>
  );
}
