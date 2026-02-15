import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
};

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="section-light border-t border-neutral-200">
      <div className="container-shell py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={primaryCta.href}
                className="w-full sm:w-auto justify-center inline-flex px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="w-full sm:w-auto justify-center inline-flex px-5 py-2.5 rounded-md border border-neutral-300 text-neutral-900 hover:border-neutral-400"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="card-light p-5 sm:p-8">
            <div className="grid gap-4">
              <div className="rounded-md border border-neutral-200 px-4 py-3 font-medium text-neutral-900">
                Developer
              </div>
              <div className="h-4 w-px bg-neutral-300 mx-auto" />
              <div className="rounded-md border border-neutral-200 px-4 py-3 text-neutral-700">
                CLI
              </div>
              <div className="h-4 w-px bg-neutral-300 mx-auto" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-md border border-neutral-200 px-4 py-3 text-neutral-700">
                  Orchestrator
                </div>
                <div className="rounded-md border border-neutral-200 px-4 py-3 text-neutral-700">
                  Evaluation
                </div>
              </div>
              <div className="h-4 w-px bg-neutral-300 mx-auto" />
              <div className="rounded-md border border-neutral-200 px-4 py-3 text-neutral-700">
                Runtime + Storage Plane
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
