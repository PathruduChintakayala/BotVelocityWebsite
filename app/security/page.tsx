import type { Metadata } from "next";
import { Database, Lock, Server, Shield, Globe } from "lucide-react";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "Bot Velocity Trust Center — data isolation, execution integrity, boundary protection, credential security, and secure-by-design philosophy.",
};

const trustCategories = [
  {
    title: "Data Isolation",
    icon: Database,
    points: [
      "Folder-scoped tenant boundaries with enforced separation",
      "RBAC enforcement aligned to organizational authorization",
    ],
  },
  {
    title: "Execution Integrity",
    icon: Server,
    points: [
      "Atomic job claiming to avoid race conditions",
      "Idempotent submission guarantees via unique execution keys",
      "Lease expiry detection with automatic reclaim for stalled runs",
    ],
  },
  {
    title: "External Boundary Protection",
    icon: Globe,
    points: [
      "SSRF prevention for outbound tool access",
      "Archive path validation to block traversal on extraction",
      "Strict schema validation on runtime inputs",
    ],
  },
  {
    title: "Credential Security",
    icon: Lock,
    points: [
      "Encrypted credential storage at rest",
      "TLS encryption for all data in transit",
    ],
  },
  {
    title: "Secure-by-Design Philosophy",
    icon: Shield,
    description:
      "Explicit state transitions, deterministic retry authority, and governance-in-the-control-path keep execution defensive by default. Audit trails and layered controls reduce the blast radius of failures without relying on external checks.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Section
        variant="light"
        title="Trust Center"
        description="Security architecture and operational controls for enterprise AI automation."
      >
        <p className="text-neutral-600 leading-relaxed max-w-3xl">
          Bot Velocity applies secure-by-design principles across every layer of the
          platform. Isolation, integrity, and governance are built into the execution
          model — not bolted on as external controls.
        </p>
      </Section>

      {trustCategories.map((category, idx) => (
        <Section
          key={category.title}
          variant={idx % 2 === 0 ? "dark" : "light"}
          title={category.title}
        >
          <div className="flex items-center gap-3 mb-6">
            <category.icon
              size={22}
              className={idx % 2 === 0 ? "text-indigo-400" : "text-indigo-600"}
            />
            <span className={`text-sm font-medium uppercase tracking-wider ${
              idx % 2 === 0 ? "text-neutral-400" : "text-neutral-500"
            }`}>
              {category.title}
            </span>
          </div>
          {category.points ? (
            <ul className="grid gap-3 md:grid-cols-2">
              {category.points.map((point) => {
                const cardClass = idx % 2 === 0 ? "card-dark" : "card-light";
                const textClass = idx % 2 === 0 ? "text-neutral-200" : "text-neutral-700";
                return (
                  <li key={point} className={`${cardClass} card-hover px-4 py-3 ${textClass}`}>
                    {point}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className={`${idx % 2 === 0 ? "text-neutral-200" : "text-neutral-700"} leading-7`}>
              {category.description}
            </p>
          )}
        </Section>
      ))}

      <section className="section-light border-t border-neutral-200">
        <div className="container-shell py-14 md:py-20">
          <p className="text-neutral-700">
            Security contact:{" "}
            <a
              href="mailto:security@botvelocity.com"
              className="text-indigo-600 hover:text-indigo-500"
            >
              security@botvelocity.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
