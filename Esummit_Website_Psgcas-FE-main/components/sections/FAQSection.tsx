'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqData } from '@/data/faq';

interface FAQSectionProps {
  lang?: string;
  showHeader?: boolean;
}

export default function FAQSection({ lang = 'en', showHeader = true }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first open by default
  });
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Registration & Passes', 'Events & Competitions', 'General & Venue'];

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full bg-white py-space-3xl md:py-space-4xl" id="faq">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        
        {showHeader && (
          <div className="flex flex-col items-center text-center gap-space-2xs pb-space-2xl max-w-3xl mx-auto">
            <span className="font-label-md text-xs text-secondary uppercase tracking-widest font-bold">
              KNOWLEDGE BASE & SUPPORT
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-primary uppercase font-extrabold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Everything you need to know about registering for competitions, acquiring Day 3 passes, rules, prizes, and visiting PSGCAS Coimbatore.
            </p>
          </div>
        )}

        {/* Filter bar & search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto pb-6">
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full sm:w-64 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-outline-variant/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <span className="material-symbols-outlined text-3xl text-gray-400 mb-1">help_outline</span>
              <p className="text-sm text-gray-600 font-semibold">No questions match your search.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-2 text-xs text-primary font-bold hover:underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-secondary/50 bg-[#fafbff] shadow-sm'
                      : 'border-outline-variant/30 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                      <h3 className="font-title-md text-sm sm:text-base text-primary font-bold">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`material-symbols-outlined text-secondary transition-transform duration-200 text-[20px] shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-gray-100">
                      <div className="whitespace-pre-line pl-5">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Need more help banner */}
        <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#001634] to-[#062B55] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-secondary/30">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
            </div>
            <div>
              <h4 className="font-title-md text-sm sm:text-base font-bold text-surface-container-lowest">
                Still have unanswered questions?
              </h4>
              <p className="text-xs text-primary-fixed-dim">
                Reach out directly to the E-Summit 2026 student and faculty coordinators desk.
              </p>
            </div>
          </div>
          <Link
            href={`/${lang}/contact`}
            className="px-5 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-label-sm text-xs uppercase font-extrabold tracking-wider hover:bg-secondary-fixed transition-colors shadow shrink-0"
          >
            CONTACT DESK
          </Link>
        </div>

      </div>
    </section>
  );
}
