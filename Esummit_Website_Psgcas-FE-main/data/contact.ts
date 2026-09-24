export interface ContactPerson {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  event: string;
}

export interface ContactGuideCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  contacts: ContactPerson[];
  actionLink?: {
    label: string;
    url: string;
  };
}

export const contactDirectory: ContactPerson[] = [
  // FinTech Hackathon 2026 (From official brochure)
  { name: 'Mr. Sivadheep R', role: 'Student Coordinator', phone: '9842790912', event: 'FinTech Hackathon' },
  { name: 'Mr. Loganatha P S', role: 'Student Coordinator', phone: '8220531005', event: 'FinTech Hackathon' },
  { name: 'Ms. Yogitha A', role: 'Student Coordinator', phone: '9788119419', event: 'FinTech Hackathon' },
  { name: 'Mr. Aneesh Ahamed', role: 'Student Coordinator', phone: '7012160930', event: 'FinTech Hackathon' },
  { name: 'Mr. Mohammed Safaan', role: 'Student Coordinator', phone: '7012469051', event: 'FinTech Hackathon' },
  { name: 'Mr. Abdul Salam', role: 'Student Coordinator', phone: '8825905159', event: 'FinTech Hackathon' },

  // Techkathon 2K26 (From official poster)
  { name: 'Deepak Francis A', role: 'Student Coordinator', phone: '+91 63792 46255', email: 'hackathon@psgcas.ac.in', event: 'Techkathon 2K26' },
  { name: 'Vignesh N', role: 'Student Coordinator', phone: '+91 73056 45039', email: 'hackathon@psgcas.ac.in', event: 'Techkathon 2K26' },
  { name: 'Shazitha S', role: 'Student Coordinator', phone: '+91 95789 90755', email: 'hackathon@psgcas.ac.in', event: 'Techkathon 2K26' },
  { name: 'Narmatha G I', role: 'Student Coordinator', phone: '+91 88708 87374', email: 'hackathon@psgcas.ac.in', event: 'Techkathon 2K26' },
  { name: 'Dhivyalakshmi S', role: 'Student Coordinator', phone: '+91 63699 98383', email: 'hackathon@psgcas.ac.in', event: 'Techkathon 2K26' },

  // Copyrights & Trademark Workshop (From official brochure)
  { name: 'Thayashram S', role: 'Student Coordinator, IPR Cell', phone: '+91 63831 17680', event: 'Copyrights & Trademark' },
  { name: 'Sowmya S', role: 'Student Coordinator, IPR Cell', phone: '+91 63800 51807', event: 'Copyrights & Trademark' },
  { name: 'Chairperson, IPR Cell', role: 'IPR Cell, PSGCAS', phone: '+91 63831 17680', event: 'Copyrights & Trademark' },

  // PSG Caspreneurs / IPR Cell (From official poster)
  { name: 'Thayashram S', role: 'Chairperson, IPR Cell', phone: '6383117680', event: 'PSG Caspreneurs' },
  { name: 'Sowmya S', role: 'Chairperson, IPR Cell', phone: '6380051807', event: 'PSG Caspreneurs' },

  // Elampreneur'26 (From official flyer)
  { name: 'Dr. Sujay Karthick', role: 'Faculty Coordinator', phone: '+91 98940 31295', email: 'elampreneur@gmail.com', event: "Elampreneur'26" },
  { name: 'Dr. Divya', role: 'Faculty Coordinator', phone: '+91 99652 99759', email: 'elampreneur@gmail.com', event: "Elampreneur'26" },

  // General Secretariat & Central Desk
  { name: 'E-Cell PSGCAS Secretariat', role: 'Centre for Innovation Incubation & Entrepreneurship', email: 'ecell@psgcas.ac.in', event: 'General E-Summit' },
];

export const contactGuideCategories: ContactGuideCategory[] = [
  {
    id: 'registration',
    title: 'EVENT REGISTRATION',
    icon: 'assignment_turned_in',
    description: 'Assistance with online registration links, Google Form issues, payment verification, and delegate confirmation.',
    contacts: [
      { name: 'E-Cell Registration Desk', role: 'Central Registration Enquiries', email: 'ecell@psgcas.ac.in', event: 'General' },
      { name: 'Techkathon Query Desk', role: 'Science & Tech Registrations', email: 'hackathon@psgcas.ac.in', event: 'Techkathon' },
    ],
    actionLink: {
      label: 'Open Central Registration Hub',
      url: 'https://forms.gle/7vpNQD3wbSWRMdDR6'
    }
  },
  {
    id: 'fintech',
    title: 'FINTECH HACKATHON',
    icon: 'payments',
    description: 'Pitch presentation templates, themes (AI finance, rural inclusion, DeFi), rules, and team reporting.',
    contacts: [
      { name: 'Mr. Sivadheep R', role: 'Student Coordinator', phone: '9842790912', event: 'FinTech Hackathon' },
      { name: 'Mr. Loganatha P S', role: 'Student Coordinator', phone: '8220531005', event: 'FinTech Hackathon' },
      { name: 'Ms. Yogitha A', role: 'Student Coordinator', phone: '9788119419', event: 'FinTech Hackathon' },
      { name: 'Mr. Aneesh Ahamed', role: 'Student Coordinator', phone: '7012160930', event: 'FinTech Hackathon' },
      { name: 'Mr. Mohammed Safaan', role: 'Student Coordinator', phone: '7012469051', event: 'FinTech Hackathon' },
      { name: 'Mr. Abdul Salam', role: 'Student Coordinator', phone: '8825905159', event: 'FinTech Hackathon' },
    ],
    actionLink: {
      label: 'Official FinTech Google Form',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSeFfbq7b70bSsQ2_VgjSMn7xdWlUxJT_xIhWK24blqwKnnDuw/viewform'
    }
  },
  {
    id: 'techkathon',
    title: 'TECHKATHON 2K26',
    icon: 'terminal',
    description: '8-Hour software & tech prototype hackathon, environment setups, problem statements, and Kaveri Hall reporting.',
    contacts: [
      { name: 'Deepak Francis A', role: 'Student Coordinator', phone: '+91 63792 46255', email: 'hackathon@psgcas.ac.in', event: 'Techkathon' },
      { name: 'Vignesh N', role: 'Student Coordinator', phone: '+91 73056 45039', email: 'hackathon@psgcas.ac.in', event: 'Techkathon' },
      { name: 'Shazitha S', role: 'Student Coordinator', phone: '+91 95789 90755', email: 'hackathon@psgcas.ac.in', event: 'Techkathon' },
      { name: 'Narmatha G I', role: 'Student Coordinator', phone: '+91 88708 87374', email: 'hackathon@psgcas.ac.in', event: 'Techkathon' },
      { name: 'Dhivyalakshmi S', role: 'Student Coordinator', phone: '+91 63699 98383', email: 'hackathon@psgcas.ac.in', event: 'Techkathon' },
    ],
    actionLink: {
      label: 'Techkathon Portal',
      url: 'https://psghackathon.netlify.app/'
    }
  },
  {
    id: 'workshops',
    title: 'WORKSHOPS & IPR',
    icon: 'school',
    description: 'Digital Tools for Business Workshop (29 Sep, Q Block) and Copyrights & Trademark Masterclass (28 Sep).',
    contacts: [
      { name: 'Thayashram S', role: 'Chairperson, IPR Cell', phone: '+91 63831 17680', event: 'IPR Cell PSGCAS' },
      { name: 'Sowmya S', role: 'Chairperson, IPR Cell', phone: '+91 63800 51807', event: 'IPR Cell PSGCAS' },
    ],
    actionLink: {
      label: 'Digital Tools Workshop Form',
      url: 'https://forms.gle/eex2KiAkAhSUFYd89'
    }
  },
  {
    id: 'passes',
    title: 'PASS & DAY 3 QUERIES',
    icon: 'confirmation_number',
    description: 'Silver Pass (₹99), Gold Pass (₹199), and Platinum Pass (₹299) benefits, Carnival entry, and competition access.',
    contacts: [
      { name: 'Passes Secretariat Desk', role: 'Day 3 Delegate Passes', email: 'ecell@psgcas.ac.in', event: 'Passes' },
    ],
    actionLink: {
      label: 'Official Passes Booking Form',
      url: 'https://forms.gle/7vpNQD3wbSWRMdDR6'
    }
  },
  {
    id: 'startups',
    title: 'STARTUP / INVESTOR QUERIES',
    icon: 'rocket_launch',
    description: 'PSG Caspreneurs ₹10,000 seed grants (Registrations Closed), Investor & Incubator Summit (I-Summit), angel networking, and incubation.',
    contacts: [
      { name: 'Thayashram S', role: 'Chairperson, IPR Cell (Caspreneurs)', phone: '6383117680', event: 'PSG Caspreneurs' },
      { name: 'Sowmya S', role: 'Chairperson, IPR Cell (Caspreneurs)', phone: '6380051807', event: 'PSG Caspreneurs' },
      { name: 'CII&E Incubation Desk', role: 'Centre for Innovation & Incubation', email: 'ecell@psgcas.ac.in', event: 'Incubation' },
    ],
    actionLink: {
      label: 'Caspreneurs Event Details (Closed)',
      url: '/en/events/psg-caspreneurs-2026'
    }
  },
  {
    id: 'general',
    title: 'GENERAL E-SUMMIT QUERIES',
    icon: 'info',
    description: 'Venue directions, campus reporting, schedule timings, school conclave (Elampreneur), and general assistance.',
    contacts: [
      { name: 'Dr. Sujay Karthick', role: 'Faculty Coordinator (School Conclave)', phone: '+91 98940 31295', email: 'elampreneur@gmail.com', event: "Elampreneur'26" },
      { name: 'Dr. Divya', role: 'Faculty Coordinator (School Conclave)', phone: '+91 99652 99759', email: 'elampreneur@gmail.com', event: "Elampreneur'26" },
      { name: 'Central Secretariat', role: 'E-Summit Desk, PSGCAS', email: 'ecell@psgcas.ac.in', event: 'Central' },
    ],
  },
];

export const summitVenueInfo = {
  institution: 'PSG College of Arts & Science',
  address: 'Civil Aerodrome Post, Avinashi Road, Peelamedu, Coimbatore – 641 014, Tamil Nadu, India',
  generalEmail: 'ecell@psgcas.ac.in',
  landmark: 'Adjacent to Coimbatore International Airport Road (Peelamedu)',
  dates: '28, 29 & 30 September 2026',
  googleMapsUrl: 'https://maps.google.com/?q=PSG+College+of+Arts+and+Science+Coimbatore'
};
