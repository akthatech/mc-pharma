import { Award, HeartPulse, Handshake, ShieldCheck } from "lucide-react";

import { PageHero } from "~/components/page-hero";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { company } from "~/data/site";

export function meta() {
  return [
    { title: `About Us | ${company.name}` },
    {
      name: "description",
      content: `Learn about ${company.name}, our mission, values and compliance standards.`,
    },
  ];
}

const values = [
  {
    icon: HeartPulse,
    title: "Patient first",
    text: "Every decision starts with the patients who depend on our medicines.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Transparent sourcing and strict anti-counterfeit controls.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "Long-term relationships with manufacturers and healthcare providers.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Continuous improvement across storage, handling and delivery.",
  },
];

const certifications = [
  "Wholesale Distribution Authorisation (sample)",
  "Good Distribution Practice (GDP) compliant",
  "ISO 9001 quality management (sample)",
  "Temperature-mapped storage and validated cold chain",
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A licensed pharmaceutical distributor connecting manufacturers with the pharmacies and clinics that serve patients."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded more than fifteen years ago, {company.name} began as a small
            regional supplier. Today we operate modern, climate-controlled
            facilities and deliver thousands of products to healthcare providers
            every week.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our mission is simple: make sure the right medicine reaches the
            right place, safely and on time.
          </p>
        </div>
        <img
          src="/images/warehouse.jpg"
          alt="Pharmaceutical distribution warehouse with stocked shelves"
          className="rounded-xl object-cover shadow-md"
          loading="lazy"
        />
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Our values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <CardHeader>
                  <v.icon className="size-8 text-primary" aria-hidden="true" />
                  <CardTitle className="mt-2">{v.title}</CardTitle>
                  <CardDescription>{v.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <img
          src="/images/lab.jpg"
          alt="Laboratory pipette filling sample tubes"
          className="rounded-xl object-cover shadow-md"
          loading="lazy"
        />
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">
            Quality and compliance
          </h2>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-muted-foreground">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
