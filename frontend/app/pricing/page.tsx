import { PRICING_PLANS } from "@/constants/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createPageMetadata, PAGE_SEO } from "@/utils/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/site";

export const metadata = createPageMetadata(PAGE_SEO.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "STRATEZIC Pricing Plans",
          url: `${SITE_CONFIG.url}/pricing`,
          itemListElement: PRICING_PLANS.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            description: plan.description,
            priceCurrency: "INR",
            url: `${SITE_CONFIG.url}${plan.href}`,
          })),
        }}
      />

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Pricing"
              title="Clear packages. Strategic outcomes."
              description="Pick a plan that matches your stage—or enquire for a custom enterprise build tailored to your exact requirements."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PRICING_PLANS.map((plan, index) => (
              <FadeIn key={plan.id} delay={index * 0.1}>
                <PricingCard plan={plan} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 rounded-[2rem] border border-white/70 bg-white/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Need something beyond these plans?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-text sm:text-base">
              From booking systems to CRM and ERP-style workflows, our Custom
              Requirements plan covers complex product builds with ongoing
              support.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink href="/contact?plan=custom">Enquire Now</ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
