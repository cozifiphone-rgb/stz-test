import { PRICING_PLANS } from "@/constants/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function PricingPreview() {
  return (
    <section className="section-padding" aria-labelledby="pricing-preview">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent plans for every stage"
            description="Choose a ready package or tell us about a custom requirement. Every plan is built for clarity and delivery."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.08}>
              <PricingCard plan={plan} compact />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex justify-center">
          <ButtonLink href="/pricing">View Detailed Pricing</ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
