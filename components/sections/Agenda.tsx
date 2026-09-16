'use client';

import { useState } from 'react';

export default function Agenda({ dict }: { dict?: any }) {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section className="w-full bg-surface py-space-3xl" id="timeline-section">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
          <div className="flex flex-col gap-space-2xs">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">Official Itinerary</span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase font-bold tracking-tight">Three-Day Summit Program</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Validated session schedule curated by the Centre for Innovation, Incubation and Entrepreneurship.</p>
          </div>
          <div className="flex items-center bg-surface-container p-1 rounded-xl shadow-inner shrink-0 overflow-x-auto">
            <button onClick={() => setActiveDay(1)} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md font-bold transition-all whitespace-nowrap ${activeDay === 1 ? 'bg-primary text-on-primary shadow' : 'text-on-surface-variant hover:text-on-surface'}`}>DAY 1 (28 SEP)</button>
            <button onClick={() => setActiveDay(2)} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md font-bold transition-all whitespace-nowrap ${activeDay === 2 ? 'bg-primary text-on-primary shadow' : 'text-on-surface-variant hover:text-on-surface'}`}>DAY 2 (29 SEP)</button>
            <button onClick={() => setActiveDay(3)} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md font-bold transition-all whitespace-nowrap ${activeDay === 3 ? 'bg-primary text-on-primary shadow' : 'text-on-surface-variant hover:text-on-surface'}`}>DAY 3 (30 SEP)</button>
          </div>
        </div>

        <div className="w-full">
          {activeDay === 1 && (
            <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-bold text-title-lg">01</div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary font-bold">Pre-Summit Inauguration & Innovation Groundwork</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Sunday, 28 September 2026 • Morning & Afternoon Sessions</p>
                  </div>
                </div>
                <span className="px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase shrink-0">Pre-Summit Phase</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">09:30 AM — 11:30 AM • MAIN AUDITORIUM</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Institutional</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">Pre-Summit Inaugural Session & Conclave Unveiling</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Welcome address by Principal, Dean of Student Affairs, and CIIE Leadership. Introduction to participating delegates from across India.</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">02:00 PM — 04:30 PM • GRD LAB COMPLEX</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Next-Gen Track</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">Elamprepreneurs 2026 for School Innovators</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">A marquee track introducing high school innovators to venture ideation, micro-prototyping, and design thinking fundamentals.</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">04:45 PM — 06:30 PM • EXECUTIVE CHAMBER</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Workshop</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">500 Copyrights & Trademark Masterclass</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Comprehensive legal literacy session on intellectual property protection, provisional patent filing, and brand registration for student enterprises.</p>
                </div>
              </div>
            </div>
          )}

          {activeDay === 2 && (
            <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-surface-container-lowest flex items-center justify-center font-bold text-title-lg">02</div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary font-bold">Hackathon Launch, Capital Markets & Digital Tooling</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Monday, 29 September 2026 • Full Day Technical & Financial Tracks</p>
                  </div>
                </div>
                <span className="px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase shrink-0">Sprint Day</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">08:00 AM ONWARDS • KAVERI HALL</span>
                    <span className="px-space-xs py-0.5 rounded bg-primary text-on-primary font-label-sm text-[11px] font-bold">Flagship Sprint</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">TECHKATHON 2026</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Tech Hackathon at Kaveri Hall. Intensive 2-day technical building challenge for developer squads.</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">09:00 AM ONWARDS • PODHIGAI HALL</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Pitching Competition</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">Fintech Hackathon 2026</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">National Level Business Idea Pitching Competition. FinTech for Bharat: Innovating for an Inclusive, Intelligent & Secure Financial Future.</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">09:00 AM — 12:00 PM • COMMERCE QUADRANGLE</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Exhibition</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">National IPO & Stocks Poster Presentation</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Inter-university teams analyze recent market listings, valuation anomalies, and capital market dynamics before an esteemed panel of certified financial analysts.</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">02:00 PM — 04:30 PM • MEDIA HUB</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Hands-on Lab</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">National Digital Tools Workshop for Business</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Mastering generative AI stacks, CRM automations, growth marketing pipelines, and modern no-code tooling for early founders.</p>
                </div>
              </div>
            </div>
          )}

          {activeDay === 3 && (
            <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-title-lg">03</div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary font-bold">Grand Finale, Seed Grants & Venture Deployments</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Tuesday, 30 September 2026 • Summit Climax & Venture Deployments</p>
                  </div>
                </div>
                <span className="px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase shrink-0">Valedictory</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">09:00 AM — 11:30 AM • MAIN AUDITORIUM</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Jury Final</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">Finale of Hackathons & Pitch Tank</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Top finalist teams from TECHKATHON 2026 & Fintech Hackathon 2026 present live MVPs to visiting angel investors and corporate venture arms.</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">02:00 PM — 04:00 PM • EXECUTIVE BOARDROOM</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">VC Conclave</span>
                  </div>
                  <h5 className="font-title-lg text-title-lg text-primary font-bold">Investor & Incubation Summit (Seed Funding Grants)</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">Direct closed-door check deployments, institutional incubation letters, and signing of venture mentorship covenants with CIIE.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
