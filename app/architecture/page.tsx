import { Section } from "@/components/Section";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export default function ArchitecturePage() {
  return (
    <Section
      variant="dark"
      title="The Bot Velocity Execution Model"
      description="Bot Velocity separates orchestration, execution, instrumentation, and evaluation into distinct layers. This separation ensures deterministic control, operational integrity, and tenant isolation."
    >
      <div className="max-w-4xl mx-auto">
        <ArchitectureDiagram variant="dark" />
        <p className="mt-6 text-neutral-300">
          Developer workflows enter through the CLI and are coordinated by an
          authoritative orchestrator. Execution runs in isolated runner processes, runtime
          instrumentation records spans and cost data, and the evaluation layer applies
          regression and policy checks before workflows are promoted.
        </p>
      </div>
    </Section>
  );
}
