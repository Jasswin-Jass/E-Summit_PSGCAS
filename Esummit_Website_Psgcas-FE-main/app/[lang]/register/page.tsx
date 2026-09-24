import { Metadata } from 'next';
import Link from 'next/link';
import { eventsData, REGISTRATION_URL_ALL_PASSES } from '@/data/events';
import { passesData } from '@/data/passes';

export const metadata: Metadata = {
  title: 'Official Registration Portal | PSGCAS E-Summit 2026',
  description: 'Register for Day 1 & Day 2 individual competitions & workshops, or secure Day 3 Summit Passes (Silver, Gold, Platinum).',
};

export default async function RegisterPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const day1And2Events = eventsData.filter((e) => e.day === 1 || e.day === 2);

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Hero Banner */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            CENTRAL REGISTRATION HUB • PSGCAS E-SUMMIT 2026
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Official Summit Registration
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            All summit registrations are processed through verified official portals. Choose between standalone individual competitions on Day 1 & 2, or secure a unified Day 3 Summit Pass.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop py-12 flex flex-col gap-12">
        
        {/* Notice Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3.5 shadow-sm">
          <span className="material-symbols-outlined text-amber-700 text-2xl shrink-0 mt-0.5">warning</span>
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold uppercase tracking-wider block text-amber-900 pb-0.5">
              Important Registration Directive
            </strong>
            Spot registrations on the day of the conclave are <strong>strictly prohibited</strong>. Participants must register in advance through the official registration portals. Carry your genuine School / College Photo ID card to the reporting desks at PSGCAS.
          </div>
        </div>

        {/* SECTION 1: Day 3 Passes */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-outline-variant/40 pb-4">
            <div>
              <span className="font-label-sm text-xs text-secondary uppercase font-bold tracking-widest">
                DAY 3 PASS-BASED ACCESS • 30 SEPTEMBER 2026
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold uppercase">
                Day 3 Summit Delegate Passes
              </h2>
            </div>
            <Link
              href={`/${lang}/tickets`}
              className="text-xs font-bold text-primary hover:text-secondary uppercase flex items-center gap-1"
            >
              <span>View Feature Comparison Matrix</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {passesData.map((pass) => (
              <div
                key={pass.id}
                className="bg-white rounded-2xl p-6 border-2 border-outline-variant/40 hover:border-secondary/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                      {pass.badge}
                    </span>
                    <span className="font-headline-sm text-2xl font-black text-primary">
                      {pass.formattedPrice}
                    </span>
                  </div>

                  <h3 className="font-title-lg text-xl font-bold text-primary">{pass.name}</h3>
                  <p className="text-xs text-secondary font-bold italic">{pass.subTagline}</p>

                  <ul className="flex flex-col gap-2 text-xs text-on-surface-variant pt-2 border-t border-gray-100">
                    {pass.benefits.slice(0, 4).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{b}</span>
                      </li>
                    ))}
                    {pass.benefits.length > 4 && (
                      <li className="text-[11px] text-secondary font-bold">
                        + {pass.benefits.length - 4} more exclusive perks
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href={REGISTRATION_URL_ALL_PASSES}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-[#001634] font-extrabold text-xs uppercase tracking-wider text-center shadow hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>GET {pass.name}</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <span className="text-[10px] text-center text-gray-500 font-mono truncate">
                    https://forms.gle/7vpNQD3wbSWRMdDR6
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Day 1 & Day 2 Standalone Events */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-outline-variant/40 pb-4">
            <div>
              <span className="font-label-sm text-xs text-secondary uppercase font-bold tracking-widest">
                INDIVIDUAL REGISTRATIONS • DAY 1 & DAY 2
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold uppercase">
                Competitions, Hackathons & Workshops
              </h2>
            </div>
            <Link
              href={`/${lang}/events`}
              className="text-xs font-bold text-primary hover:text-secondary uppercase flex items-center gap-1"
            >
              <span>Explore All Events & Guidelines</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {day1And2Events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-5 border border-outline-variant/40 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-14 h-14 rounded-xl bg-[#001634] overflow-hidden shrink-0 border border-secondary/30">
                    <img
                      src={event.posterUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">
                        DAY {event.day}
                      </span>
                      <span className="text-[11px] text-gray-500">{event.category}</span>
                    </div>
                    <h4 className="font-title-md text-base font-bold text-primary pt-0.5">
                      {event.title}
                    </h4>
                    <p className="text-xs text-secondary font-semibold">
                      {event.prizePool || event.venue.split(',')[0]}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0">
                  {event.isRegistrationClosed ? (
                    <div className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-500 font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1 cursor-not-allowed select-none shadow-inner">
                      <span className="material-symbols-outlined text-[14px] text-slate-400">lock</span>
                      <span>Closed</span>
                    </div>
                  ) : (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold text-xs uppercase tracking-wider text-center hover:bg-secondary-fixed transition-colors shadow-sm flex items-center justify-center gap-1"
                    >
                      <span>Register Form</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  )}
                  <Link
                    href={`/${lang}/events/${event.slug}`}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider text-center transition-colors"
                  >
                    Poster & Rules
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
