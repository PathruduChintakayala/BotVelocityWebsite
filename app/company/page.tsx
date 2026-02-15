import { Section } from "@/components/Section";

export default function CompanyPage() {
  return (
    <Section
      variant="light"
      title="Company"
      description="Building the control plane for production-grade AI automation."
    >
      <div className="max-w-4xl space-y-5 text-neutral-700 text-lg leading-8">
        <p>
          Bot Velocity was founded to address a core gap in modern AI systems:
          production reliability. Many organizations can prototype agent workflows, but
          few can operate them at enterprise scale with deterministic control.
        </p>
        <p>
          Our focus is infrastructure. We build orchestration, governance, and
          evaluation systems that transform AI automation from experimental scripts into
          operational platforms.
        </p>
        <p>
          We partner with platform teams, engineering leaders, and operational owners
          who require reliability, auditability, and security as first-class design
          requirements.
        </p>
      </div>
    </Section>
  );
}
