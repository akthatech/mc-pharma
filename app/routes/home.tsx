import { Link } from "react-router";
import { ShieldCheck, Snowflake, Truck, Clock } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { products } from "~/data/products";
import { company } from "~/data/site";

export function meta() {
  return [
    { title: `${company.name} | Pharmaceutical Distribution` },
    {
      name: "description",
      content:
        "Licensed wholesale distributor of quality-assured medicines for pharmacies, hospitals and clinics.",
    },
  ];
}

const stats = [
  { value: "15+", label: "Years in distribution" },
  { value: "2,500+", label: "Products stocked" },
  { value: "1,200", label: "Pharmacy partners" },
  { value: "99.8%", label: "On-time delivery" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Quality assured",
    text: "GDP-compliant processes with full batch traceability from manufacturer to shelf.",
  },
  {
    icon: Snowflake,
    title: "Cold chain",
    text: "Temperature-controlled storage and transport for sensitive biologics and vaccines.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "Next-day regional delivery with live tracking for every order.",
  },
  {
    icon: Clock,
    title: "24/7 support",
    text: "Dedicated account managers and an emergency supply line around the clock.",
  },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-foreground text-background">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <Badge variant="secondary">Licensed pharmaceutical wholesaler</Badge>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Trusted medicines, delivered on time.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-background/80">
            {company.name} supplies pharmacies, hospitals and clinics with
            genuine, quality-assured medicines backed by a compliant cold chain.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/products">Browse products</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-primary">{s.value}</dd>
              <p className="text-sm text-muted-foreground" aria-hidden="true">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">
          Why healthcare partners choose us
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <f.icon className="size-8 text-primary" aria-hidden="true" />
                <CardTitle className="mt-2">{f.title}</CardTitle>
                <CardDescription>{f.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold md:text-3xl">
              Featured products
            </h2>
            <Button asChild variant="outline">
              <Link to="/products">View all</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <Card key={p.id} className="overflow-hidden pt-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {p.category}
                  </Badge>
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>{p.form}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Become a distribution partner
              </h2>
              <p className="mt-1 text-primary-foreground/90">
                Open a trade account and get competitive pricing on bulk orders.
              </p>
            </div>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
