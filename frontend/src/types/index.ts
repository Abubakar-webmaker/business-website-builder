export interface BusinessFormData {
  businessName: string;
  industry: string;
  tagline: string;
  description: string;
  services: string;
  location: string;
  phone: string;
  email: string;
  template: "modern" | "classic" | "minimal" | "bold";
}

export interface GeneratedContent {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyUs: {
    title: string;
    points: { title: string; description: string }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
  };
}

export interface ApiResponse {
  success: boolean;
  content: GeneratedContent;
  businessData: {
    businessName: string;
    industry: string;
    location: string;
    phone: string;
    email: string;
    template: string;
  };
}