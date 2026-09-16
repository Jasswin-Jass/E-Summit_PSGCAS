'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const summitLogo = '/images/logos/esummit-logo.png';
const psgcasLogo = '/images/logos/psgcas-logo.png';
const psgCentenaryLogo = '/images/logos/psg-centenary-logo.jpeg';
const iicLogo = '/images/logos/iic-logo.png';
const ecellLogo = '/images/logos/ecell-psgcas-logo.jpeg';

export default function Header({ lang = 'en' }: { lang?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'HOME', href: `/${lang}` },
    { label: 'EVENTS', href: `/${lang}/events` },
    { label: 'SCHEDULE', href: `/${lang}/agenda` },
    { label: 'PASSES', href: `/${lang}/tickets` },
    { label: 'ECOSYSTEM', href: `/${lang}/ecosystem` },
    { label: 'ABOUT', href: `/${lang}#about` },
    { label: 'FAQ', href: `/${lang}/faq` },
    { label: 'CONTACT', href: `/${lang}/contact` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#001634]/95 backdrop-blur-xl border-b border-secondary-container/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-2'
          : 'bg-[#001634]/80 backdrop-blur-md border-b border-white/10 py-3'
      }`}
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop flex items-center justify-between gap-space-sm">
        {/* Brand & Crest */}
        <Link href={`/${lang}`} className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="relative flex items-center gap-1.5 sm:gap-2">
            <img
              alt="PSG College Crest"
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              src={psgcasLogo}
            />
            <div className="h-7 sm:h-8 w-px bg-white/20 hidden sm:block"></div>
            <img
              alt="PSG Centenary 100"
              className="h-8 sm:h-10 w-auto object-contain rounded drop-shadow-md hidden sm:block"
              src={psgCentenaryLogo}
            />
            <div className="h-7 sm:h-8 w-px bg-white/20 hidden md:block"></div>
            <img
              alt="IIC PSGCAS"
              className="h-7 sm:h-9 w-auto object-contain rounded drop-shadow-md hidden md:block"
              src={iicLogo}
            />
            <div className="h-7 sm:h-8 w-px bg-white/20 hidden lg:block"></div>
            <img
              alt="E-Cell PSGCAS"
              className="h-7 sm:h-9 w-auto object-contain rounded drop-shadow-md hidden lg:block"
              src={ecellLogo}
            />
          </div>
          <div className="h-7 sm:h-8 w-px bg-white/20"></div>
          <div className="flex flex-col justify-center">
            <img
              alt="E-Summit '26"
              className="h-7 sm:h-9 w-auto object-contain drop-shadow-md group-hover:brightness-110 transition-all"
              src={summitLogo}
            />
            <span className="font-label-sm text-[9px] sm:text-[10px] tracking-widest uppercase text-primary-fixed-dim font-bold mt-0.5">
              PSGCAS • CII&E • IIC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-md font-label-sm text-[12px] font-bold tracking-wider transition-all uppercase ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-container shadow-md'
                    : 'text-surface-container-high hover:text-secondary-container hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Primary Register Button */}
          <Link
            href={`/${lang}/tickets`}
            className="px-3.5 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-secondary-container via-amber-400 to-secondary-fixed text-on-secondary-container font-label-sm text-[11px] sm:text-[13px] font-extrabold uppercase tracking-wider shadow-[0_2px_15px_rgba(254,202,90,0.4)] hover:shadow-[0_4px_20px_rgba(254,202,90,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>GET PASSES</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#001634]/98 backdrop-blur-2xl border-b border-secondary-container/30 shadow-2xl p-6 transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg font-label-md text-sm font-bold tracking-wider uppercase text-surface-container-high hover:text-secondary-container hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[18px] text-secondary-container">
                  chevron_right
                </span>
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href={`/${lang}/tickets`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-container to-amber-400 text-on-secondary-container font-label-md text-sm font-bold uppercase tracking-wider text-center shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                <span>EXPLORE SUMMIT PASSES</span>
              </Link>

              <div className="flex items-center justify-center px-2 text-xs text-primary-fixed-dim pt-2">
                <span>PSG College of Arts & Science • Coimbatore</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
