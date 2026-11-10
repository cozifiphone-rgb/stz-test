import {
  Clock3,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE_CONFIG } from "@/constants/site";
import { createPageMetadata, PAGE_SEO } from "@/utils/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata(PAGE_SEO.contact);

type ContactPageProps = {
  searchParams?: Promise<{ plan?: string }>;
};

const PLAN_TITLES: Record<string, string> = {
  static: "Static Portfolio Website",
  dynamic: "Dynamic Web Application",
  custom: "Custom Requirements",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = (await searchParams) || {};
  const defaultTitle = params.plan ? PLAN_TITLES[params.plan] || "" : "";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact STRATEZIC",
          url: `${SITE_CONFIG.url}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            email: SITE_CONFIG.email,
            telephone: SITE_CONFIG.phone,
          },
        }}
      />

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let’s build something strategic"
              description="Share your requirement and we’ll respond with a clear proposal, recommended plan, and estimated timeline."
            />
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <aside className="h-full rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-ink via-ink-soft to-ink-muted p-6 text-white sm:p-8">
                <h2 className="font-display text-2xl font-bold">
                  Get in touch
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Prefer a direct conversation? Reach us through any of the
                  channels below, or send a detailed enquiry using the form.
                </p>

                <ul className="mt-8 space-y-4">
                  <InfoRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={SITE_CONFIG.email}
                    href={`mailto:${SITE_CONFIG.email}`}
                  />
                  <InfoRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={SITE_CONFIG.phone}
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  />
                  <InfoRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Address"
                    value={SITE_CONFIG.address}
                  />
                  <InfoRow
                    icon={<Clock3 className="h-4 w-4" />}
                    label="Working Hours"
                    value={SITE_CONFIG.workingHours}
                  />
                </ul>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-bright">
                    Social
                  </p>
                  <div className="mt-3 flex gap-3">
                    <Social href={SITE_CONFIG.social.linkedin} label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </Social>
                    <Social href={SITE_CONFIG.social.twitter} label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </Social>
                    <Social href={SITE_CONFIG.social.instagram} label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </Social>
                    <Social href={SITE_CONFIG.social.github} label="GitHub">
                      <Github className="h-4 w-4" />
                    </Social>
                  </div>
                </div>
              </aside>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactForm defaultTitle={defaultTitle} />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal/20 text-teal-bright">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-white/50">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="block transition hover:opacity-90">
          {inner}
        </a>
      </li>
    );
  }

  return <li>{inner}</li>;
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:bg-teal hover:text-white"
    >
      {children}
    </a>
  );
}
