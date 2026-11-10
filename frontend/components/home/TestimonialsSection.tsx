import { TESTIMONIALS } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="section-padding" aria-labelledby="testimonials-heading">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders and growth teams"
            description="A few words from clients who partnered with STRATEZIC to launch and scale their digital presence."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.08}>
              <blockquote className="card-surface h-full">
                <Quote className="h-5 w-5 text-teal" aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-ink/85">
                  “{item.quote}”
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-slate-text">{item.role}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
