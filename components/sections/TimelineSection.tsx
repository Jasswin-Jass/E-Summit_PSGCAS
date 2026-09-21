'use client';

import { useState } from 'react';
import Link from 'next/link';
import { scheduleData } from '../../data/schedule';

interface TimelineSectionProps {
  lang?: string;
  initialDay?: 1 | 2 | 3;
}

export default function TimelineSection({ lang = 'en', initialDay = 1 }: TimelineSectionProps) {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(initialDay);

  const dayInfo = {
    1: {
      date: '28 SEPTEMBER 2026',
      weekday: 'Monday',
      theme: 'IDEATE | LEARN | PREPARE',
      summary: 'Pre-Summit groundwork, Elampreneur school innovation tracks, IPR copyright masterclass, and delegate orientation.'
    },
    2: {
      date: '29 SEPTEMBER 2026',
      weekday: 'Tuesday',
      theme: 'BUILD | COLLABORATE | INNOVATE',
      summary: 'Flagship technology and finance sprints: Techkathon 2K26, FinTech Hackathon 2026, IPO & Stocks Poster Presentation, and Digital Tools Workshop.'
    },
    3: {
      date: '30 SEPTEMBER 2026',
      weekday: 'Wednesday',
      theme: 'SHOWCASE | CELEBRATE | CREATE IMPACT',
      summary: 'The Grand E-Summit Conclave accessible via Delegate Passes: I-Summit Investor Conclave, CaseQuest, Bid Bizz, PSG Caspreneurs Seed Grants, and Grand Finale.'
    }
  };

  const dayEvents = scheduleData.filter((item) => item.day === activeDay);

  return (
    <section className="w-full bg-[#f9f9ff] py-space-3xl md:py-space-4xl text-on-surface" id="schedule-section">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
          <div className="flex flex-col gap-space-2xs max-w-2xl">
            <span className="font-label-md text-xs text-secondary uppercase tracking-widest font-bold">
              SUMMIT ITINERARY & AGENDA
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-primary uppercase font-extrabold tracking-tight">
              Three-Day Interactive Timeline
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Explore the chronological sequence of keynote speeches, hackathon sprints, workshops, and investor dealrooms curated by CII&E PSGCAS.
            </p>
          </div>

          {/* Date Selector Tabs */}
          <div className="flex items-center bg-white p-1 rounded-2xl shadow-md border border-outline-variant/40 overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-4 py-2.5 rounded-xl font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap flex flex-col items-center leading-tight ${
                activeDay === 1
                  ? 'bg-primary text-surface-container-lowest shadow'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span>DAY 1</span>
              <span className="text-[10px] font-normal opacity-80">28 SEP (MON)</span>
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-4 py-2.5 rounded-xl font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap flex flex-col items-center leading-tight ${
                activeDay === 2
                  ? 'bg-primary text-surface-container-lowest shadow'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span>DAY 2</span>
              <span className="text-[10px] font-normal opacity-80">29 SEP (TUE)</span>
            </button>
            <button
              onClick={() => setActiveDay(3)}
              className={`px-4 py-2.5 rounded-xl font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap flex flex-col items-center leading-tight ${
                activeDay === 3
                  ? 'bg-gradient-to-r from-amber-500 to-secondary text-white shadow'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span>DAY 3</span>
              <span className="text-[10px] font-extrabold">30 SEP (PASSES)</span>
            </button>
          </div>
        </div>

        {/* Day Highlight Card */}
        <div className="bg-white rounded-2xl p-space-lg shadow-sm border border-outline-variant/40 mb-space-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 rounded-xl bg-primary text-secondary-container flex flex-col items-center justify-center font-bold shadow shrink-0">
              <span className="text-xl font-black leading-none">{String(activeDay).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase tracking-widest font-extrabold">DAY</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-title-lg text-lg font-bold text-primary">
                  {dayInfo[activeDay].date} ({dayInfo[activeDay].weekday})
                </h3>
                <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase tracking-wider">
                  {dayInfo[activeDay].theme}
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant pt-0.5">
                {dayInfo[activeDay].summary}
              </p>
            </div>
          </div>

          {activeDay === 3 ? (
            <Link
              href={`/${lang}/tickets`}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-secondary-container to-amber-400 text-on-secondary-container font-label-sm text-xs font-extrabold uppercase tracking-wider shrink-0 shadow flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">confirmation_number</span>
              <span>GET PASS FOR DAY 3</span>
            </Link>
          ) : (
            <Link
              href={`/${lang}/events?day=${activeDay}`}
              className="px-4 py-2 rounded-xl bg-primary-container text-surface-container-lowest font-label-sm text-xs font-bold uppercase tracking-wider shrink-0 hover:bg-primary transition-colors flex items-center gap-1.5"
            >
              <span>BROWSE ALL DAY {activeDay} EVENTS</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          )}
        </div>

        {/* Timeline Event Items List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-space-lg ml-2 sm:ml-4">
          {dayEvents.map((item, idx) => (
            <div
              key={item.id}
              className="relative group transition-all duration-300"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-primary group-hover:border-secondary-container transition-colors shadow"></div>

              <div className="bg-white rounded-2xl p-space-lg shadow-sm hover:shadow-md border border-outline-variant/30 hover:border-secondary/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 pb-1 text-xs">
                    <span className="px-2 py-0.5 rounded bg-primary text-white font-bold text-[11px] tracking-wider">
                      {item.time}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold text-[11px]">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-on-surface-variant text-[11px]">
                      <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
                      <span>{item.venue}</span>
                    </span>
                  </div>

                  <h4 className="font-title-lg text-base sm:text-lg text-primary font-bold group-hover:text-secondary transition-colors pt-1">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant pt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Status / Action CTA */}
                <div className="shrink-0 flex items-center gap-2 self-end md:self-center">
                  {item.registrationStatus === 'open' && (
                    <div className="flex items-center gap-2">
                      {item.eventSlug && (
                        <Link
                          href={`/${lang}/events/${item.eventSlug}`}
                          className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-xs uppercase font-bold transition-colors"
                        >
                          Details
                        </Link>
                      )}
                      {item.registrationLink && (
                        <a
                          href={item.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-sm text-xs uppercase font-extrabold shadow-sm transition-all flex items-center gap-1"
                        >
                          <span>Register</span>
                          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        </a>
                      )}
                    </div>
                  )}

                  {item.registrationStatus === 'pass_required' && (
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 font-label-sm text-[11px] font-bold uppercase tracking-wider">
                        {item.requiredPass} Pass Req.
                      </span>
                      {item.eventSlug && (
                        <Link
                          href={`/${lang}/events/${item.eventSlug}`}
                          className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-xs uppercase font-bold transition-colors"
                        >
                          Details
                        </Link>
                      )}
                      <a
                        href={item.registrationLink || "https://forms.gle/7vpNQD3wbSWRMdDR6"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-label-sm text-xs uppercase font-bold shadow-sm transition-colors flex items-center gap-1"
                      >
                        <span>Get Pass</span>
                        <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
                      </a>
                    </div>
                  )}

                  {item.registrationStatus === 'finalists_only' && (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded bg-blue-100 text-blue-900 border border-blue-300 font-label-sm text-xs font-bold uppercase">
                        Finalists & Pass Holders
                      </span>
                      {item.eventSlug && (
                        <Link
                          href={`/${lang}/events/${item.eventSlug}`}
                          className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-xs uppercase font-bold"
                        >
                          Details
                        </Link>
                      )}
                    </div>
                  )}

                  {item.registrationStatus === 'open_for_all' && (
                    <span className="px-3 py-1 rounded bg-green-100 text-green-800 font-label-sm text-xs font-bold uppercase">
                      Open to All Delegates
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
