/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Forbid framing by other origins (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers MIME-sniffing the response.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak full URLs to cross-origin sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable powerful browser features we don't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // HSTS — let browsers force HTTPS. Vercel serves HTTPS by default.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Do not ship JS source maps to the browser in production. Bundles stay
  // minified-only. This is the single biggest "stop people reading my code"
  // setting and it has no UX cost.
  productionBrowserSourceMaps: false,
  // Strip the "X-Powered-By: Next.js" header — no need to advertise the stack.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
