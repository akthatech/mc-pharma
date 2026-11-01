import { Form, useSearchParams } from "react-router";
import { Search } from "lucide-react";

import { PageHero } from "~/components/page-hero";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { categories, products } from "~/data/products";
import { company } from "~/data/site";

export function meta() {
  return [
    { title: `Products | ${company.name}` },
    {
      name: "description",
      content:
        "Browse our catalogue of pharmaceutical products for pharmacies and clinics.",
    },
  ];
}

const ALL = "all";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const category = params.get("category") ?? ALL;

  const needle = q.trim().toLowerCase();
  const filtered = products.filter(
    (p) =>
      (category === ALL || p.category === category) &&
      (needle === "" ||
        p.name.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle)),
  );

  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value && value !== ALL) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }

  return (
    <>
      <PageHero
        title="Products"
        subtitle="Browse a sample of our catalogue. Contact us for full pricing, availability and trade terms."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Form
          role="search"
          className="flex flex-col gap-4 sm:flex-row sm:items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1 space-y-2">
            <Label htmlFor="q">Search</Label>
            <div className="relative">
              <Search
                className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="q"
                name="q"
                type="search"
                placeholder="Search by name or description"
                className="pl-8"
                value={q}
                onChange={(e) => update("q", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2 sm:w-56">
            <Label htmlFor="category">Category</Label>
            <Select
              value={category}
              onValueChange={(v) => update("category", v)}
            >
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All categories</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setParams({}, { replace: true })}
          >
            Reset
          </Button>
        </Form>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          Showing {filtered.length} of {products.length} products
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No products match your search.
          </p>
        ) : (
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <li key={p.id}>
                <Card className="h-full overflow-hidden pt-0">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <CardHeader>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{p.category}</Badge>
                      {p.prescription && <Badge>Rx only</Badge>}
                    </div>
                    <CardTitle>{p.name}</CardTitle>
                    <CardDescription>
                      {p.form} · {p.strength}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
