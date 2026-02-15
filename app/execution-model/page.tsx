import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Execution Model",
  description:
    "How Bot Velocity separates orchestration, execution, instrumentation, evaluation, and storage into distinct layers for deterministic AI automation.",
};

const executionModelSections = [
  {
    title: "Control Plane",
    description:
      "The control plane is the authoritative coordinator for all workflow execution. It manages lifecycle state transitions, retry authority, and tenant boundary enforcement.",
    points: [
      {
        label: "Orchestrator as authoritative state manager",
        detail:
          "Every workflow run has a single source of truth for its current state. Transitions are explicit, auditable, and never inferred from external signals.",
      },
      {
        label: "Central retry authority",
        detail:
          "Retry decisions are made by the control plane with configurable backoff and maximum attempt limits, preventing split-brain behavior across distributed workers.",
      },
      {
        label: "Multi-tenant boundary enforcement",
        detail:
          "Tenant and folder isolation is enforced at the orchestration layer, ensuring that execution scope, data access, and credential visibility respect organizational boundaries.",
      },
    ],
  },
  {
    title: "Execution Plane",
    description:
      "The execution plane handles the actual running of workflow steps in isolated subprocesses with strict ownership guarantees.",
    points: [
      {
        label: "Runner-based isolated subprocess execution",
        detail:
          "Each workflow step executes in an isolated runner subprocess, preventing shared state contamination and enabling clean recovery boundaries.",
      },
      {
        label: "Lease and heartbeat model",
        detail:
          "Runners acquire time-bounded leases before processing. Active heartbeats extend the lease; missed heartbeats trigger automatic reclaim to prevent zombie executions.",
      },
      {
        label: "Timeout enforcement",
        detail:
          "Hard and soft timeouts are enforced per step and per run, ensuring that stalled executions are detected and handled before they consume unbounded resources.",
      },
    ],
  },
  {
    title: "Instrumentation Layer",
    description:
      "The instrumentation layer provides trace telemetry, cost accounting, and nested orchestration support for every execution.",
    points: [
      {
        label: "Runtime SDK span tracing",
        detail:
          "Hierarchical spans capture execution flow across orchestration steps, model calls, and tool invocations with full parent-child context.",
      },
      {
        label: "Token usage aggregation",
        detail:
          "Per-run and per-step token counts and spend are aggregated across model providers, enabling budget enforcement and cost variance analysis.",
      },
      {
        label: "Nested orchestration",
        detail:
          "Workflows can invoke sub-workflows while maintaining trace continuity and cost attribution across orchestration boundaries.",
      },
    ],
  },
  {
    title: "Evaluation Layer",
    description:
      "The evaluation layer provides automated quality gating to ensure that workflow changes do not degrade performance or introduce regressions.",
    points: [
      {
        label: "Deterministic scoring",
        detail:
          "Evaluation runs produce reproducible scores using baseline comparison, enabling teams to measure quality changes objectively over time.",
      },
      {
        label: "LLM-judge evaluation",
        detail:
          "Model-based judges score outputs against defined criteria, providing automated quality signals for tasks that resist traditional metric evaluation.",
      },
      {
        label: "CI gating logic",
        detail:
          "Quality thresholds are enforced as part of the release pipeline. Workflow changes that fail evaluation gates are blocked before reaching production.",
      },
    ],
  },
  {
    title: "Storage Layer",
    description:
      "The storage layer provides durable, isolated persistence for execution state, workflow packages, and vector memory.",
    points: [
      {
        label: "Postgres-backed state",
        detail:
          "All execution state, job metadata, and audit records are persisted in PostgreSQL with row-level isolation and transactional guarantees.",
      },
      {
        label: "Object store for packages",
        detail:
          "Workflow packages are stored as immutable, hash-validated artifacts in object storage. Package integrity is verified at execution time.",
      },
      {
        label: "Vector store for memory",
        detail:
          "Long-term agent memory and retrieval-augmented generation contexts are managed in a dedicated vector store with tenant-scoped access controls.",
      },
    ],
  },
];

export default function ExecutionModelPage() {
  return (
    <>
      <Section
        variant="light"
        title="The Bot Velocity Execution Model"
        description="Bot Velocity decomposes production AI automation into five distinct layers. Each layer has a clear responsibility boundary, ensuring that orchestration, execution, instrumentation, evaluation, and storage remain deterministic and independently governable."
      >
        <p className="text-neutral-600 leading-relaxed max-w-3xl">
          This separation of concerns allows platform teams to reason about each layer
          independently, apply targeted controls, and evolve capabilities without
          coupling operational changes across the system.
        </p>
      </Section>

      {executionModelSections.map((section, idx) => (
        <Section
          key={section.title}
          variant={idx % 2 === 0 ? "dark" : "light"}
          title={section.title}
          description={section.description}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {section.points.map((point) => {
              const cardClass = idx % 2 === 0 ? "card-dark" : "card-light";
              const labelClass = idx % 2 === 0 ? "text-neutral-100" : "text-neutral-900";
              const detailClass = idx % 2 === 0 ? "text-neutral-300" : "text-neutral-600";
              return (
                <article key={point.label} className={`${cardClass} card-hover p-5`}>
                  <h3 className={`font-semibold ${labelClass}`}>{point.label}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${detailClass}`}>
                    {point.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </Section>
      ))}
    </>
  );
}
