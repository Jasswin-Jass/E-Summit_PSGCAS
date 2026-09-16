'use client';

import Link from 'next/link';
import InteractiveBackground from '../ui/InteractiveBackground';
import CountdownTimer from '../ui/CountdownTimer';

const summitLogo = '/images/logos/esummit-logo.png';
const psgcasLogo = '/images/logos/psgcas-logo.png';
const psgCentenaryLogo = '/images/logos/psg-centenary-logo.jpeg';
const iicLogo = '/images/logos/iic-logo.png';
const ecellLogo = '/images/logos/ecell-psgcas-logo.jpeg';

export default function Hero({ lang = 'en' }: { lang?: string }) {
  return (
    <section className="relative w-full bg-[#001634] overflow-hidden text-on-primary py-space-2xl md:py-space-3xl lg:py-space-4xl min-h-[90vh] flex items-center">
      {/* Interactive Cursor Particle Background */}
      <InteractiveBackground />

      {/* Decorative radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001634]/50 to-[#001634] pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            
            {/* Top Institutional & Summit Branding Logos */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-1">
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <img
                  src={psgcasLogo}
                  alt="PSGCAS Logo"
                  className="h-7 sm:h-9 w-auto object-contain drop-shadow"
                />
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <img
                  src={psgCentenaryLogo}
                  alt="PSG Centenary Celebrations Logo"
                  className="h-7 sm:h-9 w-auto object-contain rounded drop-shadow"
                />
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <img
                  src={iicLogo}
                  alt="Institution's Innovation Council Logo"
                  className="h-7 sm:h-9 w-auto object-contain rounded drop-shadow"
                />
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <img
                  src={ecellLogo}
                  alt="E-CELL PSGCAS Logo"
                  className="h-7 sm:h-9 w-auto object-contain rounded drop-shadow"
                />
              </div>
              <div className="h-6 sm:h-8 w-px bg-white/20 hidden sm:block"></div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <img
                  src={summitLogo}
                  alt="E-Summit 2026 Official Logo"
                  className="h-7 sm:h-9 w-auto object-contain drop-shadow"
                />
              </div>
            </div>

            {/* Top Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md border border-secondary-container/30 text-secondary-fixed shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              <span className="font-label-sm text-[11px] sm:text-xs uppercase tracking-widest font-bold text-secondary-container">
                PSG CENTENARY CELEBRATIONS • 1926–2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-xs sm:text-sm text-primary-fixed-dim uppercase tracking-[0.2em] font-bold">
                PSG College of Arts & Science • Coimbatore
              </span>
              <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-surface-container-lowest tracking-tight leading-none uppercase font-extrabold drop-shadow-md">
                PSGCAS E-SUMMIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container via-amber-300 to-yellow-500">2026</span>
              </h1>
              <p className="font-title-lg text-base sm:text-xl text-secondary-container font-extrabold tracking-widest uppercase pt-1 flex items-center flex-wrap gap-2">
                <span>IDEAS</span>
                <span className="text-white/40">•</span>
                <span>INNOVATION</span>
                <span className="text-white/40">•</span>
                <span>IMPACT</span>
              </p>
            </div>

            {/* Event Description */}
            <p className="font-body-lg text-sm sm:text-base lg:text-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              A national-level entrepreneurship and startup summit organized by the Centre for Innovation Incubation & Entrepreneurship (CII&E) in association with IIC & E-Cell PSGCAS. Three days of cutting-edge hackathons, venture pitch arenas, IPR masterclasses, and investor dealrooms.
            </p>

            {/* Date & Location Pill */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-surface-container-high py-1">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-secondary-container text-[20px]">calendar_month</span>
                <span className="font-black text-surface-container-lowest tracking-wide">28 • 29 • 30 SEPTEMBER 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-secondary-container text-[20px]">location_on</span>
                <span className="font-semibold text-surface-container-lowest">PSG College of Arts & Science, Coimbatore</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <Link
                href={`/${lang}/events`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-amber-400 text-on-secondary-container font-label-md text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_20px_rgba(254,202,90,0.35)] hover:shadow-[0_6px_25px_rgba(254,202,90,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE EVENTS</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href={`/${lang}/tickets`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md border border-secondary-container/40 text-surface-container-lowest font-label-md text-sm uppercase tracking-wider font-extrabold hover:bg-surface-container-lowest/20 hover:border-secondary-container transition-all flex items-center justify-center gap-2"
              >
                <span>GET YOUR PASS</span>
                <span className="material-symbols-outlined text-[18px] text-secondary-container">
                  confirmation_number
                </span>
              </Link>
              <Link
                href={`/${lang}/agenda`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-primary-fixed-dim hover:text-white font-label-md text-sm uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 hover:bg-white/5"
              >
                <span className="material-symbols-outlined text-[18px]">event_note</span>
                <span>VIEW SCHEDULE</span>
              </Link>
            </div>

            {/* Dynamic Live Countdown */}
            <div className="w-full max-w-xl mt-2">
              <CountdownTimer />
            </div>

          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-white/10 to-primary-container p-1 border border-white/15 backdrop-blur-xl group">
              
              {/* Official Brochure Highlight Poster */}
              <div className="relative w-full rounded-xl overflow-hidden bg-[#001634] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/brochure/esummit_brochure_p1.png"
                  alt="PSGCAS E-Summit 2026 Official Brochure"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001634] via-[#001634]/30 to-transparent"></div>

                {/* Floating Track Badges */}
                <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-[#001634]/90 backdrop-blur-md border border-secondary-container/30 shadow-lg text-white max-w-[210px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                    <span className="font-label-sm text-[10px] uppercase font-extrabold text-secondary-container tracking-wider">
                      FLAGSHIP TRACKS
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-primary-fixed-dim pt-0.5 leading-tight font-medium">
                    TECHKATHON • FINTECH • I-SUMMIT • CASEQUEST
                  </p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-[#001634]/90 backdrop-blur-md border border-white/10 text-right">
                  <span className="font-label-sm text-[10px] uppercase font-bold text-secondary-fixed block">
                    DAY 3 PASSES
                  </span>
                  <span className="text-xs font-extrabold text-white">From ₹99</span>
                </div>

                {/* Bottom Verified Stats Overlay */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#001634]/95 backdrop-blur-xl border border-secondary-container/40 text-surface-container-lowest shadow-xl">
                  <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/10">
                    <div className="flex flex-col">
                      <span className="text-secondary-container font-headline-sm text-base sm:text-lg font-black leading-none">
                        3 DAYS
                      </span>
                      <span className="text-[10px] text-primary-fixed-dim uppercase tracking-wider font-semibold mt-1">
                        28–30 Sep 2026
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary-container font-headline-sm text-base sm:text-lg font-black leading-none">
                        ₹1,50,000+
                      </span>
                      <span className="text-[10px] text-primary-fixed-dim uppercase tracking-wider font-semibold mt-1">
                        Total Cash Prizes
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary-container font-headline-sm text-base sm:text-lg font-black leading-none">
                        TOP 7
                      </span>
                      <span className="text-[10px] text-primary-fixed-dim uppercase tracking-wider font-semibold mt-1">
                        ₹10k Seed Grants
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Centenary Watermark */}
            <div className="flex items-center justify-between pt-3 px-2 text-xs text-primary-fixed-dim">
              <span className="font-semibold">Centenary Edition</span>
              <span className="text-secondary-container font-bold">Innovation for a Better Tomorrow</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
