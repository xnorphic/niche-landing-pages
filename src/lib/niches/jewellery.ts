import type { NicheConfig } from "@/lib/types";

const av = (g: "men" | "women", n: number) =>
  `https://randomuser.me/api/portraits/${g}/${n}.jpg`;

export const jewelleryConfig: NicheConfig = {
  id: "jewellery",
  slug: "jewellery",
  businessName: "Halcyon Fine Jewellery",
  city: "San Francisco",

  heroEyebrow: "Bespoke fine jewellery atelier since 1994",
  heroHeadline: "Crafted by hand,",
  heroHeadlineAccent: "made to be kept.",
  heroSubtext:
    "Custom engagement rings, fine jewellery, and expert restoration, designed with you in a private salon and finished at our own bench.",
  heroImage: "/images/jewellery-hero.png",

  designRead:
    "Chrome + Garnet, cold-luxury boutique for custom design and fine retail.",
  primaryCta: "Book a consultation",
  secondaryCta: "(415) 555-0126",
  bookingIntent: "Book a consultation",
  questionIntent: "Ask about a piece",
  defaultTheme: "light",
  schemaType: "JewelryStore",
  accentPreview: "#7A2340",

  reviewSummary: { platform: "Google", score: "4.9", count: "176" },
  avatars: [av("women", 39), av("men", 45), av("women", 20), av("men", 55)],

  servicesHeadline: "The Halcyon collections & services",
  servicesIntro:
    "From a bespoke commission to restoring a treasured heirloom, every piece receives the same bench-level care.",
  services: [
    {
      slug: "custom-design",
      title: "Custom & Bespoke",
      description:
        "Collaborative sketches through CAD to a hand-finished, one-of-a-kind piece.",
      icon: "Diamond",
    },
    {
      slug: "engagement",
      title: "Engagement & Wedding",
      description:
        "Ring settings, ethically sourced stones, and matched wedding bands.",
      icon: "Crown",
    },
    {
      slug: "collection",
      title: "Fine Jewellery",
      description:
        "Curated ready-to-wear necklaces, earrings, and bracelets in the salon.",
      icon: "Sparkle",
    },
    {
      slug: "repairs",
      title: "Repairs & Restoration",
      description:
        "Prong retipping, chain repair, and sensitive heirloom remounting.",
      icon: "Wrench",
    },
    {
      slug: "appraisals",
      title: "Appraisals",
      description:
        "Certified valuations for insurance, estate planning, and resale.",
      icon: "Certificate",
    },
    {
      slug: "consultations",
      title: "Private Consultations",
      description:
        "Unhurried, one-on-one appointments in a discreet viewing salon.",
      icon: "HandHeart",
    },
  ],

  features: [
    {
      icon: "Certificate",
      title: "GIA-certified gemologists",
      description: "Every stone graded and documented.",
    },
    {
      icon: "Diamond",
      title: "Ethically sourced stones",
      description: "Conflict-free, with full provenance.",
    },
    {
      icon: "HandHeart",
      title: "Lifetime care",
      description: "Complimentary cleaning and inspection.",
    },
    {
      icon: "ShieldCheck",
      title: "Fully insured shipping",
      description: "Signed, tracked, and protected in transit.",
    },
  ],

  statsHeadline: "Three decades at the bench, one piece at a time",
  stats: [
    { value: "30+", label: "Years crafting", icon: "Medal" },
    { value: "2,800+", label: "Bespoke pieces created" },
    { value: "100%", label: "Conflict-free stones" },
    { value: "4.9", label: "Average client rating" },
  ],

  processHeadline: "From idea to heirloom",
  processIntro:
    "A considered, unhurried journey with your maker at every milestone.",
  process: [
    {
      title: "Consult & sketch",
      description:
        "We explore ideas, stones, and budget together in a private salon appointment.",
      icon: "HandHeart",
    },
    {
      title: "Design & craft",
      description:
        "CAD previews and hand-finishing at our own bench, with updates at each stage.",
      icon: "Diamond",
    },
    {
      title: "Reveal & aftercare",
      description:
        "You collect a finished piece backed by lifetime cleaning and care.",
      icon: "Gift",
    },
  ],

  feature: {
    eyebrow: "The Halcyon atelier",
    headline: "Gemological expertise, bench craftsmanship.",
    body:
      "Whether you are commissioning a bespoke ring or restoring a family heirloom, our work pairs certified expertise with the patience of hand-finishing.",
    bullets: [
      "Design consultations in a private salon",
      "GIA-certified stones with full documentation",
      "Hand-finished at our in-house bench",
      "Lifetime cleaning and care included",
    ],
    image: "/images/jewellery-atelier.png",
    badgeValue: "30+",
    badgeLabel: "Years at the bench",
  },

  beforeAfter: [],
  beforeAfterHeadline: "Restoration",
  beforeAfterDisclosure:
    "Restoration photography shows actual client pieces with consent. New retail items are not presented as before-and-after transformations.",

  testimonialsHeadline: "What our clients say",
  testimonials: [
    {
      quote:
        "They rebuilt my grandmother's ring without losing its character. The new setting feels like it was always meant to be.",
      name: "Anika Desai",
      role: "Restoration client",
      rating: 5,
      avatar: av("women", 57),
    },
    {
      quote:
        "The consultation was unhurried. I compared three stones under natural light before deciding. No pressure at all.",
      name: "Thomas Wright",
      role: "Engagement ring",
      rating: 5,
      avatar: av("men", 41),
    },
    {
      quote:
        "The appraisal documentation was thorough enough for my insurer on the very first submission.",
      name: "Claire Fontaine",
      role: "Appraisal client",
      rating: 5,
      avatar: av("women", 16),
    },
    {
      quote:
        "Custom design from sketch to delivery took six weeks, with a photo update at every milestone.",
      name: "Yuki Tanaka",
      role: "Bespoke design",
      rating: 5,
      avatar: av("women", 72),
    },
    {
      quote:
        "The craftsmanship is exceptional. My wedding band matches the engagement ring perfectly, down to the finish.",
      name: "Samuel Adeyemi",
      role: "Wedding bands",
      rating: 4,
      avatar: av("men", 27),
    },
    {
      quote:
        "A truly personal experience. It felt like working with an artist, not shopping in a store.",
      name: "Isabelle Moreau",
      role: "Bespoke necklace",
      rating: 5,
      avatar: av("women", 30),
    },
  ],

  galleryHeadline: "From the atelier",
  gallery: [],

  trustChips: [
    { label: "GIA-certified gemologists", icon: "Certificate", mock: false },
    { label: "30 years in San Francisco", icon: "Medal", mock: true },
    { label: "Insured shipping available", icon: "ShieldCheck", mock: false },
  ],
  footerTrust: {
    license: "GIA-registered atelier",
    address: "58 Maiden Ln, San Francisco, CA 94108",
    privacyNote:
      "Secure payment processing. In-house appraisal credentials on request.",
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
        "Custom & Bespoke",
        "Engagement & Wedding",
        "Fine Jewellery",
        "Repairs & Restoration",
        "Appraisals",
        "Private Consultations",
      ],
      required: true,
    },
    { type: "text", name: "contactTime", label: "Preferred contact time" },
    { type: "textarea", name: "note", label: "Tell us about the piece" },
  ],

  ctaHeadline: "Begin your bespoke piece.",
  ctaBody:
    "Book a private consultation and start designing a piece made to be worn for a lifetime and passed on.",

  about: {
    headline: "Jewellery that carries meaning beyond the metal.",
    body: "Halcyon pairs gemological expertise with bench craftsmanship, whether you are commissioning a bespoke ring or restoring a treasured family heirloom.",
  },
  seo: {
    title: "Custom Engagement Rings & Fine Jewellery | Halcyon, San Francisco",
    description:
      "Bespoke engagement rings, fine jewellery, and expert restoration in San Francisco. GIA-certified, 4.9 stars. Book a private consultation today.",
    keyword: "custom engagement rings san francisco",
  },
  navAnchors: [
    { id: "services", label: "Collections" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Reviews" },
    { id: "about", label: "Atelier" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "8px", button: "9999px", input: "8px" },
};
