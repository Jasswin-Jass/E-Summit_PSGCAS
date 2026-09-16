import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import EventsExplorer from '@/components/sections/EventsExplorer';
import TimelineSection from '@/components/sections/TimelineSection';
import PassesSection from '@/components/sections/PassesSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Immersive Hero with Interactive Background, Countdown, Badges & CTAs */}
      <Hero lang={lang} />

      {/* 2. Institutional About, Vision & 3 Pillars (Ideate, Innovate, Impact) */}
      <About lang={lang} />

      {/* 3. Comprehensive Dynamic Events Explorer with Day Tabs & Category Filters */}
      <EventsExplorer lang={lang} />

      {/* 4. Complete 3-Day Schedule & Timeline with Day 3 Pass Indicators */}
      <TimelineSection lang={lang} />

      {/* 5. Day 3 Summit Passes (Silver, Gold, Platinum) & Feature Comparison Matrix */}
      <PassesSection lang={lang} showComparisonTable={true} />

      {/* 6. Institutional Partners & Centenary Ecosystem */}
      <EcosystemSection />

      {/* 7. Interactive FAQs with Search & Category Filters */}
      <FAQSection lang={lang} />

      {/* 8. Coordinator Directory, Campus Venue & Contact Guide */}
      <ContactSection lang={lang} />
    </div>
  );
}
