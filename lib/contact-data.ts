export const contactPageSeo = {
  title: "Contact Us – TiviMate IPTV Support",
  description:
    "Need help with your TiviMate IPTV subscription or setup? Contact our support team for assistance with installation, activation and technical questions.",
  primaryKeyword: "TiviMate IPTV Support",
  keywords: [
    "TiviMate IPTV Support",
    "TiviMate IPTV help",
    "TiviMate setup help",
    "IPTV support",
    "TiviMate installation help",
    "IPTV technical support",
    "TiviMate IPTV assistance",
    "IPTV subscription support",
  ],
} as const;

export const contactHelpTopics = [
  {
    title: "IPTV Subscription",
    intro: "Questions about:",
    items: [
      "Plans",
      "Pricing",
      "Activation",
      "Subscription duration",
      "Connections",
      "Service details",
    ],
  },
  {
    title: "TiviMate Setup",
    intro:
      "Need help connecting your subscription to TiviMate?",
    items: [
      "Tell us what device you’re using and which setup step you’re having difficulty with.",
    ],
  },
  {
    title: "Technical Assistance",
    intro: "We can help you work through common setup issues such as:",
    items: [
      "Playlist not loading",
      "Login problems",
      "EPG problems",
      "Missing content",
      "Playback issues",
      "Device setup questions",
    ],
  },
] as const;

export const fasterSupportItems = [
  {
    label: "Your device:",
    detail: "Firestick / Fire TV / Android TV / Google TV / Other",
  },
  {
    label: "Your issue:",
    detail: "Explain exactly what happens.",
  },
  {
    label: "The step where it happens:",
    detail: "For example, login, playlist loading or playback.",
  },
  {
    label: "Screenshot:",
    detail: "If relevant, attach a screenshot.",
  },
] as const;

export const contactDeviceOptions = [
  "Firestick",
  "Fire TV",
  "Android TV",
  "Google TV",
  "Other",
] as const;

export const contactSubjectOptions = [
  "IPTV Subscription",
  "TiviMate Setup",
  "Technical Assistance",
  "Activation",
  "Billing",
  "Other",
] as const;

export const contactFaqs = [
  {
    question: "Can you help me set up IPTV on TiviMate?",
    answer:
      "Yes. Start with our installation guide, and contact support if you need additional assistance with your subscription setup.",
  },
  {
    question: "Do you provide TiviMate?",
    answer:
      "No. TiviMate is a separate media player. Our service and TiviMate have separate functions.",
  },
  {
    question: "Can I contact you before ordering?",
    answer:
      "Yes. If you have a question about a plan or compatibility, contact us before purchasing.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Response times depend on current support volume. We’ll reply as soon as possible during our support hours.",
  },
  {
    question: "How quickly is an order activated?",
    answer:
      "Activation timing is confirmed after your order is processed. You’ll receive your access details once activation is complete.",
  },
] as const;
