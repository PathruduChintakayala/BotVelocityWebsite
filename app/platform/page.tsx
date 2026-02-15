import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Bot Velocity control plane provides deterministic orchestration boundaries, evaluation intelligence, and governance enforcement for AI-powered workflows.",
};

const principles = [
  {
    title: "Authoritative Orchestration",
    body: "Bot Velocity centralizes lifecycle control so that every workflow run has a single source of truth for state, ownership, and retry authority. There is no implicit coordination between agents — the control plane governs all transitions explicitly.",
  },
  {
    title: "Deterministic Boundaries",
    body: "Execution boundaries are enforced through lease ownership, contract versioning, and idempotent submission keys. These boundaries eliminate duplicate processing, split-brain retries, and ambiguous failure states that arise in distributed agent systems.",
  },
  {
    title: "Evaluation as Infrastructure",
    body: "Evaluation is not an afterthought. Baseline comparison, regression detection, and CI gating are built into the platform so quality decisions are data-driven and reproducible — not manual or ad-hoc.",
  },
  {
    title: "Governance by Design",
    body: "Policy enforcement, tenant isolation, and audit trails are part of the execution path. Governance rules are applied consistently across all workflows without requiring external tooling or manual review gates.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Section
        variant="light"
        title="The Control Plane for AI Automation"
        description="Bot Velocity is a deterministic control plane that separates orchestration, execution, instrumentation, and evaluation into distinct operational layers."
      >
        <div className="max-w-3xl">
          <p className="text-neutral-600 leading-relaxed">
            Modern AI workflows involve multiple agents, models, and tool integrations
            operating across distributed infrastructure. Without centralized control,
            these systems accumulate operational debt: silent failures, retry chaos,
            ungoverned model changes, and invisible cost escalation.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Bot Velocity provides the architectural foundation to operate these systems
            with the same rigor applied to traditional infrastructure — deterministic
            state management, authoritative execution ownership, and built-in evaluation
            intelligence.
          </p>
        </div>
      </Section>

      <Section variant="dark" title="Platform Principles">
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <article key={p.title} className="card-dark card-hover p-6">
              <h3 className="text-lg font-semibold text-neutral-100">
                {p.title}
              </h3>
              <p className="mt-3 text-neutral-300 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
