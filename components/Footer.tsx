import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/botvelocity";

export function Footer() {
  const columns = [
    {
      heading: "Product",
      links: [
        { href: "/platform", label: "Platform" },
        { href: "/solutions", label: "Use Cases" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      heading: "Technology",
      links: [
        { href: "/execution-model", label: "Execution Model" },
        { href: "/capabilities", label: "Technology" },
        { href: "/architecture", label: "Architecture" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/rss.xml", label: "RSS Feed" },
        { href: LINKEDIN_URL, label: "LinkedIn", external: true },
        { href: "mailto:hello@botvelocity.com", label: "hello@botvelocity.com" },
        {
          href: "mailto:security@botvelocity.com",
          label: "security@botvelocity.com",
        },
      ],
    },
    {
      heading: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ],
    },
  ];

  return (
    <footer className="section-dark border-t border-neutral-800">
      <div className="container-shell py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold tracking-wide text-neutral-100">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-400">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.href.startsWith("mailto:") ? (
                      <a href={link.href} className="hover:text-neutral-100">
                        {link.label}
                      </a>
                    ) : "external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-neutral-100"
                      >
                        <Linkedin size={16} />
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-neutral-100">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-800 text-sm text-neutral-500">
          <p className="inline-flex items-center gap-2">
            <Image src="/logo.svg" alt="Bot Velocity logo" width={20} height={20} />
            <span>Bot Velocity</span>
          </p>
          <p className="mt-2">Control plane infrastructure for AI automation.</p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-300"
            aria-label="Bot Velocity on LinkedIn"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
