import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { SERVICES_PREVIEW } from "@/constants/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-ink text-white">
      <div className="container-page section-padding !pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
              {SITE_CONFIG.tagline} We craft modern digital products with
              performance, SEO, and long-term scale in mind.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink href={SITE_CONFIG.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SITE_CONFIG.social.twitter} label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SITE_CONFIG.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SITE_CONFIG.social.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-bright">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-bright">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES_PREVIEW.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-bright">
              Contact Details
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/pricing" className="text-sm text-white/80 underline-offset-4 hover:underline">
                Pricing
              </Link>
              <Link href="/faq" className="text-sm text-white/80 underline-offset-4 hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>Building Strategic Digital Experiences.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-teal/50 hover:bg-teal hover:text-white"
    >
      {children}
    </a>
  );
}
