'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  compact?: boolean;
}

export default function CountdownTimer({ compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isLive: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // E-Summit 2026 Target: 28 September 2026 at 09:00:00 IST
    const targetDate = new Date('2026-09-28T09:00:00+05:30').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isLive: false
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="h-24 w-full flex items-center justify-center">
        <span className="text-secondary-container text-sm font-semibold tracking-wider">Syncing Countdown...</span>
      </div>
    );
  }

  if (timeLeft.isLive) {
    return (
      <div className="w-full p-space-md rounded-xl bg-gradient-to-r from-secondary-container/20 to-secondary/30 border border-secondary-container/40 flex items-center justify-center gap-space-sm">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-container"></span>
        </span>
        <span className="font-headline-sm text-secondary-container font-extrabold uppercase tracking-widest text-center">
          ● EVENT LIVE — WELCOME TO E-SUMMIT '26
        </span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-container/90 border border-secondary-container/30 text-surface-container-lowest text-xs font-semibold">
        <span className="text-secondary-container font-bold">{timeLeft.days}d</span>
        <span>:</span>
        <span className="text-secondary-container font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
        <span>:</span>
        <span className="text-secondary-container font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
        <span>:</span>
        <span className="text-secondary font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl bg-surface-container-lowest/5 backdrop-blur-md border border-surface-container-lowest/15 p-space-md shadow-2xl">
      <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-lowest/10 mb-space-sm">
        <div className="flex items-center gap-space-2xs text-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
          <span className="material-symbols-outlined text-[18px]">timer</span>
          <span>Summit Inauguration In</span>
        </div>
        <span className="font-label-sm text-[11px] text-primary-fixed-dim uppercase tracking-wider">
          28 Sep 2026 • 09:00 AM IST
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-space-sm text-center">
        <div className="flex flex-col p-space-xs sm:p-space-sm rounded-lg bg-primary-container/85 border border-white/5 shadow-inner">
          <span className="font-headline-lg text-2xl sm:text-headline-lg text-secondary-container font-extrabold tracking-tight">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="font-label-sm text-[10px] uppercase text-primary-fixed-dim tracking-widest font-semibold mt-0.5">
            Days
          </span>
        </div>
        <div className="flex flex-col p-space-xs sm:p-space-sm rounded-lg bg-primary-container/85 border border-white/5 shadow-inner">
          <span className="font-headline-lg text-2xl sm:text-headline-lg text-secondary-container font-extrabold tracking-tight">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="font-label-sm text-[10px] uppercase text-primary-fixed-dim tracking-widest font-semibold mt-0.5">
            Hours
          </span>
        </div>
        <div className="flex flex-col p-space-xs sm:p-space-sm rounded-lg bg-primary-container/85 border border-white/5 shadow-inner">
          <span className="font-headline-lg text-2xl sm:text-headline-lg text-secondary-container font-extrabold tracking-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="font-label-sm text-[10px] uppercase text-primary-fixed-dim tracking-widest font-semibold mt-0.5">
            Mins
          </span>
        </div>
        <div className="flex flex-col p-space-xs sm:p-space-sm rounded-lg bg-primary-container/85 border border-white/5 shadow-inner">
          <span className="font-headline-lg text-2xl sm:text-headline-lg text-secondary-fixed font-extrabold tracking-tight">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="font-label-sm text-[10px] uppercase text-secondary-container tracking-widest font-semibold mt-0.5">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
}
