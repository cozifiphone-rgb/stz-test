import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";
import type { PRICING_PLANS } from "@/constants/pricing";

type Plan = (typeof PRICING_PLANS)[number];

type PricingCardProps = {
  plan: Plan;
  compact?: boolean;
};

export function PricingCard({ plan, compact = false }: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[1.75rem] border p-6 sm:p-7 transition duration-300",
        plan.popular
          ? "border-teal/40 bg-gradient-to-b from-teal/10 via-white/80 to-white shadow-[0_24px_60px_rgba(15,157,138,0.18)]"
          : "border-white/70 bg-white/75 shadow-[0_12px_40px_rgba(7,17,31,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(7,17,31,0.1)]"
      )}
    >
      {plan.popular ? (
        <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      ) : null}

      <div>
        <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
          {plan.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-text">
          {plan.description}
        </p>
        <div className="mt-5 flex items-end gap-2">
          <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {plan.price}
          </p>
          <span className="mb-1 text-xs text-slate-text">{plan.priceNote}</span>
        </div>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5">
        {(compact ? plan.features.slice(0, 8) : plan.features).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink/85">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-teal"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
        {compact && plan.features.length > 8 ? (
          <li className="pl-6 text-sm text-slate-text">
            +{plan.features.length - 8} more features
          </li>
        ) : null}
      </ul>

      {!compact && plan.pages.length > 0 ? (
        <div className="mt-6 rounded-2xl bg-mist/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            Pages can include
          </p>
          <p className="mt-2 text-sm text-slate-text">{plan.pages.join(" · ")}</p>
        </div>
      ) : null}

      <Link
        href={plan.href}
        className={cn(
          "mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
          plan.popular
            ? "bg-teal text-white hover:bg-teal-deep"
            : "border border-ink/10 bg-white text-ink hover:border-teal/40"
        )}
      >
        {plan.cta}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
