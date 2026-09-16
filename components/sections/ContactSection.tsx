'use client';

import { useState } from 'react';
import { contactGuideCategories, summitVenueInfo } from '../../data/contact';

interface ContactSectionProps {
  lang?: string;
  showHeader?: boolean;
}

export default function ContactSection({ lang = 'en', showHeader = true }: ContactSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedCategories = activeCategory === 'all'
    ? contactGuideCategories
    : contactGuideCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section className="w-full bg-[#f8f9fc] py-space-3xl md:py-space-4xl" id="contact">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        
        {showHeader && (
          <div className="flex flex-col items-center text-center gap-space-2xs pb-space-2xl max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/40 text-on-secondary-container text-xs font-extrabold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">contact_support</span>
              <span>WHO SHOULD I CONTACT FOR MY QUERY?</span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary uppercase font-extrabold tracking-tight pt-2">
              Official Contact Guide
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed pt-1">
              Select your inquiry topic below to find direct phone lines, verified coordinator contacts, and official registration channels for PSGCAS E-Summit 2026.
            </p>
          </div>
        )}

        {/* Interactive Query Navigator: "What do you need help with?" */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/40">
            <div className="flex items-center gap-2 text-xs font-extrabold text-primary uppercase tracking-wider">
              <span className="material-symbols-outlined text-secondary text-[20px]">help</span>
              <span>What do you need help with?</span>
            </div>
            <span className="text-xs text-on-surface-variant font-medium">
              Click a category to filter coordinator desks
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap shadow-sm ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-on-surface-variant hover:text-primary border border-outline-variant/50 hover:bg-gray-50'
              }`}
            >
              All Enquiries ({contactGuideCategories.length})
            </button>

            {contactGuideCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-on-surface-variant hover:text-primary border border-outline-variant/50 hover:bg-gray-50'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  {cat.icon}
                </span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Guide Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-outline-variant/40 hover:border-secondary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container/30 text-on-secondary-container flex items-center justify-center shrink-0 border border-secondary/20">
                      <span className="material-symbols-outlined text-[20px]">
                        {cat.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-sm font-extrabold text-primary uppercase tracking-wider">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] text-secondary font-bold">
                        {cat.contacts.length} Contact{cat.contacts.length > 1 ? 's' : ''} Listed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Query Description */}
                <p className="text-xs text-on-surface-variant leading-relaxed py-3">
                  {cat.description}
                </p>

                {/* Coordinators List */}
                <div className="space-y-2.5 pt-1">
                  {cat.contacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#f8f9fc] border border-outline-variant/30 flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-title-md text-xs font-bold text-primary">
                          {contact.name}
                        </span>
                        <span className="text-[10px] text-secondary font-semibold uppercase truncate max-w-[120px]">
                          {contact.role}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-200/60 text-xs">
                        {contact.phone && (
                          <a
                            href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-primary font-bold hover:bg-secondary-container/30 hover:border-secondary hover:text-secondary transition-all shadow-2xs"
                            title={`Call ${contact.name}`}
                          >
                            <span className="material-symbols-outlined text-[15px] text-green-600">call</span>
                            <span>{contact.phone}</span>
                          </a>
                        )}

                        {contact.email && (
                          <a
                            href={`mailto:${contact.email}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-primary font-bold hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all shadow-2xs"
                            title={`Email ${contact.email}`}
                          >
                            <span className="material-symbols-outlined text-[15px] text-blue-600">mail</span>
                            <span className="truncate max-w-[160px]">{contact.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button if available */}
              {cat.actionLink && (
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <a
                    href={cat.actionLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold text-xs uppercase tracking-wider hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{cat.actionLink.label}</span>
                    <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Institutional Venue & Campus Directions Box */}
        <div className="mt-12 bg-gradient-to-br from-[#001634] via-[#042044] to-[#001634] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-secondary-container/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[28px]">
                location_on
              </span>
              <div>
                <h4 className="font-title-lg text-lg sm:text-xl font-extrabold text-white">
                  {summitVenueInfo.institution}
                </h4>
                <p className="text-xs text-secondary-container font-bold">
                  {summitVenueInfo.dates} • Peelamedu, Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {summitVenueInfo.address}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-1">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">flight</span>
                <span>{summitVenueInfo.landmark}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">mail</span>
                <a href={`mailto:${summitVenueInfo.generalEmail}`} className="hover:underline font-bold text-white">
                  {summitVenueInfo.generalEmail}
                </a>
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
            <a
              href={summitVenueInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-amber-400 text-on-secondary-container font-extrabold text-xs uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Open in Google Maps</span>
              <span className="material-symbols-outlined text-[18px]">navigation</span>
            </a>
            <a
              href={`mailto:${summitVenueInfo.generalEmail}`}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors border border-white/15 flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Email Secretariat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
