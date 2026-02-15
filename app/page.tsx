import {
  Activity,
  BarChart3,
  Database,
  GitBranch,
  Lock,
  Shield,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { CTASection } from "@/components/CTASection";
import { BlogCard } from "@/components/BlogCard";
import { getPosts } from "@/lib/getPosts";

const summaryColumns = [
  {
    title: "Orchestrate",
    icon: GitBranch,
    description:
      "Centralized execution lifecycle control and authoritative retry logic.",
  },
  {
    title: "Evaluate",
    icon: BarChart3,
    description: "Regression detection, LLM-judge scoring, and CI gating.",
  },
  {
    title: "Govern",
    icon: Shield,
    description: "Policy enforcement, auditability, and tenant isolation.",
  },
];

const operationalGuarantees = [
  {
    title: "Explicit lifecycle state transitions",
    description: "Know the exact state of every run with auditable transitions and no ambiguity.",
  },
  {
    title: "Deterministic retry authority",
    description: "Centralized retry logic prevents duplicate side effects and conflicting ownership.",
  },
  {
    title: "Idempotent job scheduling",
    description: "Execution keys and guarded submissions stop duplicate work before it starts.",
  },
  {
    title: "Replay-safe execution",
    description: "Controlled replays preserve integrity while enabling safe recovery and debugging.",
  },
  {
    title: "Strict contract validation",
    description: "Interface and package contracts are enforced to block drift and runtime surprises.",
  },
];

const riskCards = [
  "Distributed retries create duplicate side effects",
  "Silent regressions erode production performance",
  "Weak governance makes cost and quality unpredictable",
];

const capabilities = [
  {
    title: "Deterministic Execution",
    icon: GitBranch,
    description:
      "Stateful execution with explicit transitions for every workflow step. Operators can reason about run status without ambiguity and recover with controlled replay boundaries.",
  },
  {
    title: "Retry Authority & DLQ",
    icon: Activity,
    description:
      "Central retry governance avoids duplicate side effects and split-brain behavior. Failed runs move into structured dead-letter queues for deterministic triage.",
  },
  {
    title: "CI-Gated Evaluation",
    icon: BarChart3,
    description:
      "Baseline comparisons and regression detection are enforced before release. Quality thresholds and drift checks become part of CI, not manual review.",
  },
  {
    title: "LLM Cost Visibility",
    icon: Database,
    description:
      "Per-run token usage and spend attribution are tracked across model and workflow boundaries. Teams can enforce budgets and monitor cost variance over time.",
  },
  {
    title: "Policy Enforcement",
    icon: Shield,
    description:
      "Execution policies govern tool access, output handling, and escalation paths. Governance is applied in the control path, with audit records by default.",
  },
  {
    title: "Multi-Tenant Isolation",
    icon: Lock,
    description:
      "Tenant and folder boundaries are enforced through the orchestration model and access controls. Isolation rules are designed for enterprise operating environments.",
  },
];

const executionGuarantees = [
  "Lease-based execution ownership",
  "Authoritative retry engine",
  "Dead-letter isolation with safe replay",
  "Hash-validated immutable package execution",
  "Strict contract version enforcement",
];

const evaluationIntelligence = [
  "Baseline comparison across runs",
  "Regression detection",
  "Flaky behavior identification",
  "LLM-judge scoring",
  "Policy enforcement checks",
  "CI gating thresholds",
];

const useCases = [
  "Enterprise AI Workflow Orchestration",
  "Agent Lifecycle Governance",
  "CI/CD for LLM Systems",
  "Production AI Reliability",
];

const securityPreview = [
  "Strict tenant and folder isolation",
  "Role-based access control",
  "Encrypted credential storage",
  "Authoritative state machine",
  "Idempotent execution model",
  "Operational safeguard controls",
];

export default async function HomePage() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <Hero
        title="Enterprise Control Plane for Reliable, Scalable AI Automation"
        description="Bot Velocity makes AI-powered workflows observable, governable, and reliable at scale — enabling teams to deploy AI automation with operational confidence."
        primaryCta={{ href: "/contact", label: "Request Early Access" }}
        secondaryCta={{ href: "/execution-model", label: "View Architecture" }}
      />

      <Section id="problem" variant="dark" title="AI Automation Fails Without Lifecycle Authority">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <p className="text-lg text-neutral-300 leading-8">
            Distributed agents and fragmented retries create failure modes that
            only a centralized control plane can prevent. Without lifecycle authority,
            automation becomes brittle, costly, and difficult to audit.
          </p>
          <ul className="grid gap-3">
            {riskCards.map((item) => (
              <li key={item} className="card-dark px-4 py-3 text-neutral-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="control-plane" variant="light" title="Why a Control Plane Matters">
        <div className="max-w-4xl space-y-4 text-neutral-700 leading-7">
          <p>
            Deterministic state transitions give operators authoritative visibility into every run.
            With clear ownership, governed retries, and enforced contracts, teams prevent split-brain
            failures and ensure every change ships with measurable reliability.
          </p>
        </div>
      </Section>

      <Section id="platform-summary" variant="dark" title="Platform Summary">
        <div className="grid gap-4 md:grid-cols-3">
          {summaryColumns.map((column) => (
            <article key={column.title} className="card-dark p-6">
              <column.icon size={20} className="text-indigo-500" />
              <h3 className="mt-4 text-xl font-semibold text-neutral-100">{column.title}</h3>
              <p className="mt-2 text-neutral-300">{column.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="operational-guarantees" variant="light" title="Operational Guarantees by Design">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {operationalGuarantees.map((item) => (
            <article key={item.title} className="card-light card-hover px-4 py-4">
              <h3 className="text-sm font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-neutral-700 text-sm leading-6">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="execution-model"
        variant="light"
        title="The Bot Velocity Execution Model"
        description="Bot Velocity separates orchestration, execution, instrumentation, and evaluation into distinct layers. This separation ensures deterministic control, operational integrity, and tenant isolation."
      >
        <div className="max-w-4xl mx-auto">
          <ArchitectureDiagram variant="light" />
          <p className="mt-6 text-neutral-600">
            The control plane coordinates execution ownership, policy checks, evaluation
            gates, and storage boundaries so every automation run has authoritative state.
          </p>
        </div>
      </Section>

      <Section id="capabilities" variant="dark" title="Core Capabilities">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <FeatureCard key={item.title} {...item} variant="dark" />
          ))}
        </div>
      </Section>

      <Section id="execution-guarantees" variant="light" title="Enterprise-Grade Execution Guarantees">
        <div className="grid gap-3 md:grid-cols-2">
          {executionGuarantees.map((item) => (
            <article key={item} className="card-light card-hover px-4 py-3">
              <p className="text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="evaluation"
        variant="dark"
        title="Built-In Evaluation Intelligence"
        description="Evaluation is integrated into the control plane to provide deterministic quality gating for workflow changes."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {evaluationIntelligence.map((item) => (
            <article key={item} className="card-dark card-hover px-4 py-3">
              <p className="text-neutral-200">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="use-cases" variant="light" title="Designed for AI Platform Teams">
        <CapabilityGrid items={useCases} variant="light" />
      </Section>

      <Section id="trust-center-preview" variant="dark" title="Security & Operational Integrity">
        <ul className="grid gap-3 md:grid-cols-2">
          {securityPreview.map((item) => (
            <li key={item} className="card-dark px-4 py-3 text-neutral-200">
              {item}
            </li>
          ))}
        </ul>
        <a href="/security" className="mt-6 inline-flex text-indigo-400 hover:text-indigo-300">
          Read full security architecture
        </a>
      </Section>

      <Section id="blog" variant="light" title="Latest Technical Writing">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} variant="light" />
          ))}
        </div>
      </Section>

      <CTASection
        title="Operate AI Systems with Deterministic Confidence"
        buttonLabel="Request Access"
        buttonHref="/contact"
      />
    </>
  );
}
