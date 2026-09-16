import { PassTier } from '../types/event';

// ============================================================================
// COMMON PASS REGISTRATION DESTINATION
// Single official registration form for Silver, Gold, and Platinum
// ============================================================================
export const REGISTRATION_URL_COMMON_PASS = "https://forms.gle/7vpNQD3wbSWRMdDR6";

// Legacy export aliases for backwards compatibility
export const GOOGLE_FORM_SILVER_PASS = REGISTRATION_URL_COMMON_PASS;
export const GOOGLE_FORM_GOLD_PASS = REGISTRATION_URL_COMMON_PASS;
export const GOOGLE_FORM_PLATINUM_PASS = REGISTRATION_URL_COMMON_PASS;

export const passesData: PassTier[] = [
  {
    id: 'silver',
    name: 'SILVER PASS',
    price: 99,
    formattedPrice: '₹99',
    tagline: 'EXPLORE',
    subTagline: 'BEGIN YOUR E-JOURNEY',
    badge: 'Starter Access Tier',
    themeColor: '#718096',
    gradientClass: 'from-slate-200 via-gray-300 to-slate-400',
    borderClass: 'border-slate-300',
    cardImage: '/images/passes/silver-pass-card.png',
    eligibilityDescription: 'General Day 3 access & Silver benefits. Note: Not eligible for CaseQuest, Bid Bizz, or Investor & Incubator Summit.',
    benefits: [
      'Program Kit (Including Goodies)',
      'Panel Discussion (Fire Chat Session)',
      'Entrepreneurship Carnival Access',
      'E-Summit Certificate'
    ],
    registrationLink: REGISTRATION_URL_COMMON_PASS
  },
  {
    id: 'gold',
    name: 'GOLD PASS',
    price: 199,
    formattedPrice: '₹199',
    tagline: 'ENGAGE',
    subTagline: 'CONNECT. COMPETE. CREATE.',
    badge: 'Most Popular Choice',
    themeColor: '#D4AF37',
    gradientClass: 'from-amber-200 via-yellow-400 to-amber-500',
    borderClass: 'border-amber-400',
    cardImage: '/images/passes/gold-pass-card.png',
    eligibilityDescription: 'Eligible for CaseQuest and Bid Bizz competitions. Includes Networking Arena and Speakers Highlight.',
    benefits: [
      'Entrepreneurship Carnival Access',
      'E-Summit Certificate',
      'Program Kit (Including Goodies)',
      'Networking Arena',
      'Speakers Highlight',
      'Case Study Competition',
      'Business Auction'
    ],
    exclusivePerks: [
      'Networking Arena',
      'Speakers Highlight',
      'Case Study Competition (CaseQuest)',
      'Business Auction (Bid Bizz)'
    ],
    popular: true,
    registrationLink: REGISTRATION_URL_COMMON_PASS
  },
  {
    id: 'platinum',
    name: 'PLATINUM PASS',
    price: 299,
    formattedPrice: '₹299',
    tagline: 'EXPERIENCE',
    subTagline: 'THE COMPLETE SUMMIT',
    badge: 'All-Inclusive VIP Tier',
    themeColor: '#1E293B',
    gradientClass: 'from-sky-300 via-slate-700 to-slate-900',
    borderClass: 'border-sky-400',
    cardImage: '/images/passes/platinum-pass-card.png',
    eligibilityDescription: 'All-Inclusive VIP Tier. Unlocks CaseQuest, Bid Bizz, and the flagship Investor & Incubator Summit.',
    benefits: [
      'Entrepreneurship Carnival Access',
      'E-Summit Certificate',
      'Program Kit + Goodies',
      'Networking Arena',
      'Panel Discussion (Fire Chat Session)',
      'Speakers Highlight',
      'Case Study Competition',
      'Business Auction',
      'Investor & Incubator Summit'
    ],
    exclusivePerks: [
      'Investor & Incubator Summit (I-Summit)',
      'Shark Tank / Pitch Arena',
      'Startup Expo Access',
      'Direct VC & Incubator Dealroom Interaction'
    ],
    registrationLink: REGISTRATION_URL_COMMON_PASS
  }
];

export interface PassComparisonFeature {
  feature: string;
  category: string;
  silver: boolean;
  gold: boolean;
  platinum: boolean;
  highlight?: boolean;
}

export const passComparisonMatrix: PassComparisonFeature[] = [
  { feature: 'Entrepreneurship Carnival Access', category: 'General Access', silver: true, gold: true, platinum: true },
  { feature: 'Official E-Summit Certificate', category: 'General Access', silver: true, gold: true, platinum: true },
  { feature: 'Program Kit including Goodies', category: 'General Access', silver: true, gold: true, platinum: true },
  { feature: 'Panel Discussion / Fire Chat Session', category: 'Knowledge & Insights', silver: true, gold: true, platinum: true },
  { feature: 'Networking Arena Entry', category: 'Networking', silver: false, gold: true, platinum: true },
  { feature: 'Speakers Highlight Sessions', category: 'Knowledge & Insights', silver: false, gold: true, platinum: true },
  { feature: 'Case Study Competition (CaseQuest Eligibility)', category: 'Competitions', silver: false, gold: true, platinum: true, highlight: true },
  { feature: 'Business Auction (Bid Bizz Eligibility)', category: 'Competitions', silver: false, gold: true, platinum: true, highlight: true },
  { feature: 'Investor & Incubator Summit Access', category: 'VIP & Investor Conclave', silver: false, gold: false, platinum: true, highlight: true },
  { feature: 'Shark Tank / Pitch Arena Entry', category: 'VIP & Investor Conclave', silver: false, gold: false, platinum: true, highlight: true },
  { feature: 'Startup Expo Arena Access', category: 'VIP & Investor Conclave', silver: false, gold: false, platinum: true },
  { feature: 'Direct Dealroom & Investor Interaction', category: 'VIP & Investor Conclave', silver: false, gold: false, platinum: true }
];
