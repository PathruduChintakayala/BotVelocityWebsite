const nodes = [
  {
    label: "Developer",
    descriptor: null,
  },
  {
    label: "CLI",
    descriptor: null,
  },
  {
    label: "Orchestrator",
    descriptor:
      "Authoritative lifecycle state management and retry control",
  },
  {
    label: "Runner",
    descriptor:
      "Isolated subprocess execution with lease enforcement",
  },
  {
    label: "Runtime SDK",
    descriptor:
      "Trace instrumentation, cost tracking, nested orchestration",
  },
  {
    label: "Evaluation Engine",
    descriptor:
      "Regression detection, scoring, CI gating",
  },
  {
    label: "Storage",
    descriptor:
      "Postgres-backed state, object store packages, vector memory",
  },
];

type ArchitectureDiagramProps = {
  variant?: "light" | "dark";
};

export function ArchitectureDiagram({ variant = "dark" }: ArchitectureDiagramProps) {
  const outer = variant === "dark" ? "card-dark" : "card-light";
  const nodeBorder = variant === "dark" ? "border-neutral-800" : "border-neutral-200";
  const nodeBg = variant === "dark" ? "bg-neutral-950 text-neutral-100" : "bg-white text-neutral-900";
  const arrowColor = variant === "dark" ? "text-neutral-500" : "text-neutral-400";
  const descriptorColor = variant === "dark" ? "text-neutral-400" : "text-neutral-500";

  return (
    <div className={`${outer} p-4 sm:p-6`}>
      <div className="flex flex-col items-center gap-3">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex w-full max-w-md flex-col items-center">
            <div className={`w-full rounded-md border ${nodeBorder} ${nodeBg} px-4 py-3 text-center`}>
              <span className="font-medium">{node.label}</span>
              {node.descriptor ? (
                <p className={`mt-1 text-xs ${descriptorColor}`}>
                  {node.descriptor}
                </p>
              ) : null}
            </div>
            {index < nodes.length - 1 ? (
              <span className={`${arrowColor} py-1`} aria-hidden="true">
                ↓
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
