import { WHY_CHOOSE_US } from "@/constants/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-ink via-ink-soft to-ink-muted px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Why STRATEZIC"
              title="Why choose us"
              description="We combine strategy, design, and engineering so your digital product feels intentional and performs at scale."
              className="[&_h2]:text-white [&_p]:text-white/65"
            />
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-teal/40 hover:bg-white/10">
                    <Icon className="h-5 w-5 text-teal-bright" aria-hidden="true" />
                    <p className="mt-3 font-semibold text-white">{item.title}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
