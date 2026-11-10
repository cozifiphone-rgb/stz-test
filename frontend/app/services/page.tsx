import { DETAILED_SERVICES } from "@/constants/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createPageMetadata, PAGE_SEO } from "@/utils/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Clock3, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = createPageMetadata(PAGE_SEO.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "STRATEZIC Services",
          itemListElement: DETAILED_SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            description: service.description,
          })),
        }}
      />

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Digital services built for growth"
              description="Every engagement is tailored for clarity, performance, and long-term scalability—from launch-ready websites to enterprise platforms."
            />
          </FadeIn>

          <FadeIn className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              View Pricing
            </ButtonLink>
          </FadeIn>

          <div className="mt-14 space-y-6">
            {DETAILED_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={(index % 3) * 0.05}>
                  <article className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_12px_40px_rgba(7,17,31,0.05)] sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                          {service.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-text sm:text-base">
                          {service.description}
                        </p>
                        <p className="mt-5 inline-flex items-center gap-2 rounded-xl bg-mist px-3 py-2 text-sm font-medium text-ink">
                          <Clock3 className="h-4 w-4 text-teal" aria-hidden="true" />
                          Estimated delivery: {service.delivery}
                        </p>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl bg-mist/80 p-5">
                          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                            <Sparkles className="h-3.5 w-3.5" /> Features
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-ink/85"
                              >
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                                  aria-hidden="true"
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-teal/15 bg-teal/5 p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                            Benefits
                          </p>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm text-ink/85"
                              >
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                                  aria-hidden="true"
                                />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 border-t border-ink/5 pt-6">
                      <ButtonLink href="/contact">Discuss This Service</ButtonLink>
                      <ButtonLink href="/faq" variant="secondary">
                        Read FAQ
                      </ButtonLink>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="mt-12 rounded-[2rem] bg-ink px-6 py-10 text-center text-white sm:px-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
              Share your goals and we’ll recommend the right approach—website,
              application, dashboard, or a custom build.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink href="/contact">Talk to STRATEZIC</ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
