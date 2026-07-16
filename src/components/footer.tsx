import { HeartPulse } from "lucide-react";
import { NAV_LINKS, SITE, waLink } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HeartPulse size={18} />
              </span>
              <span className="font-heading text-sm font-bold text-foreground">
                {SITE.doctorName}
                <span className="block text-[10.5px] font-medium tracking-wide text-muted-foreground">
                  {SITE.credentials} &middot; {SITE.tagline}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional, personalized physiotherapy delivered at your
              doorstep, covering orthopaedic, neurological, sports and
              post-surgical rehabilitation for every stage of recovery.
            </p>
          </div>

          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-foreground">
              Quick links
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-foreground">
              Get in touch
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-whatsapp-dark transition-opacity hover:opacity-80 dark:text-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {SITE.whatsappDisplay}
              </a>
              <a
                href={SITE.phoneHref}
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Call for appointments
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.doctorName} Physiotherapy.
            All rights reserved.
          </p>
          <p>Home-visit physiotherapy services.</p>
        </div>
      </div>
    </footer>
  );
}
