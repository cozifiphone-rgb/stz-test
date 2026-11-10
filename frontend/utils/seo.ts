import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: readonly string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageSeo): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@stratezic",
    },
  };
}

export const PAGE_SEO = {
  home: {
    title: "Strategic Web Development Agency",
    description:
      "STRATEZIC builds modern, scalable, and SEO-optimized websites and web applications for ambitious brands.",
    path: "/",
    keywords: [
      "STRATEZIC",
      "web development company",
      "website development",
      "Next.js agency",
      "SEO websites",
    ],
  },
  services: {
    title: "Web Development Services",
    description:
      "Explore STRATEZIC services including website development, custom apps, dashboards, SEO, APIs, and maintenance.",
    path: "/services",
    keywords: [
      "web development services",
      "custom web applications",
      "admin dashboards",
      "SEO optimization",
      "API development",
    ],
  },
  pricing: {
    title: "Transparent Website Pricing",
    description:
      "Compare STRATEZIC pricing plans for static portfolio websites, dynamic web applications, and custom projects.",
    path: "/pricing",
    keywords: [
      "website pricing India",
      "portfolio website cost",
      "dynamic web application pricing",
      "custom website development",
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    description:
      "Answers about STRATEZIC delivery timelines, SEO, hosting, source code, revisions, maintenance, and upgrades.",
    path: "/faq",
    keywords: [
      "web development FAQ",
      "website delivery time",
      "SEO support",
      "website maintenance",
    ],
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with STRATEZIC for website, app, and dashboard projects. Share your requirements and start today.",
    path: "/contact",
    keywords: [
      "contact web development company",
      "hire website developer",
      "STRATEZIC contact",
      "project enquiry",
    ],
  },
} as const;
