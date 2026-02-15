import { Section } from "@/components/Section";

export default function PrivacyPage() {
  return (
    <Section variant="light" title="Privacy">
      <div className="max-w-4xl prose-enterprise">
        <p>
          Bot Velocity is committed to protecting customer data and maintaining clear
          operational boundaries for enterprise AI automation programs.
        </p>
        <p>
          We process only the data required to operate orchestration, evaluation, and
          governance workflows. Access is restricted by role-based controls and audited
          for integrity.
        </p>
        <p>
          For privacy-related inquiries, contact{" "}
          <a
            href="mailto:hello@botvelocity.com"
            className="text-indigo-600 hover:text-indigo-500"
          >
            hello@botvelocity.com
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
