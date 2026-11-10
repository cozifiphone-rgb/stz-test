export const SITE_CONFIG = {
  name: "STRATEZIC",
  tagline: "Building Strategic Digital Experiences.",
  description:
    "STRATEZIC builds modern, scalable, and SEO-optimized websites and web applications tailored for your business.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  email: "hello@stratezic.com",
  phone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210",
  address: "Pune, Maharashtra, India",
  workingHours: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  social: {
    linkedin: "https://linkedin.com/company/stratezic",
    twitter: "https://twitter.com/stratezic",
    instagram: "https://instagram.com/stratezic",
    github: "https://github.com/stratezic",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
] as const;
