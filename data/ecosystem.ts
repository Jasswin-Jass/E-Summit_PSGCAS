export interface EcosystemOrganization {
  id: string;
  name: string;
  fullName?: string;
  role: string;
  category: 'PSG Institutional Ecosystem' | 'Innovation & Entrepreneurship Ecosystem';
  logoUrl: string;
  websiteUrl?: string;
}

// Group 1: PSG Institutional Ecosystem
export const psgInstitutionalEcosystem: EcosystemOrganization[] = [
  {
    id: 'psg-trust',
    name: 'PSG & Sons\' Charities',
    fullName: 'PSG & Sons\' Charities Trust',
    role: 'Pioneering Educational & Industrial Trust (Est. 1926)',
    category: 'PSG Institutional Ecosystem',
    logoUrl: '/images/logos/psgcas-logo.png',
    websiteUrl: 'https://www.psgcas.ac.in',
  },
  {
    id: 'psgcas',
    name: 'PSG College of Arts & Science',
    fullName: 'PSG College of Arts & Science (Autonomous)',
    role: 'Premier Host Institution (Since 1947)',
    category: 'PSG Institutional Ecosystem',
    logoUrl: '/images/logos/psgcas-logo.png',
    websiteUrl: 'https://www.psgcas.ac.in',
  },
  {
    id: 'psg-centenary',
    name: 'PSG Centenary Celebrations',
    fullName: 'PSG 100 Years Centenary Celebrations (1926–2026)',
    role: 'A Century of Educational & Entrepreneurial Excellence',
    category: 'PSG Institutional Ecosystem',
    logoUrl: '/images/logos/psg-centenary-logo.jpeg',
    websiteUrl: 'https://www.psgcas.ac.in',
  },
];

// Group 2: Innovation & Entrepreneurship Ecosystem
export const innovationEcosystem: EcosystemOrganization[] = [
  {
    id: 'iic',
    name: 'Institution\'s Innovation Council',
    fullName: 'Institution\'s Innovation Council (Ministry of Education, Govt. of India)',
    role: 'National Innovation Initiative',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/iic-logo.png',
    websiteUrl: 'https://mic.gov.in',
  },
  {
    id: 'ecell-psgcas',
    name: 'E-CELL PSGCAS',
    fullName: 'Centre for Innovation Incubation & Entrepreneurship (CII&E)',
    role: 'Host Entrepreneurship & Incubation Body',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/ecell-psgcas-logo.jpeg',
    websiteUrl: 'https://www.psgcas.ac.in',
  },
  {
    id: 'startuptn',
    name: 'StartupTN',
    fullName: 'Tamil Nadu Startup and Innovation Mission (Government of Tamil Nadu)',
    role: 'State Startup Mission & Venture Ecosystem',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/startuptn-logo.png',
    websiteUrl: 'https://startuptn.in',
  },
  {
    id: 'ediitn',
    name: 'EDII-TN',
    fullName: 'Entrepreneurship Development and Innovation Institute (Govt. of Tamil Nadu)',
    role: 'State Innovation & Entrepreneurship Body',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/ediitn-logo.jpeg',
    websiteUrl: 'https://editn.in',
  },
  {
    id: 'wadhwani-foundation',
    name: 'Wadhwani Foundation',
    fullName: 'Wadhwani Foundation',
    role: 'Global Entrepreneurship & Venture Skilling Partner',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/wadhwani-foundation-logo.png',
    websiteUrl: 'https://www.wadhwanifoundation.org',
  },
  {
    id: 'i2i-foundation',
    name: 'Ideas to Impact Foundation',
    fullName: 'Ideas to Impact Foundation',
    role: 'Innovation & Social Impact Accelerator',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/i2i-foundation-logo.jpeg',
    websiteUrl: 'https://www.psgcas.ac.in',
  },
  {
    id: 'ficci-flo',
    name: 'FICCI FLO',
    fullName: 'FICCI Ladies Organization',
    role: 'National Women Entrepreneurship Forum',
    category: 'Innovation & Entrepreneurship Ecosystem',
    logoUrl: '/images/logos/ficci-flo-logo.png',
    websiteUrl: 'https://www.ficciflo.com',
  },
];

export const allEcosystemOrganizations: EcosystemOrganization[] = [
  ...psgInstitutionalEcosystem,
  ...innovationEcosystem,
];
