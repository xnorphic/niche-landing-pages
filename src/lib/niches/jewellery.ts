import type { NicheConfig } from "@/lib/types";
import { imageSeed } from "@/lib/utils";

export const jewelleryConfig: NicheConfig = {
  id: "jewellery",
  slug: "jewellery",
  businessName: "{{BRAND_NAME}}",
  city: "{{CITY}}",
  tagline: "Fine jewellery shaped by hand, finished for a lifetime.",
  designRead:
    "Chrome + Garnet — cold-luxury boutique for custom design and fine retail.",
  primaryCta: "Book a consultation",
  secondaryCta: "Ask about a piece",
  bookingIntent: "Book a consultation",
  questionIntent: "Ask about a piece",
  defaultTheme: "light",
  schemaType: "JewelryStore",
  accentPreview: "#7A2340",
  services: [
    {
      slug: "custom-design",
      title: "Custom & Bespoke Design",
      description: "Collaborative sketches through CAD to hand-finished one-of-a-kind pieces.",
    },
    {
      slug: "engagement",
      title: "Engagement & Wedding",
      description: "Ring settings, stone sourcing, and wedding band pairings.",
    },
    {
      slug: "collection",
      title: "Fine Jewellery Collection",
      description: "Curated ready-to-wear necklaces, earrings, and bracelets.",
    },
    {
      slug: "repairs",
      title: "Repairs & Restoration",
      description: "Prong retipping, chain repair, and heirloom remounting.",
    },
    {
      slug: "appraisals",
      title: "Appraisals & Insurance Documentation",
      description: "Certified valuations for insurance and estate planning.",
    },
    {
      slug: "consultations",
      title: "Private Consultations",
      description: "One-on-one appointments in a private viewing salon.",
    },
  ],
  beforeAfter: [
    {
      before: imageSeed("jewellery-restore-before", 1200, 800),
      after: imageSeed("jewellery-restore-after", 1200, 800),
      caption: "Heirloom ring remount with new prongs and restored band.",
    },
    {
      before: imageSeed("jewellery-reset-before", 1200, 800),
      after: imageSeed("jewellery-reset-after", 1200, 800),
      caption: "Stone reset and polish on a vintage pendant.",
    },
  ],
  beforeAfterDisclosure:
    "Restoration photography shows actual client pieces with consent. New retail items are not presented as before-and-after transformations.",
  testimonials: [
    {
      quote:
        "They rebuilt my grandmother's ring without losing its character. The new setting feels like it was always meant to be there.",
      name: "Anika Desai",
      role: "Restoration client",
    },
    {
      quote:
        "The consultation was unhurried. I saw three stone options under natural light before making a decision.",
      name: "Thomas Wright",
      role: "Engagement ring client",
    },
    {
      quote:
        "Appraisal documentation was thorough enough for my insurer on the first submission.",
      name: "Claire Fontaine",
      role: "Appraisal client",
    },
    {
      quote:
        "Custom design from sketch to delivery took six weeks. Updates arrived at every milestone.",
      name: "Yuki Tanaka",
      role: "Bespoke design client",
    },
  ],
  gallery: [
    {
      src: imageSeed("jewellery-macro-ring", 900, 1200),
      alt: "Macro photograph of a garnet-accented engagement ring on velvet",
    },
    {
      src: imageSeed("jewellery-necklace", 900, 600),
      alt: "Platinum necklace with pavé detail displayed on a chrome stand",
    },
    {
      src: imageSeed("jewellery-workbench", 900, 600),
      alt: "Jeweller workbench with tools and a piece in progress",
    },
    {
      src: imageSeed("jewellery-salon", 900, 1200),
      alt: "Private consultation salon with soft lighting and display cases",
    },
  ],
  trustChips: [
    { label: "GIA-certified gemologists", mock: false },
    { label: "{{YEARS_ACTIVE}} years in {{CITY}}", mock: true },
    { label: "Insured shipping available", mock: false },
  ],
  footerTrust: {
    license: "Business Registration {{REGISTRATION_NUMBER}}",
    address: "{{STREET_ADDRESS}}, {{CITY}} {{POSTAL_CODE}}",
    privacyNote: "Secure payment processing. In-house appraisal credentials on request.",
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
      name: "interest",
      label: "Interest category",
      options: ["Engagement", "Custom", "Repair", "Browsing"],
      required: true,
    },
    {
      type: "select",
      name: "service",
      label: "Service of interest",
      options: [
        "Custom & Bespoke Design",
        "Engagement & Wedding",
        "Fine Jewellery Collection",
        "Repairs & Restoration",
        "Appraisals",
        "Private Consultations",
      ],
      required: true,
    },
    { type: "text", name: "contactTime", label: "Preferred contact time" },
    { type: "textarea", name: "note", label: "Tell us about the piece" },
  ],
  about: {
    headline: "Jewellery that carries meaning beyond the metal.",
    body: "Our atelier pairs gemological expertise with bench craftsmanship, whether you are commissioning a bespoke ring or restoring a family heirloom.",
  },
  seo: {
    title: "{{Category}} Jewellery in {{City}} | {{Brand Name}}",
    description:
      "Custom engagement rings, fine jewellery, and expert restoration in {{City}}. Book a private consultation today.",
    keyword: "fine jewellery store",
  },
  navAnchors: [
    { id: "services", label: "Collections" },
    { id: "restoration", label: "Restoration" },
    { id: "testimonials", label: "Clients" },
    { id: "about", label: "Atelier" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "8px", button: "9999px", input: "8px" },
};
