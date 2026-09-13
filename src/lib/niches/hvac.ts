import type { NicheConfig } from "@/lib/types";

const av = (g: "men" | "women", n: number) =>
  `https://randomuser.me/api/portraits/${g}/${n}.jpg`;

export const hvacConfig: NicheConfig = {
  id: "hvac",
  slug: "hvac",
  businessName: "Northline Heating & Cooling",
  city: "Denver",

  heroEyebrow: "Denver's dependable comfort team since 2007",
  heroHeadline: "Comfort restored,",
  heroHeadlineAccent: "usually same day.",
  heroSubtext:
    "Licensed HVAC repair, install, and maintenance with upfront pricing and 24/7 emergency response. We show up on time and leave it spotless.",
  heroImage: "/images/hvac-hero.png",

  designRead:
    "Steel + Ember, dependable modern trades site for urgent and planned HVAC needs.",
  primaryCta: "Request service",
  secondaryCta: "(303) 555-0193",
  bookingIntent: "Request service",
  questionIntent: "Ask a question",
  defaultTheme: "light",
  schemaType: "HVACBusiness",
  accentPreview: "#DB6A16",

  reviewSummary: { platform: "Google", score: "4.8", count: "438" },
  avatars: [av("men", 14), av("women", 47), av("men", 62), av("women", 21)],

  servicesHeadline: "Heating and cooling, done right",
  servicesIntro:
    "One licensed team for every season, from emergency no-cool calls to full system replacements.",
  services: [
    {
      slug: "ac-installation",
      title: "AC Install & Replace",
      description:
        "Right-sized, energy-efficient units with clean installs and registered warranties.",
      icon: "Snowflake",
    },
    {
      slug: "heating-repair",
      title: "Heating & Furnace Repair",
      description:
        "Fast diagnosis and repair for furnaces, heat pumps, and boiler systems.",
      icon: "Fire",
    },
    {
      slug: "duct-cleaning",
      title: "Duct Cleaning & Sealing",
      description:
        "Remove buildup, seal leaks, and restore healthy airflow throughout your home.",
      icon: "Wind",
    },
    {
      slug: "maintenance",
      title: "Maintenance Plans",
      description:
        "Seasonal tune-ups that extend equipment life and prevent costly breakdowns.",
      icon: "Gauge",
    },
    {
      slug: "emergency",
      title: "24/7 Emergency Service",
      description:
        "After-hours dispatch for no-heat and no-cool emergencies, any day of the year.",
      icon: "Lightning",
    },
    {
      slug: "air-quality",
      title: "Indoor Air Quality",
      description:
        "Filtration, humidifiers, and UV systems for cleaner, healthier indoor air.",
      icon: "Fan",
    },
  ],

  features: [
    {
      icon: "CheckCircle",
      title: "Upfront pricing",
      description: "Flat-rate quotes before any work begins.",
    },
    {
      icon: "ShieldCheck",
      title: "Licensed & insured",
      description: "EPA-certified, bonded, and background-checked.",
    },
    {
      icon: "Clock",
      title: "Same-day service",
      description: "Most repairs handled the day you call.",
    },
    {
      icon: "Lightning",
      title: "24/7 emergency",
      description: "Real technicians on call, nights and weekends.",
    },
  ],

  statsHeadline: "Denver homeowners have trusted us for over 15 years",
  stats: [
    { value: "18+", label: "Years in business", icon: "Medal" },
    { value: "9,200+", label: "Jobs completed" },
    { value: "24/7", label: "Emergency response" },
    { value: "4.8", label: "Average Google rating" },
  ],

  processHeadline: "How it works",
  processIntro:
    "No mystery fees, no upsells. Just a clear path from your first call to a comfortable home.",
  process: [
    {
      title: "Call & diagnose",
      description:
        "Reach a real person fast. We diagnose accurately, on-site or over the phone.",
      icon: "Phone",
    },
    {
      title: "Transparent quote",
      description:
        "You approve a flat-rate price before we lift a wrench. No surprises later.",
      icon: "CheckCircle",
    },
    {
      title: "Fixed right",
      description:
        "Certified techs complete the work cleanly and back it with a solid warranty.",
      icon: "Wrench",
    },
  ],

  feature: {
    eyebrow: "Why Northline",
    headline: "Comfort you can count on.",
    body:
      "Our licensed technicians diagnose accurately, quote transparently, and treat your home with respect, so a repair or install is one less thing to worry about.",
    bullets: [
      "Flat-rate pricing quoted before we start",
      "EPA-certified refrigerant handling",
      "We leave your home cleaner than we found it",
      "Financing available on new system installs",
    ],
    image: "/images/hvac-service.png",
    badgeValue: "18+",
    badgeLabel: "Years keeping Denver comfortable",
  },

  beforeAfter: [],
  beforeAfterHeadline: "Recent work",
  beforeAfterDisclosure:
    "Job scope and equipment type noted in captions. Efficiency claims require verified manufacturer data.",

  testimonialsHeadline: "What Denver homeowners say",
  testimonials: [
    {
      quote:
        "Our AC died on a Friday night. A technician arrived within two hours and had us cooling by midnight.",
      name: "Robert Hayes",
      role: "Emergency repair",
      rating: 5,
      avatar: av("men", 34),
    },
    {
      quote:
        "They explained SEER ratings without pushing the priciest unit. The install was spotless and on time.",
      name: "Michelle Torres",
      role: "AC replacement",
      rating: 5,
      avatar: av("women", 68),
    },
    {
      quote:
        "Duct cleaning made a visible difference in dust. They showed before-and-after photos from a camera scope.",
      name: "Kevin Brooks",
      role: "Duct cleaning",
      rating: 4,
      avatar: av("men", 85),
    },
    {
      quote:
        "The maintenance plan caught a failing capacitor before the summer peak. Saved us an emergency call.",
      name: "Sandra Li",
      role: "Maintenance member",
      rating: 5,
      avatar: av("women", 50),
    },
    {
      quote:
        "Upfront pricing, friendly crew, and they wore boot covers in the house. Exactly how it should be done.",
      name: "Tom Delaney",
      role: "Furnace repair",
      rating: 5,
      avatar: av("men", 11),
    },
    {
      quote:
        "Called at 6am with no heat. Someone answered, dispatched a tech, and we were warm before the kids woke up.",
      name: "Grace Okoro",
      role: "Emergency heating",
      rating: 5,
      avatar: av("women", 5),
    },
  ],

  galleryHeadline: "Recent work",
  gallery: [],

  trustChips: [
    { label: "CO Master Mechanical #ME-11827", icon: "ShieldCheck", mock: true },
    { label: "18 years in business", icon: "Medal", mock: true },
    { label: "2-hour emergency response", icon: "Lightning", mock: true },
  ],
  footerTrust: {
    license: "CO Master Mechanical License #ME-11827",
    address: "1450 S Broadway, Denver, CO 80210",
    privacyNote: "Insured and bonded. EPA-certified refrigerant handling.",
    reviewLink: "Read our reviews",
  },
  social: [
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "tiktok", url: "https://tiktok.com" },
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
        "AC Install & Replace",
        "Heating & Furnace Repair",
        "Duct Cleaning & Sealing",
        "Maintenance Plan",
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
    "Denver",
    "Aurora",
    "Lakewood",
    "Boulder",
    "Littleton",
    "Centennial",
    "Arvada",
    "Englewood",
  ],

  ctaHeadline: "No heat? No cool? We'll be there.",
  ctaBody:
    "Request service now and reach a real technician fast, with upfront pricing and 24/7 emergency dispatch.",

  about: {
    headline: "Engineering comfort with clear communication.",
    body: "Northline handles everything from emergency repairs to full system replacements, with licensed technicians who diagnose accurately and quote transparently.",
  },
  seo: {
    title: "HVAC Repair & AC Installation in Denver | Northline Heating & Cooling",
    description:
      "24/7 emergency HVAC repair, AC installation, and maintenance in Denver. Upfront pricing, licensed technicians, 4.8 stars from 400+ homeowners.",
    keyword: "hvac repair denver",
  },
  navAnchors: [
    { id: "services", label: "Services" },
    { id: "process", label: "How it works" },
    { id: "testimonials", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "16px", button: "9999px", input: "8px" },
};
