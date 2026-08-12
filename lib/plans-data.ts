export const plansPageSeo = {
  title: "TiviMate IPTV Subscription – Plans & Pricing",
  description:
    "Choose an IPTV subscription for TiviMate. Compare available plans, features, connections and setup information before getting started.",
  primaryKeyword: "TiviMate IPTV Subscription",
  keywords: [
    "TiviMate IPTV Subscription",
    "TiviMate IPTV",
    "IPTV for TiviMate",
    "IPTV subscription for TiviMate",
    "TiviMate IPTV service",
    "TiviMate IPTV plans",
    "IPTV plans",
    "IPTV subscription",
    "IPTV for Firestick",
    "IPTV for Android TV",
    "IPTV for TiviMate app",
    "TiviMate compatible IPTV",
  ],
} as const;

export const planCardFeatures = [
  "24/7 Customer Support",
  "EPG Support Where Available",
  "Catch-Up Available (Limited)",
  "Instant Activation",
] as const;

export const planRows = [
  {
    id: "1-month",
    label: "Monthly",
    duration: "1 Month",
    connections: "Confirmed at checkout",
    price: "$12.99",
    summary:
      "Choose this option if you prefer flexibility and a shorter subscription period.",
    cta: "Choose 1 Month",
    href: "/checkout?plan=1-month",
    featured: false,
  },
  {
    id: "3-month",
    label: "Quarterly",
    duration: "3 Months",
    connections: "Confirmed at checkout",
    price: "$29.99",
    summary:
      "A practical option for regular viewers who want longer access.",
    cta: "Choose 3 Months",
    href: "/checkout?plan=3-month",
    featured: false,
  },
  {
    id: "6-month",
    label: "6 Month",
    duration: "6 Months",
    connections: "Confirmed at checkout",
    price: "$49.99",
    summary:
      "Suitable for customers who prefer a longer subscription and fewer renewals.",
    cta: "Choose 6 Months",
    href: "/checkout?plan=6-month",
    featured: true,
  },
  {
    id: "12-month",
    label: "Annual",
    duration: "12 Months",
    connections: "Confirmed at checkout",
    price: "$69.99",
    summary:
      "Designed for customers who want the longest available subscription period.",
    cta: "Choose 12 Months",
    href: "/checkout?plan=12-month",
    featured: false,
  },
] as const;

export const planInclusions = [
  "Live TV",
  "Sports",
  "Movies",
  "TV series",
  "EPG",
  "Catch-up",
  "Available HD/FHD/4K streams",
  "Supported playlist access",
  "Connection allowance confirmed at checkout",
  "Support included with your subscription",
] as const;

export const planFaqs = [
  {
    question: "Can I use this subscription with TiviMate?",
    answer:
      "Yes, where your subscription’s supplied access method is supported by TiviMate and your device is compatible.",
  },
  {
    question: "Does the subscription include TiviMate?",
    answer: "No. TiviMate is a separate application.",
  },
  {
    question: "How many devices can I use?",
    answer:
      "Your connection allowance depends on the selected plan and is confirmed at checkout.",
  },
  {
    question: "How quickly will my subscription be activated?",
    answer:
      "Activation is instant after your order is processed. You’ll receive your access details once activation is complete.",
  },
  {
    question: "What login details will I receive?",
    answer:
      "You’ll receive the supported playlist or login information needed to configure your service in TiviMate.",
  },
  {
    question: "Can I use the service on Firestick?",
    answer:
      "Compatible Fire TV and Firestick setups can be used with TiviMate. Always confirm your specific device before ordering.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Plan changes depend on your current subscription and support policy. Contact support if you need help reviewing options.",
  },
] as const;

export const beforeOrderingChecks = [
  "Your device is compatible.",
  "You understand what your selected plan includes.",
  "You have reviewed the subscription duration.",
  "You have checked the connection allowance.",
  "You understand that TiviMate is a separate application.",
  "The content you intend to access is legally available to you.",
] as const;
