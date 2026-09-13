import type { NicheConfig } from "@/lib/types";

const av = (g: "men" | "women", n: number) =>
  `https://randomuser.me/api/portraits/${g}/${n}.jpg`;

export const interiorConfig: NicheConfig = {
  id: "interior",
  slug: "interior",
  businessName: "Aurelle Interiors",
  city: "Los Angeles",

  heroEyebrow: "Full-service interior design studio",
  heroHeadline: "Interiors designed",
  heroHeadlineAccent: "around your life.",
  heroSubtext:
    "We shape homes that feel warm, considered, and entirely yours, from first sketch to the final styled shelf. Delivered on time, every time.",
  heroImage: "/images/interior-hero.png",

  designRead:
    "Editorial Ember, moody luxury studio for design-conscious residential and commercial clients.",
  primaryCta: "Start a project",
  secondaryCta: "(213) 555-0172",
  bookingIntent: "Start a project",
  questionIntent: "Ask a question",
  defaultTheme: "dark",
  schemaType: "HomeAndConstructionBusiness",
  accentPreview: "#C4622E",

  reviewSummary: { platform: "Google", score: "4.9", count: "214" },
  avatars: [av("women", 26), av("men", 22), av("women", 90), av("men", 3)],

  servicesHeadline: "Design services, end to end",
  servicesIntro:
    "One studio team handles concept, sourcing, and install, so your project stays cohesive and on schedule.",
  services: [
    {
      slug: "full-home",
      title: "Full-Home Interiors",
      description:
        "End-to-end residential transformations from concept through move-in day.",
      icon: "Couch",
    },
    {
      slug: "kitchen-bath",
      title: "Kitchen & Bath",
      description:
        "Functional layouts, material curation, and bespoke fixture sourcing.",
      icon: "ForkKnife",
    },
    {
      slug: "space-planning",
      title: "Space Planning & 3D",
      description:
        "Measured layouts and photoreal renders before a single wall moves.",
      icon: "Ruler",
    },
    {
      slug: "custom-furniture",
      title: "Custom Furniture",
      description:
        "Artisan pieces and vintage finds chosen for each project palette.",
      icon: "Armchair",
    },
    {
      slug: "lighting",
      title: "Lighting Design",
      description:
        "Layered, warm lighting schemes that make a room feel alive at every hour.",
      icon: "Lamp",
    },
    {
      slug: "styling",
      title: "Styling & Staging",
      description:
        "Final-layer styling for move-in day or a pre-listing refresh.",
      icon: "Sparkle",
    },
  ],

  features: [
    {
      icon: "PaintBrush",
      title: "Bespoke sourcing",
      description: "Pieces selected, never templated, for your space.",
    },
    {
      icon: "Truck",
      title: "Turnkey delivery",
      description: "We manage vendors, logistics, and install.",
    },
    {
      icon: "Leaf",
      title: "Sustainable materials",
      description: "Responsibly sourced woods, stone, and textiles.",
    },
    {
      icon: "Clock",
      title: "On-time installs",
      description: "Milestones you can plan your life around.",
    },
  ],

  statsHeadline: "A decade of homes shaped with care",
  stats: [
    { value: "12+", label: "Years in practice", icon: "Medal" },
    { value: "340", label: "Homes transformed" },
    { value: "96%", label: "Delivered on schedule" },
    { value: "4.9", label: "Average client rating" },
  ],

  processHeadline: "How we work",
  processIntro:
    "A calm, transparent process with no guesswork, from first conversation to the final styled corner.",
  process: [
    {
      title: "Consult & brief",
      description:
        "We learn how you actually live, then set a clear scope, budget, and timeline.",
      icon: "HandHeart",
    },
    {
      title: "Design & render",
      description:
        "Measured plans and photoreal 3D let you see the result before we build.",
      icon: "PaintBrush",
    },
    {
      title: "Source & install",
      description:
        "We manage every vendor and hand you a finished, styled space on schedule.",
      icon: "Truck",
    },
  ],

  feature: {
    eyebrow: "The Aurelle approach",
    headline: "Craft that transforms how a space feels.",
    body:
      "Every project is thoughtfully planned and meticulously sourced, blending comfort, function, and quiet elegance into a home that works the way you do.",
    bullets: [
      "Measured layouts and photoreal 3D before we build",
      "Artisan and vintage sourcing for every palette",
      "One studio team from concept to final styling",
      "Installed on schedule, styled to the last object",
    ],
    image: "/images/interior-chair.png",
    badgeValue: "340",
    badgeLabel: "Projects delivered",
  },

  beforeAfter: [
    {
      before: "/images/interior-ba1-before.png",
      after: "/images/interior-ba1-after.png",
      caption: "A dated living room reimagined in warm, layered neutrals.",
    },
    {
      before: "/images/interior-ba2-before.png",
      after: "/images/interior-ba2-after.png",
      caption: "A bare bedroom turned into a calm, textured retreat.",
    },
  ],
  beforeAfterHeadline: "See the transformation",
  beforeAfterDisclosure:
    "Completed client projects shown with consent. Renderings are never presented as finished work.",

  testimonialsHeadline: "Loved by hundreds of homes",
  testimonials: [
    {
      quote:
        "They listened to how we actually live, not how a magazine thinks we should. Every room feels considered.",
      name: "Amara Singh",
      role: "Full-home renovation",
      rating: 5,
      avatar: av("women", 55),
    },
    {
      quote:
        "The 3D renders matched the finished kitchen within inches. No surprises, and they hit every deadline.",
      name: "Marcus Webb",
      role: "Kitchen & bath",
      rating: 5,
      avatar: av("men", 36),
    },
    {
      quote:
        "Our restaurant opening was tight. Aurelle coordinated every vendor and kept the look cohesive throughout.",
      name: "Lina Ortiz",
      role: "Hospitality project",
      rating: 5,
      avatar: av("women", 79),
    },
    {
      quote:
        "Staging helped our listing sell in two weeks. Buyers commented on the warmth before the floor plan.",
      name: "Helen Park",
      role: "Staging client",
      rating: 5,
      avatar: av("women", 43),
    },
    {
      quote:
        "Worth every penny. The custom pieces are things we will keep for the rest of our lives.",
      name: "Daniel Fischer",
      role: "Custom furniture",
      rating: 4,
      avatar: av("men", 60),
    },
    {
      quote:
        "Calm, organized, and genuinely creative. Our home finally feels finished, not just decorated.",
      name: "Noor Haddad",
      role: "Full-home interiors",
      rating: 5,
      avatar: av("women", 8),
    },
  ],

  galleryHeadline: "Inspiration for every room",
  gallery: [
    { src: "/images/interior-ba1-after.png", alt: "Warm modern living room", label: "Living Room" },
    { src: "/images/interior-ba2-after.png", alt: "Cozy earth-toned bedroom", label: "Bedroom" },
    { src: "/images/interior-hero.png", alt: "Evening lounge with warm lighting", label: "Evening Lounge" },
    { src: "/images/interior-chair.png", alt: "Sculptural accent chair", label: "Statement Pieces" },
  ],

  trustChips: [
    { label: "ASID member studio", icon: "Certificate", mock: true },
    { label: "12 years in practice", icon: "Medal", mock: true },
    { label: "Insured for commercial work", icon: "ShieldCheck", mock: false },
  ],
  footerTrust: {
    license: "CA Business Registration #INT-58204",
    address: "830 Traction Ave, Los Angeles, CA 90013",
    privacyNote: "Project details and client information remain confidential.",
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
      name: "projectType",
      label: "Project type",
      options: [
        "Full-Home Interiors",
        "Kitchen & Bath",
        "Space Planning & 3D",
        "Custom Furniture",
        "Lighting Design",
        "Styling & Staging",
      ],
      required: true,
    },
    {
      type: "select",
      name: "budget",
      label: "Budget range",
      options: ["Under $50k", "$50k-$150k", "$150k-$300k", "$300k+"],
    },
    {
      type: "select",
      name: "timeline",
      label: "Timeline",
      options: ["ASAP", "3-6 months", "6-12 months", "Just exploring"],
    },
    { type: "textarea", name: "note", label: "Project notes" },
  ],

  ctaHeadline: "Let's design a space you love coming home to.",
  ctaBody:
    "Book a consultation and we will map out the scope, timeline, and budget, no pressure, no guesswork.",

  about: {
    headline: "Design rooted in how you move through a room.",
    body: "Aurelle combines spatial planning, material research, and artisan sourcing into one studio workflow, so your project reads cohesive from first sketch to final styling.",
  },
  seo: {
    title: "Interior Design Studio in Los Angeles | Aurelle Interiors",
    description:
      "Full-service residential and commercial interior design in Los Angeles. 340+ homes transformed, 96% delivered on schedule. Start your project today.",
    keyword: "interior designer los angeles",
  },
  navAnchors: [
    { id: "services", label: "Services" },
    { id: "gallery", label: "Portfolio" },
    { id: "results", label: "Transformations" },
    { id: "about", label: "Studio" },
    { id: "contact", label: "Contact" },
  ],
  radius: { card: "4px", button: "9999px", input: "4px" },
};
