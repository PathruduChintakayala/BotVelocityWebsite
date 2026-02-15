type CapabilityGridProps = {
  items: string[];
  variant?: "light" | "dark";
};

export function CapabilityGrid({ items, variant = "dark" }: CapabilityGridProps) {
  const cardClass = variant === "dark" ? "card-dark hover:border-neutral-700" : "card-light hover:border-neutral-300";
  const titleClass = variant === "dark" ? "text-neutral-100" : "text-neutral-900";

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item}
          className={`${cardClass} card-hover p-6 transition-colors`}
        >
          <h3 className={`text-lg font-semibold ${titleClass}`}>{item}</h3>
        </article>
      ))}
    </div>
  );
}
