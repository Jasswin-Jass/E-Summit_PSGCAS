import Link from 'next/link';

const summitLogo = '/images/logos/esummit-logo.png';
const psgcasLogo = '/images/logos/psgcas-logo.png';
const psgLogo = '/images/logos/psgcas-logo.png';
const psgCentenaryLogo = '/images/logos/psg-centenary-logo.jpeg';
const iicLogo = '/images/logos/iic-logo.png';
const ecellLogo = '/images/logos/ecell-psgcas-logo.jpeg';

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="w-full bg-[#001228] text-white pt-14 pb-8 border-t border-secondary-container/20 shadow-2xl">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        
        {/* Top Institutional Logos Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src={summitLogo}
                alt="PSGCAS E-Summit 2026"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow"
              />
            </div>
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src={psgcasLogo}
                alt="PSGCAS Crest"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow"
              />
            </div>
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src={psgLogo}
                alt="PSG Trust"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow"
              />
            </div>
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src={psgCentenaryLogo}
                alt="PSG 100 Centenary Celebration"
                className="h-10 sm:h-12 w-auto object-contain rounded drop-shadow"
              />
            </div>
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src={iicLogo}
                alt="Institution's Innovation Council (IIC)"
                className="h-10 sm:h-12 w-auto object-contain rounded drop-shadow"
              />
            </div>
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src={ecellLogo}
                alt="E-Cell PSGCAS"
                className="h-10 sm:h-12 w-auto object-contain rounded drop-shadow"
              />
            </div>
          </div>

          <div className="flex flex-col text-right">
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-secondary-container font-extrabold">
              100 YEARS OF PSG TRUST LEGACY (1926–2026)
            </span>
            <span className="font-headline-sm text-base sm:text-lg font-bold text-white uppercase tracking-tight">
              PSGCAS E-SUMMIT 2026
            </span>
            <span className="text-xs text-primary-fixed-dim">
              28, 29 & 30 September 2026 • Peelamedu, Coimbatore
            </span>
          </div>
        </div>

        {/* Multi-column navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10 border-b border-white/10">
          
          {/* Col 1: About & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-title-md text-sm font-extrabold uppercase text-secondary-container tracking-wider">
              Centre for Innovation Incubation & Entrepreneurship
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Organized by CII&E, PSG College of Arts & Science in active association with Institution’s Innovation Council (IIC) & E-Cell PSGCAS. Driving national student innovation, venture creation, and high-impact enterprise during the historic PSG Centenary Celebrations.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-container pt-1">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span className="font-bold text-white">28, 29 & 30 September 2026</span>
              <span>•</span>
              <span className="text-gray-300">Coimbatore</span>
            </div>
          </div>

          {/* Col 2: Summit Events (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm font-extrabold uppercase text-secondary-container tracking-wider">
              Summit Tracks
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
              <li>
                <Link href={`/${lang}/events/elampreneurs-2026`} className="hover:text-secondary-container transition-colors">
                  Elampreneur' 26 (School Conclave)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/techkathon-2026`} className="hover:text-secondary-container transition-colors">
                  TECHKATHON 2K26 (8-Hr Hackathon)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/fintech-hackathon`} className="hover:text-secondary-container transition-colors">
                  Fintech Hackathon 2026 (₹40,000)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/digital-tools`} className="hover:text-secondary-container transition-colors">
                  Digital Tools for Business Workshop
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/casequest`} className="hover:text-secondary-container transition-colors">
                  CaseQuest (Business Case Competition)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/copyright-trademark-workshop`} className="hover:text-secondary-container transition-colors">
                  Copyrights & Trademark Masterclass
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/investors-incubator-summit`} className="hover:text-secondary-container transition-colors">
                  Investors & Incubator Summit
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/bid-bizz`} className="hover:text-secondary-container transition-colors">
                  Bid Bizz Auction Game
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/events/psg-caspreneurs-2026`} className="hover:text-secondary-container transition-colors">
                  PSG Caspreneurs 2026 (Seed Grants)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Day 3 Passes & Access (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm font-extrabold uppercase text-secondary-container tracking-wider">
              Day 3 Passes
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
              <li>
                <Link href={`/${lang}/tickets`} className="hover:text-secondary-container transition-colors">
                  Silver Pass (₹99)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/tickets`} className="hover:text-secondary-container transition-colors">
                  Gold Pass (₹199)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/tickets`} className="hover:text-secondary-container transition-colors">
                  Platinum Pass (₹299)
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/tickets`} className="hover:text-secondary-container transition-colors font-bold text-secondary-container">
                  Pass Comparison Matrix
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/agenda`} className="hover:text-secondary-container transition-colors">
                  Full 3-Day Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Executive Desk & Venue (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm font-extrabold uppercase text-secondary-container tracking-wider">
              Executive Desk
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              PSG College of Arts & Science,<br />
              Civil Aerodrome Post, Avinashi Road,<br />
              Peelamedu, Coimbatore – 641 014,<br />
              Tamil Nadu, India.
            </p>
            <div className="flex flex-col gap-1 pt-1 text-xs">
              <span className="text-gray-400">Summit Email:</span>
              <a href="mailto:ecell@psgcas.ac.in" className="text-secondary-container hover:underline font-bold">
                ecell@psgcas.ac.in
              </a>
              <span className="text-gray-400 pt-1">School Conclave:</span>
              <a href="mailto:elampreneur@gmail.com" className="text-secondary-container hover:underline font-bold">
                elampreneur@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>
            © 2026 Centre for Innovation Incubation & Entrepreneurship (CII&E), IIC & E-Cell PSGCAS. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <Link href={`/${lang}/ecosystem`} className="hover:text-white transition-colors">
              Ecosystem & Affiliations
            </Link>
            <span>•</span>
            <Link href={`/${lang}/faq`} className="hover:text-white transition-colors">
              Frequently Asked Questions
            </Link>
            <span>•</span>
            <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
              Contact Guide
            </Link>
            <span>•</span>
            <span className="text-secondary-container font-semibold">PSG Centenary Year (1926–2026)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
