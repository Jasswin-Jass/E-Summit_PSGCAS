import { EventItem } from '../types/event';

// ============================================================================
// OFFICIAL EVENT REGISTRATION DESTINATIONS
// Exact URLs from official summit posters and materials
// ============================================================================
export const REGISTRATION_URL_ELAMPRENEUR = "https://forms.gle/eFLXjMyCi28LgnPP8";
export const REGISTRATION_URL_COPYRIGHTS_TRADEMARK = "https://forms.gle/qUwrGBKCST9mjKRb8";
export const REGISTRATION_URL_FINTECH_HACKATHON = "https://docs.google.com/forms/d/e/1FAIpQLSeFfbq7b70bSsQ2_VgjSMn7xdWlUxJT_xIhWK24blqwKnnDuw/viewform";
export const REGISTRATION_URL_TECHKATHON = "https://psghackathon.netlify.app/";
export const REGISTRATION_URL_DIGITAL_TOOLS = "https://forms.gle/eex2KiAkAhSUFYd89";
export const REGISTRATION_URL_PSG_CASPRENEURS = "https://scan.page/P8s4fe";
export const REGISTRATION_URL_BID_BIZZ = "https://forms.gle/7vpNQD3wbSWRMdDR6";
export const REGISTRATION_URL_CASEQUEST = "https://forms.gle/7vpNQD3wbSWRMdDR6";
export const REGISTRATION_URL_ISUMMIT = "https://forms.gle/7vpNQD3wbSWRMdDR6";
export const REGISTRATION_URL_ALL_PASSES = "https://forms.gle/7vpNQD3wbSWRMdDR6";
export const REGISTRATION_URL_IPO_STOCKS_POSTER = "https://docs.google.com/forms/d/e/1FAIpQLSdIfJzAbubRQqKHZrwkPVu2DEczR3WCyl9yS_01EyTDaevZKA/viewform";

// Legacy aliases for backwards compatibility
export const GOOGLE_FORM_COPYRIGHTS_TRADEMARK = REGISTRATION_URL_COPYRIGHTS_TRADEMARK;
export const GOOGLE_FORM_ELAMPRENEUR = REGISTRATION_URL_ELAMPRENEUR;
export const GOOGLE_FORM_FINTECH_HACKATHON = REGISTRATION_URL_FINTECH_HACKATHON;
export const GOOGLE_FORM_TECHKATHON = REGISTRATION_URL_TECHKATHON;
export const GOOGLE_FORM_DIGITAL_TOOLS = REGISTRATION_URL_DIGITAL_TOOLS;
export const GOOGLE_FORM_CASPRENEURS = REGISTRATION_URL_PSG_CASPRENEURS;
export const GOOGLE_FORM_BID_BIZZ = REGISTRATION_URL_BID_BIZZ;
export const GOOGLE_FORM_ISUMMIT = REGISTRATION_URL_ISUMMIT;
export const GOOGLE_FORM_IPO_STOCKS_POSTER = REGISTRATION_URL_IPO_STOCKS_POSTER;

// ============================================================================
// COMPREHENSIVE EVENTS REGISTRY — PSGCAS E-SUMMIT 2026
// ============================================================================
export const eventsData: EventItem[] = [
  // --------------------------------------------------------------------------
  // DAY 1: 28 SEPTEMBER 2026 (MONDAY)
  // Pre-Summit / Competitions / Workshops
  // --------------------------------------------------------------------------
  {
    id: 'elampreneurs-2026',
    slug: 'elampreneurs-2026',
    title: "Elampreneur'26",
    subtitle: 'Regional Level School Innovation Competitions',
    tagline: 'Fostering the Next Generation of Visionary Innovators',
    description: 'Premier regional-level school innovation competitions featuring Shark Talk idea presentation, Model Mania prototypes, and Doodlix art competition.',
    longDescription: "Elampreneur'26 provides school students with a High Impact Innovation Platform to express breakthrough ideas and prototypes for real-world challenges across technology, sustainable development, and climate action. Organized by Centre for Innovation Incubation & Entrepreneurship (CII&E) in association with IIC and E-Cell PSGCAS.",
    day: 1,
    dateString: '28 September 2026',
    dayOfWeek: 'Monday',
    time: '8:30 AM – 3:30 PM',
    venue: 'GRD Auditorium, PSGCAS, Coimbatore',
    category: 'Competition',
    posterUrl: '/images/events/elampreneurs-2026.png',
    additionalPosters: [
      '/images/events/elampreneurs_p2.png',
      '/images/events/elampreneurs_p3.png'
    ],
    eligibility: 'School students from Grade VI to Grade XII (Faculty Mentor must compulsorily accompany).',
    prizePool: 'Cash Prize ₹30,000 + Certificates & Medals',
    perks: [
      'Cash Prize Pool of ₹30,000',
      'Certificates and Medals for all participants',
      'Complimentary Lunch and Refreshments for participants & accompanying staff'
    ],
    rules: [
      'Participants are advised to report to the Venue by 8:30 AM.',
      'Faculty Mentor must compulsorily accompany the students.',
      'School ID Card is mandatory for all participants.',
      'Smartphones and other tech gadgets are strictly not allowed during event participation.',
      'Participation count is strictly limited to 300 members on a first-come, first-served basis.',
      'Decisions of the judges will be final and binding.'
    ],
    subEvents: [
      {
        name: 'Shark Talk (Idea Presentation)',
        target: 'Grade IX–XII • 2 members / team',
        details: 'Theme: Emerging Technologies in Problem Solving. Oral or Digital presentation (Max 3 minutes, Digital max 7 slides). Followed by Q&A with the jury panel.'
      },
      {
        name: 'Model Mania (Model / Prototype)',
        target: 'Grade VI–VIII & Grade IX–XII • 3 members / team',
        details: 'Theme: Sustainable Innovations for Climate Change. Working physical models or prototypes showcasing novel practical solutions.'
      },
      {
        name: 'Doodlix (Drawing / Art)',
        target: 'Grade VI–VIII • Individual Participation',
        details: 'Theme: Solutions for Sustainable Development Goals. Basic stationery (chart, pencil, eraser, scale) provided. Creative artwork communicating sustainability.'
      }
    ],
    coordinators: [
      { name: 'Dr. Sujay Karthick', phone: '+91 98940 31295', role: 'Faculty Coordinator' },
      { name: 'Dr. Divya', phone: '+91 99652 99759', role: 'Faculty Coordinator' },
      { name: 'Elampreneur Desk', email: 'elampreneur@gmail.com', role: 'Enquiry Desk' }
    ],
    registrationLink: REGISTRATION_URL_ELAMPRENEUR
  },
  {
    id: 'copyrights-trademark-workshop',
    slug: 'copyright-trademark-workshop',
    title: 'Copyrights & Trademark Workshop',
    subtitle: '1st Day of E-Summit — Empowering Innovators with Intellectual Property Rights',
    tagline: 'Empowering Innovators with Intellectual Property Rights',
    description: 'Specialized IPR masterclass offering practical guidance on copyright filing, brand trademarking, and legal protection for budding innovators and student ventures.',
    longDescription: 'Organized by Centre for Innovation Incubation & Entrepreneurship in association with Institution’s Innovation Council & E-Cell PSGCAS. Gain hands-on understanding of how to protect creative assets, file provisional trademarks, understand patent landscapes, and secure commercial brand identity.',
    day: 1,
    dateString: '28 September 2026',
    dayOfWeek: 'Monday',
    time: '9:30 AM',
    venue: 'Kaveri Hall, PSGCAS, Coimbatore',
    category: 'Workshop',
    posterUrl: '/images/events/copyrights-workshop.jpg',
    eligibility: 'Collegiate students, budding inventors, aspiring founders, and researchers.',
    teamSize: 'Individual Registration',
    prizePool: 'IPR Filing Guidance & Institutional Certification',
    perks: [
      'Official Certificate of Participation provided',
      'Complimentary Lunch & Refreshments provided',
      'Direct filing consultations with PSGCAS IPR Cell jurists'
    ],
    highlights: [
      'Live step-by-step trademark registration pathway',
      'IPR CELL PSGCAS one-on-one advisory',
      'Practical protection of digital and tangible software/inventions'
    ],
    coordinators: [
      { name: 'Thayashram S', phone: '+91 63831 17680', role: 'IPR Cell Coordinator' },
      { name: 'Sowmya S', phone: '+91 63800 51807', role: 'IPR Cell Coordinator' },
      { name: 'Chairperson, IPR Cell', role: 'IIC, PSGCAS' }
    ],
    registrationLink: REGISTRATION_URL_COPYRIGHTS_TRADEMARK
  },

  // --------------------------------------------------------------------------
  // DAY 2: 29 SEPTEMBER 2026 (TUESDAY)
  // Competitions / Hackathons / Workshops
  // --------------------------------------------------------------------------
  {
    id: 'fintech-hackathon',
    slug: 'fintech-hackathon',
    title: 'FinTech Hackathon 2026',
    subtitle: 'National Level Business Idea Pitching Competition',
    tagline: 'FinTech for Bharat: Innovating for an Inclusive, Intelligent & Secure Financial Future',
    description: 'National-level business idea pitching competition focusing on real-world financial challenges, AI financial intelligence, and financial inclusion across Bharat.',
    longDescription: 'Organized by Department of Applied Commerce in association with Institution’s Innovation Council & E-Cell PSGCAS. Brings together cross-disciplinary student squads from across India to pitch practical, secure, and inclusive FinTech solutions addressing Tier 2/3 markets and national financial architecture.',
    day: 2,
    dateString: '29 September 2026',
    dayOfWeek: 'Tuesday',
    time: '8:30 AM',
    venue: 'Podhigai Hall, PSGCAS, Coimbatore',
    category: 'Hackathon',
    posterUrl: '/images/events/fintech-hackathon.png',
    additionalPosters: ['/images/events/fintech_hackathon_p2.png'],
    eligibility: 'Students from Commerce, Management, Engineering, Computer Science, Finance, and allied disciplines.',
    teamSize: 'Student Teams (Valid College ID Card Required)',
    prizePool: '₹40,000 Prize Pool',
    registrationFee: '₹500 / team',
    registrationDeadline: '23 September 2026',
    perks: [
      'Cash Prize Pool of ₹40,000',
      'Exclusive Access of PLATINUM PASS for Winners',
      'Networking with FinTech venture leaders, bankers & investors',
      'Certificate of Participation, Program Kit & Goodies'
    ],
    rules: [
      'No spot registration permitted. Prior online registration mandatory.',
      'Registration deadline: 23 September 2026.',
      'Registration fee: ₹500 per team.',
      'Presentation format: 5 minutes pitch presentation + 2 minutes Q&A with judges.',
      'Pitch deck must be submitted strictly as per official PPT template.'
    ],
    themes: [
      'AI Powered Financial Intelligence',
      'Financial Inclusion & Accessibility',
      'DeFi & Blockchain',
      'FinTech Cybersecurity & Fraud Detection',
      'Wealth Tech and Investment Innovation',
      'RegTech & Compliance',
      'InsurTech',
      'Sustainable & Green Finance',
      'FinTech for Rural Communities',
      'Student & Youth Finance',
      'Women-Centred Financial Empowerment',
      'Other related fintech solutions'
    ],
    externalResourceUrl: 'https://docs.google.com/presentation/d/1_MolIR9hWXY6ZGd_wMkN_0OFnljDeNAD/edit?rtpof=true&sd=true&pli=1',
    coordinators: [
      { name: 'Mr. Sivadheep R', phone: '+91 98427 90912', role: 'Student Coordinator' },
      { name: 'Mr. Loganantha P S', phone: '+91 82205 31005', role: 'Student Coordinator' },
      { name: 'Ms. Yogitha A', phone: '+91 97881 19419', role: 'Student Coordinator' },
      { name: 'Mr. Aneesh Ahamed', phone: '+91 70121 60930', role: 'Student Coordinator' },
      { name: 'Mr. Mohammed Safaan', phone: '+91 70124 69051', role: 'Student Coordinator' },
      { name: 'Mr. Abdul Salam', phone: '+91 88259 05159', role: 'Student Coordinator' }
    ],
    registrationLink: REGISTRATION_URL_FINTECH_HACKATHON
  },
  {
    id: 'techkathon-2k26',
    slug: 'techkathon-2026',
    title: 'Techkathon 2K26',
    subtitle: 'National Level Inter-Collegiate Event',
    tagline: 'IMAGINE. INNOVATE. IMPLEMENT.',
    description: 'Flagship national-level engineering and computational hackathon where student squads architect and code prototypes across six critical technology domains.',
    longDescription: 'Organized by the School of Computational Sciences in association with Institution’s Innovation Council as part of E-Summit 2026 and PSG Centenary Celebrations. An intense challenge testing software architecture, prototype speed, and real-world problem solving.',
    day: 2,
    dateString: '29 & 30 September 2026',
    dayOfWeek: 'Tuesday & Wednesday',
    time: '8:00 AM',
    venue: 'Kaveri Hall, PSGCAS, Coimbatore',
    category: 'Hackathon',
    posterUrl: '/images/events/techkathon-2026.jpg',
    eligibility: 'Students strictly from Science & Technology streams.',
    teamSize: 'Minimum 3 & Maximum 4 members per team',
    prizePool: '₹40,000 Cash Prize Pool',
    themes: [
      'AgriTech & Smart Farming',
      'GreenTech & Sustainability',
      'Health Tech & Digital Healthcare',
      'Smart Cities & Intelligent Mobility',
      'Cybersecurity & Digital Trust',
      'AI, Automation & Future Technologies'
    ],
    perks: [
      'Cash Prize Pool of ₹40,000',
      'Certificate of Merit & Participation',
      'Incubation review with CII&E technical mentors',
      'Direct networking with engineering professionals'
    ],
    rules: [
      'Teams must consist of 3 to 4 members strictly from Science and Technology stream.',
      'Dates: 29th & 30th September 2026. Reporting time: 8:00 AM.',
      'Live prototype demonstration is required for evaluation rounds.',
      'Decision of the judges and technical jury is final.'
    ],
    externalResourceUrl: 'https://psghackathon.netlify.app',
    coordinators: [
      { name: 'Deepak Francis A', phone: '+91 63792 46255', role: 'Student Coordinator' },
      { name: 'Vignesh N', phone: '+91 73056 45039', role: 'Student Coordinator' },
      { name: 'Shazitha S', phone: '+91 95789 90755', role: 'Student Coordinator' },
      { name: 'Narmatha G I', phone: '+91 88708 87374', role: 'Student Coordinator' },
      { name: 'Dhivyalakshmi S', phone: '+91 63699 98383', role: 'Student Coordinator' },
      { name: 'Techkathon Secretariat', email: 'hackathon@psgcas.ac.in', role: 'Official Email' }
    ],
    registrationLink: REGISTRATION_URL_TECHKATHON
  },
  {
    id: 'digital-tools-for-business',
    slug: 'digital-tools',
    title: 'Digital Tools for Business & Entrepreneurship',
    subtitle: 'National Level Workshop: Build, Market, Sell & Scale',
    tagline: 'Digitize. Innovate. Earn.',
    description: 'Hands-on practical masterclass training founders and students to leverage AI website builders, marketing automation, e-commerce onboarding, and modern business tools.',
    longDescription: 'Organized by Centre for Innovation Incubation & Entrepreneurship in association with Institution’s Innovation Council & E-Cell PSGCAS. A complete practical playbook designed to help startups, aspiring entrepreneurs, and multidisciplinary students launch and scale ventures using state-of-the-art digital stacks without complex coding.',
    day: 2,
    dateString: '29 September 2026',
    dayOfWeek: 'Tuesday',
    time: '9:00 AM',
    venue: 'Q Block Computer Lab, PSGCAS, Coimbatore',
    category: 'Workshop',
    posterUrl: '/images/events/digital-tools.jpg',
    eligibility: 'Startups, aspiring entrepreneurs, students, and faculty members from various disciplines.',
    teamSize: 'Individual Workshop Delegate',
    prizePool: 'Digital Tools Toolkit & Institutional Certification',
    registrationDeadline: '23 September 2026',
    perks: [
      'Certificate of Participation provided',
      'Complimentary Lunch & Refreshments provided',
      'Official Summit ID Cards provided',
      'Curated Business Automation Toolkits & Templates'
    ],
    themes: [
      'Build and promote your business online',
      'AI-Powered Website Building',
      'Digital Marketing & Lead Generation Tools',
      'E-Commerce Onboarding & Selling Online',
      'Day-to-Day Operations & Accounting Tools',
      'Content Writing & Branding Tools'
    ],
    rules: [
      'Prior online registration mandatory via official Google Form.',
      'Last date to register: 23 September 2026.',
      'Reporting time: 9:00 AM at Q Block Computer Lab, PSGCAS.',
      'Hands-on lab access will be provisioned for participants.'
    ],
    registrationLink: REGISTRATION_URL_DIGITAL_TOOLS
  },
  {
    id: 'ipo-stocks-poster-presentation',
    slug: 'ipo-stocks-poster-presentation',
    title: 'National Level IPO & Stocks Poster Presentation Competition',
    subtitle: 'Organised by Department of Commerce • In association with CII&E, IIC & E-Cell PSGCAS',
    tagline: 'Navigating Public Markets, Valuations & Modern Investment Landscapes',
    description: 'National-level poster presentation competition organized by the Department of Commerce covering IPO processes, regulatory frameworks, stock market fundamentals, and financial investments.',
    longDescription: 'Organized by Department of Commerce in association with Centre for Innovation Incubation & Entrepreneurship (CII&E), Institution’s Innovation Council & E-Cell PSGCAS. A premier national offline competitive platform for UG, PG students, and Research Scholars across India to present cutting-edge analytical research, valuation frameworks, and market insights across two tracks: Track A (Initial Public Offering) and Track B (Stock Market & Financial Investment).',
    day: 2,
    dateString: '29 September 2026',
    dayOfWeek: 'Tuesday',
    time: '9:00 AM',
    venue: 'School of Commerce, PSGCAS',
    category: 'Competition',
    posterUrl: '/images/events/ipo-stocks-poster.png',
    additionalPosters: ['/images/events/ipo-stocks-poster_p2.png'],
    eligibility: 'UG, PG students & Research Scholars from recognised colleges/universities in India',
    teamSize: 'Individual or maximum 2 members',
    prizePool: 'Cash Prize Pool of ₹40,000/- & Awards',
    registrationDeadline: '23 September 2026',
    perks: [
      'Cash prize Pool of Rs. 40,000/- & Awards',
      'Free Platinum Passes for Final Day of E-Summit - 30th Sept. 2026 (incl. Investor Incubator Summit, access to Entrepreneurs Carnival, Startup Competitions, High Profile Speakers Sessions & many)',
      'Certificates, ID Cards, Refreshments & Lunch for all the participants'
    ],
    themes: [
      'Track A: IPO Process & Regulatory Framework',
      'Track A: Valuation, Pricing & Allotment Mechanics',
      'Track A: Key Intermediaries & Investor Participation',
      'Track A: Risk, Rating & Price Stabilisation',
      'Track A: Market Trends & Real-World Cases',
      'Track B: Stock Market Fundamentals & Analysis',
      'Track B: Investment Instruments & Portfolio Management',
      'Track B: Investor Behaviour & Emerging Investing Trends',
      'Track B: Digital Assets & Technology in Markets',
      'Track B: Regulation & Financial Inclusion'
    ],
    subEvents: [
      {
        name: 'Track A — IPO (Initial Public Offering)',
        target: 'UG, PG Students & Research Scholars • Individual or Max 2 Members',
        details: 'Sub-themes: IPO Process & Regulatory Framework | Valuation, Pricing & Allotment Mechanics | Key Intermediaries & Investor Participation | Risk, Rating & Price Stabilisation | Market Trends & Real-World Cases.'
      },
      {
        name: 'Track B — Stock Market & Financial Investment',
        target: 'UG, PG Students & Research Scholars • Individual or Max 2 Members',
        details: 'Sub-themes: Stock Market Fundamentals & Analysis | Investment Instruments & Portfolio Management | Investor Behaviour & Emerging Investing Trends | Digital Assets & Technology in Markets | Regulation & Financial Inclusion.'
      }
    ],
    rules: [
      'Open to UG, PG students & Research Scholars from any recognised College/University in India.',
      'Team size: Individual or Team of maximum 2 members. Only one entry per team; a student cannot be part of more than one team.',
      'Participants may choose ONE sub-theme from either of the two tracks (Track A: IPO or Track B: Stock Market & Financial Investment).',
      'Online registration with a short abstract (200–300 words) on the chosen sub-theme. Registration deadline: 23 September 2026.',
      'Abstract screening & shortlisting by an expert review panel. Shortlisted teams will be notified and asked to submit the final soft-copy poster (PDF).',
      'Final physical presentation with printed poster to be brought and displayed by participants at the venue (School of Commerce, PSGCAS) on 29 September 2026.',
      'Poster Template Format: Portrait orientation, metric A0 size (33.1 x 46.8 inches / 84.1 x 118.9 cm). Single-page high-resolution PDF for screening.',
      'Mandatory sections on poster: Title (bold, centred, max 2 lines), Team details (names, college, department, year of study, faculty mentor), Introduction/Background, Objectives, Main body (concept, analysis, data, case study/model supported by charts/infographics), Key findings/Insights, Conclusion/Recommendations, References (min 3, consistent citation style).',
      'Presentation Timing: Approx. 5 minutes for presentation + 3 minutes for Q&A before the jury panel.',
      'Design Guidance: Title 36–44 pt; section headings 24–28 pt; body text 18–20 pt (readable from ~2m); favour diagrams, charts and infographics over dense paragraphs; college & event logo on top corners; credit external data properly.',
      'Faculty mentor name recommended to be mentioned at registration. Valid college ID card must be carried on the event day. Substitution of team members after confirmation of registration is not permitted.'
    ],
    highlights: [
      'Track A: IPO (Initial Public Offering) & Track B: Stock Market & Financial Investment',
      'Cash Prize Pool of Rs. 40,000/- & Awards',
      'Free Platinum Passes for Final Day of E-Summit (30th Sept 2026)',
      'Certificates, ID Cards, Refreshments & Lunch for all participants',
      'Offline physical poster evaluation before an esteemed jury panel'
    ],
    coordinators: [
      { name: 'Department of Commerce', role: 'Organizing Department, PSGCAS' },
      { name: 'Centre for Innovation Incubation & Entrepreneurship (CII&E)', role: 'Organizing Body' },
      { name: 'Institution’s Innovation Council & E-Cell', role: 'In Association With' }
    ],
    registrationLink: REGISTRATION_URL_IPO_STOCKS_POSTER
  },

  // --------------------------------------------------------------------------
  // DAY 3: 30 SEPTEMBER 2026 (WEDNESDAY)
  // Finales / Entrepreneurship Carnival / Networking / Investors / Passes
  // --------------------------------------------------------------------------
  {
    id: 'bid-bizz',
    slug: 'bid-bizz',
    title: 'Bid Bizz',
    subtitle: 'Auction | Strategize | Build | Win — Think Bid Build Bigger',
    tagline: 'The Ultimate Corporate & Startup Auction Strategy Game',
    description: 'High-octane business bidding competition where teams receive equal virtual capital to bid, strategize, acquire enterprise assets, and build the highest-value portfolio.',
    longDescription: 'Featured prominently on Day 3 of E-Summit 2026. Organized by Centre for Innovation Incubation & Entrepreneurship, IIC, and E-Cell PSGCAS. Test your financial acumen, capital allocation under pressure, and auction negotiation. Exclusively open to Gold Pass and Platinum Pass holders.',
    day: 3,
    dateString: '30 September 2026',
    dayOfWeek: 'Wednesday',
    time: 'Day 3 Conclave Track',
    venue: 'PSGCAS, Coimbatore',
    category: 'Competition',
    posterUrl: '/images/events/bid-bizz.jpg',
    eligibility: 'Only Gold Pass and Platinum Pass holders are eligible to participate.',
    isDay3PassEvent: true,
    requiredPassTier: 'Gold or Platinum',
    prizePool: 'Auction Champion Trophy & Merit Awards',
    rules: [
      '1. Equal Capital — Every team starts with the same amount of virtual money.',
      '2. No Borrowing — Teams cannot borrow money from other teams or the organizers.',
      '3. Minimum Bid Increase — Every bid must increase by a predetermined fixed amount.',
      '4. No Withdrawal — Once a team makes the winning bid, it cannot cancel the purchase.',
      '5. Bid Clearly — Teams must clearly announce their bid or use official bidding cards/numbers.',
      '6. Time Limit — 2 to 3 minutes per auction item.',
      '7. No Communication Between Teams — Teams cannot transfer capital or make private side-deals.',
      '8. Final Decision — The auctioneer’s decision is final and binding.',
      '9. Overspending Prohibited — Teams cannot bid more capital than currently available.',
      '10. Winner Criteria — Winner is determined by the final portfolio valuation, not merely number of businesses acquired.'
    ],
    perks: [
      'Included with Gold Pass (₹199) and Platinum Pass (₹299)',
      'Hands-on experience in asset valuation and bidding game-theory',
      'Merit trophies and certificates for Top Enterprise Portfolios'
    ],
    registrationLink: REGISTRATION_URL_BID_BIZZ
  },
  {
    id: 'casequest',
    slug: 'casequest',
    title: 'CaseQuest',
    subtitle: 'Business Case Analysis Competition — Solve. Strategize. Succeed.',
    tagline: 'Turning Challenges into Opportunities',
    description: 'Premier business case analysis competition where student consultants diagnose real-world corporate challenges, develop tactical turnarounds, and present strategic solutions.',
    longDescription: 'Organized by Centre for Innovation Incubation & Entrepreneurship in association with Institution’s Innovation Council & E-Cell PSGCAS as part of E-Summit 2026. Participants receive an unfiltered corporate case study, identify root causes, formulate actionable solutions, and defend their strategies before an executive jury. Only Gold Pass and Platinum Pass holders are eligible.',
    day: 3,
    dateString: '30 September 2026',
    dayOfWeek: 'Wednesday',
    time: 'Day 3 Competition Track',
    venue: 'PSGCAS, Coimbatore',
    category: 'Competition',
    posterUrl: '/images/events/casequest.png',
    eligibility: 'Open to all UG & PG students. Only Gold Pass and Platinum Pass holders are eligible to participate.',
    teamSize: 'Individual or Teams of 2–3 members',
    isDay3PassEvent: true,
    requiredPassTier: 'Gold or Platinum',
    prizePool: 'Case Champion Honours & Cash Awards',
    perks: [
      'Included with Gold Pass (₹199) and Platinum Pass (₹299)',
      'Executive critique by corporate strategists & founders',
      'Direct recognition on the E-Summit Grand Stage'
    ],
    subEvents: [
      {
        name: 'Round 1 — Case Analysis',
        target: '30–45 Minutes',
        details: 'Participants receive a comprehensive business case study. Read and analyze the case, identify the core problem and root causes, develop feasible solutions, and prepare a concise presentation.'
      },
      {
        name: 'Round 2 — Presentation',
        target: '5–7 Minutes Presentation + 2–3 Minutes Q&A',
        details: 'Present solution slides before the judging panel. Explain and justify strategic decisions with logical reasoning and answer questions from the jury.'
      },
      {
        name: 'Round 3 — Final Challenge',
        target: 'Strategic Pressure Test',
        details: 'Finalist teams receive an additional real-time business contingency and must deliver a strategic response within limited preparation time before the grand jury.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 3 members (or individual participation).',
      'Report 15 minutes before the event commencement.',
      'Internet usage is strictly permitted only if announced by organizers.',
      'Presentation slides should be concise, professional, and well structured.',
      'Time limits must be strictly followed.',
      'Any form of plagiarism will result in immediate disqualification.',
      'Judges’ decision will be final and binding on all matters.'
    ],
    highlights: [
      'Evaluation: Problem Identification (20%)',
      'Evaluation: Strategic Thinking (25%)',
      'Evaluation: Creativity & Innovation (20%)',
      'Evaluation: Feasibility of Solution (20%)',
      'Evaluation: Presentation & Q&A (15%)'
    ],
    registrationLink: REGISTRATION_URL_CASEQUEST
  },
  {
    id: 'investors-incubator-summit',
    slug: 'investors-incubator-summit',
    title: 'Investors & Incubator Summit',
    subtitle: 'INNOVATE | INCUBATE | INVEST — Bridging Startups • Investors • Opportunities',
    tagline: 'Bridging High-Growth Student Ventures with National Capital & Incubators',
    description: 'The pinnacle investment conclave of E-Summit 2026 bringing together angel syndicates, venture capitalists, and incubator directors to evaluate curated student startups.',
    longDescription: 'Organized as the flagship venture track of Day 3 by Centre for Innovation Incubation & Entrepreneurship (CII&E), IIC, and E-Cell PSGCAS. Student startups access live pitch arenas, closed-door dealrooms, and term-sheet evaluations. Access is strictly unlocked via the PLATINUM PASS (₹299).',
    day: 3,
    dateString: '30 September 2026',
    dayOfWeek: 'Wednesday',
    time: 'Day 3 VIP Summit Track',
    venue: 'PSGCAS, Coimbatore',
    category: 'Summit',
    posterUrl: '/images/events/i-summit.png',
    eligibility: 'Platinum Pass Holders, accredited founders, incubator delegates, and angel investors.',
    prizePool: 'Seed Funding Allocations & Institutional Incubation',
    isDay3PassEvent: true,
    requiredPassTier: 'Platinum',
    perks: [
      'Exclusive to PLATINUM PASS (₹299)',
      'Entrepreneurship Carnival Access',
      'Official E-Summit Certificate',
      'Program Kit + Goodies',
      'Networking Arena Entry',
      'Panel Discussion / Fire Chat Session',
      'Speakers Highlight',
      'Startup Expo Access',
      'Case Study Competition (CaseQuest) Entry',
      'Shark Tank / Pitch Arena',
      'Investor & Incubator Summit (National Level Competitions)'
    ],
    highlights: [
      'Live Shark Tank / Pitch Arena with venture feedback',
      'Incubator on-spot mentoring covenants',
      'High-impact investor-founder dealroom meetings'
    ],
    registrationLink: REGISTRATION_URL_ISUMMIT
  },
  {
    id: 'psg-caspreneurs-2026',
    slug: 'psg-caspreneurs-2026',
    title: 'PSG Caspreneurs 2026',
    subtitle: 'Celebrating — Supporting — Scaling Student Entrepreneurship',
    tagline: 'Open Call for ₹10,000 Seed Grant for the Top 7 Startups of PSGCAS',
    description: 'Institutional startup seed grant initiative awarding ₹10,000 direct grants to the top 7 student-led enterprises of PSGCAS and featuring them in the official PSG Caspreneurs 2026 Book.',
    longDescription: 'Organized by Centre for Innovation Incubation & Entrepreneurship in association with Institution’s Innovation Council & E-Cell PSGCAS. Seven promising campus ventures are selected to receive a ₹10,000 seed grant along with one-on-one venture mentoring, incubation covenants, institutional branding, and recognition during the book release ceremony on Day 3.',
    day: 3,
    dateString: '30 September 2026',
    dayOfWeek: 'Wednesday',
    time: 'Day 3 Feature Track',
    venue: 'PSGCAS, Coimbatore',
    category: 'Summit',
    posterUrl: '/images/events/psg-caspreneurs.jpg',
    eligibility: 'Open to student founders and campus ventures of PSG College of Arts & Science.',
    teamSize: 'Student Startup Teams',
    prizePool: '₹10,000 Seed Grant for Top 7 Startups',
    registrationDeadline: '23 September 2026, 11:59 PM Midnight (Closed)',
    isRegistrationClosed: true,
    closedMessage: 'Registrations for PSG Caspreneurs 2026 are now officially closed. Selected student-led startups will be recognized during the Day 3 book release and seed grant ceremony.',
    perks: [
      '₹10,000 Seed Grant for each of the Top 7 selected startups',
      'Showcase and brand business in the official PSG Caspreneurs 2026 Book',
      'Dedicated mentoring from CII&E advisors & industry mentors',
      'Incubation, Networking, Branding & Institutional Recognition'
    ],
    coordinators: [
      { name: 'Thayashram S', phone: '+91 63831 17680', role: 'IPR Cell Coordinator' },
      { name: 'Sowmya S', phone: '+91 63800 51807', role: 'IPR Cell Coordinator' },
      { name: 'Chairperson, IPR Cell', role: 'IIC, PSGCAS' }
    ],
    registrationLink: REGISTRATION_URL_PSG_CASPRENEURS
  }
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return eventsData.find(
    (e) =>
      e.slug === slug ||
      e.id === slug ||
      (e.slug === 'ipo-stocks-poster-presentation' && slug === 'ipo-stocks-poster')
  );
}
