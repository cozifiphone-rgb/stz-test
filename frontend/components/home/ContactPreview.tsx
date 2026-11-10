import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ContactPreview() {
  return (
    <section className="section-padding pt-0" aria-labelledby="contact-preview">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_16px_50px_rgba(7,17,31,0.06)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <FadeIn>
              <SectionHeading
                align="left"
                eyebrow="Contact"
                title="Ready to start your next digital project?"
                description="Tell us what you need. We’ll respond with a clear path, timeline, and next steps."
              />
              <div className="mt-8">
                <ButtonLink href="/contact">Quick Enquiry</ButtonLink>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="space-y-4">
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={SITE_CONFIG.email}
                  href={`mailto:${SITE_CONFIG.email}`}
                />
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={SITE_CONFIG.phone}
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                />
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Address"
                  value={SITE_CONFIG.address}
                />
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
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
  const content = (
    <div className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-mist/70 p-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-text">
          {label}
        </p>
        <p className="mt-1 font-medium text-ink">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="block transition hover:opacity-90">
          {content}
        </a>
      </li>
    );
  }

  return <li>{content}</li>;
}
