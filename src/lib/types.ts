export type NicheId = "doctors" | "interior" | "hvac" | "jewellery";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: string;
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
  rating: number;
  avatar: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export type PatientJourneyStep = ProcessStep;

export type Stat = {
  value: string;
  label: string;
  icon?: string;
};

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export type TrustChip = {
  label: string;
  icon?: string;
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

export type ReviewSummary = {
  platform: string;
  score: string;
  count: string;
};

export type NicheConfig = {
  id: NicheId;
  slug: string;
  businessName: string;
  city: string;

  // Hero
  heroEyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubtext: string;
  heroImage: string;

  designRead: string;
  primaryCta: string;
  secondaryCta: string;
  bookingIntent: string;
  questionIntent: string;
  chatbotDisclaimer?: string;
  defaultTheme: "light" | "dark" | "system";
  schemaType: string;
  accentPreview: string;

  reviewSummary: ReviewSummary;
  avatars: string[];

  services: ServiceItem[];
  servicesHeadline: string;
  servicesIntro: string;

  features: FeatureItem[];

  stats: Stat[];
  statsHeadline: string;

  process: ProcessStep[];
  processHeadline: string;
  processIntro: string;

  feature: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
    image: string;
    badgeValue: string;
    badgeLabel: string;
  };

  beforeAfter: BeforeAfterItem[];
  beforeAfterHeadline: string;
  beforeAfterDisclosure: string;
  patientJourney?: PatientJourneyStep[];

  testimonials: Testimonial[];
  testimonialsHeadline: string;

  gallery: GalleryImage[];
  galleryHeadline: string;

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

  ctaHeadline: string;
  ctaBody: string;

  about: { headline: string; body: string };
  seo: { title: string; description: string; keyword: string };
  navAnchors: { id: string; label: string }[];
  radius: { card: string; button: string; input: string };
};
