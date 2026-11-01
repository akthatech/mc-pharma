import { Link } from "react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { company, navLinks } from "~/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{company.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {company.tagline}. Licensed wholesale distribution of
            quality-assured medicines to pharmacies, hospitals and clinics.
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              {company.address}
            </li>
            <li className="flex gap-2">
              <Phone
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              {company.phone}
            </li>
            <li className="flex gap-2">
              <Mail
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              {company.email}
            </li>
            <li className="flex gap-2">
              <Clock
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              {company.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {company.name}. Demo website with sample
        content.
      </div>
    </footer>
  );
}
