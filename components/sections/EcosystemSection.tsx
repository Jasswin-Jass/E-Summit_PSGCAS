'use client';

import { psgInstitutionalEcosystem, innovationEcosystem } from '../../data/ecosystem';

export default function EcosystemSection() {
  return (
    <section className="w-full bg-[#f9f9ff] py-space-3xl md:py-space-4xl text-on-surface relative overflow-hidden" id="ecosystem-section">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-space-xs pb-space-2xl max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/40 text-on-secondary-container text-xs font-extrabold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">hub</span>
            <span>OUR AFFILIATED ECOSYSTEM</span>
          </div>

          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary uppercase font-extrabold tracking-tight pt-1">
            Our Ecosystem & Affiliations
          </h2>

          <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed pt-1">
            PSGCAS E-Summit 2026 is strengthened by its network of institutional, entrepreneurship and innovation ecosystem affiliations.
          </p>
        </div>

        {/* GROUP 1: PSG Institutional Ecosystem */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px bg-outline-variant/60 flex-1 max-w-xs hidden sm:block"></div>
            <h3 className="font-title-lg text-xs sm:text-sm text-secondary uppercase font-extrabold tracking-widest text-center px-3 py-1 rounded-full bg-white border border-secondary/20 shadow-sm">
              PSG INSTITUTIONAL ECOSYSTEM
            </h3>
            <div className="h-px bg-outline-variant/60 flex-1 max-w-xs hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {psgInstitutionalEcosystem.map((org) => (
              <a
                key={org.id}
                href={org.websiteUrl || '#'}
                target={org.websiteUrl ? '_blank' : undefined}
                rel={org.websiteUrl ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-outline-variant/40 hover:border-secondary/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 group"
              >
                <div className="h-24 w-full flex items-center justify-center p-2">
                  <img
                    src={org.logoUrl}
                    alt={`${org.name} Official Logo`}
                    className="max-h-20 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full border-t border-gray-100 pt-3">
                  <span className="font-title-md text-sm font-extrabold text-primary leading-tight group-hover:text-secondary transition-colors">
                    {org.name}
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-medium leading-snug">
                    {org.role}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GROUP 2: Innovation & Entrepreneurship Ecosystem */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px bg-outline-variant/60 flex-1 max-w-xs hidden sm:block"></div>
            <h3 className="font-title-lg text-xs sm:text-sm text-secondary uppercase font-extrabold tracking-widest text-center px-3 py-1 rounded-full bg-white border border-secondary/20 shadow-sm">
              INNOVATION & ENTREPRENEURSHIP ECOSYSTEM
            </h3>
            <div className="h-px bg-outline-variant/60 flex-1 max-w-xs hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {innovationEcosystem.map((org) => (
              <a
                key={org.id}
                href={org.websiteUrl || '#'}
                target={org.websiteUrl ? '_blank' : undefined}
                rel={org.websiteUrl ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl border border-outline-variant/40 hover:border-secondary/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 group"
              >
                <div className="h-20 w-full flex items-center justify-center p-1">
                  <img
                    src={org.logoUrl}
                    alt={`${org.name} Official Logo`}
                    className="max-h-16 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full border-t border-gray-100 pt-3">
                  <span className="font-title-md text-xs sm:text-sm font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                    {org.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-on-surface-variant font-medium leading-snug line-clamp-2">
                    {org.role}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
