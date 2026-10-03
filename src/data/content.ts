import { ServiceItem, ProjectItem, ProcessStep, PricingPackage } from '../types';

export const OFFICIAL_CONTACT = {
  email: 'prirajgroup@gmail.com',
  phone: '+91 70515 33051',
  phoneTel: 'tel:+917051533051',
  whatsappUrl: 'https://wa.me/917051533051?text=Hello%20PRIRAJ%20GROUP%2C%20I%20would%20like%20to%20discuss%20a%20project',
  whatsappDisplay: '+91 70515 33051',
  instagramHandle: '@priraj_group',
  instagramUrl: 'https://www.instagram.com/priraj_group?stkn=MTAzOXhkcjh6aXB4cQ%3D%3D&utm_source=qr'
};

export const SERVICE_OPTIONS = [
  'Website Development',
  'Web Application Development',
  'UI/UX Design',
  'E-commerce Development',
  'Branding & Digital Identity',
  'Custom Digital Solutions',
  'Other'
] as const;

export const BUDGET_OPTIONS = [
  'Simple Website — ₹8,000–₹9,000',
  '3D Website — ₹15,000–₹20,000',
  "Custom / Larger Project — Let's Discuss",
  'Not Sure'
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-development',
    slug: 'website-development',
    route: '/services/website-development',
    number: '01',
    title: 'Website Development',
    shortDesc: 'Modern, high-performance responsive business websites engineered for speed, conversion, and online authority.',
    heroTitle: 'Websites Designed to Make Your Business Stand Out.',
    heroSubtitle: 'PRIRAJ GROUP creates modern, responsive websites focused on design, usability, performance, and measurable business goals.',
    fullDesc: 'We architect and build bespoke corporate, agency, portfolio, and brand websites with clean modern code, fast loading speeds, mobile-first responsiveness, and structured SEO foundations.',
    offerings: [
      { title: 'Business Websites', desc: 'Credible, modern online hubs for local and service businesses that build immediate client trust.' },
      { title: 'Corporate Websites', desc: 'Comprehensive multi-page portals for growing companies and established organizations.' },
      { title: 'Portfolio Websites', desc: 'High-impact editorial showcases for creators, architects, agencies, and studios.' },
      { title: 'Landing Pages', desc: 'High-converting campaign landing pages built for marketing launches and customer acquisition.' },
      { title: 'Personal Brand Websites', desc: 'Authoritative personal flagships for founders, executives, consultants, and leaders.' },
      { title: 'Custom Website Experiences', desc: 'Interactive digital environments tailored around distinct brand storytelling.' },
      { title: 'Responsive Development', desc: 'Pixel-perfect ergonomics across smartphones, tablets, laptops, and ultra-wide screens.' },
      { title: 'Performance Optimization', desc: 'Sub-second first paint, optimized media assets, and lightning-fast page transitions.' },
      { title: 'SEO Foundation', desc: 'Semantic HTML5 structure, schema metadata, open graph cards, and search console optimization.' },
      { title: 'Animations & Interactions', desc: 'Smooth, lightweight scroll interactions and motion design that feel refined and purposeful.' }
    ],
    deliverables: [
      'Responsive Web Flagship',
      'Clean Modular JavaScript / React Code',
      'Sub-Second First Contentful Paint',
      'Structured SEO & Metadata Setup',
      'Contact & Lead Capture Funnels',
      'Deployment & Hosting Configuration'
    ],
    capabilities: [
      'Mobile-First Responsive Layouts',
      'Zero-Bloat Performance Engineering',
      'WCAG AA Accessibility Standards',
      'Production Domain & SSL Setup'
    ],
    process: [
      { step: '01', title: 'Discovery & Scope', desc: 'Understand your audience, brand positioning, required pages, and conversion goals.' },
      { step: '02', title: 'Wireframes & UI', desc: 'Craft modern layouts with typographic balance and responsive hierarchy.' },
      { step: '03', title: 'Frontend Engineering', desc: 'Develop clean, modular JavaScript code with instant page load speeds.' },
      { step: '04', title: 'Testing & Optimization', desc: 'Test across browsers, audit Core Web Vitals, and calibrate SEO metadata.' },
      { step: '05', title: 'Launch & Handoff', desc: 'Deploy to fast edge hosting, connect domains, and provide straightforward maintenance guidance.' }
    ],
    technologies: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Edge CDN', 'Framer Motion'],
    pricingStarting: 'Starting from ₹8,000–₹10,000',
    pricingNote: 'Final pricing depends on page count, interactive features, animations, and custom integrations.',
    relevantProjectId: 'influence',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'How long does a typical website project take?',
        answer: 'Starter websites (3–5 pages) are typically delivered in 1–2 weeks. Larger business websites (5–10 pages) with custom animations and integrations typically take 2–3 weeks.'
      },
      {
        question: 'Will my website work perfectly on mobile devices?',
        answer: 'Yes. Every website we build is engineered mobile-first and tested thoroughly across modern mobile, tablet, and desktop viewports.'
      },
      {
        question: 'Will the website be optimized for Google Search (SEO)?',
        answer: 'Yes. We build clean semantic code, fast loading speeds, OpenGraph cards, structured metadata, and XML sitemaps to ensure strong search engine discoverability.'
      },
      {
        question: 'Can you assist with domain connection and deployment?',
        answer: 'Yes. Deployment assistance and domain DNS configuration on modern edge hosting platforms are included with every project package.'
      }
    ],
    ctaText: 'Start a Website Project →'
  },
  {
    id: 'web-application',
    slug: 'web-application',
    route: '/services/web-application',
    number: '02',
    title: 'Web Application Development',
    shortDesc: 'Custom dashboards, portals, and web applications built with scalable, type-safe architecture.',
    heroTitle: 'Custom Web Applications Built for Real Business Needs.',
    heroSubtitle: 'PRIRAJ GROUP engineers scalable web applications, business dashboards, and client portals built with type-safe architecture and secure database integrations.',
    fullDesc: 'From internal operations tools to client-facing SaaS platforms, we build robust web applications with clean JavaScript, secure role-based access, real-time data pipelines, and responsive UX.',
    offerings: [
      { title: 'Custom Dashboards', desc: 'Interactive analytics and administrative dashboards built for high data clarity.' },
      { title: 'Admin Panels', desc: 'Secure back-office control panels for managing users, content, orders, and system logs.' },
      { title: 'User Authentication', desc: 'Secure session handling, token-based auth, magic links, and OAuth social logins.' },
      { title: 'Database-Driven Applications', desc: 'Structured schema design, relational and non-relational database connectivity.' },
      { title: 'Booking Systems', desc: 'Calendar scheduling, appointment management, and automated booking confirmations.' },
      { title: 'Management Systems', desc: 'Custom enterprise software for tracking inventory, assets, pipelines, and tasks.' },
      { title: 'API Integrations', desc: 'Seamless communication with payment gateways, CRMs, ERPs, and cloud services.' },
      { title: 'Custom Workflows', desc: 'Automated business logic that eliminates manual data entry and human error.' },
      { title: 'Role-Based Access', desc: 'Granular permissions differentiating administrators, team members, and clients.' },
      { title: 'Business Automation', desc: 'Background job processing, webhooks, and automated email/SMS dispatches.' }
    ],
    deliverables: [
      'Custom Web Application Architecture',
      'Client & Admin Management Dashboards',
      'Secure User Authentication & RBAC',
      'Database Schema & API Endpoints',
      'Automated Workflow Logic',
      'Staging & Production Deployment'
    ],
    capabilities: [
      'JavaScript & Component Modular Design',
      'State Management & Cache Invalidation',
      'Sub-50ms Client-Server Communication',
      'Zero-Vulnerability Token Security'
    ],
    process: [
      { step: '01', title: 'Architecture & Modeling', desc: 'Map data entities, user roles, security rules, and technical requirements.' },
      { step: '02', title: 'System UX & Wireframing', desc: 'Design ergonomic dashboard layouts, tables, modals, and flowcharts.' },
      { step: '03', title: 'Full-Stack Engineering', desc: 'Implement frontend UI, server-side APIs, and database schemas.' },
      { step: '04', title: 'Security & QA Audits', desc: 'Audit authorization boundaries, edge cases, session timeouts, and load resilience.' },
      { step: '05', title: 'Staging & Rollout', desc: 'Deploy to secure cloud environments with ongoing monitoring and support.' }
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL / SQLite', 'WebSockets', 'Tailwind CSS'],
    pricingStarting: 'Custom Quote',
    pricingNote: 'Web applications are scoped to your exact business workflows and data requirements. We provide transparent milestones.',
    relevantProjectId: 'novia',
    relevantProjectLabel: 'Concept Project',
    faqs: [
      {
        question: 'How do you price and estimate a web application project?',
        answer: 'Web applications are scoped based on functional modules (e.g. auth, dashboard, database, roles, external APIs). We provide a detailed architectural specification and milestone-based quotation.'
      },
      {
        question: 'Can our web application connect to our existing database or CRM?',
        answer: 'Yes. We specialize in building secure REST and GraphQL API connectors to integrate with existing databases, third-party software, and internal tools.'
      },
      {
        question: 'How is user data and role security managed?',
        answer: 'We implement industry-standard token security, encrypted storage, HTTPS enforcement, and strict server-validated role permissions.'
      },
      {
        question: 'Do you provide maintenance and updates after launch?',
        answer: 'Yes. We offer ongoing maintenance agreements, feature sprint additions, and infrastructure monitoring.'
      }
    ],
    ctaText: 'Discuss Your Web Application →'
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    route: '/services/ui-ux-design',
    number: '03',
    title: 'UI/UX Design',
    shortDesc: 'Clear, refined interfaces and behavioral user experiences focused on usability and business goals.',
    heroTitle: 'Interfaces That Look Good. Experiences That Make Sense.',
    heroSubtitle: 'PRIRAJ GROUP crafts intuitive, human-centered digital interfaces that eliminate user friction and turn visitors into loyal customers.',
    fullDesc: 'We unite cognitive psychology, typographic hierarchy, and modern design systems to build digital products that feel effortless to navigate and visually unforgettable.',
    offerings: [
      { title: 'User Research', desc: 'Investigating audience needs, competitor friction points, and key behavioral motivations.' },
      { title: 'Information Architecture', desc: 'Organizing content hierarchy and navigation pathways so users find what they need instantly.' },
      { title: 'User Flows', desc: 'Mapping step-by-step paths from first landing to successful conversion and checkout.' },
      { title: 'Wireframes', desc: 'Low-fidelity structural blueprints establishing spatial balance before visual styling.' },
      { title: 'High-Fidelity UI', desc: 'Pixel-perfect interface design with custom typography, iconography, and color palettes.' },
      { title: 'Responsive Design', desc: 'Ergonomic layouts tailored specifically for touch screens, tablets, and desktop displays.' },
      { title: 'Design Systems', desc: 'Scalable component libraries, design tokens, and style guides ensuring brand consistency.' },
      { title: 'Interactive Prototypes', desc: 'Clickable prototypes that let you experience the product before writing any code.' },
      { title: 'Developer Handoff', desc: 'Clean design token specs, asset exports, and spacing annotations for seamless engineering.' }
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
    relevantProjectId: '75-hard-challenge',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'What is the real difference between UI and UX?',
        answer: 'UX (User Experience) is the underlying structure: how the product functions, user flows, friction removal, and how easily a user reaches their goal. UI (User Interface) is the visual craft: typography, colors, button styles, visual polish, and brand aesthetics.'
      },
      {
        question: 'Will I be able to click through an interactive prototype before development?',
        answer: 'Yes. We deliver interactive prototypes where you can test navigation, button states, and screen transitions before engineering commences.'
      },
      {
        question: 'Do you provide the complete design files in Figma?',
        answer: 'Yes. All design tokens, component variants, wireframes, and vector assets are handed over with full ownership.'
      },
      {
        question: 'Can you redesign our existing website or software?',
        answer: 'Yes. We perform heuristic UX audits on existing platforms to identify conversion bottlenecks and deliver a modern redesign.'
      }
    ],
    ctaText: 'Start a UI/UX Project →'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    route: '/services/ecommerce',
    number: '04',
    title: 'E-commerce Development',
    shortDesc: 'High-converting online stores with product catalogs, shopping carts, checkout funnels, and payments.',
    heroTitle: 'Online Stores Built to Turn Browsers Into Customers.',
    heroSubtitle: 'PRIRAJ GROUP creates fast, secure, and conversion-optimized e-commerce platforms designed to showcase your products and maximize sales.',
    fullDesc: 'We develop complete online stores tailored to drive transactions, manage product inventories, process secure multi-currency payments, and provide smooth checkout experiences across mobile and desktop.',
    offerings: [
      { title: 'Storefront Design', desc: 'Bespoke brand storefronts that stand out from generic out-of-the-box store templates.' },
      { title: 'Product Pages', desc: 'Compelling product showcases with zoomable galleries, variant pickers, and clear CTA buttons.' },
      { title: 'Product Catalog', desc: 'Organized category architecture, faceted search filters, and instant sorting.' },
      { title: 'Shopping Cart', desc: 'Frictionless slide-out cart drawers, order summaries, and coupon application.' },
      { title: 'Checkout Funnel', desc: 'Distraction-free, multi-step checkout designed to minimize cart abandonment.' },
      { title: 'Payment Integration', desc: 'Secure integrations with Razorpay, Stripe, UPI, credit/debit cards, and wallets.' },
      { title: 'Order Management', desc: 'Intuitive order tracking, automated customer notifications, and status updates.' },
      { title: 'Admin Features', desc: 'Easy-to-use backend for uploading inventory, updating pricing, and checking sales analytics.' },
      { title: 'Responsive Experience', desc: 'Lightning-fast mobile checkout optimized for on-the-go smartphone shoppers.' },
      { title: 'Performance and SEO', desc: 'Schema product markup for Google shopping cards and instant image loading.' }
    ],
    deliverables: [
      'Complete Custom Storefront',
      'Product Detail & Category Pages',
      'Cart & Single-Page Checkout Funnel',
      'Payment Gateway Integration',
      'Customer Order & Inventory Admin',
      'Security & Speed Optimization'
    ],
    capabilities: [
      'Conversion Rate Optimization (CRO)',
      'Secure PCI-DSS Compliant Payments',
      'Automated Order Emails & Invoicing',
      'Mobile-Optimized Checkout Ergonomics'
    ],
    process: [
      { step: '01', title: 'Product & Catalog Planning', desc: 'Review SKU volume, categories, shipping requirements, and payment providers.' },
      { step: '02', title: 'Storefront UI & Cart UX', desc: 'Design high-converting product pages, collection filters, and checkout flows.' },
      { step: '03', title: 'Store Engineering', desc: 'Develop responsive frontends, inventory hooks, and shopping cart logic.' },
      { step: '04', title: 'Gateway & Sandbox QA', desc: 'Perform live test transactions, order simulations, and security validation.' },
      { step: '05', title: 'Go Live & Store Handoff', desc: 'Launch the store, verify domain SSL, and provide admin management guidance.' }
    ],
    technologies: ['React', 'JavaScript', 'Stripe / Razorpay', 'Headless E-commerce', 'Tailwind CSS', 'Secure Webhooks'],
    pricingStarting: 'Starting from ₹40,000–₹70,000+',
    pricingNote: 'Final pricing depends on SKU volume, custom checkout requirements, and third-party integrations.',
    faqs: [
      {
        question: 'Which payment gateways can you integrate?',
        answer: 'We integrate Stripe, Razorpay, UPI, credit/debit cards, net banking, PayPal, and regional gateways based on your business location and customer base.'
      },
      {
        question: 'Is it easy for me to add new products and manage orders?',
        answer: 'Yes. We deliver a clean, intuitive administrative interface where you can add products, upload images, manage prices, and view customer orders effortlessly.'
      },
      {
        question: 'How do you ensure checkout is fast on mobile phones?',
        answer: 'We optimize touch ergonomics, minimize required checkout fields, and implement autofill and quick payment methods (like UPI/Apple Pay) to reduce drop-offs.'
      },
      {
        question: 'Will my products appear in Google Search results?',
        answer: 'Yes. We implement schema.org Product and Offer structured data so your product names, pricing, and availability display clearly in search engine rich results.'
      }
    ],
    ctaText: 'Build My Store →'
  },
  {
    id: 'branding',
    slug: 'branding',
    route: '/services/branding',
    number: '05',
    title: 'Branding & Digital Identity',
    shortDesc: 'Strategic visual identities, logos, typography systems, and digital brand directions that build immediate trust.',
    heroTitle: 'Build a Brand People Remember.',
    heroSubtitle: 'PRIRAJ GROUP creates distinctive, premium visual systems and digital brand guidelines that command authority and stand the test of time.',
    fullDesc: 'We define cohesive brand systems that set businesses apart in competitive markets, combining custom typography, color systems, iconography, and digital style guides that seamlessly translate to web and mobile.',
    offerings: [
      { title: 'Logo Design', desc: 'Minimalist, memorable primary and secondary brand marks engineered for digital screens and print.' },
      { title: 'Visual Identity', desc: 'Comprehensive aesthetic direction defining tone, mood, texture, and visual weight.' },
      { title: 'Color Palette', desc: 'Carefully balanced primary, secondary, and accent color codes optimized for digital contrast.' },
      { title: 'Typography', desc: 'Selected display and body font pairings establishing character, hierarchy, and effortless readability.' },
      { title: 'Brand Guidelines', desc: 'A clean reference manual specifying logo clearances, spacing rules, and usage constraints.' },
      { title: 'Social Media Identity', desc: 'Profile avatars, banner templates, and post visual guidelines ensuring cross-channel harmony.' },
      { title: 'Digital Brand Direction', desc: 'UI aesthetic rules for digital platforms, marketing websites, and application interfaces.' },
      { title: 'Website Visual Identity', desc: 'Harmonizing digital branding specifically for high-impact web presence and conversion.' }
    ],
    deliverables: [
      'Master Vector Logo Suite (SVG, PNG, EPS)',
      'Digital Brand Guidelines PDF',
      'Typography & Color Contrast System',
      'Iconography & Visual Asset Library',
      'Social Media Kit & Digital Assets',
      'Website Visual Design Rules'
    ],
    capabilities: [
      'High-End Modern Art Direction',
      'Mathematical Vector Geometry',
      'Cross-Channel Digital Consistency',
      'Timeless Minimalist Aesthetic'
    ],
    process: [
      { step: '01', title: 'Brand Positioning', desc: 'Clarify target audience perception, market competitors, and core company values.' },
      { step: '02', title: 'Creative Direction', desc: 'Explore visual directions, typographic tones, and mood boards.' },
      { step: '03', title: 'Logo & Palette Craft', desc: 'Design vector marks, responsive lockups, and digital color systems.' },
      { step: '04', title: 'System Applications', desc: 'Apply branding to website mockups, digital cards, and social profiles.' },
      { step: '05', title: 'Brand Manual Delivery', desc: 'Package all vector assets, guidelines, and font rules into a comprehensive package.' }
    ],
    technologies: ['Vector Suite', 'Typography Engines', 'Figma', 'Digital Design Tokens'],
    pricingStarting: 'Custom Quote / Integrated with Web',
    pricingNote: 'Branding can be commissioned independently or combined with web design and development.',
    relevantProjectId: 'influence',
    relevantProjectLabel: 'Selected Project',
    faqs: [
      {
        question: 'What file formats will I receive for my logo and brand assets?',
        answer: 'You receive vector source files (SVG, EPS, PDF) for infinite scalability without quality loss, plus high-resolution PNGs with transparent backgrounds for all digital uses.'
      },
      {
        question: 'Can branding be done alongside our new website development?',
        answer: 'Yes. Designing your brand identity and website together creates the strongest, most unified digital experience for your customers.'
      },
      {
        question: 'Do you provide guidelines for social media and marketing use?',
        answer: 'Yes. Our brand manuals include specific rules for profile pictures, banner dimensions, color contrast, and font usage.'
      }
    ],
    ctaText: 'Build My Brand →'
  },
  {
    id: 'custom-digital-solutions',
    slug: 'custom-digital-solutions',
    route: '/services/custom-digital-solutions',
    number: '06',
    title: 'Custom Digital Solutions',
    shortDesc: 'Bespoke engineering for unique digital requirements, custom APIs, automated workflows, and internal tools.',
    heroTitle: 'Have a Different Digital Challenge?',
    heroSubtitle: 'PRIRAJ GROUP solves complex technical requirements that do not fit into standard off-the-shelf software packages.',
    fullDesc: 'We partner with businesses to architect and implement specialized digital workflows, API bridges, AI integrations, data pipelines, and internal tools designed around your exact operational hurdles.',
    offerings: [
      { title: 'AI Integrations', desc: 'Connecting modern language and computer vision models into your web applications and workflows.' },
      { title: 'Automation', desc: 'Streamlining repetitive manual business processes into automated, zero-error background pipelines.' },
      { title: 'APIs', desc: 'Designing secure, high-throughput REST and WebSocket APIs tailored for custom applications.' },
      { title: 'Internal Business Tools', desc: 'Custom portals for managing team workflows, customer records, and operational tasks.' },
      { title: 'Custom Software', desc: 'Tailor-engineered software solutions built from the ground up for your specific business logic.' },
      { title: 'Third-Party Integrations', desc: 'Connecting CRMs, payment gateways, ERPs, inventory software, and analytics services.' },
      { title: 'Digital Workflow Solutions', desc: 'Custom approval loops, automated document generation, and client onboarding funnels.' }
    ],
    deliverables: [
      'Technical Architecture Blueprint',
      'Custom API & Backend Service Scaffolding',
      'Third-Party Service Connectors',
      'Automated Background Task Pipelines',
      'System Documentation & API Schemas',
      'Ongoing Technical Advisory & SLA'
    ],
    capabilities: [
      'Zero-Downtime Infrastructure Design',
      'Secure Token & Webhook Verification',
      'Asynchronous Event-Driven Architecture',
      'Direct Senior Developer Collaboration'
    ],
    process: [
      { step: '01', title: 'Technical Problem Immersion', desc: 'Deep-dive into your operational bottleneck, data flow, and exact system needs.' },
      { step: '02', title: 'Solution Architecture', desc: 'Design an efficient, secure technical roadmap and system integration blueprint.' },
      { step: '03', title: 'Agile Implementation', desc: 'Engineer custom software modules with clean code and rigorous type safety.' },
      { step: '04', title: 'System QA & Load Testing', desc: 'Validate error handling, rate limiting, data integrity, and API reliability.' },
      { step: '05', title: 'Deployment & Monitoring', desc: 'Launch into production with error telemetry and direct technical support.' }
    ],
    technologies: ['JavaScript', 'Node.js', 'PostgreSQL', 'REST / GraphQL', 'WebSockets', 'Cloud Infrastructure'],
    pricingStarting: 'Custom Quote',
    pricingNote: 'Priced transparently based on project complexity, integrations, and milestones. No hidden fees.',
    faqs: [
      {
        question: 'How do we begin if our digital requirement is non-standard?',
        answer: 'You can contact us with a brief summary of what your business is trying to accomplish. We will review your requirements, conduct a scoping discussion, and recommend an architectural path.'
      },
      {
        question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
        answer: 'Yes. We respect intellectual property and are happy to execute an NDA before reviewing proprietary requirements.'
      },
      {
        question: 'Can you integrate with our legacy software or proprietary database?',
        answer: 'Yes. We frequently build custom API layers and database bridges that allow legacy systems to safely communicate with modern web interfaces.'
      }
    ],
    ctaText: 'Discuss Your Idea →'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '75-hard-challenge',
    title: '75 HARD CHALLENGE',
    category: 'Mobile App / Fitness / Productivity',
    projectType: 'Mobile Application · Fitness / Productivity',
    year: '2025',
    image: '/assets/projects/75-hard-app.png',
    badgeType: 'REAL PROJECT',
    headline: 'A challenge-focused mobile experience designed to help users track daily discipline, routines, progress, and challenge completion.',
    description: 'A challenge-focused mobile experience designed to help users track daily discipline, routines, progress, and challenge completion.',
    overview: 'The 75 Hard program requires absolute daily discipline: two 45-minute workouts (one outdoors), 1 gallon of water, clean diet with zero cheats or alcohol, 10 pages of non-fiction reading, and a daily progress photo. Missing any single task resets the streak to Day 1. This mobile app was engineered specifically to manage this strict protocol without clutter or distraction.',
    problem: 'Users attempting the challenge frequently fail because standard habit apps lack support for dual non-consecutive workout timers, gallon hydration division, and private photo streak verification with strict reset enforcement.',
    approach: 'Engineered a focused, zero-friction mobile dashboard featuring a single daily completion ring, one-tap task logging with timestamp verification, offline SQLite persistence, and an encrypted local photo journal.',
    design: 'High-contrast charcoal dark mode, bold progress ring typography, warm gold milestone highlights, and thumb-accessible navigation designed for quick check-ins during training.',
    keyFeatures: [
      '6-Rule Daily Verification Checklist with Instant Validation',
      'Dual 45-Minute Workout Timers with Outdoor GPS/Interval Tracking',
      '1-Gallon Hydration Quick-Add Progress Meter',
      'Secure Local Progress Photo Journal Vault',
      'Automatic Day Counter & Strict Day 1 Reset Protocol on Incomplete Rules'
    ],
    technologies: ['React Native', 'JavaScript', 'Tailwind CSS', 'SQLite Local DB', 'Device Camera API'],
    finalResult: 'Delivered an intuitive native tracker with zero ads, fast offline startup, and reliable streak logging that keeps users accountable throughout all 75 consecutive days.',
    tags: ['Mobile App', 'Fitness', 'Productivity', 'JavaScript', 'Offline First']
  },
  {
    id: 'novia',
    title: 'NOVIA',
    category: 'Social / Mobile App / Digital Product',
    projectType: 'Mobile & Web Platform · Social / Digital Product',
    year: '2025',
    image: '/assets/projects/novia-app.png',
    badgeType: 'CONCEPT PROJECT',
    headline: 'A modern social product concept focused on profiles, content, interaction, and a refined user experience.',
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
    technologies: ['React', 'JavaScript', 'WebSockets', 'Tailwind CSS', 'WebRTC Audio', 'Encrypted Storage'],
    finalResult: 'Engineered a functional prototype and responsive web experience demonstrating high-trust social interactions with sub-50ms message latency and complete privacy autonomy.',
    tags: ['Social Platform', 'Mobile App', 'Digital Product', 'WebSockets', 'UI/UX Design']
  },
  {
    id: 'influence',
    title: 'INFLUENCE WEBSITE',
    category: 'Website / UI/UX / Web Development',
    projectType: 'Website · UI/UX / Web Development',
    year: '2026',
    image: '/assets/projects/influence-website.png',
    badgeType: 'REAL PROJECT',
    headline: 'A modern website experience designed with a strong visual identity, responsive layout, and conversion-focused user experience.',
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
    technologies: ['Next.js / React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Headless CMS Architecture'],
    finalResult: 'Constructed an authoritative, responsive digital experience that delivers exceptional typographic poise, instantaneous page response, and effortless content management.',
    tags: ['Website', 'Web Development', 'UI/UX', 'Digital Experience', 'Next.js']
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
    ctaText: 'START YOUR PROJECT →',
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
    ctaText: 'START YOUR PROJECT →',
    isPopular: false
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
    ctaText: 'START YOUR PROJECT →',
    isPopular: true
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
    ctaText: 'START YOUR PROJECT →',
    isPopular: false
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    number: '01 — DISCOVER',
    title: 'DISCOVER',
    desc: 'Understand the business, audience, requirements and goals.',
    keyOutputs: ['Business Objective Alignment', 'Audience & Competitor Discovery', 'Clear Scope & Technical Roadmap']
  },
  {
    step: '02',
    number: '02 — PLAN',
    title: 'PLAN',
    desc: 'Define structure, functionality, technology and project scope.',
    keyOutputs: ['Information Architecture', 'User Journey Mapping', 'Technology Stack & Milestone Plan']
  },
  {
    step: '03',
    number: '03 — DESIGN',
    title: 'DESIGN',
    desc: 'Create the UI/UX and visual direction.',
    keyOutputs: ['Custom Wireframes', 'High-Fidelity Responsive Mockups', 'Interactive Prototypes & Review']
  },
  {
    step: '04',
    number: '04 — DEVELOP',
    title: 'DEVELOP',
    desc: 'Build, test, optimize and integrate the product.',
    keyOutputs: ['Clean JavaScript / React Codebase', 'Fast-Loading Responsive Ergonomics', 'Third-Party & Form Integrations']
  },
  {
    step: '05',
    number: '05 — LAUNCH',
    title: 'LAUNCH',
    desc: 'Deploy the product and provide post-launch support.',
    keyOutputs: ['Cross-Device QA & Speed Audits', 'Zero-Downtime Production Deployment', 'Post-Launch Tuning & Direct Support']
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
  'Website Development',
  'Web Applications',
  'UI/UX Design',
  'E-commerce Development',
  'Branding & Digital Identity',
  'Custom Digital Solutions'
];
