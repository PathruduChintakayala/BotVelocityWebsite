import { Section } from "@/components/Section";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export default function ArchitecturePage() {
  return (
    <Section
      variant="dark"
      title="The Bot Velocity Execution Model"
      description="Bot Velocity separates orchestration, execution, instrumentation, and evaluation into distinct layers to keep ownership clear and failures contained."
    >
      <div className="max-w-4xl mx-auto">
        <ArchitectureDiagram variant="dark" />
        <p className="mt-6 text-neutral-300">
          Separation prevents systemic failure: the orchestrator owns lifecycle state and
          retry authority, runners execute in isolated leases, the runtime SDK carries
          trace and cost context, the evaluation engine gates promotion with regression
          checks, and storage keeps state durable with immutable artifacts and vector
          memory. Each layer can be governed independently without coupling failures
          across the stack.
        </p>
      </div>
    </Section>
  );
}
