'use client';

import { useState } from 'react';
import Link from 'next/link';
import { eventsData } from '../../data/events';
import { REGISTRATION_URL_ALL_PASSES } from '../../data/events';

interface EventsExplorerProps {
  lang?: string;
  initialDay?: number;
  initialCategory?: string;
}

export default function EventsExplorer({
  lang = 'en',
  initialDay,
  initialCategory
}: EventsExplorerProps) {
  const [selectedDay, setSelectedDay] = useState<number | 'all'>(initialDay || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedPassFilter, setSelectedPassFilter] = useState<'all' | 'direct' | 'pass'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: string }[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Hackathons', value: 'Hackathon' },
    { label: 'Competitions', value: 'Competition' },
    { label: 'Workshops', value: 'Workshop' },
    { label: 'Summits', value: 'Summit' },
  ];

  const filteredEvents = eventsData.filter((event) => {
    const matchesDay = selectedDay === 'all' || event.day === selectedDay;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesPass =
      selectedPassFilter === 'all' ||
      (selectedPassFilter === 'direct' && !event.isDay3PassEvent) ||
      (selectedPassFilter === 'pass' && event.isDay3PassEvent);

    const matchesSearch =
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.themes && event.themes.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesDay && matchesCategory && matchesPass && matchesSearch;
  });

  return (
    <section className="w-full bg-[#f1f3ff]/60 py-space-3xl md:py-space-4xl" id="events-section">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
          <div className="flex flex-col gap-space-2xs max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/40 text-on-secondary-container text-xs font-extrabold uppercase tracking-widest w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>DYNAMIC SUMMIT CATALOGUE</span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-primary uppercase font-extrabold tracking-tight pt-1">
              Explore Summit Events & Challenges
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Discover national hackathons, school innovation conclaves, IPR workshops, and investor pitch arenas across Day 1, 2, and 3. Inspect full rules and register online.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80 relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search hackathons, themes, venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-9 py-2.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filters Row: Day Tabs, Category Pills & Pass Filter */}
        <div className="flex flex-col gap-3 pb-space-xl border-b border-outline-variant/40">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Day Tabs */}
            <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-outline-variant/40 overflow-x-auto max-w-full">
              <button
                onClick={() => setSelectedDay('all')}
                className={`px-4 py-2 rounded-lg font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap ${
                  selectedDay === 'all'
                    ? 'bg-primary text-surface-container-lowest shadow-md'
                    : 'text-on-surface-variant hover:text-primary hover:bg-gray-50'
                }`}
              >
                ALL DAYS (28–30 SEP)
              </button>
              <button
                onClick={() => setSelectedDay(1)}
                className={`px-4 py-2 rounded-lg font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedDay === 1
                    ? 'bg-primary text-surface-container-lowest shadow-md'
                    : 'text-on-surface-variant hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span>DAY 1</span>
                <span className="text-[11px] opacity-75 font-normal">(28 SEP)</span>
              </button>
              <button
                onClick={() => setSelectedDay(2)}
                className={`px-4 py-2 rounded-lg font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedDay === 2
                    ? 'bg-primary text-surface-container-lowest shadow-md'
                    : 'text-on-surface-variant hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span>DAY 2</span>
                <span className="text-[11px] opacity-75 font-normal">(29 SEP)</span>
              </button>
              <button
                onClick={() => setSelectedDay(3)}
                className={`px-4 py-2 rounded-lg font-label-md text-xs sm:text-sm font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedDay === 3
                    ? 'bg-gradient-to-r from-amber-500 to-secondary text-white shadow-md'
                    : 'text-on-surface-variant hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span>DAY 3</span>
                <span className="text-[11px] text-amber-300 font-extrabold">(PASSES)</span>
              </button>
            </div>

            {/* Pass Requirement Selector */}
            <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-outline-variant/40 text-xs">
              <button
                onClick={() => setSelectedPassFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedPassFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                All Access
              </button>
              <button
                onClick={() => setSelectedPassFilter('direct')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedPassFilter === 'direct'
                    ? 'bg-primary text-white'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Direct Entry (Day 1 & 2)
              </button>
              <button
                onClick={() => setSelectedPassFilter('pass')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedPassFilter === 'pass'
                    ? 'bg-amber-500 text-[#001634] font-black'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Pass Required (Day 3)
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pt-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.value
                    ? 'bg-secondary-container text-on-secondary-container shadow-sm border border-secondary/30'
                    : 'bg-white text-on-surface-variant hover:text-on-surface border border-outline-variant/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Day 3 Notice Banner if Day 3 selected */}
        {selectedDay === 3 && (
          <div className="my-space-md p-space-md rounded-2xl bg-gradient-to-r from-[#001634] via-[#062B55] to-[#001634] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm border border-secondary-container/40 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-container/20 border border-secondary-container/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-container text-[24px]">
                  confirmation_number
                </span>
              </div>
              <div>
                <h4 className="font-title-md text-sm sm:text-base font-bold text-surface-container-lowest">
                  Day 3 Access is Powered by Official E-Summit Passes
                </h4>
                <p className="font-body-sm text-xs text-primary-fixed-dim">
                  Passes grant entry to Carnival, Keynotes, CaseQuest & Bid Bizz (Gold/Platinum), and I-Summit (Platinum). Silver (₹99), Gold (₹199), Platinum (₹299).
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/${lang}/tickets`}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-sm text-xs uppercase font-bold tracking-wider border border-white/20 transition-all"
              >
                COMPARE PASSES
              </Link>
              <a
                href={REGISTRATION_URL_ALL_PASSES}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-secondary-container to-amber-400 text-on-secondary-container font-label-sm text-xs uppercase font-extrabold tracking-wider hover:bg-secondary-fixed transition-all shadow flex items-center gap-1"
              >
                <span>GET PASS</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        )}

        {/* Events Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="py-space-3xl text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-outline-variant p-8 my-6">
            <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">event_busy</span>
            <h3 className="font-title-lg text-lg font-bold text-primary">No matching events found</h3>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-sm mt-1">
              Try adjusting your search query or switching between filters to discover all official E-Summit events.
            </p>
            <button
              onClick={() => { setSelectedDay('all'); setSelectedCategory('all'); setSelectedPassFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase hover:bg-primary/90 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg pt-space-lg">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-outline-variant/40 hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Poster Container with Aspect Ratio */}
                <div className="relative w-full aspect-[4/3] bg-[#001634] overflow-hidden">
                  <img
                    src={event.posterUrl}
                    alt={event.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-md text-surface-container-lowest font-label-sm text-[10px] uppercase font-bold tracking-wider border border-white/15 shadow">
                      DAY {event.day} • {event.dateString.split(' ')[0]} {event.dateString.split(' ')[1]}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {event.isRegistrationClosed && (
                        <span className="px-2.5 py-1 rounded-full bg-rose-600/95 backdrop-blur-md text-white font-label-sm text-[10px] uppercase font-black tracking-wider shadow border border-rose-400/30 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">lock</span>
                          <span>CLOSED</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] uppercase font-extrabold tracking-wider shadow">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Highlight Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-white">
                    {event.prizePool && (
                      <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-xs">
                        <span className="material-symbols-outlined text-secondary-container text-[16px]">
                          military_tech
                        </span>
                        <span className="font-extrabold text-secondary-container text-[11px] truncate max-w-[170px]">
                          {event.prizePool}
                        </span>
                      </div>
                    )}
                    {event.isDay3PassEvent && (
                      <span className="ml-auto px-2.5 py-1 rounded-lg bg-sky-600/90 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider border border-white/10 shadow flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">confirmation_number</span>
                        <span>{event.requiredPassTier} Pass</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-space-lg flex flex-col gap-space-xs flex-1">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                    <span>{event.time}</span>
                    <span>•</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                    <span className="truncate">{event.venue.split(',')[0]}</span>
                  </div>

                  <h3 className="font-title-lg text-lg sm:text-xl text-primary font-bold group-hover:text-secondary transition-colors line-clamp-1 pt-1">
                    {event.title}
                  </h3>

                  {event.tagline && (
                    <p className="font-label-sm text-xs text-secondary font-semibold italic line-clamp-1">
                      "{event.tagline}"
                    </p>
                  )}

                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed line-clamp-2 pt-1 flex-1">
                    {event.description}
                  </p>

                  {/* Eligibility / Pass Notice */}
                  <div className="pt-2.5 border-t border-outline-variant/30 mt-2">
                    <span className="text-[11px] text-on-surface-variant font-medium line-clamp-1">
                      <strong className="text-primary">Eligibility:</strong> {event.eligibility}
                    </span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-space-lg py-3 bg-surface-container-low/60 border-t border-outline-variant/30 flex items-center justify-between gap-2">
                  <Link
                    href={`/${lang}/events/${event.slug}`}
                    className="font-label-sm text-xs text-primary hover:text-secondary font-extrabold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>VIEW DETAILS</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>

                  {event.isRegistrationClosed ? (
                    <span className="px-3 py-1.5 rounded-lg bg-slate-200/90 text-slate-600 font-label-sm text-[11px] uppercase font-bold flex items-center gap-1 cursor-not-allowed select-none border border-slate-300">
                      <span className="material-symbols-outlined text-[14px] text-slate-500">lock</span>
                      <span>CLOSED</span>
                    </span>
                  ) : event.isDay3PassEvent ? (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-secondary text-white font-label-sm text-[11px] uppercase font-bold hover:shadow-md transition-all shadow-sm flex items-center gap-1"
                    >
                      <span>GET PASS</span>
                      <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
                    </a>
                  ) : (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-sm text-[11px] uppercase font-extrabold hover:bg-secondary-fixed transition-colors shadow-sm flex items-center gap-1"
                    >
                      <span>REGISTER</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
