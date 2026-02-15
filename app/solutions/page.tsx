import type { Metadata } from "next";
import { Section } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Bot Velocity solutions for AI Platform Teams, Automation COEs, and DevOps/SRE organizations operating AI-powered workflows at scale.",
};

const audiences = [
  {
    title: "AI Platform Teams",
    description:
      "You are building internal infrastructure for teams deploying AI agents and LLM-powered workflows. You need deterministic execution guarantees, centralized observability, and governance controls that scale across multiple teams and tenants.",
    outcomes: [
      "Centralized lifecycle control across all agent workflows",
      "Built-in evaluation intelligence with CI gating",
      "Per-run cost visibility and budget enforcement",
      "Tenant-scoped isolation and RBAC",
    ],
  },
  {
    title: "Automation Centers of Excellence",
    description:
      "You are standardizing AI automation practices across the enterprise. You need a platform that enforces operational consistency, provides audit trails, and allows teams to ship with confidence without creating shadow infrastructure.",
    outcomes: [
      "Consistent execution model across business units",
      "Policy enforcement integrated into the control path",
      "Audit-ready governance with deterministic state",
      "Evaluation baselines that prevent regression at deploy time",
    ],
  },
  {
    title: "DevOps & SRE",
    description:
      "You are responsible for the reliability and operability of AI-powered systems in production. You need lease-based ownership, dead-letter isolation, and instrumentation that integrates with existing observability stacks.",
    outcomes: [
      "Lease enforcement to eliminate duplicate and zombie processing",
      "Structured dead-letter queues with safe replay",
      "Hierarchical span tracing with cost attribution",
      "Idempotent job scheduling for replay safety",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section
        variant="light"
        title="Who Bot Velocity Is Built For"
        description="Operational outcomes for teams building and running AI-powered automation in production environments."
      >
        <div className="grid gap-8">
          {audiences.map((audience) => (
            <article key={audience.title} className="card-light card-hover p-6 md:p-8">
              <h3 className="text-xl font-semibold text-neutral-900">
                {audience.title}
              </h3>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                {audience.description}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {audience.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="text-neutral-700 before:content-['→_'] before:text-indigo-600"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-dark border-t border-neutral-800">
        <div className="container-shell py-14 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100">
            Ready to Evaluate?
          </h2>
          <p className="mt-3 text-lg text-neutral-300">
            Talk to us about your AI automation requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium hover:bg-indigo-500"
          >
            Request Access
          </Link>
        </div>
      </section>
    </>
  );
}
