export const SITE = {
  doctorName: "Dr. Akshada Patil",
  credentials: "PT, B.P.Th.",
  brand: "DoorstepPhysio",
  tagline: "Physiotherapy at Your Doorstep",
  subTagline: "Professional • Personalized • Convenient",
  whatsappNumber: "918451038894",
  whatsappDisplay: "+91 84510 38894",
  phoneHref: "tel:+918451038894",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Conditions We Treat", href: "#conditions" },
  { label: "How It Works", href: "#process" },
  { label: "Ask on WhatsApp", href: "#whatsapp" },
  { label: "FAQ", href: "#faq" },
];

export type ConditionCategory = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  items: string[];
};

export const CONDITION_CATEGORIES: ConditionCategory[] = [
  {
    id: "orthopaedic",
    name: "Orthopaedic Conditions",
    icon: "Bone",
    accent: "#0f766e",
    items: [
      "Back Pain",
      "Neck Pain",
      "Knee Pain",
      "Shoulder Pain & Frozen Shoulder",
      "Arthritis",
      "Cervical & Lumbar Spondylosis",
      "Sciatica",
      "Slip Disc",
      "Tennis Elbow",
      "Plantar Fasciitis",
    ],
  },
  {
    id: "post-surgical",
    name: "Post-Surgical Rehabilitation",
    icon: "Stethoscope",
    accent: "#0369a1",
    items: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "ACL Reconstruction",
      "Fracture Rehabilitation",
      "Spine Surgery Rehabilitation",
      "Shoulder Surgery Rehabilitation",
    ],
  },
  {
    id: "neurological",
    name: "Neurological Conditions",
    icon: "Brain",
    accent: "#7c3aed",
    items: [
      "Stroke (CVA)",
      "Parkinson's Disease",
      "Multiple Sclerosis",
      "Spinal Cord Injury",
      "Bell's Palsy",
      "Peripheral Nerve Injuries",
      "Balance & Gait Disorders",
    ],
  },
  {
    id: "sports",
    name: "Sports Injuries",
    icon: "Dumbbell",
    accent: "#0d9488",
    items: [
      "Ligament Sprains",
      "Muscle Strains",
      "Tendinitis",
      "Rotator Cuff Injuries",
      "Ankle Injuries",
      "Runner's Knee",
    ],
  },
  {
    id: "paediatric-women",
    name: "Paediatric & Women's Health",
    icon: "Baby",
    accent: "#db2777",
    items: [
      "Developmental Delay",
      "Cerebral Palsy",
      "Postural Problems",
      "Pregnancy-Related Back & Pelvic Pain",
      "Postnatal Rehabilitation",
      "Diastasis Recti",
      "Pelvic Floor Rehabilitation",
    ],
  },
  {
    id: "cardiopulmonary",
    name: "Cardiopulmonary Conditions",
    icon: "Wind",
    accent: "#ea580c",
    items: [
      "COPD",
      "Asthma",
      "Post-COVID Rehabilitation",
      "Cardiac Rehabilitation",
      "Breathing Exercises",
      "Chest Physiotherapy",
    ],
  },
  {
    id: "vascular",
    name: "Vascular Conditions",
    icon: "Droplets",
    accent: "#0e7490",
    items: [
      "Varicose Veins",
      "Chronic Venous Insufficiency",
      "Leg Swelling (Edema)",
      "Peripheral Arterial Disease (selected cases)",
    ],
  },
  {
    id: "cancer-rehab",
    name: "Cancer Rehabilitation",
    icon: "Ribbon",
    accent: "#9333ea",
    items: [
      "Post-Cancer Surgery Rehabilitation",
      "Lymphedema Management",
      "Fatigue Management",
      "Mobility & Strength Training",
    ],
  },
  {
    id: "manual-therapy",
    name: "Manual Therapy",
    icon: "HandHeart",
    accent: "#0f766e",
    items: [
      "Mulligan Techniques",
      "Kaltenborn and Maitland Mobilization",
      "Tapping",
      "Cupping",
      "Muscle Energy Techniques",
      "PNF",
      "IASTM",
      "Deep Tissue Manipulation",
    ],
  },
  {
    id: "electrotherapy",
    name: "Electrotherapy",
    icon: "Zap",
    accent: "#ca8a04",
    items: [
      "TENS Therapy",
      "Muscle Stimulator",
      "Interferential Therapy",
      "Ultrasound",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Message on WhatsApp",
    description:
      "Tap the WhatsApp button and share your condition, location and a convenient time no forms, no waiting rooms.",
    icon: "MessageCircle",
  },
  {
    step: "02",
    title: "Personalized Assessment",
    description:
      "Dr. Akshada visits your home and carries out a thorough physical assessment tailored to your condition and goals.",
    icon: "ClipboardCheck",
  },
  {
    step: "03",
    title: "Home Treatment Plan",
    description:
      "A structured treatment plan manual therapy, electrotherapy, and guided exercise delivered right in your space.",
    icon: "Home",
  },
  {
    step: "04",
    title: "Track Your Recovery",
    description:
      "Progress is reviewed at every visit and your plan adapts as you recover, with everything coordinated over WhatsApp.",
    icon: "TrendingUp",
  },
];

export const TRUST_BADGES = [
  { label: "B.P.Th. Qualified Physiotherapist", icon: "BadgeCheck" },
  { label: "100% Home Visits", icon: "Home" },
  { label: "10+ Specialty Areas", icon: "Sparkles" },
  { label: "Personalized Care Plans", icon: "HeartHandshake" },
];

export const FAQS = [
  {
    question: "Do you only treat patients at home, or is a clinic visit available?",
    answer:
      "Care is delivered entirely at your doorstep. All assessments, treatment sessions and progress reviews happen in the comfort of your home, so there's no travel needed for someone recovering from surgery, injury or a chronic condition.",
  },
  {
    question: "What conditions can be treated through home physiotherapy?",
    answer:
      "A wide range orthopaedic pain, post-surgical rehabilitation, neurological conditions, sports injuries, paediatric and women's health concerns, cardiopulmonary and vascular conditions, and cancer rehabilitation. See the full 'Conditions We Treat' section above, or message on WhatsApp to check your specific case.",
  },
  {
    question: "How do I book the first appointment?",
    answer:
      "Tap any 'Book on WhatsApp' button on this page, or message +91 84510 38894 directly. Share your condition and preferred time, and you'll get a slot confirmed on chat.",
  },
  {
    question: "What should I expect during the first home visit?",
    answer:
      "Dr. Akshada begins with a detailed assessment medical history, movement and pain evaluation then explains findings in plain language and proposes a personalized treatment plan before starting therapy.",
  },
  {
    question: "What equipment is brought for treatment like electrotherapy?",
    answer:
      "Portable, clinic-grade equipment for manual therapy and electrotherapy (TENS, muscle stimulation, interferential therapy, ultrasound) is brought along for each visit as required by your treatment plan.",
  },
  {
    question: "Can appointments be coordinated entirely over WhatsApp?",
    answer:
      "Yes scheduling, reminders and quick questions between visits can all be handled over WhatsApp chat, alongside a phone call whenever you'd prefer to talk directly.",
  },
];

export const WHATSAPP_BOT_SCRIPT = [
  {
    from: "bot" as const,
    text: "Namaste 👋 I'm Dr. Akshada's WhatsApp assistant. How can I help today?",
  },
  {
    from: "options" as const,
    options: ["Book a home visit", "Ask about a condition", "Check availability"],
  },
  { from: "user" as const, text: "Book a home visit" },
  {
    from: "bot" as const,
    text: "Great! Could you share the condition (e.g. knee pain, post-surgery recovery) and your area?",
  },
  { from: "user" as const, text: "Post-knee surgery, need home rehab" },
  {
    from: "bot" as const,
    text: "Got it post-surgical knee rehabilitation is one of Dr. Akshada's core specialties. Connecting you now to confirm a visit time ✅",
  },
];
