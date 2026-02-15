import Link from "next/link";

export function Footer() {
  const columns = [
    {
      heading: "Product",
      links: [
        { href: "/platform", label: "Platform" },
        { href: "/execution-model", label: "Execution Model" },
        { href: "/capabilities", label: "Capabilities" },
        { href: "/architecture", label: "Architecture" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "/company", label: "Company" },
        { href: "/solutions", label: "Solutions" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/rss.xml", label: "RSS Feed" },
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
                  <li key={link.href}>
                    {link.href.startsWith("mailto:") ? (
                      <a href={link.href} className="hover:text-neutral-100">
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
          <p>Bot Velocity. Control plane infrastructure for AI automation.</p>
          <p className="mt-1">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/company/botvelocity"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300"
            >
              botvelocity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
