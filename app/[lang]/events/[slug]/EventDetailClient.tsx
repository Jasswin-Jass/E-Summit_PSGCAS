'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EventItem, PassTier } from '@/types/event';
import { REGISTRATION_URL_COMMON_PASS } from '@/data/passes';

interface EventDetailClientProps {
  event: EventItem;
  lang: string;
  relatedEvents: EventItem[];
  passTierInfo: PassTier | null;
}

export default function EventDetailClient({
  event,
  lang,
  relatedEvents,
  passTierInfo,
}: EventDetailClientProps) {
  const allPosters = [event.posterUrl, ...(event.additionalPosters || [])];
  const [activePosterIndex, setActivePosterIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const directRegistrationUrl = event.isDay3PassEvent
    ? REGISTRATION_URL_COMMON_PASS
    : event.registrationLink;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen text-on-surface pb-24">
      {/* Lightbox for Full High-Res Poster Inspection */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-3 right-0 sm:top-2 sm:right-2 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              title="Close full screen"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <img
              src={allPosters[activePosterIndex]}
              alt={`${event.title} Poster Full Size`}
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {allPosters.length > 1 && (
              <div
                className="flex items-center gap-3 mt-4 bg-black/60 px-4 py-2 rounded-full border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                {allPosters.map((poster, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePosterIndex(idx)}
                    className={`w-12 h-16 rounded overflow-hidden border-2 transition-all ${
                      activePosterIndex === idx ? 'border-secondary-container scale-105' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={poster} alt={`Page ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Breadcrumbs & Navigation Header */}
      <div className="w-full bg-white border-b border-outline-variant/30 sticky top-16 sm:top-20 z-20 shadow-sm">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-on-surface-variant overflow-x-auto whitespace-nowrap">
            <Link href={`/${lang}`} className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href={`/${lang}/events`} className="hover:text-primary transition-colors">
              Events Explorer
            </Link>
            <span>/</span>
            <span className="text-primary font-bold truncate max-w-[180px] sm:max-w-xs">{event.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/60 bg-white hover:bg-gray-50 text-on-surface font-semibold text-xs transition-colors"
              title="Share event link"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copiedLink ? 'check' : 'share'}
              </span>
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <Link
              href={`/${lang}/events`}
              className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span className="hidden sm:inline">All Events</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

          {/* LEFT COLUMN: Prominent Undistorted Poster & Visual Assets (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky lg:top-36">
            
            {/* Primary Poster Frame */}
            <div className="bg-[#001634] rounded-2xl overflow-hidden shadow-2xl border border-secondary-container/30 relative group">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-b from-[#001634] via-[#062B55] to-[#001634] flex items-center justify-center p-2">
                <img
                  src={allPosters[activePosterIndex]}
                  alt={`${event.title} Official Poster`}
                  className="max-h-full max-w-full object-contain drop-shadow-2xl rounded"
                />
                
                {/* Overlay hover prompt */}
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl">zoom_in</span>
                  <span className="font-bold text-xs uppercase tracking-widest bg-black/60 px-3.5 py-1.5 rounded-full border border-white/20">
                    Click to Enlarge Full Poster
                  </span>
                </div>
              </div>

              {/* Poster bar footer */}
              <div className="bg-[#001228] p-3 flex items-center justify-between text-white/90 text-xs border-t border-white/10">
                <span className="font-mono text-[11px] text-gray-300">
                  {allPosters.length > 1 ? `Page ${activePosterIndex + 1} of ${allPosters.length}` : 'Official Poster'}
                </span>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="text-secondary-container hover:text-white font-bold flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                  <span>Full Resolution</span>
                </button>
              </div>
            </div>

            {/* Additional Brochure / Poster Thumbnails */}
            {allPosters.length > 1 && (
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                  Official Document Pages:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {allPosters.map((posterUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePosterIndex(idx)}
                      className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all p-1 bg-white shadow-sm ${
                        activePosterIndex === idx
                          ? 'border-secondary ring-2 ring-secondary/30'
                          : 'border-outline-variant/40 hover:border-primary/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={posterUrl}
                        alt={`Page ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute bottom-1 right-1 bg-black/70 text-white font-bold text-[9px] px-1.5 py-0.5 rounded">
                        P.{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact Box for Coordinators */}
            {event.coordinators && event.coordinators.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-outline-variant/40 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-2 text-primary font-bold text-sm border-b border-gray-100 pb-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">contact_phone</span>
                  <span>Event Desk & Coordinators</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {event.coordinators.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="font-bold text-on-surface">{c.name}</p>
                        <p className="text-[11px] text-on-surface-variant">{c.role}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {c.phone && (
                          <a
                            href={`tel:${c.phone.replace(/\s+/g, '')}`}
                            className="p-1.5 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
                            title={`Call ${c.name}`}
                          >
                            <span className="material-symbols-outlined text-[16px]">call</span>
                          </a>
                        )}
                        {c.email && (
                          <a
                            href={`mailto:${c.email}`}
                            className="p-1.5 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
                            title={`Email ${c.name}`}
                          >
                            <span className="material-symbols-outlined text-[16px]">mail</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Event Full Intel, Rules, Themes & Action (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-primary text-white font-label-sm text-xs uppercase font-extrabold tracking-wider shadow-sm">
                DAY {event.day} • {event.dateString}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs uppercase font-extrabold tracking-wider shadow-sm">
                {event.category}
              </span>
              {event.isRegistrationClosed && (
                <span className="px-3.5 py-1 rounded-full bg-rose-600 text-white font-label-sm text-xs uppercase font-extrabold tracking-wider shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">lock</span>
                  <span>REGISTRATIONS CLOSED</span>
                </span>
              )}
              {event.isDay3PassEvent && (
                <span className="px-3.5 py-1 rounded-full bg-sky-600 text-white font-label-sm text-xs uppercase font-extrabold tracking-wider shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
                  <span>{event.requiredPassTier} Pass Required</span>
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col gap-2">
              <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary font-black uppercase tracking-tight leading-tight">
                {event.title}
              </h1>
              {event.subtitle && (
                <p className="font-title-md text-base sm:text-lg text-secondary font-bold">
                  {event.subtitle}
                </p>
              )}
              {event.tagline && (
                <p className="font-body-md text-sm sm:text-base italic text-on-surface-variant">
                  "{event.tagline}"
                </p>
              )}
            </div>

            {/* Prize Pool Hero Highlight */}
            {event.prizePool && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#001634] via-[#062B55] to-[#001634] text-white border border-secondary-container/50 shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/20 border border-secondary-container/50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container text-[28px]">
                      emoji_events
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] text-secondary-container uppercase tracking-widest font-bold">
                      REWARDS & CASH PRIZE POOL
                    </span>
                    <h3 className="font-headline-sm text-lg sm:text-2xl text-secondary-container font-extrabold">
                      {event.prizePool}
                    </h3>
                  </div>
                </div>
                {event.isDay3PassEvent && (
                  <Link
                    href={`/${lang}/tickets`}
                    className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-wider hover:bg-secondary-fixed transition-colors"
                  >
                    COMPARE PASSES
                  </Link>
                )}
              </div>
            )}

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">calendar_today</span>
                  Date
                </span>
                <span className="font-bold text-primary text-xs sm:text-sm">{event.dateString.split(' ')[0]} {event.dateString.split(' ')[1]}</span>
                <span className="text-[10px] text-gray-500">{event.dayOfWeek}</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                  Time
                </span>
                <span className="font-bold text-primary text-xs sm:text-sm">{event.time}</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
                  Venue
                </span>
                <span className="font-bold text-primary text-xs sm:text-sm truncate">{event.venue.split(',')[0]}</span>
                <span className="text-[10px] text-gray-500">PSGCAS Coimbatore</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">groups</span>
                  Format
                </span>
                <span className="font-bold text-primary text-xs sm:text-sm truncate">
                  {event.teamSize || (event.isDay3PassEvent ? `${event.requiredPassTier} Pass` : 'Open')}
                </span>
              </div>
            </div>

            {/* Primary Registration Call to Action Card */}
            <div id="register" className={`p-6 rounded-2xl bg-white border-2 ${event.isRegistrationClosed ? 'border-rose-300' : 'border-secondary/40'} shadow-lg flex flex-col gap-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-title-lg text-lg sm:text-xl font-extrabold text-primary uppercase">
                      {event.isRegistrationClosed
                        ? 'Registration Status'
                        : (event.isDay3PassEvent ? 'Day 3 Pass Access' : 'Official Event Registration')}
                    </h4>
                    {event.isRegistrationClosed && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-extrabold uppercase tracking-wide border border-rose-200">
                        Closed
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant pt-0.5">
                    {event.isRegistrationClosed
                      ? (event.closedMessage || 'Registrations for this event are now officially closed. No further applications are being accepted.')
                      : (event.isDay3PassEvent
                          ? `Access to ${event.title} requires a verified ${event.requiredPassTier} Pass.`
                          : 'Submit your entry directly through the official summit portal.')}
                  </p>
                </div>
                {event.registrationFee && (
                  <div className="sm:text-right">
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Registration Fee:</span>
                    <p className="text-base font-extrabold text-primary">{event.registrationFee}</p>
                  </div>
                )}
              </div>

              {/* Action Button Row */}
              <div className="flex flex-col sm:flex-row gap-3">
                {event.isRegistrationClosed ? (
                  <div className="flex-1 py-3.5 px-6 rounded-xl bg-slate-100 border border-slate-300 text-slate-500 font-extrabold text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-not-allowed select-none shadow-inner">
                    <span className="material-symbols-outlined text-[20px] text-slate-400">lock</span>
                    <span>REGISTRATIONS CLOSED</span>
                  </div>
                ) : event.isDay3PassEvent ? (
                  <>
                    <a
                      href={REGISTRATION_URL_COMMON_PASS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-[#001634] font-extrabold text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">confirmation_number</span>
                      <span>GET {event.requiredPassTier?.toUpperCase()} PASS</span>
                    </a>
                    <Link
                      href={`/${lang}/tickets`}
                      className="py-3.5 px-5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Compare Passes</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-secondary-container via-amber-400 to-secondary text-on-secondary-container font-extrabold text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                      <span>REGISTER NOW (OFFICIAL FORM)</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                    {event.externalResourceUrl && (
                      <a
                        href={event.externalResourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-5 rounded-xl bg-[#001634] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#062B55] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Guidelines / PPT</span>
                        <span className="material-symbols-outlined text-[16px]">launch</span>
                      </a>
                    )}
                  </>
                )}
              </div>

              {/* Deadlines & Notice */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] p-3 rounded-xl border ${event.isRegistrationClosed ? 'bg-rose-50/80 border-rose-200 text-rose-900' : 'bg-amber-50/70 border-amber-200/60 text-on-surface-variant'}`}>
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-[18px] shrink-0 ${event.isRegistrationClosed ? 'text-rose-600' : 'text-amber-700'}`}>
                    {event.isRegistrationClosed ? 'cancel' : 'info'}
                  </span>
                  <span>
                    {event.isRegistrationClosed
                      ? 'Registration deadline has passed. Selected ventures will be contacted directly for Day 3 proceedings.'
                      : 'Strictly no spot registrations. Carry genuine college / school photo ID on the summit day.'}
                  </span>
                </div>
                {event.registrationDeadline && (
                  <span className={`font-bold shrink-0 ${event.isRegistrationClosed ? 'text-rose-800' : 'text-amber-900'}`}>
                    Deadline: {event.registrationDeadline}
                  </span>
                )}
              </div>
            </div>

            {/* Long Description / About */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col gap-3">
              <h3 className="font-title-lg text-lg font-bold text-primary uppercase border-b border-gray-100 pb-2">
                About the Event
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {event.longDescription || event.description}
              </p>
              
              {/* Eligibility highlight */}
              <div className="p-3 bg-[#f1f3ff] rounded-xl border border-outline-variant/30 flex items-start gap-2.5 mt-2">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">school</span>
                <div className="text-xs">
                  <strong className="text-primary uppercase tracking-wider">Eligibility: </strong>
                  <span className="text-on-surface">{event.eligibility}</span>
                </div>
              </div>
            </div>

            {/* Sub-Events (e.g. Shark Talk, Model Mania, Doodlix for Elampreneurs or Rounds for CaseQuest) */}
            {event.subEvents && event.subEvents.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col gap-4">
                <h3 className="font-title-lg text-lg font-bold text-primary uppercase border-b border-gray-100 pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">category</span>
                  <span>Competition Categories & Event Structure</span>
                </h3>
                <div className="flex flex-col gap-4">
                  {event.subEvents.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex flex-col gap-1.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-title-md text-base font-bold text-primary">{sub.name}</h4>
                        <span className="px-2.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">
                          {sub.target.split('•')[0]}
                        </span>
                      </div>
                      <p className="text-xs text-secondary font-semibold">{sub.target}</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed pt-1">{sub.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Themes / Tracks (e.g. Fintech 12 themes, Techkathon 6 themes, Digital tools topics) */}
            {event.themes && event.themes.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col gap-4">
                <h3 className="font-title-lg text-lg font-bold text-primary uppercase border-b border-gray-100 pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">tune</span>
                  <span>Focus Themes & Topics</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {event.themes.map((theme, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#f8f9fc] border border-outline-variant/40 flex items-start gap-2 text-xs"
                    >
                      <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                        arrow_right_alt
                      </span>
                      <span className="font-semibold text-on-surface">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules & Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col gap-3">
                <h3 className="font-title-lg text-lg font-bold text-primary uppercase border-b border-gray-100 pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">gavel</span>
                  <span>Rules & Participation Guidelines</span>
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs text-on-surface-variant">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed text-on-surface">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delegate Perks & Deliverables */}
            {event.perks && event.perks.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col gap-3">
                <h3 className="font-title-lg text-lg font-bold text-primary uppercase border-b border-gray-100 pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">card_giftcard</span>
                  <span>Delegate Perks & Kit Inclusions</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {event.perks.map((perk, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs p-2.5 rounded-lg bg-green-50/70 border border-green-200/60 text-green-900"
                    >
                      <span className="material-symbols-outlined text-green-700 text-[18px] shrink-0">
                        check_circle
                      </span>
                      <span className="font-medium">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* RELATED EVENTS SECTION */}
        {relatedEvents.length > 0 && (
          <div className="mt-16 pt-10 border-t border-outline-variant/40 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-label-sm text-xs text-secondary uppercase font-bold tracking-widest">
                  EXPLORE MORE SUMMIT TRACKS
                </span>
                <h3 className="font-headline-md text-2xl text-primary font-bold uppercase">
                  Other Events You Might Like
                </h3>
              </div>
              <Link
                href={`/${lang}/events`}
                className="text-xs font-bold text-primary hover:text-secondary uppercase flex items-center gap-1"
              >
                <span>View All Events</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-outline-variant/30 transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/9] bg-[#001634] overflow-hidden">
                    <img
                      src={rel.posterUrl}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/90 text-white text-[10px] font-bold uppercase">
                      DAY {rel.day}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-1.5 flex-1">
                    <span className="text-[10px] text-secondary font-bold uppercase">{rel.category}</span>
                    <h4 className="font-title-md text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant line-clamp-2">{rel.description}</p>
                  </div>
                  <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">{rel.venue.split(',')[0]}</span>
                    <Link
                      href={`/${lang}/events/${rel.slug}`}
                      className="text-xs font-bold text-primary hover:text-secondary uppercase flex items-center gap-0.5"
                    >
                      <span>Details</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Sticky Bottom Action Bar for Easy Registration */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#001634]/95 backdrop-blur-xl border-t border-secondary-container/30 py-3 px-4 shadow-2xl">
        <div className="max-w-max-width mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex flex-col">
            <span className="text-xs text-secondary-container font-extrabold uppercase tracking-wider">
              {event.title}
            </span>
            <span className="text-[11px] text-primary-fixed-dim">
              DAY {event.day} • {event.dateString} • {event.venue.split(',')[0]}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {event.isDay3PassEvent ? (
              <a
                href={REGISTRATION_URL_COMMON_PASS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-[#001634] font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">confirmation_number</span>
                <span>GET {event.requiredPassTier?.toUpperCase()} PASS</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            ) : (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-secondary-container via-amber-400 to-secondary text-on-secondary-container font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                <span>REGISTER NOW</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
