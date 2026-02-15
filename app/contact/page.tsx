import { Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <Section variant="light" title="Contact">
      <div className="card-light p-6 max-w-3xl">
        <p className="text-neutral-700">
          Email us at{" "}
          <a
            href="mailto:hello@botvelocity.com"
            className="text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-2"
          >
            <Mail size={16} />
            hello@botvelocity.com
          </a>
          .
        </p>
        <p className="text-neutral-600 mt-4">
          Or connect via{" "}
          <a
            href="https://www.linkedin.com/company/botvelocity"
            className="text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
            aria-label="Bot Velocity on LinkedIn"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
