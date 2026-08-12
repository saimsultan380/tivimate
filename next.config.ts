import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // www → non-www (301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tivimateplayer.us" }],
        destination: "https://tivimateplayer.us/:path*",
        permanent: true,
      },
      // http → https on apex (301); localhost unaffected
      {
        source: "/:path*",
        has: [
          { type: "host", value: "tivimateplayer.us" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://tivimateplayer.us/:path*",
        permanent: true,
      },
      {
        source: "/installation",
        destination: "/installation-guide/",
        permanent: true,
      },
      {
        source: "/installation/",
        destination: "/installation-guide/",
        permanent: true,
      },
      {
        source: "/plans",
        destination: "/iptv-plans/",
        permanent: true,
      },
      {
        source: "/plans/",
        destination: "/iptv-plans/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/reviews/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/refund-policy/",
        destination: "/contact-us/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
