'use client';

import Link from 'next/link';

export default function About({ lang = 'en' }: { lang?: string }) {
  return (
    <section className="w-full bg-[#f9f9ff] py-space-3xl md:py-space-4xl text-on-surface relative overflow-hidden" id="about">
      {/* Background subtle elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center gap-space-xs pb-space-2xl max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest">
            <span>ABOUT E-SUMMIT '26</span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-primary uppercase font-extrabold tracking-tight">
            Nurturing Ideas into Enduring Impact
          </h2>
          <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
            PSGCAS E-Summit 2026 is South India’s premier national-level entrepreneurship and innovation platform, hosted during the historic Centenary Celebrations of PSG College of Arts & Science. Spearheaded by the Centre for Innovation Incubation & Entrepreneurship (CII&E) in synergy with IIC and E-Cell PSGCAS.
          </p>
        </div>

        {/* Institutional Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-3xl">
          <div className="bg-white rounded-2xl p-space-xl shadow-md border border-outline-variant/30 flex flex-col gap-space-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-primary text-surface-container-lowest flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px] text-secondary-container">visibility</span>
            </div>
            <h3 className="font-title-lg text-xl text-primary font-bold">Our Vision</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              To build a vibrant, self-sustaining campus startup ecosystem that democratizes entrepreneurial education, bridges academia with institutional capital, and empowers students to solve societal challenges through high-impact commercial ventures.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary font-bold uppercase tracking-wider mt-auto pt-space-xs">
              <span>National Innovation Ecosystem</span>
              <span>•</span>
              <span>Since 1926</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-space-xl shadow-md border border-outline-variant/30 flex flex-col gap-space-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px]">track_changes</span>
            </div>
            <h3 className="font-title-lg text-xl text-primary font-bold">Our Mission</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Through three days of intensive hackathons, legal IPR clinics, angel dealrooms, and business plan pitching, E-Summit ’26 provides rigorous mentorship, competitive prize funds, and institutional incubation to translate collegiate prototypes into market-ready enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary font-bold uppercase tracking-wider mt-auto pt-space-xs">
              <span>Ideate • Innovate • Impact</span>
            </div>
          </div>
        </div>

        {/* The Three Pillars Section */}
        <div className="flex flex-col items-center text-center gap-space-xs pb-space-xl">
          <span className="font-label-md text-xs text-secondary uppercase tracking-widest font-bold">
            THE THREE PILLAR FRAMEWORK
          </span>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-primary uppercase font-extrabold tracking-tight">
            Ideas • Innovation • Impact
          </h3>
          <p className="font-body-md text-on-surface-variant max-w-xl text-sm sm:text-base">
            Structured across the three summit days to guide every participant from ideation to venture execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          
          {/* PILLAR 1: IDEATE */}
          <div className="bg-white rounded-2xl p-space-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-secondary relative group overflow-hidden">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-secondary uppercase font-extrabold tracking-widest">
                  PILLAR 01 • DAY 1
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-bold text-[11px]">
                  28 SEP
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#001634] text-secondary-container flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[30px]">lightbulb</span>
              </div>
              <h4 className="font-headline-md text-2xl text-primary font-bold tracking-tight">IDEATE</h4>
              <p className="font-title-md text-sm text-secondary font-semibold -mt-1">
                Learn • Prepare • Discover
              </p>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Empowering the next generation with foundational knowledge. Featuring regional high-school innovators in <strong>Elampreneur’ 26</strong> and practical patent filing clinics in the <strong>Copyrights & Trademark Workshop</strong>.
              </p>
            </div>
            <div className="pt-space-lg">
              <Link
                href={`/${lang}/events?day=1`}
                className="inline-flex items-center gap-1.5 text-primary font-label-md text-xs uppercase font-extrabold tracking-wider group-hover:text-secondary group-hover:translate-x-1 transition-all"
              >
                <span>EXPLORE DAY 1 TRACKS</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* PILLAR 2: INNOVATE */}
          <div className="bg-white rounded-2xl p-space-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-amber-500 relative group overflow-hidden">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-amber-600 uppercase font-extrabold tracking-widest">
                  PILLAR 02 • DAY 2
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-bold text-[11px]">
                  29 SEP
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-secondary text-on-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[30px]">code_blocks</span>
              </div>
              <h4 className="font-headline-md text-2xl text-primary font-bold tracking-tight">INNOVATE</h4>
              <p className="font-title-md text-sm text-amber-600 font-semibold -mt-1">
                Build • Collaborate • Create
              </p>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Turning concepts into validated technical and commercial MVPs. Host to <strong>TECHKATHON 2K26</strong> (Rs. 40k prize), <strong>Fintech Hackathon 2026</strong> (₹40k prize), National IPO & Stocks Presentation, and hands-on Digital Tools Masterclasses.
              </p>
            </div>
            <div className="pt-space-lg">
              <Link
                href={`/${lang}/events?day=2`}
                className="inline-flex items-center gap-1.5 text-primary font-label-md text-xs uppercase font-extrabold tracking-wider group-hover:text-secondary group-hover:translate-x-1 transition-all"
              >
                <span>EXPLORE DAY 2 TRACKS</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* PILLAR 3: IMPACT */}
          <div className="bg-white rounded-2xl p-space-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-blue-600 relative group overflow-hidden">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-blue-700 uppercase font-extrabold tracking-widest">
                  PILLAR 03 • DAY 3
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px]">
                  30 SEP
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#062B55] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[30px] text-sky-300">rocket_launch</span>
              </div>
              <h4 className="font-headline-md text-2xl text-primary font-bold tracking-tight">IMPACT</h4>
              <p className="font-title-md text-sm text-blue-600 font-semibold -mt-1">
                Showcase • Celebrate • Scale
              </p>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                The grand culmination accessible via Summit Passes. Featuring the <strong>Investors & Incubators Summit (I-Summit)</strong>, <strong>CaseQuest</strong> Business Case Competition, <strong>Bid Bizz</strong> Auction, and <strong>PSG Caspreneurs</strong> ₹10,000 seed grant book release.
              </p>
            </div>
            <div className="pt-space-lg">
              <Link
                href={`/${lang}/tickets`}
                className="inline-flex items-center gap-1.5 text-primary font-label-md text-xs uppercase font-extrabold tracking-wider group-hover:text-secondary group-hover:translate-x-1 transition-all"
              >
                <span>EXPLORE SUMMIT PASSES</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
