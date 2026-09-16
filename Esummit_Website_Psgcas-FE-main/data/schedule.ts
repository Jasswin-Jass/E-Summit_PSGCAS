import { ScheduleItem } from '../types/event';
import {
  REGISTRATION_URL_ELAMPRENEUR,
  REGISTRATION_URL_COPYRIGHTS_TRADEMARK,
  REGISTRATION_URL_FINTECH_HACKATHON,
  REGISTRATION_URL_TECHKATHON,
  REGISTRATION_URL_DIGITAL_TOOLS,
  REGISTRATION_URL_BID_BIZZ,
  REGISTRATION_URL_CASEQUEST,
  REGISTRATION_URL_ISUMMIT,
  REGISTRATION_URL_PSG_CASPRENEURS,
  REGISTRATION_URL_ALL_PASSES
} from './events';

export const scheduleData: ScheduleItem[] = [
  // --------------------------------------------------------------------------
  // DAY 1: 28 SEPTEMBER 2026 (MONDAY)
  // Pre-Summit / Competitions / Workshops
  // --------------------------------------------------------------------------
  {
    id: 's1-elampreneur',
    time: '8:30 AM – 3:30 PM',
    title: "Elampreneur'26 (Regional School Innovation Competitions)",
    description: "Featuring Shark Talk (Idea Presentation), Model Mania (Prototypes), and Doodlix (Art) with ₹30,000 in cash prizes, certificates, and medals.",
    venue: 'GRD Auditorium, PSGCAS',
    category: 'Competition',
    day: 1,
    eventSlug: 'elampreneurs-2026',
    registrationStatus: 'open',
    registrationLink: REGISTRATION_URL_ELAMPRENEUR
  },
  {
    id: 's1-copyrights',
    time: '9:30 AM',
    title: 'Copyrights & Trademark Workshop',
    description: 'Empowering Innovators with Intellectual Property Rights. Specialized IPR clinic with live filing guidance, certification, and complimentary lunch.',
    venue: 'Kaveri Hall, PSGCAS',
    category: 'Workshop',
    day: 1,
    eventSlug: 'copyright-trademark-workshop',
    registrationStatus: 'open',
    registrationLink: REGISTRATION_URL_COPYRIGHTS_TRADEMARK
  },
  {
    id: 's1-presummit-orientation',
    time: 'Day 1 Track',
    title: 'Pre-Summit Briefing & Delegate Orientation',
    description: 'Welcome briefing by Centre for Innovation Incubation & Entrepreneurship (CII&E) leadership and orientation for collegiate delegates.',
    venue: 'PSGCAS Campus',
    category: 'Orientation',
    day: 1,
    registrationStatus: 'open_for_all'
  },

  // --------------------------------------------------------------------------
  // DAY 2: 29 SEPTEMBER 2026 (TUESDAY)
  // Competitions / Hackathons / Workshops
  // --------------------------------------------------------------------------
  {
    id: 's2-techkathon',
    time: '8:00 AM',
    title: 'Techkathon 2K26 (National Level Inter-Collegiate Event)',
    description: 'Flagship engineering hackathon across 6 themes: AgriTech, GreenTech, Health Tech, Smart Cities, Cybersecurity, and AI & Automation with ₹40,000 prize pool.',
    venue: 'Kaveri Hall, PSGCAS',
    category: 'Hackathon',
    day: 2,
    eventSlug: 'techkathon-2026',
    registrationStatus: 'open',
    registrationLink: REGISTRATION_URL_TECHKATHON
  },
  {
    id: 's2-fintech',
    time: '8:30 AM',
    title: 'FinTech Hackathon 2026 (Business Idea Pitching)',
    description: 'National Level Business Idea Pitching Competition on "FinTech for Bharat" with ₹40,000 prize pool across 12 innovative financial themes.',
    venue: 'Podhigai Hall, PSGCAS',
    category: 'Hackathon',
    day: 2,
    eventSlug: 'fintech-hackathon',
    registrationStatus: 'open',
    registrationLink: REGISTRATION_URL_FINTECH_HACKATHON
  },
  {
    id: 's2-digital-tools',
    time: '9:00 AM',
    title: 'Digital Tools for Business & Entrepreneurship: Build, Market, Sell & Scale',
    description: 'National Level Workshop covering AI website building, digital marketing, lead generation, and e-commerce onboarding. Certificate, lunch, refreshments & ID cards provided.',
    venue: 'Q Block Computer Lab, PSGCAS',
    category: 'Workshop',
    day: 2,
    eventSlug: 'digital-tools',
    registrationStatus: 'open',
    registrationLink: REGISTRATION_URL_DIGITAL_TOOLS
  },

  // --------------------------------------------------------------------------
  // DAY 3: 30 SEPTEMBER 2026 (WEDNESDAY)
  // Finales / Entrepreneurship Carnival / Networking / Investors / Passes
  // --------------------------------------------------------------------------
  {
    id: 's3-carnival-expo',
    time: 'Day 3 Track',
    title: 'Entrepreneurship Carnival & Startup Expo',
    description: 'Vibrant marketplace, product showcase kiosks, interactive installations, and venture exhibitions across the PSGCAS campus.',
    venue: 'PSGCAS Campus Grounds',
    category: 'Carnival',
    day: 3,
    registrationStatus: 'pass_required',
    requiredPass: 'Silver',
    registrationLink: REGISTRATION_URL_ALL_PASSES
  },
  {
    id: 's3-techkathon-continuation',
    time: 'Day 3 Track',
    title: 'Techkathon 2K26 Continuation & Jury Evaluation',
    description: 'Final prototype demonstrations and architecture evaluations before the computational science jury.',
    venue: 'Kaveri Hall, PSGCAS',
    category: 'Hackathon',
    day: 3,
    eventSlug: 'techkathon-2026',
    registrationStatus: 'finalists_only'
  },
  {
    id: 's3-bid-bizz',
    time: 'Day 3 Track',
    title: 'Bid Bizz (Auction / Strategize / Build / Win)',
    description: 'High-octane business bidding simulation with equal virtual capital to acquire enterprise assets. Exclusively open to Gold and Platinum Pass holders.',
    venue: 'PSGCAS, Coimbatore',
    category: 'Competition',
    day: 3,
    eventSlug: 'bid-bizz',
    registrationStatus: 'pass_required',
    requiredPass: 'Gold or Platinum',
    registrationLink: REGISTRATION_URL_BID_BIZZ
  },
  {
    id: 's3-casequest',
    time: 'Day 3 Track',
    title: 'CaseQuest (Business Case Analysis Competition)',
    description: 'Solve, Strategize, Succeed. Multi-round business turnaround challenge for UG & PG students. Exclusively open to Gold and Platinum Pass holders.',
    venue: 'PSGCAS, Coimbatore',
    category: 'Competition',
    day: 3,
    eventSlug: 'casequest',
    registrationStatus: 'pass_required',
    requiredPass: 'Gold or Platinum',
    registrationLink: REGISTRATION_URL_CASEQUEST
  },
  {
    id: 's3-panel-discussion',
    time: 'Day 3 Track',
    title: 'Panel Discussion / Fire Chat Session & Speakers Highlight',
    description: 'Thought leadership panels and candid fire-chats with renowned founders, ecosystem builders, and industry luminaries.',
    venue: 'Main Auditorium, PSGCAS',
    category: 'Panel',
    day: 3,
    registrationStatus: 'pass_required',
    requiredPass: 'Silver',
    registrationLink: REGISTRATION_URL_ALL_PASSES
  },
  {
    id: 's3-networking-arena',
    time: 'Day 3 Track',
    title: 'Networking Arena',
    description: 'Dedicated networking zone connecting founders, aspiring entrepreneurs, developers, and industry leaders.',
    venue: 'PSGCAS Conclave Lounge',
    category: 'Networking',
    day: 3,
    registrationStatus: 'pass_required',
    requiredPass: 'Gold or Platinum',
    registrationLink: REGISTRATION_URL_ALL_PASSES
  },
  {
    id: 's3-isummit',
    time: 'Day 3 Track',
    title: 'Investors & Incubator Summit (I-Summit & Shark Tank / Pitch Arena)',
    description: 'Bridging startups, investors and opportunities. Exclusive dealrooms, pitch presentations, and angel evaluations unlocked via Platinum Pass.',
    venue: 'PSGCAS Executive Conclave',
    category: 'Summit',
    day: 3,
    eventSlug: 'investors-incubator-summit',
    registrationStatus: 'pass_required',
    requiredPass: 'Platinum',
    registrationLink: REGISTRATION_URL_ISUMMIT
  },
  {
    id: 's3-caspreneurs-ceremony',
    time: 'Day 3 Track',
    title: 'PSG Caspreneurs 2026 Book Release & ₹10,000 Seed Grants Announcement',
    description: 'Celebrating, supporting, and scaling student entrepreneurship. Release of the PSG Caspreneurs Book and awarding of ₹10,000 seed grants to the Top 7 startups.',
    venue: 'Main Auditorium, PSGCAS',
    category: 'Ceremony',
    day: 3,
    eventSlug: 'psg-caspreneurs-2026',
    registrationStatus: 'pass_required',
    requiredPass: 'Silver',
    registrationLink: REGISTRATION_URL_PSG_CASPRENEURS
  },
  {
    id: 's3-valedictory',
    time: 'Day 3 Track',
    title: 'Grand Finale & Prize Distribution Ceremony',
    description: 'Felicitating champions and prize winners of Techkathon 2K26, FinTech Hackathon, Elampreneur, CaseQuest, and Bid Bizz.',
    venue: 'Main Auditorium, PSGCAS',
    category: 'Valedictory',
    day: 3,
    registrationStatus: 'pass_required',
    requiredPass: 'Silver',
    registrationLink: REGISTRATION_URL_ALL_PASSES
  }
];
