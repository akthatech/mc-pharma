export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-primary-foreground/90">{subtitle}</p>
      </div>
    </section>
  );
}
