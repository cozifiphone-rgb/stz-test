"use client";

import { motion } from "framer-motion";

type HeroVisualProps = {
  reduceMotion: boolean;
};

export function HeroVisual({ reduceMotion }: HeroVisualProps) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] sm:aspect-[5/5] lg:aspect-[4/4.6] lg:max-w-none">
      <div
        className="absolute inset-0 hidden rounded-full bg-hero-yellow/10 blur-3xl lg:block"
        aria-hidden="true"
      />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-[6%] z-10 w-[58%] overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl sm:w-[52%] lg:left-[-2%] lg:w-[48%]"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-[9px] text-white/40">Home.tsx</span>
        </div>
        <pre className="overflow-hidden p-3 font-mono text-[8px] leading-relaxed text-white/80 sm:text-[9px] lg:text-[10px]">
          <code>
            <span className="text-[#c792ea]">export default</span>{" "}
            <span className="text-[#82aaff]">function</span>{" "}
            <span className="text-hero-yellow">Home</span>() {"{"}
            {"\n"}
            {"  "}
            <span className="text-[#c792ea]">return</span> (
            {"\n"}
            {"    "}&lt;<span className="text-[#ffcb6b]">main</span>&gt;
            {"\n"}
            {"      "}&lt;<span className="text-[#ffcb6b]">Hero</span> /&gt;
            {"\n"}
            {"      "}&lt;<span className="text-[#ffcb6b]">Features</span> /&gt;
            {"\n"}
            {"    "}&lt;/<span className="text-[#ffcb6b]">main</span>&gt;
            {"\n"}
            {"  "});
            {"\n"}
            {"}"}
          </code>
        </pre>
      </motion.div>

      <div className="absolute left-[2%] top-[38%] z-20 hidden rotate-[-8deg] sm:block lg:left-[-4%]">
        <p
          className="font-display text-xs font-bold italic text-hero-yellow sm:text-sm"
          style={{ textShadow: "0 1px 0 rgba(0,0,0,0.35)" }}
        >
          Clean Code
          <br />
          Better Results
        </p>
        <svg
          width="48"
          height="36"
          viewBox="0 0 48 36"
          className="ml-8 mt-[-4px] text-hero-yellow"
          aria-hidden="true"
        >
          <path
            d="M4 4 C18 8, 28 18, 42 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M34 28 L42 30 L38 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-[18%] left-[8%] right-[4%] z-20 sm:left-[12%] lg:bottom-[16%] lg:left-[10%]">
        <div className="relative mx-auto w-[92%]">
          <div className="overflow-hidden rounded-t-lg border-[3px] border-neutral-800 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-cream">
              <LaptopScreen />
            </div>
          </div>
          <div className="relative mx-auto h-3 w-[108%] -translate-x-[3.5%] rounded-b-md bg-gradient-to-b from-neutral-300 to-neutral-400">
            <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-neutral-500" />
          </div>
          <div className="mx-auto h-1.5 w-[112%] -translate-x-[5%] rounded-b-lg bg-neutral-600" />
        </div>
      </div>

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-[14%] right-[2%] z-30 w-[28%] max-w-[120px] sm:right-[4%] sm:w-[26%] lg:right-0"
      >
        <div className="overflow-hidden rounded-[1.1rem] border-[3px] border-neutral-900 bg-black shadow-2xl">
          <div className="relative mx-auto mt-1.5 h-2.5 w-10 rounded-full bg-neutral-800" />
          <div className="aspect-[9/16] overflow-hidden bg-cream">
            <PhoneScreen />
          </div>
          <div className="mx-auto my-1.5 h-1 w-8 rounded-full bg-white/20" />
        </div>
      </motion.div>

      <div className="absolute bottom-[48%] right-[-2%] z-30 hidden rotate-[6deg] lg:block">
        <svg
          width="40"
          height="28"
          viewBox="0 0 40 28"
          className="mb-[-2px] text-hero-yellow"
          aria-hidden="true"
        >
          <path
            d="M36 4 C24 10, 16 16, 6 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 22 L6 24 L10 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p
          className="font-display text-xs font-bold italic leading-tight text-hero-yellow"
          style={{ textShadow: "0 1px 0 rgba(0,0,0,0.35)" }}
        >
          Your Website
          <br />
          Our Code
        </p>
      </div>

      <div
        className="absolute bottom-[8%] left-[18%] z-10 hidden sm:block"
        aria-hidden="true"
      >
        <div className="relative h-14 w-12 rounded-b-xl rounded-t-md bg-white shadow-lg">
          <div className="absolute -right-3 top-3 h-6 w-3 rounded-r-full border-2 border-white/90 bg-transparent" />
          <div className="flex h-full items-center justify-center font-mono text-xs font-bold text-black/70">
            {"</>"}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-[10%] left-[38%] z-10 hidden h-5 w-8 rounded-full bg-neutral-900 shadow-md sm:block"
        aria-hidden="true"
      >
        <div className="mx-auto mt-1 h-2 w-px bg-white/30" />
      </div>

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6%] right-[28%] z-30 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-lg sm:text-xs"
      >
        <FigmaGlyph />
        Figma to Code
      </motion.div>
    </div>
  );
}

function LaptopScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between bg-black px-2 py-1.5">
        <span className="text-[7px] font-bold tracking-wide text-white sm:text-[8px]">
          STRATEZIC
        </span>
        <span className="rounded-full bg-hero-yellow px-1.5 py-0.5 text-[6px] font-bold text-black sm:text-[7px]">
          Get Started
        </span>
      </div>
      <div className="relative flex-1 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-2">
        <div className="absolute inset-2 overflow-hidden rounded-md">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, #f5c51855, transparent 45%), linear-gradient(135deg, #333 0%, #111 100%)",
            }}
          />
          <div className="relative flex h-full flex-col justify-end p-2">
            <div className="mb-1 h-1.5 w-1/3 rounded bg-hero-yellow/80" />
            <div className="h-1 w-2/3 rounded bg-white/40" />
            <div className="mt-1 h-1 w-1/2 rounded bg-white/20" />
            <div className="mt-2 flex gap-1">
              <div className="h-4 flex-1 rounded bg-white/10" />
              <div className="h-4 flex-1 rounded bg-white/10" />
              <div className="h-4 flex-1 rounded bg-hero-yellow/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col bg-cream">
      <div className="bg-black px-1.5 py-1">
        <div className="flex items-center justify-between">
          <span className="text-[5px] font-bold text-white">SZ</span>
          <span className="rounded-full bg-hero-yellow px-1 py-px text-[4px] font-bold text-black">
            Chat
          </span>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-b from-black via-neutral-800 to-cream p-1.5">
        <div className="mt-2 h-8 rounded bg-white/10" />
        <div className="mt-1.5 h-1 w-3/4 rounded bg-hero-yellow/70" />
        <div className="mt-1 h-1 w-1/2 rounded bg-white/30" />
        <div className="mt-2 space-y-1">
          <div className="h-3 rounded bg-white/80" />
          <div className="h-3 rounded bg-white/60" />
          <div className="h-3 rounded bg-hero-yellow/40" />
        </div>
      </div>
    </div>
  );
}

function FigmaGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path fill="#F24E1E" d="M3 0h3v3H3a1.5 1.5 0 010-3z" />
      <path fill="#FF7262" d="M6 0h3a1.5 1.5 0 010 3H6V0z" />
      <path fill="#A259FF" d="M3 3h3v3H3a1.5 1.5 0 010-3z" />
      <path fill="#1ABCFE" d="M6 3h3a1.5 1.5 0 010 3H6V3z" />
      <path fill="#0ACF83" d="M3 6h3v3a1.5 1.5 0 01-3 0V6z" />
    </svg>
  );
}
