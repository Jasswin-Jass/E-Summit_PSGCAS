'use client';

import { passesData, passComparisonMatrix, REGISTRATION_URL_COMMON_PASS } from '../../data/passes';

interface PassesSectionProps {
  lang?: string;
  showComparisonTable?: boolean;
}

export default function PassesSection({ lang = 'en', showComparisonTable = true }: PassesSectionProps) {
  return (
    <section className="w-full bg-[#f9f9ff] py-space-3xl md:py-space-4xl text-on-surface relative overflow-hidden" id="passes-section">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-r from-amber-200/20 via-sky-200/25 to-slate-200/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-space-xs pb-space-2xl max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#001634] text-secondary-container text-xs font-extrabold uppercase tracking-widest border border-secondary-container/30 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary-container">confirmation_number</span>
            <span>DAY 3 PASS-BASED ACCESS • 30 SEPTEMBER 2026</span>
          </div>

          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary uppercase font-extrabold tracking-tight pt-2">
            Official E-Summit '26 Delegate Passes
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs sm:text-sm font-bold text-secondary">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>Date: 30 September 2026</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>Venue: PSGCAS, Coimbatore</span>
            </span>
          </div>

          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed pt-1">
            Day 3 of PSGCAS E-Summit features pass-based admission. Explore the official passes below. Use the single common registration link to book your verified delegate pass.
          </p>
        </div>

        {/* Pass Cards Grid — Showcasing the Actual Supplied Pass Artwork */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch pt-2">
          {passesData.map((pass) => {
            const isPlatinum = pass.id === 'platinum';
            const isGold = pass.id === 'gold';
            const isSilver = pass.id === 'silver';

            return (
              <div
                key={pass.id}
                className={`relative rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between group overflow-hidden border ${
                  isPlatinum
                    ? 'border-sky-400 shadow-[0_12px_35px_rgba(56,189,248,0.22)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.38)] lg:-translate-y-3 ring-2 ring-sky-400/40'
                    : isGold
                    ? 'border-amber-400 shadow-[0_12px_35px_rgba(245,158,11,0.22)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.38)] lg:-translate-y-2 ring-2 ring-amber-400/40'
                    : 'border-slate-300 shadow-[0_8px_30px_rgba(148,163,184,0.2)] hover:shadow-[0_16px_40px_rgba(148,163,184,0.35)]'
                }`}
              >
                {/* Top Badge Banner */}
                {isPlatinum && (
                  <div className="bg-gradient-to-r from-sky-600 via-blue-700 to-[#001634] text-white py-2 text-center font-label-sm text-[11px] font-black uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">diamond</span>
                    <span>★ ALL-INCLUSIVE VIP SUMMIT TIER ★</span>
                  </div>
                )}
                {isGold && (
                  <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-[#001634] py-2 text-center font-label-sm text-[11px] font-black uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">stars</span>
                    <span>★ MOST POPULAR CHOICE ★</span>
                  </div>
                )}
                {isSilver && (
                  <div className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 text-white py-2 text-center font-label-sm text-[11px] font-black uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">stars</span>
                    <span>★ EXPLORER STARTER TIER ★</span>
                  </div>
                )}

                {/* Pass Artwork Visual Container */}
                <div className="p-4 sm:p-5 flex flex-col items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300 bg-white">
                    <img
                      src={pass.cardImage}
                      alt={`${pass.name} Official Artwork`}
                      className="w-full h-auto object-contain block mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Pass Details & Eligibility Information */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between gap-4 bg-white border-t border-outline-variant/20">
                  
                  {/* Eligibility Notice Box */}
                  <div className={`p-3.5 rounded-xl text-xs border ${
                    isPlatinum
                      ? 'bg-sky-50/80 border-sky-200 text-sky-950'
                      : isGold
                      ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                      : 'bg-slate-50/80 border-slate-200 text-slate-900'
                  }`}>
                    <span className="font-bold uppercase tracking-wider block text-[10px] text-secondary pb-1">
                      Event Eligibility & Access:
                    </span>
                    <p className="font-semibold leading-relaxed">
                      {pass.eligibilityDescription}
                    </p>
                    {isSilver && (
                      <span className="text-[11px] text-red-600 font-bold block pt-1">
                        ✕ CaseQuest & Bid Bizz require Gold or Platinum Pass.
                      </span>
                    )}
                    {isGold && (
                      <span className="text-[11px] text-green-700 font-bold block pt-1">
                        ✓ CaseQuest & Bid Bizz competitions included!
                      </span>
                    )}
                    {isPlatinum && (
                      <span className="text-[11px] text-blue-800 font-bold block pt-1">
                        ✓ All competitions + Investor & Incubator Summit included!
                      </span>
                    )}
                  </div>

                  {/* Register Action CTA */}
                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={REGISTRATION_URL_COMMON_PASS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-label-md text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 ${
                        isPlatinum
                          ? 'bg-gradient-to-r from-sky-600 via-blue-700 to-[#001634] text-white hover:shadow-lg hover:scale-[1.02]'
                          : isGold
                          ? 'bg-gradient-to-r from-secondary-container via-amber-400 to-secondary text-on-secondary-container hover:shadow-lg hover:scale-[1.02]'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                    >
                      <span>GET YOUR PASS ({pass.formattedPrice})</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>

                    <span className="block text-center text-[10px] text-on-surface-variant font-medium">
                      One common form for all passes • Verified email credential
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pass Comparison Matrix Table */}
        {showComparisonTable && (
          <div className="mt-space-4xl pt-space-2xl border-t border-outline-variant/40">
            <div className="flex flex-col items-center text-center gap-space-xs pb-space-xl max-w-2xl mx-auto">
              <span className="font-label-md text-xs text-secondary uppercase tracking-widest font-bold">
                FEATURE BREAKDOWN & ELIGIBILITY MATRIX
              </span>
              <h3 className="font-headline-md text-2xl sm:text-3xl text-primary uppercase font-extrabold tracking-tight">
                Compare Pass Benefits Side-by-Side
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Clearly verify which pass tier unlocks CaseQuest, Bid Bizz, and the Investors & Incubator Summit.
              </p>
            </div>

            <div className="w-full bg-white rounded-2xl shadow-lg border border-outline-variant/40 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/40">
                    <th className="py-4 px-6 text-sm font-bold text-primary uppercase tracking-wider">
                      Event / Activity Benefit
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-extrabold text-slate-700 uppercase tracking-wider w-36">
                      Silver<br/><span className="text-xs font-bold text-secondary">₹99</span>
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-extrabold text-amber-700 uppercase tracking-wider w-36 bg-amber-50/70">
                      Gold<br/><span className="text-xs font-bold text-amber-600">₹199</span>
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-extrabold text-blue-900 uppercase tracking-wider w-40 bg-blue-50/70">
                      Platinum<br/><span className="text-xs font-bold text-blue-700">₹299</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-sm">
                  {passComparisonMatrix.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-gray-50/80 transition-colors ${row.highlight ? 'bg-amber-50/20' : ''}`}
                    >
                      <td className="py-3 px-6 font-medium text-primary flex items-center gap-2">
                        {row.highlight && (
                          <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                        )}
                        <span>{row.feature}</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.silver ? (
                          <span className="material-symbols-outlined text-green-600 text-[20px] font-bold">check_circle</span>
                        ) : (
                          <span className="material-symbols-outlined text-gray-300 text-[20px]">remove</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center bg-amber-50/40">
                        {row.gold ? (
                          <span className="material-symbols-outlined text-green-600 text-[20px] font-bold">check_circle</span>
                        ) : (
                          <span className="material-symbols-outlined text-gray-300 text-[20px]">remove</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center bg-blue-50/40">
                        {row.platinum ? (
                          <span className="material-symbols-outlined text-blue-600 text-[20px] font-bold">check_circle</span>
                        ) : (
                          <span className="material-symbols-outlined text-gray-300 text-[20px]">remove</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Registration Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href={REGISTRATION_URL_COMMON_PASS}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-secondary-container via-amber-400 to-secondary text-on-secondary-container font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>GET YOUR PASS (OFFICIAL FORM)</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
