'use client';

import { useState, useEffect } from 'react';
import { REGISTRATION_URL_COMMON_PASS } from '@/data/passes';

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [trackName, setTrackName] = useState('');

  useEffect(() => {
    const handleOpen = (e: any) => {
      setTrackName(e.detail || '');
      setIsOpen(true);
    };
    window.addEventListener('openRegistration', handleOpen);
    return () => window.removeEventListener('openRegistration', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#001634]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-secondary-container/30">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="flex flex-col gap-4 text-center items-center">
          <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 text-on-secondary-container flex items-center justify-center border border-secondary/30">
            <span className="material-symbols-outlined text-3xl text-secondary">
              confirmation_number
            </span>
          </div>

          <div>
            <span className="font-label-sm text-xs text-secondary uppercase tracking-widest font-extrabold">
              PSGCAS E-SUMMIT 2026 OFFICIAL PORTAL
            </span>
            <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-primary pt-1">
              {trackName ? `Registration: ${trackName}` : 'Delegate Pass Registration'}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            All summit delegates and pass-holders must register in advance through the official verified registration form. Spot registrations on the day of the event are strictly prohibited.
          </p>

          <div className="w-full p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-left text-xs space-y-1.5">
            <p className="font-bold flex items-center gap-1.5 text-amber-950">
              <span className="material-symbols-outlined text-[16px] text-amber-700">verified</span>
              <span>Important Delegate Instructions:</span>
            </p>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-amber-900">
              <li>Carry your valid School / College Photo ID card to the venue.</li>
              <li>Official registration is processed exclusively via Google Forms.</li>
              <li>Passes will be verified at the reporting desks at PSGCAS.</li>
            </ul>
          </div>

          <a
            href={REGISTRATION_URL_COMMON_PASS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container via-amber-400 to-secondary text-on-secondary-container font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Official Registration Form</span>
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="text-xs text-gray-500 hover:text-primary transition-colors font-semibold"
          >
            Return to Website
          </button>
        </div>
      </div>
    </div>
  );
}
