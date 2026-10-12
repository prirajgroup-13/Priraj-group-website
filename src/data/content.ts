import { ServiceItem, ProjectItem, ProcessStep, PricingPackage, TeamMember } from '../types';

export const OFFICIAL_CONTACT = {
  email: 'prirajgroup@gmail.com',
  phone: '+91 70515 33051',
  phoneTel: 'tel:+917051533051',
  whatsappUrl: 'https://wa.me/917051533051?text=Hello%20PRIRAJ%20GROUP%2C%20I%20would%20like%20to%20discuss%20a%20project',
  whatsappDisplay: '+91 70515 33051',
  instagramHandle: '@priraj_group',
  instagramUrl: 'https://www.instagram.com/priraj_group?stkn=MTAzOXhkcjh6aXB4cQ%3D%3D&utm_source=qr'
};

export const FOUNDER_INFO = {
  name: 'ANGATDEEP SINGH',
  role: 'FOUNDER & CEO',
  company: 'PRIRAJ GROUP',
  image: '/assets/anime-angatdeep-singh.jpg',
  fallbackImage: '/src/assets/images/anime_angatdeep_singh_1791831300498.jpg',
  bio: 'Building modern digital experiences through thoughtful design, practical technology, and real-world usability.',
  mission: 'Founder of PRIRAJ GROUP, focused on building modern digital experiences through thoughtful design, practical technology, and real-world usability.'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'angatdeep-singh',
    name: 'Angatdeep Singh',
    title: 'FOUNDER & CEO',
    role: 'Founder & CEO',
    label: 'FOUNDER & CEO',
    relationship: 'PRIRAJ GROUP',
    photo: '/assets/anime-angatdeep-singh.jpg',
    initials: 'AS',
    description: 'Angatdeep Singh is the Founder & CEO of PRIRAJ GROUP, focused on building modern digital experiences through thoughtful design, practical technology, and real-world usability.',
    isFounder: true
  },
  {
    id: 'chintan-patel',
    name: 'Chintan Patel',
    title: 'FULL-STACK DEVELOPER',
    role: 'Full-Stack Developer',
    label: 'TEAM MEMBER',
    relationship: 'Team Member',
    photo: '/assets/anime-chintan-patel.jpg',
    initials: 'CP',
    description: 'Chintan Patel is a Full-Stack Developer and team member at PRIRAJ GROUP, contributing to the development of modern web experiences and digital solutions.',
    isFounder: false
  }
];

export const SERVICE_OPTIONS = [
  'Business Websites',
  'Custom Websites',
  'E-commerce',
  'UI / UX Design',
  'Web Development',
  'Custom Features',
  'Other'
] as const;

export const BUDGET_OPTIONS = [
  'Starter — ₹8,000–₹10,000',
  'Business — ₹15,000–₹20,000',
  'Premium — ₹20,000–₹35,000+',
  'E-commerce — ₹40,000–₹70,000+',
  "Custom / Larger Project — Let's Discuss"
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-websites',
    slug: 'business-websites',
    route: '/services/business-websites',
    number: '01',
    title: 'Business Websites',
    shortDesc: 'Credible, modern online hubs for local and service businesses that build immediate client trust and drive conversion.',
    heroTitle: 'Business Websites Engineered for Authority and Growth.',
    heroSubtitle: 'PRIRAJ GROUP builds modern, responsive business websites that turn first-time visitors into paying clients.',
    fullDesc: 'We architect and build bespoke corporate, agency, and business websites with clean modern code, fast loading speeds, mobile-first responsiveness, and structured SEO foundations.',
    offerings: [
      { title: 'Company Flagships', desc: 'Credible, modern online hubs for businesses that establish commanding market authority.' },
      { title: 'Lead Generation Pages', desc: 'High-converting landing pages built for campaign launches and inbound client capture.' },
      { title: 'Corporate Portals', desc: 'Multi-page digital architectures structured for established firms and growing businesses.' },
      { title: 'SEO Architecture', desc: 'Semantic HTML5 structure, schema metadata, open graph cards, and Google search readiness.' },
      { title: 'Responsive Ergonomics', desc: 'Pixel-perfect usability across smartphones, tablets, laptops, and ultra-wide screens.' },
      { title: 'Speed Optimization', desc: 'Sub-second first paint, optimized media assets, and lightning-fast edge delivery.' }
    ],
    deliverables: [
      'Custom Responsive Business Website',
      'Clean Modular JavaScript / React Architecture',
      'Sub-Second First Contentful Paint',
      'Structured SEO & Schema Setup',
      'Direct Lead Capture & Inquiry Forms',
      'Domain Setup & Production Deployment'
    ],
    capabilities: [
      'Mobile-First Layouts',
      'Conversion Rate Optimization',
      'WCAG AA Accessibility',
      'Edge CDN Hosting Setup'
    ],
    process: [
      { step: '01', title: 'Discovery & Scope', desc: 'Understand your audience, brand positioning, required pages, and conversion goals.' },
      { step: '02', title: 'Wireframes & UI', desc: 'Craft modern layouts with typographic balance and responsive hierarchy.' },
      { step: '03', title: 'Engineering', desc: 'Develop clean, modular code with instant page load speeds.' },
      { step: '04', title: 'Testing & QA', desc: 'Test across mobile and desktop browsers, audit Core Web Vitals, and calibrate SEO.' },
      { step: '05', title: 'Launch & Handoff', desc: 'Deploy to fast edge hosting, connect custom domains, and provide ongoing support.' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Edge Hosting'],
    pricingStarting: 'Starting from ₹8,000–₹10,000',
    pricingNote: 'Final pricing depends on page count, interactive features, animations, and custom integrations.',
    relevantProjectId: 'influence',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'How long does a business website take to build?',
        answer: 'Starter websites (3–5 pages) typically deliver in 1–2 weeks. Larger business websites (5–10 pages) with custom animations and integrations typically take 2–3 weeks.'
      },
      {
        question: 'Will my website work smoothly on all mobile devices?',
        answer: 'Yes. Every website we build is engineered mobile-first and tested rigorously across iOS and Android viewports.'
      },
      {
        question: 'Will the website be optimized for Google Search?',
        answer: 'Yes. We build clean semantic code, fast loading speeds, OpenGraph cards, structured metadata, and XML sitemaps.'
      }
    ],
    ctaText: 'Start a Business Website →'
  },
  {
    id: 'custom-websites',
    slug: 'custom-websites',
    route: '/services/custom-websites',
    number: '02',
    title: 'Custom Websites',
    shortDesc: 'Bespoke digital experiences with distinct art direction, smooth interactions, and fluid responsive storytelling.',
    heroTitle: 'Websites That Look Distinctive. Never Generic.',
    heroSubtitle: 'PRIRAJ GROUP crafts tailored web flagships with custom aesthetics, purposeful motion, and memorable brand presence.',
    fullDesc: 'We move beyond off-the-shelf templates to build custom digital environments tailored around distinct brand storytelling, luxury aesthetics, and interactive product presentations.',
    offerings: [
      { title: 'Bespoke Art Direction', desc: 'Unique visual identities, typographic scale, and tailored dark or light color systems.' },
      { title: 'Creative Interactions', desc: 'Subtle scroll-triggered animations and micro-interactions that feel refined and purposeful.' },
      { title: 'Product Storytelling', desc: 'Immersive visual chapters that showcase services, products, or portfolios in detail.' },
      { title: 'Dynamic Layouts', desc: 'Asymmetric bento grids, editorial splits, and bespoke content rhythms.' }
    ],
    deliverables: [
      'Tailored Design System & Brand Direction',
      'Interactive Web Experience',
      'Fluid Motion & Micro-Interactions',
      'Performance-Tuned Asset Pipeline',
      'Full Ownership of Code & Assets'
    ],
    capabilities: [
      'Editorial Web Typography',
      'Zero-Template Originality',
      'Micro-Interactions $\\le 200$ms',
      'Fluid Viewport Scaling'
    ],
    process: [
      { step: '01', title: 'Brand Immersion', desc: 'Deep-dive into your brand aesthetic, market peers, and creative vision.' },
      { step: '02', title: 'Art Direction & Mood', desc: 'Establish spatial rhythm, typographic pairings, and bespoke palettes.' },
      { step: '03', title: 'Interactive Prototype', desc: 'Review motion concepts, screen transitions, and component behavior.' },
      { step: '04', title: 'Frontend Craft', desc: 'Code the custom interface with high attention to detail and performance.' },
      { step: '05', title: 'Deployment', desc: 'Deploy to fast edge infrastructure with domain and SSL verification.' }
    ],
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Canvas', 'WebGL'],
    pricingStarting: 'Starting from ₹15,000–₹20,000',
    pricingNote: 'Custom website scopes are quoted based on animation complexity and bespoke asset requirements.',
    relevantProjectId: 'influence',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'Do you use templates or build from scratch?',
        answer: 'Every custom website is built from scratch. We write bespoke code tailored to your exact brand aesthetics and business requirements.'
      },
      {
        question: 'Can you implement custom animations without slowing down the site?',
        answer: 'Yes. We strictly animate compositor-only properties (transform and opacity) using lightweight code to ensure sub-second performance.'
      }
    ],
    ctaText: 'Start a Custom Website →'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    route: '/services/ecommerce',
    number: '03',
    title: 'E-commerce',
    shortDesc: 'High-converting online stores with streamlined product catalogs, shopping carts, and secure payment integrations.',
    heroTitle: 'Online Stores Built to Turn Browsers Into Customers.',
    heroSubtitle: 'PRIRAJ GROUP creates fast, secure, and conversion-optimized e-commerce platforms designed to maximize sales.',
    fullDesc: 'We develop complete online stores tailored to drive transactions, manage product inventories, process secure payments, and provide smooth checkout experiences across mobile and desktop.',
    offerings: [
      { title: 'Storefront Design', desc: 'Bespoke brand storefronts that stand out from generic out-of-the-box store templates.' },
      { title: 'Product Showcases', desc: 'Compelling product pages with zoomable galleries, variant pickers, and clear CTA buttons.' },
      { title: 'Product Catalog', desc: 'Organized category architecture, search filters, and instant sorting.' },
      { title: 'Frictionless Cart & Checkout', desc: 'Slide-out cart drawers, order summaries, and distraction-free checkout funnels.' },
      { title: 'Payment Gateways', desc: 'Secure integrations with Razorpay, Stripe, UPI, credit/debit cards, and digital wallets.' },
      { title: 'Order & Customer Flow', desc: 'Automated order confirmations, customer notifications, and status updates.' }
    ],
    deliverables: [
      'Complete Custom Storefront',
      'Product Detail & Category Pages',
      'Cart & Single-Page Checkout Funnel',
      'Payment Gateway Integration',
      'Inventory & Order Notification Flow',
      'Mobile-Optimized Checkout'
    ],
    capabilities: [
      'Conversion Funnel Engineering',
      'Instant Mobile Checkout',
      'Secure Payment API Handshake',
      'Product Schema for Search'
    ],
    process: [
      { step: '01', title: 'Catalog Planning', desc: 'Review SKU volume, categories, shipping requirements, and payment providers.' },
      { step: '02', title: 'Storefront UI & Cart UX', desc: 'Design high-converting product pages, collection filters, and checkout flows.' },
      { step: '03', title: 'Store Engineering', desc: 'Develop responsive frontends, inventory hooks, and shopping cart logic.' },
      { step: '04', title: 'Payment QA & Sandboxing', desc: 'Perform live test transactions, order simulations, and security validation.' },
      { step: '05', title: 'Go Live & Store Handoff', desc: 'Launch the store, verify domain SSL, and provide admin management guidance.' }
    ],
    technologies: ['React', 'Next.js', 'Razorpay', 'Stripe', 'Tailwind CSS', 'Node.js'],
    pricingStarting: 'Starting from ₹40,000–₹70,000+',
    pricingNote: 'E-commerce pricing depends on product volume, catalog complexity, payment providers, and custom workflows.',
    relevantProjectId: 'barber-booking',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'Which payment gateways can you integrate?',
        answer: 'We integrate Razorpay, Stripe, UPI, PayPal, Cashfree, and international card processors.'
      },
      {
        question: 'Can you build custom e-commerce or Shopify stores?',
        answer: 'We build both custom headless React/Next.js e-commerce platforms and bespoke custom-coded storefronts.'
      }
    ],
    ctaText: 'Start an E-commerce Store →'
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    route: '/services/ui-ux-design',
    number: '04',
    title: 'UI / UX Design',
    shortDesc: 'Refined interface craft and intuitive behavioral user flows designed to eliminate friction and maximize conversion rates.',
    heroTitle: 'Interfaces That Look Good. Experiences That Make Sense.',
    heroSubtitle: 'PRIRAJ GROUP crafts human-centered digital interfaces that eliminate user friction and turn visitors into loyal customers.',
    fullDesc: 'We unite cognitive psychology, typographic hierarchy, and modern design systems to build digital products that feel effortless to navigate and visually unforgettable.',
    offerings: [
      { title: 'User Research', desc: 'Investigating audience needs, competitor friction points, and key behavioral motivations.' },
      { title: 'Information Architecture', desc: 'Organizing content hierarchy and navigation pathways so users find what they need instantly.' },
      { title: 'User Flows', desc: 'Mapping step-by-step paths from first landing to successful conversion and checkout.' },
      { title: 'Wireframes', desc: 'Low-fidelity structural blueprints establishing spatial balance before visual styling.' },
      { title: 'High-Fidelity UI', desc: 'Pixel-perfect interface design with custom typography, iconography, and color palettes.' },
      { title: 'Design Systems', desc: 'Scalable component libraries, design tokens, and style guides ensuring brand consistency.' }
    ],
    deliverables: [
      'Complete High-Fidelity UI Screens',
      'Clickable Interactive Prototypes',
      'Figma Component Library & Style Guide',
      'Typography & Color Palette Rules',
      'User Journey & Flow Diagrams',
      'Developer Implementation Specs'
    ],
    capabilities: [
      'Clear UI vs UX Distinction',
      'Conversion Rate Optimization (CRO)',
      'Touch Target & Gesture Ergonomics',
      'Modern Dark & Light Design Languages'
    ],
    process: [
      { step: '01', title: 'Research & Journey Mapping', desc: 'Define who the user is and identify the single primary conversion path.' },
      { step: '02', title: 'Structural Wireframes', desc: 'Establish spatial rhythm, typographic scale, and structural hierarchy.' },
      { step: '03', title: 'Visual UI Craft', desc: 'Apply bespoke color palettes, dark metallic tones, and elegant typography.' },
      { step: '04', title: 'Interactive Prototyping', desc: 'Simulate animations, transitions, and user interactions for feedback.' },
      { step: '05', title: 'Design System & Handoff', desc: 'Deliver production-ready component files organized for immediate development.' }
    ],
    technologies: ['Figma', 'Design Tokens', 'Component Systems', 'Interactive Prototyping', 'Vector Art'],
    pricingStarting: 'Custom Quote / Included in Packages',
    pricingNote: 'UI/UX design can be commissioned standalone or integrated seamlessly with complete engineering.',
    relevantProjectId: 'winter-arc',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'What is the real difference between UI and UX?',
        answer: 'UX (User Experience) is the underlying structure: how the product functions, user flows, friction removal, and how easily a user reaches their goal. UI (User Interface) is the visual craft: typography, colors, button styles, visual polish, and brand aesthetics.'
      },
      {
        question: 'Do you provide the complete design files in Figma?',
        answer: 'Yes. All design tokens, component variants, wireframes, and vector assets are handed over with full ownership.'
      }
    ],
    ctaText: 'Start a UI/UX Project →'
  },
  {
    id: 'web-development',
    slug: 'web-development',
    route: '/services/web-development',
    number: '05',
    title: 'Web Development',
    shortDesc: 'Clean, modular frontend and full-stack engineering with sub-second page performance, robust security, and reliable code quality.',
    heroTitle: 'Engineered for Performance, Reliability and Scale.',
    heroSubtitle: 'PRIRAJ GROUP writes clean, modern TypeScript and React code that loads instantly, handles traffic, and stays secure.',
    fullDesc: 'We build fast, secure web solutions that solve operational bottlenecks, present dynamic data, and scale effortlessly without bloated third-party dependencies.',
    offerings: [
      { title: 'Frontend Engineering', desc: 'Clean, accessible, and reactive user interfaces built with React, TypeScript, and modern CSS.' },
      { title: 'API & Backend Integration', desc: 'Serverless routes, REST APIs, and third-party webhook connections.' },
      { title: 'Performance Optimization', desc: 'Sub-second First Contentful Paint, code splitting, and optimized bundle sizes.' },
      { title: 'Secure Form & Email Systems', desc: 'Server-side validated inquiry systems, Resend API integration, and anti-spam verification.' },
      { title: 'Responsive Testing', desc: 'Thorough QA testing across device sizes, browser engines, and network conditions.' }
    ],
    deliverables: [
      'Complete Production Source Code',
      'Sub-Second First Contentful Paint',
      'API & Third-Party Service Handshakes',
      'Secure Contact & Lead Funnels',
      'Vercel / Cloud Run Production Deployment'
    ],
    capabilities: [
      'Strict TypeScript Architecture',
      'Edge Function & API Routing',
      'Core Web Vitals Calibration',
      'Zero-Downtime Deployment'
    ],
    process: [
      { step: '01', title: 'Technical Architecture', desc: 'Establish project stack, API boundaries, state management, and component architecture.' },
      { step: '02', title: 'Modular Development', desc: 'Write clean, maintainable frontend and backend code with strict type checking.' },
      { step: '03', title: 'Integration & Testing', desc: 'Integrate forms, APIs, security rules, and performance audits.' },
      { step: '04', title: 'Cross-Device QA', desc: 'Verify touch ergonomics, network fallbacks, and responsiveness.' },
      { step: '05', title: 'Production Rollout', desc: 'Deploy to high-speed global edge infrastructure.' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'Express', 'Resend'],
    pricingStarting: 'Starting from ₹15,000–₹20,000',
    pricingNote: 'Web development projects are quoted based on technical scope, APIs, and custom logic required.',
    relevantProjectId: 'influence',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'Do you write clean, maintainable code?',
        answer: 'Yes. We follow strict TypeScript standards, modular component architecture, and zero-bloat principles so your codebase remains reliable and easy to maintain.'
      },
      {
        question: 'Can you integrate our existing backend or APIs?',
        answer: 'Yes. We connect custom REST APIs, database endpoints, payment gateways, and third-party services.'
      }
    ],
    ctaText: 'Start a Web Development Project →'
  },
  {
    id: 'custom-features',
    slug: 'custom-features',
    route: '/services/custom-features',
    number: '06',
    title: 'Custom Features',
    shortDesc: 'Specialized digital capabilities, interactive calculators, portals, custom APIs, third-party integrations, and automated workflows.',
    heroTitle: 'Custom Capabilities Tailored to Your Business Operations.',
    heroSubtitle: 'PRIRAJ GROUP engineers specialized tools, interactive client portals, and automation workflows that streamline your business.',
    fullDesc: 'When off-the-shelf software falls short, we engineer custom digital features, dynamic calculators, booking flows, client dashboards, and custom integrations tailored to your exact operational workflows.',
    offerings: [
      { title: 'Client Portals', desc: 'Protected dashboards for document sharing, order status, and customer communication.' },
      { title: 'Interactive Calculators', desc: 'Dynamic price estimation, quote generators, and loan/metric calculators that boost conversions.' },
      { title: 'Booking & Scheduling', desc: 'Custom appointment booking flows integrated with Google Calendar or internal management.' },
      { title: 'Workflow Automations', desc: 'Connecting form submissions directly to email dispatch, WhatsApp alerts, and internal systems.' },
      { title: 'Third-Party Integrations', desc: 'Integrating custom CRMs, payment providers, maps, and specialized web APIs.' }
    ],
    deliverables: [
      'Custom Functional Modules',
      'Interactive Tools & Calculators',
      'Automated Email & Notification Workflows',
      'API Webhook Endpoints',
      'Full Source Code & Admin Instructions'
    ],
    capabilities: [
      'Bespoke Business Logic',
      'Real-Time Calculations',
      'Secure Data Handling',
      'Custom API Handshakes'
    ],
    process: [
      { step: '01', title: 'Workflow Immersion', desc: 'Analyze the manual bottleneck or exact functional capability needed.' },
      { step: '02', title: 'Logic Blueprint', desc: 'Map calculation rules, user inputs, and output behaviors.' },
      { step: '03', title: 'Component Engineering', desc: 'Build the interactive interface and backend processing logic.' },
      { step: '04', title: 'Edge Case Testing', desc: 'Stress-test inputs, error states, and rate limits.' },
      { step: '05', title: 'Integration & Delivery', desc: 'Mount seamlessly into your live website or web application.' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'APIs', 'Webhooks', 'Tailwind CSS'],
    pricingStarting: 'Custom Quote / Add-on to Website',
    pricingNote: 'Custom features can be built into a new website or integrated into your existing platform.',
    relevantProjectId: 'novia',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'Can you add custom features to an existing website?',
        answer: 'Yes. We can engineer custom calculators, forms, portals, and integrations that mount directly onto your current website.'
      },
      {
        question: 'How do you test custom calculation logic?',
        answer: 'We run unit tests across edge-case numbers, currency formats, and user inputs to guarantee 100% calculation accuracy.'
      }
    ],
    ctaText: 'Discuss Custom Features →'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'winter-arc',
    title: 'WINTER ARC — 90 DAY CHALLENGE',
    category: 'APP / FITNESS PRODUCT',
    projectType: 'Mobile Application · Fitness / Productivity',
    year: '2026',
    image: '/assets/projects/winter-arc-app.jpg',
    badgeType: 'REAL PROJECT',
    headline: 'A personal 90-day transformation system designed around training, nutrition, productivity, recovery and daily discipline.',
    description: 'A personal 90-day transformation system designed around training, nutrition, productivity, recovery and daily discipline.',
    overview: 'The Winter Arc protocol demands absolute daily consistency during the critical final 90 days of the year: morning cardio, progressive resistance training, clean nutrition tracking, 1 gallon hydration, 10 pages of reading, and daily discipline accountability. Built with a sleek obsidian aesthetic, high-contrast typography, and zero-distraction UX.',
    problem: 'Standard fitness apps are overcrowded with ad spam, complex calorie databases, and slow interfaces that break daily momentum. Users fail protocols because habit tracking feels like administrative paperwork.',
    approach: 'Engineered a unified, tactile mobile dashboard anchored around a single Day X / 90 circular progress ring, one-tap daily mission completion, integrated interval workout timers, and progressive Day 1 to Day 90 milestone calibration.',
    design: 'Obsidian charcoal surfaces (`#08080c`), warm metallic gold milestone accents (`#d4af37`), crisp tabular numerals, and ergonomic bottom-thumb navigation for active training sessions.',
    keyFeatures: [
      'Day X / 90 Circular Progress Dashboard with Active Day Counter',
      'Daily Missions Checklist (Cardio, Training, Hydration, Reading, Sleep)',
      'Dual Workout Interval Timer with Haptic Feedback',
      '1-Gallon (3,785 ml) Hydration Progress Ring',
      'Daily Photo Journal Vault & Private Streak Logging',
      'Weekly Protocol Review & Discipline Analytics'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mobile First', 'Local Storage', 'Haptics'],
    finalResult: 'Delivered an authoritative mobile product experience that keeps athletes and disciplined individuals accountable through all 90 days without distraction.',
    tags: ['MOBILE', 'FITNESS', 'PRODUCTIVITY', 'UI/UX']
  },
  {
    id: 'barber-booking',
    title: 'BARBER SHOP BOOKING',
    category: 'WEB / BOOKING PLATFORM',
    projectType: 'Web Booking Platform · Grooming Studio',
    year: '2026',
    image: '/assets/projects/barber-booking.jpg',
    badgeType: 'REAL PROJECT',
    headline: 'A modern appointment-booking website designed for a barber shop, allowing customers to discover services, choose an appointment date and time, and book their visit online.',
    description: 'A modern appointment-booking website designed for a barber shop, allowing customers to discover services, choose an appointment date and time, and book their visit online.',
    overview: 'Barber Shop Booking solves the operational bottleneck of traditional barbershops. By replacing disruptive phone calls and unpredictable walk-in queues with an intuitive real-time appointment system, it provides barbers with an organized daily schedule and customers with an effortless booking experience.',
    problem: 'Barber shops need a simple way for customers to schedule appointments without unnecessary phone calls or messaging that interrupt haircuts and create double-booking errors.',
    approach: 'Engineered a frictionless 5-step client booking journey: service discovery with transparent pricing, dynamic calendar date selection, real-time available time slots, customer contact details, and instant confirmation.',
    design: 'Warm charcoal slate surfaces, champagne gold accents, high-contrast typography, and finger-friendly booking chips optimized for instant mobile booking.',
    keyFeatures: [
      'Barber Shop Services & Pricing Catalog',
      'Interactive Service Selection with Add-On Options',
      'Dynamic Date Selection Calendar',
      'Real-Time Available Time Slot Availability',
      'Customer Information & Special Request Capture',
      'Instant Booking Confirmation & SMS/Email Notification Flow',
      'Responsive Mobile-First Booking Interface'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Calendar Engine', 'Mobile First', 'Node.js'],
    finalResult: 'Eliminated manual phone coordination for the barbershop and reduced scheduling friction to under 60 seconds on mobile devices.',
    tags: ['BOOKING', 'WEB', 'UI/UX', 'DEVELOPMENT']
  },
  {
    id: 'driving-school',
    title: 'DRIVING SCHOOL BOOKING',
    category: 'WEB / BOOKING PLATFORM',
    projectType: 'Web Booking Platform · Driving Academy',
    year: '2026',
    image: '/assets/projects/driving-school.jpg',
    badgeType: 'REAL PROJECT',
    headline: 'A modern driving-school website that allows students to learn about driving programs, choose their preferred training schedule, book available lessons and request pickup from their location.',
    description: 'A modern driving-school website that allows students to learn about driving programs, choose their preferred training schedule, book available lessons and request pickup from their location.',
    overview: 'Driving School Booking modernizes driver education logistics. Designed for a professional driving academy, it enables learners to browse curriculum programs, select lesson packages, schedule open instructor time slots, and specify their exact doorstep pickup location.',
    problem: 'Driving schools often depend on calls or messaging to arrange lessons, making scheduling inconvenient for students and causing confusion regarding lesson pickup locations.',
    approach: 'Architected a structured 6-step dispatch workflow: course overview and selection, interactive scheduling calendar, verified instructor time slot booking, student pickup address input with landmark recognition, and direct booking confirmation.',
    design: 'Deep navy and technical slate backdrop, ice-blue status accents, high-readability typography, and structured forms engineered for effortless input on smartphones.',
    keyFeatures: [
      'Driving Course Information & Training Packages',
      'Driving Lesson Selection (Beginner, Road Test, Defensive, Highway)',
      'Interactive Date Selection & Weekly Instructor Calendar',
      'Live Available Time Slots with Anti-Clash Logic',
      'Doorstep Pickup Location & Landmark Address Input',
      'Student Information & Learner License Verification',
      'Instant Lesson Booking Confirmation & Dispatch Summary',
      'Responsive Mobile Experience for On-The-Go Students'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Geolocation Input', 'Calendar Grid', 'Responsive UI'],
    finalResult: 'Streamlined driving lesson scheduling, eliminating phone tag between students and on-road driving instructors.',
    tags: ['BOOKING', 'WEB', 'EDUCATION', 'UI/UX', 'DEVELOPMENT']
  },
  {
    id: 'novia',
    title: 'NOVIA',
    category: 'PRODUCT / SOCIAL PRODUCT',
    projectType: 'Mobile & Web Platform · Social / Digital Product',
    year: '2025',
    image: '/assets/projects/novia-app.png',
    badgeType: 'CONCEPT PROJECT',
    headline: 'A calm, sovereign social product concept focused on private circles, chronological feeds, and lossless audio interaction.',
    description: 'A modern social product concept focused on profiles, content, interaction, and a refined user experience.',
    overview: 'NOVIA rethinks social software from first principles. By replacing algorithmic engagement loops and invasive ad tracking with private sovereign circles, chronological timelines, and high-fidelity audio chambers, NOVIA provides a calm, dignified digital salon for serious creators and close circles.',
    problem: 'Mainstream social networks are optimized for outrage and surveillance advertising, generating high cognitive fatigue and diluting meaningful relationships behind algorithmic feeds.',
    approach: 'Architected an end-to-end encrypted platform structure where community spaces are sovereign, feeds are strictly chronological, and members interact through rich text, audio dispatches, and curated media albums.',
    design: 'Deep charcoal background surfaces with warm gold accents, refined typography, generous negative space, and tactile haptic feedback for private interactions.',
    keyFeatures: [
      'Private Invite-Only Circles & Sovereign Community Rooms',
      'Lossless Asynchronous Audio Channels & Voice Dispatches',
      'Zero-Ad Chronological Feed with Granular Filter Controls',
      'End-to-End Encrypted Direct & Group Messaging',
      'Curated Portfolio & Long-Form Editorial Publishing Engine'
    ],
    technologies: ['React', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'WebRTC Audio', 'Encrypted Storage'],
    finalResult: 'Engineered a functional prototype demonstrating high-trust social interactions with sub-50ms message latency and complete privacy autonomy.',
    tags: ['PRODUCT', 'SOCIAL', 'UI/UX']
  },
  {
    id: 'influence',
    title: 'INFLUENCE',
    category: 'WEB / DIGITAL EXPERIENCE',
    projectType: 'Website · UI/UX / Web Development',
    year: '2026',
    image: '/assets/projects/influence-website.png',
    badgeType: 'REAL PROJECT',
    headline: 'An architectural editorial publication designed for commanding authority, fluid typographic scales, and sub-second load speeds.',
    description: 'A modern website experience designed with a strong visual identity, responsive layout, and conversion-focused user experience.',
    overview: 'INFLUENCE is an architectural web publication designed to establish commanding authority for creators, executives, and modern studios. Built with fluid editorial grids, dynamic typography scales, and seamless page transitions, it transforms personal content into a luxury digital brand.',
    problem: 'Traditional portfolio templates and blog platforms lack editorial sophistication, producing generic layouts that fail to convey prestige, creative nuance, or distinctive identity.',
    approach: 'Engineered a bespoke web architecture merging print-magazine art direction with modern web performance, incorporating interactive issue showcases, dynamic reading modes, and media spotlight modules.',
    design: 'Minimalist editorial palette combining deep blacks, clean white typography, and warm metallic gold highlights with architectural whitespace.',
    keyFeatures: [
      'Curated Issue Releases & Modular Editorial Feature Grids',
      'Sub-second First Contentful Paint with Fluid Responsive Typography',
      'Interactive Creator Roster & Strategic Media Embeds',
      'Custom Audio & Keynote Stream Integration',
      'Optimized Core Web Vitals & Seamless View Transitions'
    ],
    technologies: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Headless Architecture'],
    finalResult: 'Constructed an authoritative, responsive digital experience that delivers exceptional typographic poise, instantaneous page response, and effortless content management.',
    tags: ['WEB', 'EDITORIAL', 'UI/UX']
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    number: '01',
    name: 'STARTER',
    startingRange: '₹8,000 – ₹10,000',
    shortRange: '₹8K – ₹10K',
    subtitle: 'A professional responsive website for individuals, local businesses, and small brands that need a strong online presence.',
    includes: [
      '3–5 page responsive website',
      'Mobile, tablet and desktop optimization',
      'Modern UI design',
      'Business-focused layout',
      'Contact section',
      'Basic animations',
      'Basic SEO structure',
      'Fast-loading implementation',
      'Deployment assistance'
    ],
    idealFor: [
      'Small businesses',
      'Local brands',
      'Individuals & portfolios',
      'Simple corporate sites'
    ],
    ctaText: 'START A PROJECT →',
    isPopular: false
  },
  {
    id: 'business',
    number: '02',
    name: 'BUSINESS',
    startingRange: '₹15,000 – ₹20,000',
    shortRange: '₹15K – ₹20K',
    subtitle: 'A complete business website with additional pages, animations, forms, and a stronger digital experience.',
    includes: [
      '5–10 pages',
      'Custom responsive design',
      'Premium UI/UX',
      'Smooth animations',
      'Contact forms',
      'WhatsApp integration',
      'Interactive sections',
      'Basic SEO setup',
      'Performance optimization',
      'Deployment assistance'
    ],
    idealFor: [
      'Growing businesses',
      'Startups',
      'Professional services',
      'Commercial brands'
    ],
    ctaText: 'START A PROJECT →',
    isPopular: true
  },
  {
    id: 'premium',
    number: '03',
    name: 'PREMIUM',
    badge: 'MOST CUSTOMIZED',
    startingRange: '₹20,000 – ₹35,000+',
    shortRange: '₹20K – ₹35K+',
    subtitle: 'A custom-designed digital experience for businesses that need advanced UI/UX, interactions, features, and a distinctive online presence.',
    includes: [
      'Custom UI/UX design',
      'Advanced animations',
      'Advanced interactions',
      'Custom sections',
      'CMS / content management where required',
      'Advanced forms',
      'Custom functionality',
      'Performance optimization',
      'SEO foundation',
      'Deployment and launch support'
    ],
    idealFor: [
      'Established businesses',
      'Premium brands',
      'High-growth startups',
      'Custom functionality needs'
    ],
    ctaText: 'START A PROJECT →',
    isPopular: false
  },
  {
    id: 'ecommerce',
    number: '04',
    name: 'E-COMMERCE',
    startingRange: '₹40,000 – ₹70,000+',
    shortRange: '₹40K – ₹70K+',
    subtitle: 'A complete online store designed for businesses that need products, payments, orders, and management functionality.',
    includes: [
      'Product catalog',
      'Product detail pages',
      'Shopping cart',
      'Checkout',
      'Payment integration',
      'Order functionality',
      'Admin features',
      'Responsive design',
      'Basic SEO structure',
      'Performance optimization',
      'Deployment support'
    ],
    idealFor: [
      'Product businesses',
      'Retail brands',
      'Direct-to-consumer stores',
      'Digital merchandise'
    ],
    ctaText: 'START A PROJECT →',
    isPopular: false
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    number: '01 — DISCOVER',
    title: 'DISCOVER',
    desc: 'Understand the business, audience and goals.',
    keyOutputs: ['Business Objective Alignment', 'Audience & Competitor Discovery', 'Clear Scope & Technical Roadmap']
  },
  {
    step: '02',
    number: '02 — PLAN',
    title: 'PLAN',
    desc: 'Define structure, functionality and user experience.',
    keyOutputs: ['Information Architecture', 'User Journey Mapping', 'Technology Stack & Milestone Plan']
  },
  {
    step: '03',
    number: '03 — DESIGN',
    title: 'DESIGN',
    desc: 'Create the visual direction and interface.',
    keyOutputs: ['Custom Wireframes', 'High-Fidelity Responsive Mockups', 'Interactive Prototypes & Review']
  },
  {
    step: '04',
    number: '04 — BUILD',
    title: 'BUILD',
    desc: 'Develop, test and optimize.',
    keyOutputs: ['Clean JavaScript / React Codebase', 'Fast-Loading Responsive Ergonomics', 'Third-Party & Form Integrations']
  },
  {
    step: '05',
    number: '05 — LAUNCH',
    title: 'LAUNCH',
    desc: 'Deploy and deliver.',
    keyOutputs: ['Cross-Device QA & Speed Audits', 'Zero-Downtime Production Deployment', 'Post-Launch Tuning & Direct Support']
  }
];

export const FAQ_DATA = [
  {
    question: 'How much does a website cost?',
    answer: 'Our website projects start from ₹8,000–₹10,000 for a Starter website, ₹15,000–₹20,000 for Business websites, and ₹20,000–₹35,000+ for Premium custom web experiences. E-commerce platforms start from ₹40,000–₹70,000+. Every project is different, and final pricing depends on scope, functionality, page count, and custom integrations.'
  },
  {
    question: 'How long does a website take?',
    answer: 'A Starter website (3–5 pages) typically takes 1–2 weeks. A Business website (5–10 pages) with custom animations and integrations takes 2–3 weeks. Custom web platforms and full e-commerce stores typically take 3–5 weeks depending on requirements.'
  },
  {
    question: 'Do you build e-commerce websites?',
    answer: 'Yes. We engineer complete e-commerce stores with product catalogs, shopping carts, single-page checkouts, inventory tracking, and secure payment gateway integrations (Razorpay, Stripe, UPI, credit/debit cards).'
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Yes. We frequently redesign outdated or low-converting websites, auditing UX bottlenecks, modernizing the visual identity, and rebuilding the code to achieve sub-second page performance and higher client conversion.'
  },
  {
    question: 'Do you provide custom functionality?',
    answer: 'Yes. We engineer custom client portals, dynamic price calculators, appointment booking workflows, custom APIs, third-party webhook integrations, and automated business notifications.'
  },
  {
    question: 'How does the project payment work?',
    answer: 'We operate on a straightforward two-stage model: 50% advance before development begins, followed by development and live staging preview inspection. Once you inspect and approve the website, the remaining 50% balance is paid prior to source-code delivery and deployment assistance.'
  },
  {
    question: 'What is your refund policy if I am not satisfied with the preview?',
    answer: 'The founder\'s intended business policy allows you to request a refund of your 50% advance payment if you review the demonstration preview and decide not to proceed because you are not satisfied with the result against the agreed written scope. You can read our complete, transparent Payment & Refund Policy on our website.'
  },
  {
    question: 'Do I get the complete website source code?',
    answer: 'Yes. Upon clearance of the full project payment, PRIRAJ GROUP delivers the complete production source code, assets, documentation, and handover instructions. You can choose to deploy independently or have PRIRAJ GROUP assist with hosting, SSL, and domain DNS setup.'
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes. Every project includes post-launch testing, deployment assistance, domain DNS connection, and a direct post-launch support period to ensure your website continues running smoothly.'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Responsive Development',
    desc: 'Engineered for seamless viewing across smartphones, tablets, laptops, and ultra-wide screens.'
  },
  {
    title: 'Modern UI/UX',
    desc: 'Clean, intuitive interfaces designed with typographic hierarchy and deliberate user conversion.'
  },
  {
    title: 'Performance Focused',
    desc: 'Optimized assets and lightweight code delivering sub-second load times and fluid interactions.'
  },
  {
    title: 'Business-Oriented Design',
    desc: 'Every layout, button, and section is structured around acquiring actual clients and sales.'
  }
];

export const CORE_CAPABILITIES = [
  'Business Websites',
  'Custom Websites',
  'E-commerce',
  'UI / UX Design',
  'Web Development',
  'Custom Features'
];
