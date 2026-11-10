import { SERVICES_PREVIEW } from "@/constants/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ServicesPreview() {
  return (
    <section className="section-padding" aria-labelledby="services-preview-heading">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="What we build"
            title="Services designed for modern brands"
            description="From portfolio websites to custom applications, STRATEZIC delivers strategic digital experiences that perform."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_PREVIEW.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <article className="card-surface h-full">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3
                    id={index === 0 ? "services-preview-heading" : undefined}
                    className="text-xl font-semibold text-ink"
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-10 flex justify-center">
          <ButtonLink href="/services" variant="secondary">
            Explore All Services
          </ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
