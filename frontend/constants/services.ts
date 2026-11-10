import {
  Code2,
  Gauge,
  LayoutDashboard,
  Search,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
  Cloud,
  ShoppingCart,
  Briefcase,
  Globe,
} from "lucide-react";

export const SERVICES_PREVIEW = [
  {
    title: "Website Development",
    description:
      "Clean, fast, and conversion-focused websites crafted for modern brands.",
    icon: Globe,
  },
  {
    title: "Custom Web Applications",
    description:
      "Scalable web apps tailored to your workflows, users, and business goals.",
    icon: Code2,
  },
  {
    title: "Admin Dashboards",
    description:
      "Intuitive dashboards that turn complex data into actionable insights.",
    icon: LayoutDashboard,
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO foundations so your site ranks and reaches the right audience.",
    icon: Search,
  },
  {
    title: "Backend Development",
    description:
      "Secure APIs, databases, and server logic built for reliability and growth.",
    icon: Server,
  },
  {
    title: "Website Maintenance",
    description:
      "Continuous updates, monitoring, and support to keep everything running.",
    icon: Wrench,
  },
] as const;

export const DETAILED_SERVICES = [
  {
    title: "Static Website Development",
    description:
      "Lightning-fast static sites with elegant design and strong SEO fundamentals.",
    features: [
      "Clean HTML/CSS/JS architecture",
      "Semantic markup",
      "Optimized assets",
      "Contact form integration",
    ],
    benefits: [
      "Faster load times",
      "Lower hosting costs",
      "Strong search visibility",
    ],
    delivery: "7–10 days",
    icon: Globe,
  },
  {
    title: "Business Portfolio Websites",
    description:
      "Polished portfolio and company sites that communicate trust and expertise.",
    features: [
      "Brand-aligned UI",
      "Service & case study sections",
      "Gallery & testimonials",
      "Mobile-first layouts",
    ],
    benefits: [
      "Strong first impression",
      "Clear service storytelling",
      "Higher enquiry rates",
    ],
    delivery: "10–14 days",
    icon: Briefcase,
  },
  {
    title: "E-Commerce Websites",
    description:
      "Product-focused storefronts with catalog management and checkout readiness.",
    features: [
      "Product listings",
      "Cart-ready structure",
      "Category filters",
      "Payment gateway readiness",
    ],
    benefits: [
      "Sell online with confidence",
      "Scalable catalog structure",
      "Improved conversion paths",
    ],
    delivery: "20–30 days",
    icon: ShoppingCart,
  },
  {
    title: "Custom Web Applications",
    description:
      "Bespoke applications built around your operations, users, and unique logic.",
    features: [
      "Custom workflows",
      "Role-based access",
      "API-first approach",
      "Scalable architecture",
    ],
    benefits: [
      "Automation of manual work",
      "Better operational control",
      "Long-term flexibility",
    ],
    delivery: "25–45 days",
    icon: Code2,
  },
  {
    title: "Backend API Development",
    description:
      "Robust REST APIs with validation, security, and clean documentation.",
    features: [
      "RESTful endpoints",
      "Input validation",
      "Error handling",
      "JSON-based storage or DB-ready design",
    ],
    benefits: [
      "Reliable integrations",
      "Secure data handling",
      "Easy frontend consumption",
    ],
    delivery: "10–20 days",
    icon: Server,
  },
  {
    title: "Admin Dashboard Development",
    description:
      "Powerful admin panels for managing content, users, and business data.",
    features: [
      "Analytics widgets",
      "CRUD management",
      "Auth support",
      "Responsive admin UI",
    ],
    benefits: [
      "Faster decision making",
      "Centralized control",
      "Reduced operational friction",
    ],
    delivery: "15–25 days",
    icon: LayoutDashboard,
  },
  {
    title: "SEO Optimization",
    description:
      "On-page and technical SEO that helps pages get discovered and indexed.",
    features: [
      "Meta tags & Open Graph",
      "Sitemap & robots.txt",
      "Structured data",
      "Performance best practices",
    ],
    benefits: [
      "Better rankings potential",
      "Improved crawlability",
      "Social sharing readiness",
    ],
    delivery: "5–10 days",
    icon: Search,
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing care for uptime, updates, security patches, and content tweaks.",
    features: [
      "Bug fixes",
      "Content updates",
      "Security checks",
      "Dependency updates",
    ],
    benefits: [
      "Peace of mind",
      "Consistent performance",
      "Extended website lifespan",
    ],
    delivery: "Ongoing",
    icon: Wrench,
  },
  {
    title: "Performance Optimization",
    description:
      "Speed upgrades that improve Core Web Vitals and user experience.",
    features: [
      "Image optimization",
      "Code splitting",
      "Caching strategy",
      "Lazy loading",
    ],
    benefits: [
      "Faster page loads",
      "Lower bounce rates",
      "Better SEO signals",
    ],
    delivery: "5–12 days",
    icon: Gauge,
  },
  {
    title: "Cloud Deployment Support",
    description:
      "Smooth launches on modern cloud platforms with production-ready configs.",
    features: [
      "Environment setup",
      "CI-friendly deployment",
      "SSL configuration",
      "Monitoring guidance",
    ],
    benefits: [
      "Reliable production releases",
      "Secure hosting posture",
      "Easier future updates",
    ],
    delivery: "3–7 days",
    icon: Cloud,
  },
] as const;

export const WHY_CHOOSE_US = [
  { title: "Fast Delivery", icon: Zap },
  { title: "SEO Optimized", icon: Search },
  { title: "Responsive Design", icon: Smartphone },
  { title: "Modern UI", icon: Sparkles },
  { title: "Affordable Pricing", icon: Gauge },
  { title: "Scalable Architecture", icon: Server },
  { title: "Secure APIs", icon: Shield },
  { title: "Long Term Support", icon: Wrench },
] as const;
