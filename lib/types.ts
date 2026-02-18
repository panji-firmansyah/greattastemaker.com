export interface NavItem {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface EnginePhase {
  number: string;
  title: string;
  description: string;
}

export interface OutputItem {
  icon: string;
  label: string;
}

export interface CaseStudy {
  badge: string;
  title: string;
  description: string;
  isActive: boolean;
}

export interface ServiceTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  cta: CTAButton;
  highlighted?: boolean;
  badge?: string;
}

export interface AddOn {
  name: string;
  price: string;
  scope: string;
  timeline: string;
  prerequisite?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  website?: string;
  service: string;
  message?: string;
}
