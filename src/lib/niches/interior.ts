import type { NicheConfig } from "@/lib/types";
import { imageSeed } from "@/lib/utils";

export const interiorConfig: NicheConfig = {
  id: "interior",
  slug: "interior",
  businessName: "{{STUDIO_NAME}}",
  city: "{{CITY}}",
  tagline: "Spaces shaped with intention, finished with craft.",
  designRead:
    "Editorial Ember — moody luxury studio for design-conscious residential and commercial clients.",
  primaryCta: "Start a project",
  secondaryCta: "Ask a question",
  bookingIntent: "Start a project",
  questionIntent: "Ask a question",
  defaultTheme: "dark",
  schemaType: "LocalBusiness",
  accentPreview: "#C4622E",
  services: [
    {
      slug: "full-home",
      title: "Full-Home Interiors",
      description: "End-to-end residential transformations from concept through install.",
    },
    {
      slug: "kitchen-bath",
      title: "Kitchen & Bath Design",
      description: "Functional layouts, material curation, and bespoke fixture sourcing.",
    },
    {
      slug: "commercial",
      title: "Commercial & Hospitality",
      description: "Guest-forward environments for restaurants, hotels, and retail.",
    },
    {
      slug: "space-planning",
      title: "Space Planning & 3D Rendering",
      description: "Measured layouts and photoreal previews before construction begins.",
    },
    {
      slug: "custom-furniture",
      title: "Custom Furniture & Sourcing",
      description: "Artisan pieces and vintage finds selected for each project palette.",
    },
    {
      slug: "styling",
      title: "Styling & Staging",
      description: "Final-layer styling for move-in day or pre-listing presentation.",
    },
  ],
  beforeAfter: [
    {
      before: imageSeed("interior-living-before", 1400, 900),
      after: imageSeed("interior-living-after", 1400, 900),
      caption: "Living room transformation with layered textures and warm lighting.",
    },
    {
      before: imageSeed("interior-kitchen-before", 1400, 900),
      after: imageSeed("interior-kitchen-after", 1400, 900),
      caption: "Kitchen remodel with custom millwork and stone surfaces.",
    },
  ],
  beforeAfterDisclosure:
    "Photography shows completed client projects with consent. Renderings are never presented as finished work.",
  testimonials: [
    {
      quote:
        "They listened to how we actually live, not how a magazine thinks we should. Every room feels considered.",
      name: "Amara Singh",
      role: "Residential client, full-home renovation",
    },
    {
      quote:
        "The 3D renders matched the finished kitchen within inches. No surprises during construction.",
      name: "Marcus Webb",
      role: "Kitchen & bath client",
    },
    {
      quote:
        "Our restaurant opening timeline was tight. The team coordinated vendors and kept the aesthetic cohesive.",
      name: "Lina Ortiz",
      role: "Hospitality project owner",
    },
    {
      quote:
        "Staging helped our listing sell in two weeks. Buyers commented on the warmth before they saw the floor plan.",
      name: "Helen Park",
      role: "Real estate staging client",
    },
  ],
  gallery: [
    {
      src: imageSeed("interior-penthouse", 900, 1200),
      alt: "Penthouse living room with floor-to-ceiling windows and terracotta accent textiles",
    },
    {
      src: imageSeed("interior-dining", 900, 600),
      alt: "Dining room with custom walnut table and sculptural pendant lighting",
    },
    {
      src: imageSeed("interior-bedroom", 900, 1200),
      alt: "Primary bedroom with layered linen bedding and muted earth-tone palette",
    },
    {
      src: imageSeed("interior-commercial", 900, 600),
      alt: "Commercial lounge with bespoke seating and ambient accent lighting",
    },
  ],
  trustChips: [
    { label: "{{ASSOCIATION}} member", mock: true },
    { label: "{{YEARS_ACTIVE}} years in practice", mock: true },
    { label: "Insured for commercial work", mock: false },
  ],
  footerTrust: {
    license: "Business Registration {{REGISTRATION_NUMBER}}",
    address: "{{STREET_ADDRESS}}, {{CITY}} {{POSTAL_CODE}}",
    privacyNote: "Project details and client information remain confidential.",
    reviewLink: "Read our reviews",
  },
  social: [
    { platform: "instagram", url: "{{INSTAGRAM_URL}}" },
    { platform: "facebook", url: "{{FACEBOOK_URL}}" },
    { platform: "tiktok", url: "{{TIKTOK_URL}}" },
  ],
  bookingFields: [
    { type: "text", name: "name", label: "Full name", required: true },
    { type: "tel", name: "phone", label: "Phone number", required: true },
    {
      type: "select",
      name: "projectType",
      label: "Project type",
      options: [
        "Full-Home Interiors",
        "Kitchen & Bath Design",
        "Commercial & Hospitality",
        "Space Planning & 3D Rendering",
        "Custom Furniture & Sourcing",
        "Styling & Staging",
      ],
      required: true,
    },
    {
      type: "select",
      name: "budget",
      label: "Budget range",
      options: ["Under $50k", "$50k–$150k", "$150k–$300k", "$300k+"],
    },
    {
      type: "select",
      name: "timeline",
      label: "Timeline",
      options: ["ASAP", "3–6 months", "6–12 months", "Just exploring"],
    },
    { type: "textarea", name: "note", label: "Project notes" },
  ],
  about: {
    headline: "Design rooted in how you move through a room.",
    body: "We combine spatial planning, material research, and artisan sourcing into one studio workflow, so your project reads cohesive from first sketch to final styling.",
  },
  seo: {
    title: "{{Service}} Interior Designer in {{City}} | {{Studio Name}}",
    description:
      "Full-service residential and commercial interior design in {{City}}. Start your project with a studio that handles concept through install.",
    keyword: "interior designer",
  },
  navAnchors: [
    { id: "services", label: "Services" },
    { id: "transformations", label: "Work" },
    { id: "testimonials", label: "Clients" },
    { id: "about", label: "Studio" },
    { id: "gallery", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "4px", button: "9999px", input: "4px" },
};
