export type NicheId = "doctors" | "interior" | "hvac" | "jewellery";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
};

export type BeforeAfterItem = {
  before: string;
  after: string;
  caption: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type PatientJourneyStep = {
  title: string;
  description: string;
};

export type TrustChip = {
  label: string;
  mock?: boolean;
};

export type SocialLink = {
  platform: "instagram" | "facebook" | "tiktok";
  url: string;
};

export type BookingField =
  | { type: "text"; name: string; label: string; required?: boolean }
  | { type: "tel"; name: string; label: string; required?: boolean }
  | { type: "select"; name: string; label: string; options: string[]; required?: boolean }
  | { type: "textarea"; name: string; label: string; required?: boolean };

export type NicheConfig = {
  id: NicheId;
  slug: string;
  businessName: string;
  city: string;
  tagline: string;
  designRead: string;
  primaryCta: string;
  secondaryCta: string;
  bookingIntent: string;
  questionIntent: string;
  chatbotDisclaimer?: string;
  defaultTheme: "light" | "dark" | "system";
  schemaType: string;
  accentPreview: string;
  services: ServiceItem[];
  beforeAfter: BeforeAfterItem[];
  beforeAfterDisclosure: string;
  patientJourney?: PatientJourneyStep[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  trustChips: TrustChip[];
  footerTrust: {
    license: string;
    address: string;
    privacyNote: string;
    reviewLink?: string;
  };
  social: SocialLink[];
  bookingFields: BookingField[];
  serviceAreas?: string[];
  about: { headline: string; body: string };
  seo: { title: string; description: string; keyword: string };
  navAnchors: { id: string; label: string }[];
  radius: { card: string; button: string; input: string };
};
