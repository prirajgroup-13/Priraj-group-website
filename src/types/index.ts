export interface ServiceOffering {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  route: string;
  number: string;
  title: string;
  shortDesc: string;
  heroTitle: string;
  heroSubtitle: string;
  fullDesc: string;
  offerings: ServiceOffering[];
  deliverables: string[];
  capabilities: string[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  pricingStarting: string;
  pricingNote?: string;
  relevantProjectId?: string;
  relevantProjectLabel?: 'Selected Project' | 'Concept Project';
  faqs: ServiceFAQ[];
  ctaText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  projectType: string;
  year: string;
  image: string;
  badgeType: 'REAL PROJECT' | 'CONCEPT PROJECT';
  headline: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  design: string;
  keyFeatures: string[];
  technologies: string[];
  finalResult: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  desc: string;
  duration?: string;
  keyOutputs: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  timeline?: string;
  referenceWebsite?: string;
  additionalRequirements?: string;
}

export interface PricingPackage {
  id: string;
  number: string;
  name: string;
  startingRange: string;
  shortRange: string;
  subtitle: string;
  badge?: string;
  includes: string[];
  idealFor?: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  label: string;
  relationship: string;
  photo: string | null;
  initials: string;
  description: string;
  isFounder?: boolean;
}
