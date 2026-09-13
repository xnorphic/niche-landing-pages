import type { NicheConfig } from "@/lib/types";
import { imageSeed } from "@/lib/utils";

export const hvacConfig: NicheConfig = {
  id: "hvac",
  slug: "hvac",
  businessName: "{{COMPANY_NAME}} HVAC",
  city: "{{CITY}}",
  tagline: "Reliable comfort when your system cannot wait.",
  designRead:
    "Steel + Ember — dependable modern trades site for urgent and planned HVAC needs.",
  primaryCta: "Request service",
  secondaryCta: "Ask a question",
  bookingIntent: "Request service",
  questionIntent: "Ask a question",
  defaultTheme: "light",
  schemaType: "HVACBusiness",
  accentPreview: "#DB6A16",
  services: [
    {
      slug: "ac-installation",
      title: "AC Installation & Replacement",
      description: "Right-sized units, clean installs, and manufacturer warranty registration.",
    },
    {
      slug: "heating-repair",
      title: "Heating & Furnace Repair",
      description: "Diagnosis and repair for furnaces, heat pumps, and boiler systems.",
    },
    {
      slug: "duct-cleaning",
      title: "Duct Cleaning & Sealing",
      description: "Remove buildup, seal leaks, and improve airflow through your home.",
    },
    {
      slug: "maintenance",
      title: "Preventive Maintenance Plans",
      description: "Seasonal tune-ups that extend equipment life and prevent breakdowns.",
    },
    {
      slug: "emergency",
      title: "Emergency 24/7 Service",
      description: "After-hours dispatch for no-heat and no-cool emergencies.",
    },
    {
      slug: "air-quality",
      title: "Indoor Air Quality Systems",
      description: "Filtration, humidifiers, and UV systems for healthier indoor air.",
    },
  ],
  beforeAfter: [
    {
      before: imageSeed("hvac-unit-before", 1200, 800),
      after: imageSeed("hvac-unit-after", 1200, 800),
      caption: "Central AC replacement with new condenser and line set.",
    },
    {
      before: imageSeed("hvac-duct-before", 1200, 800),
      after: imageSeed("hvac-duct-after", 1200, 800),
      caption: "Duct cleaning and sealing in a two-story residential system.",
    },
  ],
  beforeAfterDisclosure:
    "Job scope and equipment type noted in captions. Efficiency claims require verified manufacturer data.",
  testimonials: [
    {
      quote:
        "Our AC died on a Friday night. A technician arrived within two hours and had us cooling by midnight.",
      name: "Robert Hayes",
      role: "Homeowner, emergency repair",
    },
    {
      quote:
        "They explained SEER ratings without pushing the most expensive unit. The install was spotless.",
      name: "Michelle Torres",
      role: "AC replacement customer",
    },
    {
      quote:
        "Duct cleaning made a visible difference in dust levels. The team showed before photos from the camera scope.",
      name: "Kevin Brooks",
      role: "Duct cleaning customer",
    },
    {
      quote:
        "The maintenance plan caught a failing capacitor before summer peak. Saved us an emergency call.",
      name: "Sandra Li",
      role: "Maintenance plan member",
    },
  ],
  gallery: [
    {
      src: imageSeed("hvac-tech-install", 900, 600),
      alt: "HVAC technician installing a new condenser unit on a residential pad",
    },
    {
      src: imageSeed("hvac-furnace", 900, 600),
      alt: "Furnace maintenance with organized tools and labeled components",
    },
    {
      src: imageSeed("hvac-ductwork", 900, 600),
      alt: "Clean ductwork interior after professional cleaning service",
    },
    {
      src: imageSeed("hvac-van", 900, 600),
      alt: "Branded service van parked at a residential job site",
    },
  ],
  trustChips: [
    { label: "Contractor License {{LICENSE_NUMBER}}", mock: true },
    { label: "{{YEARS_ACTIVE}} years in business", mock: true },
    { label: "Emergency response {{RESPONSE_TIME}}", mock: true },
  ],
  footerTrust: {
    license: "Contractor License {{LICENSE_NUMBER}}",
    address: "{{STREET_ADDRESS}}, {{CITY}} {{POSTAL_CODE}}",
    privacyNote: "Insured and bonded. EPA-certified refrigerant handling.",
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
    { type: "text", name: "address", label: "Service address", required: true },
    {
      type: "select",
      name: "issue",
      label: "Issue type",
      options: [
        "AC Installation & Replacement",
        "Heating & Furnace Repair",
        "Duct Cleaning & Sealing",
        "Preventive Maintenance",
        "Emergency Service",
        "Indoor Air Quality",
      ],
      required: true,
    },
    {
      type: "select",
      name: "urgency",
      label: "Urgency",
      options: ["Emergency", "This week", "Just planning"],
      required: true,
    },
    { type: "textarea", name: "note", label: "Describe the issue" },
  ],
  serviceAreas: [
    "{{CITY}}",
    "{{NEIGHBORHOOD_1}}",
    "{{NEIGHBORHOOD_2}}",
    "{{NEIGHBORHOOD_3}}",
    "{{NEIGHBORHOOD_4}}",
  ],
  about: {
    headline: "Engineering comfort with clear communication.",
    body: "From emergency repairs to full system replacements, our licensed technicians diagnose accurately, quote transparently, and leave your home cleaner than we found it.",
  },
  seo: {
    title: "{{Service}} in {{City}} | {{Company Name}} HVAC",
    description:
      "Emergency HVAC repair, AC installation, and maintenance in {{City}}. Request service from licensed, insured technicians.",
    keyword: "HVAC repair near me",
  },
  navAnchors: [
    { id: "services", label: "Services" },
    { id: "results", label: "Results" },
    { id: "testimonials", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Work" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "16px", button: "9999px", input: "8px" },
};
