import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "light" | "dark";
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "light",
}: FeatureCardProps) {
  const cardClass = variant === "dark" ? "card-dark" : "card-light";
  const titleClass = variant === "dark" ? "text-neutral-100" : "text-neutral-900";
  const textClass = variant === "dark" ? "text-neutral-300" : "text-neutral-600";
  const iconClass = variant === "dark" ? "text-indigo-500" : "text-indigo-600";

  return (
    <article
      className={`${cardClass} card-hover p-6 transition-colors ${
        variant === "dark" ? "hover:border-neutral-700" : "hover:border-neutral-300"
      }`}
    >
      <Icon className={iconClass} size={20} />
      <h3 className={`mt-4 text-lg font-semibold ${titleClass}`}>{title}</h3>
      <p className={`mt-2 ${textClass}`}>{description}</p>
    </article>
  );
}
