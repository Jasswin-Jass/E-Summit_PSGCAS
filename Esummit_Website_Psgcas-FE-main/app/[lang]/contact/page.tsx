import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Executive Desk & Coordinators | PSGCAS E-Summit 2026',
  description: 'Direct contact details for student leads, faculty convenors, and secretariat desk of PSGCAS E-Summit 2026.',
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#001634] text-white py-12 sm:py-16 border-b border-secondary-container/30 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10 flex flex-col gap-3">
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-extrabold">
            INSTITUTIONAL DIRECTORY & SECRETARIAT
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Executive Desk & Coordinators
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Need assistance with event regulations, team submissions, or visiting PSGCAS Coimbatore? Connect directly with our event coordinators below.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Contact Section */}
      <ContactSection lang={lang} showHeader={false} />
    </div>
  );
}
