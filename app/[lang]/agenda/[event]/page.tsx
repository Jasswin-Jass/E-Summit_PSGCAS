import { redirect } from 'next/navigation';
import { getEventBySlug } from '@/data/events';

export default async function AgendaEventPage({
  params,
}: {
  params: Promise<{ event: string; lang: string }>;
}) {
  const { event, lang } = await params;
  const found = getEventBySlug(event);
  if (found) {
    redirect(`/${lang}/events/${found.slug}`);
  }
  redirect(`/${lang}/agenda`);
}
