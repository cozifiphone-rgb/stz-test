import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FAQS } from "@/constants/content";
import { createPageMetadata, PAGE_SEO } from "@/utils/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata(PAGE_SEO.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers before you kick off"
              description="Everything teams usually ask before starting a website or web application project with STRATEZIC."
            />
          </FadeIn>

          <FadeIn className="mt-12" delay={0.08}>
            <FaqAccordion />
          </FadeIn>

          <FadeIn className="mt-12 text-center">
            <p className="text-slate-text">Still have questions?</p>
            <div className="mt-4 flex justify-center">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
