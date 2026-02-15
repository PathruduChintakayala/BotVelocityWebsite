import { Section } from "@/components/Section";

export default function TermsPage() {
  return (
    <Section variant="light" title="Terms">
      <div className="max-w-4xl prose-enterprise">
        <p>
          Bot Velocity provides infrastructure software intended for enterprise
          AI automation programs.
        </p>
        <p>
          Use of the platform is governed by contractual agreements, security
          policies, and operational constraints defined between Bot Velocity and
          each customer organization.
        </p>
        <p>
          For legal and commercial inquiries, contact{" "}
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
