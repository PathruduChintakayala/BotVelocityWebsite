type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  title,
  description,
  variant = "light",
  className = "",
  contentClassName = "",
  children,
}: SectionProps) {
  const sectionClass =
    variant === "dark"
      ? "section-dark border-t border-neutral-800"
      : "section-light border-t border-neutral-200";
  const titleClass = variant === "dark" ? "text-neutral-100" : "text-neutral-900";
  const descriptionClass =
    variant === "dark" ? "text-neutral-300" : "text-neutral-600";

  return (
    <section id={id} className={`${sectionClass} ${className}`}>
      <div className={`container-shell py-14 md:py-20 ${contentClassName}`}>
        <div className="max-w-4xl mb-8">
          <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight ${titleClass}`}>
            {title}
          </h2>
          {description ? (
            <p className={`mt-3 text-lg ${descriptionClass}`}>{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
