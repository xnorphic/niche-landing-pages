import type { NicheConfig } from "@/lib/types";
import { imageSeed } from "@/lib/utils";

export const doctorsConfig: NicheConfig = {
  id: "doctors",
  slug: "doctors",
  businessName: "{{CLINIC_NAME}}",
  city: "{{CITY}}",
  tagline: "Compassionate care across every stage of life.",
  designRead:
    "Cool Clinical — trust-first multi-specialty clinic for a broad-age patient audience.",
  primaryCta: "Book a visit",
  secondaryCta: "Ask about a service",
  bookingIntent: "Book an appointment",
  questionIntent: "Ask about a service",
  chatbotDisclaimer:
    "This assistant routes booking requests only. It does not provide medical advice or triage.",
  defaultTheme: "light",
  schemaType: "MedicalClinic",
  accentPreview: "#0E6B5C",
  services: [
    {
      slug: "primary-care",
      title: "Primary Care & Checkups",
      description: "Annual exams, preventive screenings, and ongoing wellness support.",
    },
    {
      slug: "pediatrics",
      title: "Pediatrics",
      description: "Growth monitoring, immunizations, and family-centered child health.",
    },
    {
      slug: "womens-health",
      title: "Women's Health",
      description: "Reproductive care, prenatal visits, and hormone health consultations.",
    },
    {
      slug: "dermatology",
      title: "Dermatology",
      description: "Skin exams, acne treatment, and cosmetic dermatology options.",
    },
    {
      slug: "physical-therapy",
      title: "Physical Therapy & Rehab",
      description: "Post-injury recovery, mobility programs, and pain management plans.",
    },
    {
      slug: "diagnostics",
      title: "Diagnostics & Labs",
      description: "On-site blood work, imaging referrals, and rapid result coordination.",
    },
  ],
  beforeAfter: [
    {
      before: imageSeed("doctor-derm-before", 1200, 800),
      after: imageSeed("doctor-derm-after", 1200, 800),
      caption: "Dermatology treatment progress over twelve weeks.",
    },
    {
      before: imageSeed("doctor-pt-before", 1200, 800),
      after: imageSeed("doctor-pt-after", 1200, 800),
      caption: "Physical therapy mobility improvement after eight sessions.",
    },
  ],
  beforeAfterDisclosure:
    "Results vary by patient. Images shown with consent for illustrative purposes only.",
  patientJourney: [
    {
      title: "Schedule",
      description: "Choose a specialty and pick a time that fits your calendar.",
    },
    {
      title: "Visit",
      description: "Meet your care team in a calm, private exam environment.",
    },
    {
      title: "Follow-up",
      description: "Receive a clear plan with labs, referrals, or next steps as needed.",
    },
  ],
  testimonials: [
    {
      quote:
        "The front desk remembered my daughter's name. That small detail made a stressful visit feel manageable.",
      name: "Priya Mehta",
      role: "Parent, pediatric patient",
    },
    {
      quote:
        "Same-day dermatology saved me a week of waiting elsewhere. Clear instructions and no rushed appointment.",
      name: "James Okonkwo",
      role: "Dermatology patient",
    },
    {
      quote:
        "My physical therapist explained every exercise in plain language. I finally understand my recovery plan.",
      name: "Elena Vasquez",
      role: "Rehab patient",
    },
    {
      quote:
        "Lab results arrived in my portal before I got home. The nurse called to walk me through the numbers.",
      name: "David Chen",
      role: "Primary care patient",
    },
  ],
  gallery: [
    {
      src: imageSeed("doctor-clinic-waiting", 900, 600),
      alt: "Bright clinic waiting area with natural light and comfortable seating",
    },
    {
      src: imageSeed("doctor-exam-room", 900, 600),
      alt: "Private exam room with modern medical equipment and calming decor",
    },
    {
      src: imageSeed("doctor-team", 900, 600),
      alt: "Multi-specialty medical team in a collaborative consultation",
    },
    {
      src: imageSeed("doctor-lab", 900, 600),
      alt: "On-site diagnostics lab with organized sample processing area",
    },
  ],
  trustChips: [
    { label: "License {{LICENSE_NUMBER}}", mock: true },
    { label: "{{YEARS_ACTIVE}} years serving {{CITY}}", mock: true },
    { label: "Same-day appointments available", mock: false },
  ],
  footerTrust: {
    license: "Medical License {{LICENSE_NUMBER}}",
    address: "{{STREET_ADDRESS}}, {{CITY}} {{POSTAL_CODE}}",
    privacyNote: "HIPAA-compliant privacy practices. Your health data stays protected.",
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
      name: "specialty",
      label: "Specialty or physician",
      options: [
        "Primary Care",
        "Pediatrics",
        "Women's Health",
        "Dermatology",
        "Physical Therapy",
        "Diagnostics",
      ],
      required: true,
    },
    {
      type: "select",
      name: "service",
      label: "Service of interest",
      options: [
        "Primary Care & Checkups",
        "Pediatrics",
        "Women's Health",
        "Dermatology",
        "Physical Therapy & Rehab",
        "Diagnostics & Labs",
      ],
      required: true,
    },
    { type: "text", name: "datetime", label: "Preferred date and time" },
    { type: "textarea", name: "note", label: "Additional notes" },
  ],
  about: {
    headline: "Care that respects your time and your health.",
    body: "Our multi-specialty clinic brings coordinated care under one roof, so families spend less time navigating referrals and more time healing.",
  },
  seo: {
    title: "{{Specialty}} Doctor in {{City}} | {{Clinic Name}}",
    description:
      "Same-day appointments, board-certified specialists, and coordinated care in {{City}}. Book a visit today.",
    keyword: "doctor near me",
  },
  navAnchors: [
    { id: "services", label: "Services" },
    { id: "results", label: "Results" },
    { id: "testimonials", label: "Patients" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Clinic" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "12px", button: "9999px", input: "8px" },
};
