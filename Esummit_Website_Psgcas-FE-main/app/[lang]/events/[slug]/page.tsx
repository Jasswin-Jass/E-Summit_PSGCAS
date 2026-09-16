import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { eventsData, getEventBySlug } from '@/data/events';
import { passesData } from '@/data/passes';
import EventDetailClient from './EventDetailClient';

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { slug: string; lang: string }[] = [];
  const langs = ['en'];
  for (const lang of langs) {
    for (const event of eventsData) {
      params.push({ lang, slug: event.slug });
      if (event.id !== event.slug) {
        params.push({ lang, slug: event.id });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return {
      title: 'Event Not Found | PSGCAS E-Summit 2026',
    };
  }

  return {
    title: `${event.title} | PSGCAS E-Summit 2026`,
    description: event.description,
    openGraph: {
      title: `${event.title} — PSGCAS E-Summit 2026`,
      description: event.description,
      images: [event.posterUrl],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  // Related events from same day or other days
  const relatedEvents = eventsData
    .filter((e) => e.id !== event.id && (e.day === event.day || e.category === event.category))
    .slice(0, 3);

  // If this is Day 3 pass event, grab the matching pass tier info
  const passTierInfo = event.isDay3PassEvent
    ? passesData.find((p) =>
        event.requiredPassTier?.toLowerCase().includes(p.id.toLowerCase())
      ) || passesData[2] // Platinum fallback
    : null;

  return (
    <EventDetailClient
      event={event}
      lang={lang}
      relatedEvents={relatedEvents}
      passTierInfo={passTierInfo}
    />
  );
}
