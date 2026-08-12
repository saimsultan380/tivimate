import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tivimateplayer.us" }],
        destination: "https://tivimateplayer.us/:path*",
        permanent: true,
      },
      {
        source: "/installation",
        destination: "/installation-guide/",
        permanent: true,
      },
      {
        source: "/plans",
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
