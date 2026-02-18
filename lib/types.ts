export interface NavItem {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface PainCard {
  title: string;
  description: string;
}

export interface ProcessStep {
  name: string;
  label: string;
  description: string;
}

export interface AssetCard {
  title: string;
  description: string;
}

export interface ServiceTier {
  label: string;
  name: string;
  subtitle: string;
  price: string;
  timeline: string;
  valueLine: string;
  highlighted?: boolean;
  anchorId: string;
}

export interface AddOn {
  name: string;
  price: string;
  forWhom: string;
  what: string;
  why: string;
}

export interface SprintDay {
  day: string;
  description: string;
}

export interface EngineOutput {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  role: string;
}

export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
}

export interface SocialProof {
  logos: ClientLogo[];
  testimonials: Testimonial[];
  sectionVisible: boolean;
}

export interface StartFormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  challenge: string;
}
