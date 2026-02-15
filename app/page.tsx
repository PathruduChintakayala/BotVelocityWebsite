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
  "Explicit lifecycle state transitions",
  "Deterministic retry authority",
  "Idempotent job scheduling",
  "Replay-safe execution",
  "Strict contract validation",
];

const riskCards = [
  "Silent distributed failures",
  "Ad-hoc retry logic",
  "Model regressions post-deploy",
  "Untracked LLM cost escalation",
  "Lack of governance enforcement",
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
        title="Deterministic Control Plane for AI Automation"
        description="Bot Velocity provides authoritative orchestration, evaluation intelligence, and governance enforcement for AI-powered workflows operating in production environments."
        primaryCta={{ href: "/contact", label: "Request Access" }}
        secondaryCta={{ href: "/execution-model", label: "View Execution Model" }}
      />

      <Section variant="dark" title="Platform Summary">
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

      <Section variant="light" title="Operational Guarantees by Design">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {operationalGuarantees.map((item) => (
            <article key={item} className="card-light card-hover px-4 py-3">
              <p className="text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="dark" title="Why AI Automation Breaks in Production">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <p className="text-lg text-neutral-300 leading-8">
            AI workflows are often assembled from independent agents, fragmented retry
            logic, and ad-hoc deployment controls. Without a centralized control plane,
            production systems become difficult to govern, expensive to operate, and
            fragile under real-world load and change velocity.
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

      <Section
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

      <Section variant="dark" title="Core Capabilities">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <FeatureCard key={item.title} {...item} variant="dark" />
          ))}
        </div>
      </Section>

      <Section variant="light" title="Enterprise-Grade Execution Guarantees">
        <div className="grid gap-3 md:grid-cols-2">
          {executionGuarantees.map((item) => (
            <article key={item} className="card-light card-hover px-4 py-3">
              <p className="text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
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

      <Section variant="light" title="Designed for AI Platform Teams">
        <CapabilityGrid items={useCases} variant="light" />
      </Section>

      <Section variant="dark" title="Security & Operational Integrity">
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

      <Section variant="light" title="Latest Technical Writing">
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
