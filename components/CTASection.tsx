import Link from "next/link";

type CTASectionProps = {
  title: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({ title, buttonHref, buttonLabel }: CTASectionProps) {
  return (
    <section className="section-light border-t border-neutral-200">
      <div className="container-shell py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h2>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium hover:bg-indigo-500"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
