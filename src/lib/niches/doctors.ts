import type { NicheConfig } from "@/lib/types";

const av = (g: "men" | "women", n: number) =>
  `https://randomuser.me/api/portraits/${g}/${n}.jpg`;

export const doctorsConfig: NicheConfig = {
  id: "doctors",
  slug: "doctors",
  businessName: "Brightwell Dental & Implant Center",
  city: "Austin",

  heroEyebrow: "Restoring smiles across Austin since 2011",
  heroHeadline: "Stronger implants,",
  heroHeadlineAccent: "brighter futures.",
  heroSubtext:
    "Advanced implant and cosmetic dentistry with gentle, on-time care. Same-day appointments and a lifetime workmanship guarantee.",
  heroImage: "/images/doctors-hero.png",

  designRead:
    "Cool Clinical, trust-first dental and implant center for a broad-age patient audience.",
  primaryCta: "Book appointment",
  secondaryCta: "(512) 555-0148",
  bookingIntent: "Book an appointment",
  questionIntent: "Ask about a treatment",
  chatbotDisclaimer:
    "This assistant routes booking requests only. It does not provide medical advice or triage.",
  defaultTheme: "light",
  schemaType: "Dentist",
  accentPreview: "#0E6B5C",

  reviewSummary: { platform: "Google", score: "4.9", count: "612" },
  avatars: [av("women", 68), av("men", 32), av("women", 44), av("men", 51)],

  servicesHeadline: "Complete care for every smile",
  servicesIntro:
    "From a single implant to a full-arch restoration, our specialists deliver comfortable, predictable results.",
  services: [
    {
      slug: "dental-implants",
      title: "Dental Implants",
      description:
        "Permanent, natural-looking replacements for missing teeth using 3D-guided placement.",
      icon: "Tooth",
    },
    {
      slug: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description:
        "Veneers, bonding, and whitening that brighten your smile while looking completely natural.",
      icon: "Sparkle",
    },
    {
      slug: "clear-aligners",
      title: "Clear Aligners",
      description:
        "Discreet, removable aligners that straighten teeth on a schedule that fits your life.",
      icon: "Ruler",
    },
    {
      slug: "root-canal",
      title: "Root Canal Therapy",
      description:
        "Modern, virtually painless treatment that saves your natural tooth and relieves pain fast.",
      icon: "Syringe",
    },
    {
      slug: "emergency-care",
      title: "Emergency Dental Care",
      description:
        "Same-day relief for chipped teeth, lost crowns, and sudden pain, seven days a week.",
      icon: "FirstAid",
    },
    {
      slug: "preventive-care",
      title: "Preventive Checkups",
      description:
        "Cleanings, exams, and early screenings that keep problems small and visits short.",
      icon: "ShieldCheck",
    },
  ],

  features: [
    {
      icon: "Clock",
      title: "Same-day appointments",
      description: "Call before noon and we will find you a chair today.",
    },
    {
      icon: "ShieldCheck",
      title: "Board-certified team",
      description: "Specialists with 15+ years of implant experience.",
    },
    {
      icon: "HandHeart",
      title: "Gentle, anxiety-free",
      description: "Sedation options and a calm, unrushed environment.",
    },
    {
      icon: "CheckCircle",
      title: "Transparent pricing",
      description: "Clear quotes and flexible payment plans, no surprises.",
    },
  ],

  statsHeadline: "Trusted by Austin families for more than a decade",
  stats: [
    { value: "15+", label: "Years in Austin", icon: "Medal" },
    { value: "12.4k", label: "Procedures completed" },
    { value: "98%", label: "Would recommend us" },
    { value: "4.9", label: "Average Google rating" },
  ],

  processHeadline: "Your visit, start to finish",
  processIntro:
    "A clear, unhurried path from first call to a healthy, confident smile.",
  process: [
    {
      title: "Book & consult",
      description:
        "Share your goals in a relaxed consultation with 3D imaging and a same-day quote.",
      icon: "CalendarCheck",
    },
    {
      title: "Personalized plan",
      description:
        "We map out treatment, timing, and cost so you know exactly what to expect.",
      icon: "Tooth",
    },
    {
      title: "Treatment & follow-up",
      description:
        "Comfortable procedures backed by attentive check-ins and a lifetime guarantee.",
      icon: "Heartbeat",
    },
  ],

  feature: {
    eyebrow: "About Brightwell",
    headline: "Advanced care, beautiful results.",
    body:
      "Our team combines the latest imaging and implant technology with a genuinely calm chairside manner, so treatment feels straightforward and comfortable from day one.",
    bullets: [
      "3D-guided, minimally invasive implant placement",
      "Sedation options for a completely relaxed visit",
      "On-time appointments that respect your schedule",
      "Lifetime workmanship guarantee on every implant",
    ],
    image: "/images/doctors-care.png",
    badgeValue: "15+",
    badgeLabel: "Years creating healthy smiles",
  },

  beforeAfter: [],
  beforeAfterHeadline: "Real results",
  beforeAfterDisclosure:
    "Results vary by patient. Images shown with consent for illustrative purposes only.",

  testimonialsHeadline: "Real patients, real smiles",
  testimonials: [
    {
      quote:
        "I put off implants for years out of fear. Brightwell made the whole thing painless and I finally have the smile I always wanted.",
      name: "Priya Menon",
      role: "Implant patient",
      rating: 5,
      avatar: av("women", 65),
    },
    {
      quote:
        "They fit me in the same morning I chipped a front tooth. Professional, kind, and I was back at work by lunch.",
      name: "Marcus Reyes",
      role: "Emergency visit",
      rating: 5,
      avatar: av("men", 44),
    },
    {
      quote:
        "The pricing was explained up front with no surprises. My aligners finished a month ahead of schedule.",
      name: "Hannah Whitfield",
      role: "Clear aligners",
      rating: 5,
      avatar: av("women", 33),
    },
    {
      quote:
        "Every appointment started on time. As someone with a packed calendar, that alone earns five stars.",
      name: "David Okafor",
      role: "Cosmetic patient",
      rating: 4,
      avatar: av("men", 76),
    },
    {
      quote:
        "My daughter is nervous at the dentist and the whole team was so gentle with her. We drive across town for them now.",
      name: "Sofia Alvarez",
      role: "Parent, family patient",
      rating: 5,
      avatar: av("women", 12),
    },
    {
      quote:
        "From consult to final crown, the follow-up was excellent. They called to check in the evening after my procedure.",
      name: "Elliot Grant",
      role: "Full-arch restoration",
      rating: 5,
      avatar: av("men", 19),
    },
  ],

  galleryHeadline: "Inside our clinic",
  gallery: [],

  trustChips: [
    { label: "TX Dental Board #DN-20418", icon: "ShieldCheck", mock: true },
    { label: "15 years serving Austin", icon: "Medal", mock: true },
    { label: "Same-day appointments", icon: "Clock", mock: false },
  ],
  footerTrust: {
    license: "Registered practice, TX Dental Board #DN-20418",
    address: "2200 Guadalupe St, Austin, TX 78705",
    privacyNote:
      "HIPAA-compliant privacy practices. Your health data stays protected.",
    reviewLink: "Read our Google reviews",
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
      name: "service",
      label: "Treatment of interest",
      options: [
        "Dental Implants",
        "Cosmetic Dentistry",
        "Clear Aligners",
        "Root Canal Therapy",
        "Emergency Dental Care",
        "Preventive Checkup",
      ],
      required: true,
    },
    { type: "text", name: "datetime", label: "Preferred date and time" },
    { type: "textarea", name: "note", label: "Anything we should know?" },
  ],

  ctaHeadline: "Ready to transform your smile?",
  ctaBody:
    "Book a consultation today and take the first step toward a healthier, more confident smile.",

  about: {
    headline: "Care that respects your time and your smile.",
    body: "Brightwell brings implant, cosmetic, and preventive dentistry under one roof, so you spend less time in waiting rooms and more time smiling.",
  },
  seo: {
    title: "Dental Implants & Cosmetic Dentistry in Austin | Brightwell",
    description:
      "Same-day appointments, board-certified dentists, and 3D-guided implants in Austin. 4.9 stars from 600+ patients. Book your visit today.",
    keyword: "dental implants austin",
  },
  navAnchors: [
    { id: "services", label: "Services" },
    { id: "process", label: "How it works" },
    { id: "testimonials", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "12px", button: "9999px", input: "8px" },
};
