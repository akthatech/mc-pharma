import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, Pill } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { company, navLinks } from "~/data/site";
import { cn } from "~/lib/utils";

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return navLinks.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.to === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground",
        )
      }
    >
      {link.label}
    </NavLink>
  ));
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Pill className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg">{company.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <NavItems />
          <Button asChild className="ml-3">
            <Link to="/contact">Request a quote</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{company.name}</SheetTitle>
              <SheetDescription>{company.tagline}</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              <NavItems onNavigate={() => setOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
