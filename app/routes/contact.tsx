import { Form, useNavigation } from "react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import type { Route } from "./+types/contact";
import { PageHero } from "~/components/page-hero";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { company } from "~/data/site";

export function meta() {
  return [
    { title: `Contact | ${company.name}` },
    {
      name: "description",
      content: `Get in touch with ${company.name} for quotes and trade accounts.`,
    },
  ];
}

type Field = "name" | "email" | "phone" | "subject" | "message";
type Errors = Partial<Record<Field, string>>;


function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-sm text-destructive">
      {message}
    </p>
  );
}

const details = [
  { icon: MapPin, label: "Address", value: company.address },
  { icon: Phone, label: "Phone", value: company.phone },
  { icon: Mail, label: "Email", value: company.email },
  { icon: Clock, label: "Hours", value: company.hours },
];

export default function Contact({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Request a quote, open a trade account or ask about availability. We reply within one business day."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Demo form: submissions are validated but not sent or stored.
            </CardDescription>
          </CardHeader>
          <CardContent>
            
              <Form method="post" noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                    />
                    <FieldError id="name-error" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                    <FieldError id="email-error" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                    <FieldError id="phone-error" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                    />
                    <FieldError id="subject-error" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                  />
                  <FieldError id="message-error"/>
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </Form>
            
          </CardContent>
        </Card>

        <div className="space-y-4 lg:col-span-2">
          {details.map((d) => (
            <Card key={d.label}>
              <CardContent className="flex gap-4">
                <d.icon
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold">{d.label}</p>
                  <p className="text-sm text-muted-foreground">{d.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
