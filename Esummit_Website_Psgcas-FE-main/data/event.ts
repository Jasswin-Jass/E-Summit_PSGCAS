import { Speaker, AgendaItem, TicketTier, Sponsor, FAQItem } from '../types/event';
import { eventsData } from './events';
import { passesData } from './passes';
import { scheduleData } from './schedule';
import { allPartners } from './sponsors';
import { faqData } from './faq';

export { eventsData } from './events';
export { passesData, passComparisonMatrix } from './passes';
export { scheduleData } from './schedule';
export { allPartners, institutionalPartners, commercialSponsors } from './sponsors';
export { faqData } from './faq';
export { contactDirectory, summitVenueInfo } from './contact';

// Backward compatibility
export const speakersData: Speaker[] = [];
export const dummySpeakers: Speaker[] = [];
export const dummyAgenda: AgendaItem[] = scheduleData;
export const dummyTickets: TicketTier[] = passesData;
export const dummySponsors: Sponsor[] = allPartners as unknown as Sponsor[];
export const dummyFaqs: FAQItem[] = faqData;
