import { routes } from "@/lib/site";

export const blogPageSeo = {
  title: "TiviMate IPTV Blog – Setup Guides, Tips & Troubleshooting",
  description:
    "Explore practical TiviMate IPTV guides covering setup, Firestick, Android TV, playlists, EPG, troubleshooting and IPTV tips.",
  primaryKeyword: "TiviMate IPTV Blog",
  keywords: [
    "TiviMate IPTV Blog",
    "TiviMate guides",
    "TiviMate IPTV guides",
    "TiviMate setup",
    "IPTV guides",
    "TiviMate tutorials",
    "TiviMate troubleshooting",
    "TiviMate tips",
    "TiviMate IPTV tutorials",
    "IPTV on TiviMate",
  ],
} as const;

export type BlogArticle = {
  title: string;
  body: string;
  href: string;
  cta?: string;
};

export type BlogCategory = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  articles: BlogArticle[];
};

export const blogCategories: BlogCategory[] = [
  {
    id: "installation-setup",
    eyebrow: "Installation & Setup",
    title: "Installation & Setup",
    accent: "Setup",
    articles: [
      {
        title: "How to Install TiviMate on Firestick",
        body: "A step-by-step guide for setting up TiviMate on compatible Fire TV devices.",
        href: `${routes.installation}/#devices`,
        cta: "Read Guide",
      },
      {
        title: "How to Install TiviMate on Android TV",
        body: "Learn how to install and prepare TiviMate for IPTV use on compatible Android TV devices.",
        href: `${routes.installation}/#devices`,
        cta: "Read Guide",
      },
      {
        title: "How to Add IPTV to TiviMate",
        body: "Understand the basic process of connecting your IPTV subscription to TiviMate.",
        href: `${routes.installation}/#setup-steps`,
        cta: "Read Guide",
      },
      {
        title: "How to Add an M3U Playlist to TiviMate",
        body: "Learn what an M3U playlist is and how supported playlist URLs are used.",
        href: `${routes.installation}/#setup-steps`,
        cta: "Read Guide",
      },
      {
        title: "How to Add Xtream Codes to TiviMate",
        body: "A practical guide for users whose IPTV provider supplies supported Xtream Codes credentials.",
        href: `${routes.installation}/#setup-steps`,
        cta: "Read Guide",
      },
    ],
  },
  {
    id: "troubleshooting",
    eyebrow: "Troubleshooting",
    title: "TiviMate Troubleshooting",
    accent: "Troubleshooting",
    articles: [
      {
        title: "TiviMate Not Working?",
        body: "Work through the most common causes before reinstalling everything.",
        href: `${routes.installation}/#troubleshooting`,
        cta: "Read Guide",
      },
      {
        title: "TiviMate IPTV Buffering",
        body: "Find out whether buffering is related to your connection, device, stream or IPTV source.",
        href: `${routes.installation}/#troubleshooting`,
        cta: "Read Guide",
      },
      {
        title: "TiviMate EPG Not Working",
        body: "Learn what to check when programme information isn’t appearing correctly.",
        href: `${routes.installation}/#troubleshooting`,
        cta: "Read Guide",
      },
      {
        title: "TiviMate Playlist Not Loading",
        body: "Check credentials, URLs, internet connectivity and subscription status.",
        href: `${routes.installation}/#troubleshooting`,
        cta: "Read Guide",
      },
      {
        title: "TiviMate Channels Not Showing",
        body: "Understand why channels can disappear and how to identify whether the problem comes from the playlist or application.",
        href: `${routes.installation}/#troubleshooting`,
        cta: "Read Guide",
      },
    ],
  },
  {
    id: "features-settings",
    eyebrow: "Features & Settings",
    title: "TiviMate Features & Settings",
    accent: "Features",
    articles: [
      {
        title: "TiviMate Free vs Premium",
        body: "Understand the difference between the application and its optional Premium features before deciding whether an upgrade is worthwhile.",
        href: `${routes.installation}/#faq`,
        cta: "Read Guide",
      },
      {
        title: "What Is TiviMate?",
        body: "A beginner-friendly explanation of the player and how it fits into an IPTV setup.",
        href: "/#why-tivimate",
        cta: "Read Guide",
      },
      {
        title: "What Is an IPTV Playlist?",
        body: "Understand how your IPTV service provides playlist information to your player.",
        href: `${routes.installation}/#faq`,
        cta: "Read Guide",
      },
      {
        title: "What Is EPG?",
        body: "Learn how programme guides work with IPTV.",
        href: `${routes.installation}/#faq`,
        cta: "Read Guide",
      },
      {
        title: "How to Organize IPTV Channels in TiviMate",
        body: "Practical tips for making large playlists easier to navigate.",
        href: `${routes.installation}/#setup-steps`,
        cta: "Read Guide",
      },
    ],
  },
  {
    id: "iptv-guides",
    eyebrow: "IPTV Guides",
    title: "IPTV Guides",
    accent: "IPTV",
    articles: [
      {
        title: "What Is IPTV?",
        body: "A straightforward explanation of IPTV and how internet-delivered television works.",
        href: "/#setup-intro",
        cta: "Read Guide",
      },
      {
        title: "IPTV for Firestick",
        body: "Learn how compatible IPTV services and players can work together on Fire TV devices.",
        href: `${routes.installation}/#devices`,
        cta: "Read Guide",
      },
      {
        title: "IPTV for Android TV",
        body: "A practical overview of setting up IPTV on compatible Android TV hardware.",
        href: `${routes.installation}/#devices`,
        cta: "Read Guide",
      },
      {
        title: "How to Choose an IPTV Subscription",
        body: "What to check before buying: compatibility, pricing, support, service details and content authorization.",
        href: `${routes.plans}/#before-ordering`,
        cta: "Read Guide",
      },
    ],
  },
  {
    id: "buying-guides",
    eyebrow: "Buying Guides",
    title: "TiviMate & IPTV Buying Guides",
    accent: "Buying",
    articles: [
      {
        title: "Best IPTV for TiviMate",
        body: "What to look for when choosing an IPTV service for your existing TiviMate setup.",
        href: `${routes.plans}/#which-plan`,
        cta: "Read Guide",
      },
      {
        title: "IPTV Subscription for TiviMate",
        body: "What happens after purchasing and what information you need for setup.",
        href: `${routes.plans}/#how-it-works`,
        cta: "Read Guide",
      },
      {
        title: "Is TiviMate Premium Worth It?",
        body: "Understand the difference between paying for the player features and paying for an IPTV service.",
        href: `${routes.installation}/#faq`,
        cta: "Read Guide",
      },
    ],
  },
];

export const newGuideChecklist = [
  "Clear answer",
  "Practical instructions",
  "Relevant screenshots",
  "Troubleshooting",
  "Important limitations",
  "Related articles",
  "Appropriate CTA",
] as const;
