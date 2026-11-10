import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PricingPreview } from "@/components/home/PricingPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/site";
import { createPageMetadata, PAGE_SEO } from "@/utils/seo";

export const metadata = createPageMetadata(PAGE_SEO.home);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          description: SITE_CONFIG.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_CONFIG.url}/services`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <PricingPreview />
      <TestimonialsSection />
      <ContactPreview />
    </>
  );
}
