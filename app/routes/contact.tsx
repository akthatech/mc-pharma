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

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const values = Object.fromEntries(
    (["name", "email", "phone", "subject", "message"] as const).map((k) => [
      k,
      String(form.get(k) ?? "").trim(),
    ]),
  ) as Record<Field, string>;

  const errors: Errors = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+\d\s().-]{7,20}$/.test(values.phone))
    errors.phone = "Please enter a valid phone number.";
  if (values.subject.length < 3) errors.subject = "Please enter a subject.";
  if (values.message.length < 10)
    errors.message = "Message must be at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return { ok: false as const, errors, values };
  }
  // Demo only: no email is sent and nothing is stored.
  return { ok: true as const };
}

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
  const errors: Errors = actionData && !actionData.ok ? actionData.errors : {};
  const values = actionData && !actionData.ok ? actionData.values : undefined;

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
            {actionData?.ok ? (
              <p
                role="status"
                className="rounded-md bg-accent p-4 text-accent-foreground"
              >
                Thank you! Your message has been received.
              </p>
            ) : (
              <Form method="post" noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      defaultValue={values?.name}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <FieldError id="name-error" message={errors.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      defaultValue={values?.email}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    <FieldError id="email-error" message={errors.email} />
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
                      defaultValue={values?.phone}
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                    />
                    <FieldError id="phone-error" message={errors.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      defaultValue={values?.subject}
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                    />
                    <FieldError id="subject-error" message={errors.subject} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    defaultValue={values?.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </Form>
            )}
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
