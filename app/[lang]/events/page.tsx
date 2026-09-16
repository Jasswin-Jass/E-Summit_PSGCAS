import { Metadata } from 'next';
import EventsExplorer from '@/components/sections/EventsExplorer';

export const metadata: Metadata = {
  title: 'Summit Events & Competitions | PSGCAS E-Summit 2026',
  description: 'Explore all 10 verified hackathons, competitions, workshops, and conclaves at PSGCAS E-Summit 2026 across Day 1, 2, and 3.',
};

export default async function EventsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            OFFICIAL PROGRAM TRACKS • 28–30 SEPTEMBER 2026
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Summit Events & Competitions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Browse through national hackathons, school innovation challenges, IP workshops, and investment conclaves. Inspect full event guidelines, view official posters, and register online.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Events Explorer Component */}
      <EventsExplorer lang={lang} />
    </div>
  );
}
