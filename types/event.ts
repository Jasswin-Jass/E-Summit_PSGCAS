export type EventCategory = 'Hackathon' | 'Competition' | 'Workshop' | 'Summit' | 'Exhibition';

export interface EventCoordinator {
  name: string;
  phone?: string;
  email?: string;
  role?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  day: 1 | 2 | 3;
  dateString: string; // e.g., '28 September 2026'
  dayOfWeek: string;  // e.g., 'Monday'
  time: string;       // e.g., '09:30 AM'
  venue: string;      // e.g., 'Kavery Hall, PSGCAS'
  category: EventCategory;
  posterUrl: string;
  additionalPosters?: string[];
  eligibility: string;
  teamSize?: string;
  prizePool?: string;
  registrationFee?: string;
  registrationDeadline?: string;
  rules?: string[];
  themes?: string[];
  perks?: string[];
  highlights?: string[];
  subEvents?: {
    name: string;
    target: string;
    details: string;
  }[];
  coordinators?: EventCoordinator[];
  registrationLink: string;
  isDay3PassEvent?: boolean;
  requiredPassTier?: 'Silver' | 'Gold' | 'Platinum' | 'Gold or Platinum';
  externalResourceUrl?: string;
  isRegistrationClosed?: boolean;
  closedMessage?: string;
}

export interface PassTier {
  id: 'silver' | 'gold' | 'platinum';
  name: string;
  price: number;
  formattedPrice: string;
  tagline: string;
  subTagline?: string;
  badge: string;
  themeColor: string;
  gradientClass: string;
  borderClass: string;
  cardImage: string;
  benefits: string[];
  exclusivePerks?: string[];
  registrationLink: string;
  popular?: boolean;
  eligibilityDescription?: string;
}

export interface Speaker {
  id: string;
  slug: string;
  name: string;
  role: string;
  organization: string;
  sessionTitle: string;
  day?: 1 | 2 | 3;
  time?: string;
  venue?: string;
  imageUrl?: string;
  bio?: string;
  isPlaceholder: boolean;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  venue: string;
  category: string;
  day: 1 | 2 | 3;
  eventSlug?: string;
  registrationStatus: 'open' | 'pass_required' | 'finalists_only' | 'open_for_all' | 'closed';
  requiredPass?: 'Silver' | 'Gold' | 'Platinum' | 'Gold or Platinum';
  registrationLink?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  category: 'Institutional' | 'Ecosystem' | 'Supporting' | 'Corporate' | 'PSG Institutional Ecosystem' | 'Innovation & Entrepreneurship Ecosystem';
  logoUrl: string;
  websiteUrl?: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Registration & Passes' | 'Events & Competitions' | 'General & Venue';
  question: string;
  answer: string;
}

// Backward compatibility aliases if needed
export type AgendaItem = ScheduleItem;
export type TicketTier = PassTier;
