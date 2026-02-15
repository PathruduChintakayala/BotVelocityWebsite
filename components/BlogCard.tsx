import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  readingTime?: string;
  variant?: "light" | "dark";
};

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  readingTime,
  variant = "light",
}: BlogCardProps) {
  const cardClass = variant === "dark" ? "card-dark" : "card-light";
  const dateClass = variant === "dark" ? "text-neutral-400" : "text-neutral-500";
  const titleClass = variant === "dark" ? "text-neutral-100" : "text-neutral-900";
  const excerptClass = variant === "dark" ? "text-neutral-300" : "text-neutral-600";
  const accentClass = variant === "dark" ? "hover:text-indigo-500" : "hover:text-indigo-600";

  return (
    <article
      className={`${cardClass} card-hover p-6 transition-colors ${
        variant === "dark" ? "hover:border-neutral-700" : "hover:border-neutral-300"
      }`}
    >
      <div className={`flex items-center gap-2 text-sm ${dateClass}`}>
        <span>{date}</span>
        {readingTime ? (
          <>
            <span aria-hidden="true">·</span>
            <span>{readingTime}</span>
          </>
        ) : null}
      </div>
      {author ? (
        <p className={`mt-1 text-sm ${dateClass}`}>{author}</p>
      ) : null}
      <h3 className={`mt-3 text-xl font-semibold tracking-tight ${titleClass}`}>
        <Link href={`/blog/${slug}`} className={accentClass}>
          {title}
        </Link>
      </h3>
      <p className={`mt-3 ${excerptClass}`}>{excerpt}</p>
    </article>
  );
}
