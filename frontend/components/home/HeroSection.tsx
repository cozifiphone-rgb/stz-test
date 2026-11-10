"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Heart,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Truck,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { HeroVisual } from "@/components/home/HeroVisual";

const HERO_CHECKS = [
  "React + Next.js Architecture",
  "Delivered in 7 Days",
  "1-Year Free Domain & Hosting",
  "Mobile + Desktop Version",
] as const;

const FEATURE_BAR = [
  {
    title: "Fast Loading",
    description: "Optimized for speed and performance",
    icon: Rocket,
  },
  {
    title: "Secure & Reliable",
    description: "Built with modern best practices",
    icon: Shield,
  },
  {
    title: "Clean Code",
    description: "Scalable and easy to maintain",
    icon: Code2,
  },
  {
    title: "Mobile First",
    description: "Looks great on all devices",
    icon: Smartphone,
  },
  {
    title: "SEO Ready",
    description: "Help you get found online",
    icon: Search,
  },
  {
    title: "Built for Growth",
    description: "Add more features anytime",
    icon: Heart,
  },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* Diagonal black panel (right side) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] bg-black lg:block"
        style={{
          clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        aria-hidden="true"
      />
      {/* Mobile / tablet dark top accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/5 to-transparent lg:hidden"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 grid items-center gap-10 pb-10 pt-8 lg:min-h-[calc(100vh-5.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-16 lg:pt-6 xl:gap-10">
        {/* Left copy */}
        <div className="relative max-w-xl xl:max-w-2xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-hero-yellow/70 bg-white px-3.5 py-1.5 text-xs font-medium text-ink shadow-sm sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-hero-yellow" aria-hidden="true" />
            React + Next.js websites for growing businesses
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/55"
          >
            Modern · Fast · Scalable
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3 font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]"
          >
            High-Performance
            <br />
            Websites at{" "}
            <span className="relative inline-block px-1">
              <span
                className="absolute inset-x-[-4%] inset-y-[8%] -z-10 rotate-[-2deg] rounded-[4px]"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 0%, #f5c518 8%, #f5c518 92%, transparent 100%)",
                  opacity: 0.95,
                }}
                aria-hidden="true"
              />
              <span className="relative">1/5th</span>
            </span>
            <br />
            the Cost
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/65 sm:text-base"
          >
            Launch a professional one-page website with React + Next.js, custom
            sections, mobile and desktop versions, and a clean path to add more
            features as your business grows.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start on WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 py-2.5 text-sm font-medium text-ink/80 shadow-sm">
              <Truck className="h-4 w-4 text-ink/50" aria-hidden="true" />
              ₹11,999 · 7-Day Delivery
            </span>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 rounded-2xl border border-black/6 bg-white/90 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-5"
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {HERO_CHECKS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-ink/85"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hero-yellow/25 text-black">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none lg:self-end xl:self-center"
        >
          <HeroVisual reduceMotion={!!reduceMotion} />
        </motion.div>
      </div>

      {/* Bottom feature bar */}
      <div className="relative z-10 border-t border-white/10 bg-black">
        <div className="container-page grid gap-6 px-4 py-7 sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 lg:px-8 lg:py-8">
          {FEATURE_BAR.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-start gap-2.5 lg:items-center lg:text-center"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-hero-yellow text-black">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-white/55">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
